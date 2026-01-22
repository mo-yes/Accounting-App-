"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import InvoiceCard from "./components/InvoiceCard";
import { useAuthStore } from "@/stores/auth.store";
import { useInvoices } from "@/hooks/useInvoices";

export default function InvoicesPage() {
  const router = useRouter();
  const userId = useAuthStore((s) => s.userId);
  const { invoices, loading } = useInvoices(userId);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        جاري تحميل الفواتير...
      </main>
    );
  }

  return (
    <main dir="rtl" className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full border hover:bg-gray-100"
        >
          <ArrowLeft size={18} />
        </button>

        <h1 className="text-lg font-bold">الفواتير</h1>

        <Link
          href="/invoices/new/sale"
          className="flex items-center gap-1 bg-green-600 text-white px-3 py-2 rounded-lg text-sm"
        >
          فاتورة بيع
        </Link>
      </div>

      {/* Content */}
      {invoices.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          لا توجد فواتير بعد
        </p>
      ) : (
        <div className="space-y-3">
          {invoices.map((invoice) => (
            <InvoiceCard key={invoice.id} invoice={invoice} />
          ))}
        </div>
      )}
    </main>
  );
}
