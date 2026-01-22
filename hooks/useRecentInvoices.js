"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/db";

export default function useRecentInvoices(limit = 5) {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    db.invoices
      .orderBy("createdAt")
      .reverse()
      .limit(limit)
      .toArray()
      .then(setInvoices);
  }, [limit]);

  return invoices;
}
