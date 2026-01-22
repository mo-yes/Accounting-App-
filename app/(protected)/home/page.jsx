"use client";

import { useEffect, useState } from "react";
import { db } from "../../../lib/db";
import { useAuthStore } from "../../../stores/auth.store";

import BottomNav from "@/components/BottomNav/BottomNav";
import HomeHeader from "./components/HomeHeader";
import DashboardActions from "./components/DashboardActions";
import DashboardStats from "./components/DashboardStats";
import RecentInvoices from "./components/RecentInvoices";
import { useDashboardStats } from "@/hooks/useDashboardStats";

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = useAuthStore((state) => state.userId);
  const { stats, loading: statsLoading } = useDashboardStats(userId);

useEffect(() => {
  let mounted = true;

  async function loadUser() {
    if (!userId) {
      if (mounted) setLoading(false);
      return;
    }

    const data = await db.users.get(userId);

    if (mounted) {
      setUser(data);
      setLoading(false);
    }
  }

  loadUser();

  return () => {
    mounted = false;
  };
}, [userId]);


  if (loading) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      جاري التحميل...
    </main>
  );
}
if (!user && !loading) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      حدث خطأ، برجاء تسجيل الدخول مرة أخرى
    </main>
  );
}

  if (!user) return null;

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 pb-28"
    >
      <HomeHeader name={user?.name?.split(" ")[0]} />

      <h1 className="text-center text-lg font-semibold text-gray-700 mt-6 mb-4">
        لوحة التحكم
      </h1>

      <DashboardActions />

      {!statsLoading && <DashboardStats stats={stats} />}

      <RecentInvoices />

      <BottomNav />
    </main>
  );
}
