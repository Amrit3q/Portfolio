import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

const ACTIVE_WINDOW_SECONDS = 75;

export async function GET() {
  try {
    const supabase = createSupabaseServerClient();

    const activeSince = new Date(
      Date.now() - ACTIVE_WINDOW_SECONDS * 1000
    ).toISOString();

    const { count, error } = await supabase
      .from("portfolio_active_sessions")
      .select("*", {
        count: "exact",
        head: true,
      })
      .gte("last_seen", activeSince);

    if (error) {
      console.error("Live count failed:", error.message);

      return NextResponse.json(
        { error: "Unable to fetch live visitors" },
        { status: 500 }
      );
    }
    return NextResponse.json(
      {
        liveVisitors: count ?? 0,
        updatedAt: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
    } catch (error) {
        console.error("Live API error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
    }
}