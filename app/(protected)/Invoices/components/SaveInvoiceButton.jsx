export default function SaveInvoiceButton({ onSave }) {
  return (
    <button
      onClick={onSave}
      className="w-full py-3 bg-green-700 text-white rounded"
    >
      حفظ الفاتورة
    </button>
  );
}
