import InvoiceRow from "./InvoiceRow";

;

export default function RecentInvoices({ invoices = [] }) {
  if (!invoices || !invoices.length) {
  return (
    <section className="px-4 mt-6">
      <h3 className="text-center text-gray-500 mb-2">
        آخر العمليات
      </h3>

      <div className="bg-white rounded-2xl shadow-md p-4 text-center text-sm text-gray-400">
        لا توجد عمليات حتى الآن
      </div>
    </section>
  );
}
}
