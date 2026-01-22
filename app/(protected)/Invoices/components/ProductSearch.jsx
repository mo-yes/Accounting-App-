"use client";

import { useState, useEffect } from "react";
import { searchProducts } from "@/services/product.service";

export default function ProductSearch({ userId, onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function load() {
      if (!query) {
        setResults([]);
        return;
      }

      const data = await searchProducts(userId, query);
      setResults(data);
    }

    load();
  }, [query, userId]);

  return (
    <div className="relative">
      <input
        placeholder="ابحث عن منتج..."
        className="border p-2 rounded w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {results.length > 0 && (
        <div className="absolute z-10 bg-white border w-full mt-1 rounded shadow">
          {results.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                onSelect(p);
                setQuery("");
                setResults([]);
              }}
              className="w-full text-right p-2 hover:bg-gray-100 text-sm"
            >
              {p.name}
              {p.stock === 1 && (
                <span className="text-red-500 text-xs mr-2">
                  (آخر قطعة)
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
