import Link from "next/link";
import { format } from "date-fns";

export default function InvoiceCard({ invoice }) {
  const isSale = invoice.type === "sale";

  return (
    <Link href={`/invoices/${invoice.id}`}>
      <div
        className="
          bg-white rounded-xl p-4 shadow-sm border
          cursor-pointer
          transition
          hover:shadow-md
          my-4
          hover:border-gray-300
          active:scale-[0.98]
        "
      >
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-sm font-semibold ${
              isSale ? "text-green-600" : "text-blue-600"
            }`}
          >
            {isSale ? "فاتورة بيع" : "فاتورة شراء"}
          </span>

          <span className="text-xs text-gray-400">
            {format(new Date(invoice.createdAt), "dd/MM/yyyy")}
          </span>
        </div>

        {/* اسم العميل */}
        <div className="text-sm font-medium mb-1">
          {invoice.partnerName}
        </div>

        <div className="flex justify-between text-sm text-gray-700">
          <span>الإجمالي</span>
          <span className="font-bold">{invoice.total} ج</span>
        </div>
      </div>
    </Link>
  );
}
