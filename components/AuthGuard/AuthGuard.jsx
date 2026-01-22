"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/stores/auth.store";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { userId, loadSession } = useAuthStore();

  useEffect(() => {
    loadSession();
  }, []);

  if (userId === undefined) return null; // loading

  if (!userId && pathname !== "/login") {
    router.replace("/login");
    return null;
  }

  return children;
}
