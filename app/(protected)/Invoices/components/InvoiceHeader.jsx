export default function InvoiceHeader({ type }) {
  return (
    <section>
      <h1 className="text-xl font-bold">
        {type === "sale" ? "فاتورة بيع" : "فاتورة شراء"}
      </h1>

      <button>
        {type === "sale" ? "إضافة عميل" : "إضافة مورد"}
      </button>
    </section>
  );
}
