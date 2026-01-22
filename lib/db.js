import Dexie from "dexie";

class AppDB extends Dexie {
  constructor() {
    super("accountingDB");

    this.version(2).stores({
      // Users
      users: "id,email",

      // Products per user
      products: "++id,userId,name,price,qty",

      // Invoices per user (ordered by date)
      invoices: "++id,userId,createdAt,type,status",

      // Invoice items
      invoice_items: "++id,invoiceId,productId,qty,price",
    });

    // Tables
    this.users = this.table("users");
    this.products = this.table("products");
    this.invoices = this.table("invoices");
    this.invoice_items = this.table("invoice_items");
  }
}

export const db = new AppDB();
