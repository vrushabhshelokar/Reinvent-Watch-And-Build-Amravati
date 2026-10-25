"use client";

import React, { useEffect, useState, useRef } from "react";

interface VisitorResponse {
  success: boolean;
  totalVisits: number | null;
  uniqueVisitors: number | null;
  configured: boolean;
  storage?: string;
}

export function VisitorCounter() {
  const [data, setData] = useState<VisitorResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;

    let isCancelled = false;

    async function recordAndFetch() {
      try {
        const res = await fetch("/api/visitors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`Failed to load counter: ${res.status}`);
        }

        const json: VisitorResponse = await res.json();
        if (!isCancelled && json.success) {
          setData(json);
        }
      } catch {
        if (!isCancelled) {
          setData(null);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    recordAndFetch();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Graceful fallback: If service is offline, unconfigured in prod, or failed, render quiet fallback without fake numbers
  if (!loading && (!data || data.totalVisits === null || data.uniqueVisitors === null)) {
    return null;
  }

  const formatNumber = (num: number | null): string => {
    if (num === null || num === undefined) return "--";
    return num.toLocaleString("en-IN");
  };

  return (
    <div
      aria-label="Community Visitor Metrics"
      className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#C2B6BA]/60"
    >
      <span
        className={`inline-block w-1.5 h-1.5 rounded-full ${
          loading ? "bg-white/20 animate-pulse" : "bg-[#C24A70]"
        }`}
        aria-hidden="true"
      />
      <span>
        Visits:{" "}
        <strong className="font-medium text-[#F5F0EE]/80">
          {loading ? "--" : formatNumber(data?.totalVisits ?? null)}
        </strong>
      </span>
      <span className="text-white/20" aria-hidden="true">
        ·
      </span>
      <span>
        Unique:{" "}
        <strong className="font-medium text-[#F5F0EE]/80">
          {loading ? "--" : formatNumber(data?.uniqueVisitors ?? null)}
        </strong>
      </span>
    </div>
  );
}
