import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const now = new Date();

    // First day of the current month
    const startOfMonth = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        1,
        0,
        0,
        0,
        0
      )
    );
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("portfolio_page_views")
      .select("visitor_id")
      .gte("created_at", startOfMonth.toISOString());

    if (error) {
      console.error("Monthly analytics error:", error);

      return NextResponse.json(
        { error: "Failed to fetch monthly visitors" },
        { status: 500 }
      );
    }

    // Count unique visitors
    const uniqueVisitors = new Set(
      (data ?? [])
        .map((row) => row.visitor_id)
        .filter(Boolean)
    ).size;

    return NextResponse.json({
      visitors: uniqueVisitors,
    });
  } catch (error) {
    console.error("Monthly analytics error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}