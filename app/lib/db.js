import Dexie from "dexie";

class AppDB extends Dexie {
  constructor() {
    super("accountingDB");

    this.version(1).stores({
      users: "id,email",
    });

    this.users = this.table("users");
  }
}

export const db = new AppDB();
