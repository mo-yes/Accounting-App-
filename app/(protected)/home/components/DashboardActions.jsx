import ActionCard from "./ActionCard";

export default function DashboardActions() {
  return (
    <section className="px-4 grid grid-cols-2 gap-4">
      <ActionCard
        title="فاتورة بيع"
        image="/icons/sale.png"
      />
      <ActionCard
        title="فاتورة شراء"
        image="/icons/purchase.png"
      />
      <ActionCard
        title="إضافة صنف"
        image="/icons/product.png"
      />
      <ActionCard
        title="إضافة مورد"
        image="/icons/supplier.png"
      />
    </section>
  );
}
