import { db } from "@/lib/db";

export async function getDashboardStats(userId) {
  const productsCount = await db.products
    .where("userId")
    .equals(userId)
    .count();

  const todayInvoices = await db.invoices
    .where("userId")
    .equals(userId)
    .count();

  return {
    productsCount,
    todayInvoices,
    todayTotal: 0, // تتحسب بعدين
  };
}
