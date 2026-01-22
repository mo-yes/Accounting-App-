import { useEffect, useState } from "react";
import { getInvoices } from "@/services/invoice.service";

export function useInvoices(userId) {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      if (!userId) {
        if (mounted) {
          setInvoices([]);
          setLoading(false);
        }
        return;
      }

      try {
        setLoading(true);
        const data = await getInvoices(userId);

        if (mounted) {
          setInvoices(data);
        }
      } catch (err) {
        console.error("Error loading invoices", err);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, [userId]);

  return { invoices, loading };
}
