import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { Resend } from "resend";

function getClientIp(request: Request) {
    const forwardedFor = request.headers.get("x-forwarded-for");

    if (forwardedFor) {
        return forwardedFor.split(",")[0].trim();
    }

    return request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const name = body.name?.trim();
        const email = body.email?.trim();
        const message = body.message?.trim();

        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    error: "All fields are required.",
                },
                { status: 400 }
            );
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Please provide a valid email address.",
                },
                { status: 400 }
            );
        }
        const ip = getClientIp(request);

        const supabase = createSupabaseServerClient();

        const windowMinutes = 60;
        const maxRequests = 5;
        const { data: rateLimit } = await supabase
            .from("contact_rate_limits")
            .select("*")
            .eq("ip_address", ip)
            .maybeSingle();

        const now = new Date();
        if (rateLimit) {
            const windowStarted = new Date(rateLimit.window_started_at);
            const elapsedMinutes =
                (now.getTime() - windowStarted.getTime()) / (1000 * 60);
            if (elapsedMinutes < windowMinutes) {
                if (rateLimit.request_count >= maxRequests) {
                    return NextResponse.json(
                        {
                            success: false,
                            error:
                                "Too many messages. Please try again later.",
                        },
                        { status: 429 }
                    );
                }

                await supabase
                    .from("contact_rate_limits")
                    .update({
                        request_count: rateLimit.request_count + 1,
                    })
                    .eq("ip_address", ip);
            } else {
                await supabase
                    .from("contact_rate_limits")
                    .update({
                        request_count: 1,
                        window_started_at: now.toISOString(),
                    })
                    .eq("ip_address", ip);
            }
        } else {
            await supabase
                .from("contact_rate_limits")
                .insert({
                    ip_address: ip,
                    request_count: 1,
                    window_started_at: now.toISOString(),
                });
        }
        const { error } = await supabase
            .from("contact_messages")
            .insert({
                name,
                email,
                message,
            });

        if (error) {
            console.error("Supabase contact insert error:", error);

            return NextResponse.json(
                {
                    success: false,
                    error: "Unable to save your message.",
                },
                { status: 500 }
            );
        }

        // Send email notification
        // -------------------------
        const resend = new Resend(process.env.RESEND_API_KEY!);
        const { error: emailError } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: [process.env.NEXT_PUBLIC_CONTACT_EMAIL!],
            subject: `New portfolio message from ${name}`,
            replyTo: email,

            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Contact</h2>

          <p>
            You received a new message through your portfolio.
          </p>

          <hr />

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message}
          </p>

          <hr />

          <p style="color: #666;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
        });

        if (emailError) {
            // IMPORTANT:
            // The message is already safely stored in Supabase.
            console.error("Resend email error:", emailError);

            return NextResponse.json({
                success: true,
                message: "Message received successfully.",
                emailSent: false,
            });
        }

        return NextResponse.json({
            success: true,
            message: "Message received successfully.",
        });
    } catch (error) {
        console.error("Contact API error:", error);

        return NextResponse.json(
            {
                success: false,
                error: "Something went wrong.",
            },
            { status: 500 }
        );
    }
}