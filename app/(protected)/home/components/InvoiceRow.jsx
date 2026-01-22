  export default function InvoiceRow({ invoice }) {
  return (
    <div className="flex items-center justify-between p-3">
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
          invoice.status === "paid"
            ? "text-green-600"
            : "text-red-500"
        }`}
      >
        {invoice.status === "paid" ? "مدفوعة" : "غير مدفوعة"}
      </span>
    </div>
  );
}
