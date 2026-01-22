"use client";

import { useEffect, useState } from "react";
import { getDashboardStats } from "@/services/dashboard.service";

export function useDashboardStats(userId) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    getDashboardStats(userId).then((data) => {
      setStats(data);
      setLoading(false);
    });
  }, [userId]);

  return { stats, loading };
}
