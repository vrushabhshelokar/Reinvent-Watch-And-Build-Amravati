"use client";

import React, { useEffect, useState } from "react";

interface VisitorResponse {
  success: boolean;
  totalVisits: number | null;
  uniqueVisitors: number | null;
  configured: boolean;
  storage?: string;
  ignored?: boolean;
}

// In-flight request de-duplication to prevent duplicate requests across StrictMode / re-renders
let inflightVisitorPromise: Promise<VisitorResponse | null> | null = null;

async function fetchVisitorMetrics(): Promise<VisitorResponse | null> {
  if (inflightVisitorPromise) {
    return inflightVisitorPromise;
  }

  inflightVisitorPromise = (async () => {
    try {
      const res = await fetch("/api/visitors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const json = await res.json();
      if (json && typeof json === "object") {
        return json as VisitorResponse;
      }
      return null;
    } catch (err) {
      console.warn("[VisitorCounter] Metrics fetch warning:", err);
      return null;
    } finally {
      // Clear after completion so future manual triggers or re-mounts can fetch fresh if desired
      setTimeout(() => {
        inflightVisitorPromise = null;
      }, 2000);
    }
  })();

  return inflightVisitorPromise;
}

export function VisitorCounter() {
  const [data, setData] = useState<VisitorResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    fetchVisitorMetrics()
      .then((result) => {
        if (isCancelled) return;
        if (result && result.success && typeof result.totalVisits === "number") {
          setData(result);
        } else {
          setData(null);
        }
      })
      .catch(() => {
        if (!isCancelled) {
          setData(null);
        }
      })
      .finally(() => {
        if (!isCancelled) {
          setLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  const isLive = Boolean(
    !loading &&
      data &&
      data.success &&
      typeof data.totalVisits === "number" &&
      typeof data.uniqueVisitors === "number"
  );

  const formatNumber = (num: number | null | undefined): string => {
    if (num === null || num === undefined) return "—";
    return num.toLocaleString("en-IN");
  };

  const totalDisplay =
    loading || !isLive || !data || data.totalVisits === null || data.totalVisits === undefined
      ? "—"
      : formatNumber(data.totalVisits);

  const uniqueDisplay =
    loading || !isLive || !data || data.uniqueVisitors === null || data.uniqueVisitors === undefined
      ? "—"
      : formatNumber(data.uniqueVisitors);

  return (
    <div
      id="visitor-counter"
      role="status"
      aria-live="polite"
      aria-label="Community Visitor Metrics"
      className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#C2B6BA]/60 select-none"
    >
      <span
        className={`inline-block w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
          loading
            ? "bg-white/30 animate-pulse"
            : isLive
            ? "bg-[#C24A70] shadow-[0_0_8px_rgba(194,74,112,0.4)]"
            : "bg-white/20"
        }`}
        aria-hidden="true"
        title={
          loading
            ? "Loading metrics..."
            : isLive
            ? "Live community metrics"
            : "Metrics currently unavailable"
        }
      />
      <span>
        Visits:{" "}
        <strong className="font-medium text-[#F5F0EE]/80">
          {totalDisplay}
        </strong>
      </span>
      <span className="text-white/20" aria-hidden="true">
        ·
      </span>
      <span>
        Unique:{" "}
        <strong className="font-medium text-[#F5F0EE]/80">
          {uniqueDisplay}
        </strong>
      </span>
    </div>
  );
}
