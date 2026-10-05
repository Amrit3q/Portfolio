import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

const UUID_REGEX =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const { visitorId, pagePath } = body;

        // Validate visitor ID
        if (
            typeof visitorId !== "string" ||
            !UUID_REGEX.test(visitorId)
        ) {
            return NextResponse.json(
                { error: "Invalid visitor ID" },
                { status: 400 }
            );
        }
        if (
            typeof pagePath !== "string" ||
            !pagePath.startsWith("/") ||
            pagePath.length > 500
        ) {
            return NextResponse.json(
                { error: "Invalid page path" },
                { status: 400 }
            );
        }

        const supabase = createSupabaseServerClient();
        const { error } = await supabase
            .from("portfolio_page_views")
            .insert({
                visitor_id: visitorId,
                page_path: pagePath,
            });
        
        if (error) {
      console.error("Analytics insertion failed:", error.message);

      return NextResponse.json(
        { error: "Unable to record page view" },
        { status: 500 }
      );
    }
    return NextResponse.json({
      success: true,
      message: "Page view recorded",
    });

    } catch (error) {
        console.error("Analytics API error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
    }
}