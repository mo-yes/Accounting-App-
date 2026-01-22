import Dexie from "dexie";

class AppDB extends Dexie {
  constructor() {
    super("accountingDB");

    this.version(3).stores({
      // Users
      users: "id,email",

      // Products (المخزن)
      products: "++id,userId,name,category,price,stock",

      // Invoices
      invoices: "++id,userId,createdAt,type,status",

      // Invoice items
      invoice_items: "++id,invoiceId,productId,qty,price",
    });

    this.users = this.table("users");
    this.products = this.table("products");
    this.invoices = this.table("invoices");
    this.invoice_items = this.table("invoice_items");
  }
}

export const db = new AppDB();
