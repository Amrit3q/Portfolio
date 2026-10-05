"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const VISITOR_ID_KEY = "portfolio_visitor_id";

function getVisitorId(): string {
  let visitorId = localStorage.getItem(VISITOR_ID_KEY);

  if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
  }

  return visitorId;
}

export default function AnalyticsTracker() {
    const pathname = usePathname();

    useEffect(() => {
    if (!pathname) return;

        const trackPageView = async () => {
            try {
        const visitorId = getVisitorId();
        await fetch("/api/analytics/track", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            visitorId,
            pagePath: pathname,
          }),
        });
      } catch (error) {
        console.error("Failed to track page view:", error);
      }
        }

        trackPageView();
    }, [pathname]);

    return null;
}