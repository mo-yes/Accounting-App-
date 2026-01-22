import { db } from "@/lib/db";

export async function createInvoice(userId, invoice) {
  return await db.invoices.add({
    userId,
    type: invoice.type,          // sale | purchase
    partnerName: invoice.partnerName,
    items: invoice.items || [],  // 👈 المهم
    total: invoice.total,
    createdAt: invoice.createdAt,
    status: "paid",
  });
}

export async function getInvoices(userId) {
  return await db.invoices
    .where("userId")
    .equals(userId)
    .reverse()
    .sortBy("createdAt");
}
