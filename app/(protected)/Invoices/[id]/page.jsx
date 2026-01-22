"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { db } from "@/lib/db";
import { format } from "date-fns";

export default function InvoiceDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadInvoice() {
      const data = await db.invoices.get(Number(id));
      if (mounted) {
        setInvoice(data);
        setLoading(false);
      }
    }

    loadInvoice();

    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        جاري تحميل الفاتورة...
      </main>
    );
  }

  if (!invoice) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        الفاتورة غير موجودة
      </main>
    );
  }

  const isSale = invoice.type === "sale";

  return (
    <main dir="rtl" className="p-4 space-y-4">
      {/* Header */}
      <div dir="ltr" className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full border hover:bg-gray-100"
        >
          <ArrowLeft size={18} />
        </button>

        <h1 className="text-lg font-bold">
          {isSale ? "فاتورة بيع" : "فاتورة شراء"}
        </h1>
      </div>

      {/* Info Card */}
      <div className="bg-white rounded-xl border p-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">العميل</span>
          <span className="font-medium">{invoice.partnerName}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">التاريخ</span>
          <span>
            {format(new Date(invoice.createdAt), "dd/MM/yyyy")}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">الحالة</span>
          <span className="text-green-600 font-semibold">
            مدفوعة
          </span>
        </div>
      </div>

      {/* Items */}
      <div className="bg-white rounded-xl border p-4">
        <h2 className="font-semibold mb-3">بنود الفاتورة</h2>

        {invoice.items?.length > 0 ? (
          <div className="space-y-2">
            {invoice.items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between text-sm border-b pb-1"
              >
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>{item.qty * item.price} ج</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">
            لا توجد بنود
          </p>
        )}
      </div>

      {/* Total */}
      <div className="bg-gray-50 border rounded-xl p-4 flex justify-between font-bold">
        <span>الإجمالي</span>
        <span>{invoice.total} ج</span>
      </div>
    </main>
  );
}
