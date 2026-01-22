import StatCard from "@/components/StatCard/StatCard";

export default function DashboardStats({ stats }) {
  if (!stats) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md divide-y">
      <StatCard label="عدد الأصناف" value={stats.productsCount} />
      <StatCard label="فواتير اليوم" value={stats.todayInvoices} />
      <StatCard label="إجمالي اليوم" value={stats.todayTotal} />
    </div>
  );
}
