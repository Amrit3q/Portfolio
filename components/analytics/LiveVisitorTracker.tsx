'use client'
import { useEffect } from "react";

const VISITOR_ID_KEY = "portfolio_visitor_id";
const SESSION_ID_KEY = "portfolio_session_id";

function getVisitorId() {
    let visitorId = localStorage.getItem(VISITOR_ID_KEY);

    if (!visitorId) {
        visitorId = crypto.randomUUID();
        localStorage.setItem(VISITOR_ID_KEY, visitorId);
    }

    return visitorId;
}

function getSessionId() {
    let sessionId = sessionStorage.getItem(SESSION_ID_KEY);

    if (!sessionId) {
        sessionId = crypto.randomUUID();
        sessionStorage.setItem(SESSION_ID_KEY, sessionId);
    }

    return sessionId;
}

export default function LiveVisitorTracker() {
    useEffect(() => {
        const sendHeartbeat = async () => {
            if (document.visibilityState !== "visible") return;
            try {
                const visitorId = getVisitorId();
                const sessionId = getSessionId();
                await fetch("/api/analytics/heartbeat", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        visitorId,
                        sessionId,
                    }),
                    keepalive: true,
                });
            } catch (error) {
                console.error("Heartbeat request failed:", error);
            }

        };
        sendHeartbeat();
        const interval = setInterval(sendHeartbeat, 30000);
        const handleVisibilityChange = () => {
        if (document.visibilityState === "visible") {
            sendHeartbeat();
        }
        };
        document.addEventListener(
            "visibilitychange",
            handleVisibilityChange
            );
        return () => {
            clearInterval(interval);

            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
            };
    }, []);
    return null;
}
