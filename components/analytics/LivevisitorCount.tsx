"use client";

import { useEffect, useState } from "react";

export default function LiveVisitorCount() {
  const [count, setCount] = useState<number | null>(null);
  const [monthlyVisitors, setMonthlyVisitors] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchLiveCount = async () => {
      try {
        const response = await fetch("/api/analytics/live", {
          cache: "no-store",
        });

        if (!response.ok) return;

        const data = await response.json();

        if (isMounted) {
          setCount(data.liveVisitors);
        }
      } catch (error) {
        console.error("Failed to fetch live count:", error);
      }
    };

    fetchLiveCount();

    const interval = setInterval(fetchLiveCount, 20000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Monthly visitors
  useEffect(() => {
    const fetchMonthlyVisitors = async () => {
      try {
        const response = await fetch("/api/analytics/monthly", {
          cache: "no-store",
        });

        if (!response.ok) return;

        const data = await response.json();

        setMonthlyVisitors(data.visitors);
      } catch (error) {
        console.error("Failed to fetch monthly visitors:", error);
      }
    };

    fetchMonthlyVisitors();
  }, []);

  return (
    <div className="flex items-center gap-2 rounded-full
      border border-green-500/20 bg-green-500/10
      px-3 py-1.5 text-xs">

      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full
          animate-ping rounded-full bg-green-400 opacity-75" />

        <span className="relative inline-flex h-2 w-2
          rounded-full bg-green-500" />
      </span>

      <span className="text-green-500 font-medium">
        {count === null ? "Live" : `${count} watching`}
      </span>

      {/* Divider */}
      <span className="text-white/10">|</span>

      {/* Monthly */}
      <span className="text-gray-400">
        {monthlyVisitors ?? "—"} this month
      </span>
    </div>
  );
}