export default function InvoiceItems({ items, setItems }) {
  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      [field]: value,
    };
    setItems(newItems);
  };

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-sm">بنود الفاتورة</h3>

      {items.length === 0 && (
        <p className="text-xs text-gray-500">
          لا توجد بنود بعد
        </p>
      )}

      {items.map((item, i) => {
        const total =
          Number(item.qty || 0) * Number(item.price || 0);

        return (
          <div
            key={i}
            className="grid grid-cols-4 gap-2 items-center bg-gray-50 p-2 rounded-lg"
          >
            <input
              type="text"
              placeholder="اسم المنتج"
              className="border p-2 rounded col-span-2 text-sm"
              value={item.name}
              onChange={(e) =>
                updateItem(i, "name", e.target.value)
              }
            />

            <input
              type="number"
              placeholder="الكمية"
              className="border p-2 rounded text-sm"
              value={item.qty}
              onChange={(e) =>
                updateItem(i, "qty", e.target.value)
              }
            />

            <input
              type="number"
              placeholder="السعر"
              className="border p-2 rounded text-sm"
              value={item.price}
              onChange={(e) =>
                updateItem(i, "price", e.target.value)
              }
            />

            <div className="col-span-4 text-left text-sm font-semibold">
              الإجمالي: {total} ج
            </div>
          </div>
        );
      })}

      <button
        onClick={() =>
          setItems([
            ...items,
            { name: "", qty: "", price: "" },
          ])
        }
        className="text-green-600 text-sm font-medium"
      >
        + إضافة بند
      </button>
    </div>
  );
}
