"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Package,
  FileText,
  Users,
  BarChart,
} from "lucide-react";

const items = [
  { href: "/home", label: "الرئيسية", icon: Home },
  { href: "/products", label: "الأصناف", icon: Package },
  { href: "/invoices", label: "الفواتير", icon: FileText },
  { href: "/suppliers", label: "الموردين", icon: Users },
  { href: "/reports", label: "التقارير", icon: BarChart },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
      {items.map(item => {
        const active = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center text-xs ${
              active ? "text-green-600" : "text-gray-500"
            }`}
          >
            <Icon size={20} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
