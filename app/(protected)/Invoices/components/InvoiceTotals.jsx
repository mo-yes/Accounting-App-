export default function InvoiceTotals({ items }) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.total,
    0
  );

  return (
    <div className="mb-4">
      <div>الإجمالي الفرعي: {subtotal}</div>
      <div className="font-bold">الإجمالي: {subtotal}</div>
    </div>
  );
}
