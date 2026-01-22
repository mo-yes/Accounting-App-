"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useAuthStore } from "@/stores/auth.store";
import { createInvoice } from "@/services/invoice.service";
import ProductSearch from "../../components/ProductSearch";

export default function NewSaleInvoicePage() {
  const router = useRouter();
  const userId = useAuthStore((s) => s.userId);

  const [items, setItems] = useState([]);
  const [partnerName, setPartnerName] = useState("");

  const total = items.reduce((s, i) => s + i.total, '');

  async function saveInvoice() {
    if (!partnerName || items.length === 0) return;

    await createInvoice(userId, {
      type: "sale",
      partnerName,
      total,
      createdAt: new Date(),
      items,
    });

    router.push("/invoices");
  }

  return (
    <main dir="rtl" className="p-4 space-y-4">
      <div dir="ltr" className="flex items-center gap-3">
        <button onClick={() => router.back()}>
          <ArrowLeft />
        </button>
        <h1 className="font-bold">فاتورة بيع</h1>
      </div>

      {/* اسم العميل */}
      <input
        placeholder="اسم العميل"
        className="border p-2 rounded w-full"
        value={partnerName}
        onChange={(e) => setPartnerName(e.target.value)}
      />

      {/* البحث */}
      <ProductSearch
        userId={userId}
        onSelect={(product) => {
          if (product.stock < 1) return;

          setItems([
            ...items,
            {
              productId: product.id,
              name: product.name,
              price: product.price,
              qty: 1,
              total: product.price,
              stock: product.stock,
            },
          ]);
        }}
      />

      {/* البنود */}
      <div className="space-y-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex justify-between border p-2 rounded text-sm"
          >
            <span>{item.name}</span>
            <span>{item.total} ج</span>
          </div>
        ))}
      </div>

      <div className="font-bold">
        الإجمالي: {total} ج
      </div>

      <button
        onClick={saveInvoice}
        className="w-full bg-green-600 text-white py-2 rounded"
      >
        حفظ الفاتورة
      </button>
    </main>
  );
}
