// services/dashboard.service.js
import { db } from "@/lib/db";

export async function getDashboardData() {
  const today = new Date().toISOString().slice(0, 10);

  const productsCount = await db.products.count();

  const todayInvoices = await db.invoices
    .filter(i => i.createdAt.startsWith(today))
    .toArray();

  const totalToday = todayInvoices.reduce(
    (sum, i) => sum + i.total,
    0
  );

  const recentInvoices = await db.invoices
    .orderBy("createdAt")
    .reverse()
    .limit(5)
    .toArray();

  return {
    productsCount,
    invoicesToday: todayInvoices.length,
    totalToday,
    recentInvoices,
  };
}
