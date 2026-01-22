"use client";

import { useState } from "react";
import InvoiceHeader from "../components/InvoiceHeader";
import InvoiceItems from "../components/InvoiceItems";
import InvoiceTotals from "../components/InvoiceTotals";
import SaveInvoiceButton from "../components/SaveInvoiceButton";

export default function Page() {
  const [items, setItems] = useState([
    { name: "", qty: 1, price: 0, total: 0 },
  ]);

  const saveInvoice = () => {
    console.log({
      type: "purchase",
      items,
    });
  };

  return (
    <div className="p-4">
      <InvoiceHeader type="purchase" />
      <InvoiceItems items={items} setItems={setItems} />
      <InvoiceTotals items={items} />
      <SaveInvoiceButton onSave={saveInvoice} />
    </div>
  );
}
