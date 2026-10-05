import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

const UUID_REGEX =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { sessionId, visitorId } = body;

        // Validate IDs
    if (
      typeof sessionId !== "string" ||
      !UUID_REGEX.test(sessionId) ||
      typeof visitorId !== "string" ||
      !UUID_REGEX.test(visitorId)
    ) {
      return NextResponse.json(
        { error: "Invalid session or visitor ID" },
        { status: 400 }
      );
    }

    const supabase = createSupabaseServerClient();

    const { error } = await supabase
      .from("portfolio_active_sessions")
      .upsert(
        {
          session_id: sessionId,
          visitor_id: visitorId,
          last_seen: new Date().toISOString(),
        },
        {
          onConflict: "session_id",
        }
      );

      if (error) {
      console.error("Heartbeat failed:", error.message);

      return NextResponse.json(
        { error: "Unable to update session" },
        { status: 500 }
      );
    }
    return NextResponse.json({ success: true });
    }catch (error) {
        console.error("Heartbeat API error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
    }
}