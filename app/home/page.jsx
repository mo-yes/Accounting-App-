"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  FilePlus,
  ShoppingCart,
  Package,
  User,
  RefreshCcw,
  FileText,
  DollarSign,
} from "lucide-react";

import { db } from "../lib/db";
import Card from "@/components/Card/Card";
import StatCard from "@/components/StatCard/StatCard";
import BottomNav from "@/components/BottomNav/BottomNav";
import { useAuthStore } from "../stores/auth.store";

export default function HomePage() {
  const [user, setUser] = useState(null);
  const userId = useAuthStore((state) => state.userId);

  const invoices = [
    {
      id: 123,
      type: "sale",
      payment: "cash",
      partyName: "أحمد علي",
      status: "paid",
    },
    {
      id: 77,
      type: "purchase",
      payment: "installment",
      partyName: "شركة النور",
      status: "unpaid",
    },
  ];



   useEffect(() => {
    if (!userId) return;
    db.users.get(userId).then(setUser);
  }, [userId]);

  if (!user) return null;

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-28"
    >
      {/* Header */}
      <header
        dir="ltr"
        className="flex items-center justify-between px-4 py-3 bg-white shadow-sm"
      >
        <Menu />
        <h2 className="text-green-700 font-semibold">
          مرحباً، {user.name.split(" ")[0]}
        </h2>
      </header>

      {/* Title */}
      <h1 className="text-center text-lg font-semibold text-gray-700 mt-6 mb-4">
        لوحة التحكم
      </h1>

      {/* Actions */}
      <section className="px-4 grid grid-cols-2 gap-4">
        <Card title="فاتورة بيع" icon={<FilePlus />} />
        <Card title="فاتورة شراء" icon={<ShoppingCart />} />
        <Card title="إضافة صنف" icon={<Package />} />
        <Card title="إضافة مورد" icon={<User />} />
      </section>

      {/* Stats */}
      <section className="px-4 mt-6">
        <div className="bg-white rounded-2xl shadow-md divide-y divide-gray-200">
          <StatCard
            label="عدد الأصناف"
            value="24"
            icon={<Package size={18} />}
          />

          <StatCard
            label="فواتير اليوم"
            value="3"
            icon={<FileText size={18} />}
          />

          <StatCard
            label="إجمالي اليوم"
            value="5,200 ج"
            icon={<DollarSign size={18} />}
          />
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="px-4 mt-6">
        <h3 className="text-center text-gray-500 mb-2">آخر العمليات</h3>

        <div className="bg-white rounded-2xl shadow-md divide-y">
          {invoices.slice(0, 5).map((invoice) => (
            <div
              key={invoice.id}
              className="flex items-center justify-between p-3"
            >
              <div className="flex items-center gap-3">
                {getInvoiceIcon(invoice.type)}

                <div>
                  <p className="text-sm font-medium">
                    {getInvoiceTitle(invoice.type)} #{invoice.id}
                  </p>
                  <p className="text-xs text-gray-400">
                    {invoice.partyName} •{" "}
                    {invoice.payment === "cash" ? "كاش" : "قسط"}
                  </p>
                </div>
              </div>

              <span
                className={`text-xs ${
                  invoice.status === "paid" ? "text-green-600" : "text-red-500"
                }`}
              >
                {invoice.status === "paid" ? "مدفوعة" : "غير مدفوعة"}
              </span>
            </div>
          ))}
        </div>
      </section>

      <BottomNav />
    </main>
  );
}

function getInvoiceTitle(type) {
  if (type === "sale") return "فاتورة بيع";
  if (type === "purchase") return "فاتورة شراء";
  if (type === "return") return "فاتورة استبدال";
}

function getInvoiceIcon(type) {
  if (type === "sale") return <FilePlus className="text-green-600" size={20} />;
  if (type === "purchase")
    return <ShoppingCart className="text-blue-600" size={20} />;
  if (type === "return")
    return <RefreshCcw className="text-orange-600" size={20} />;
}
