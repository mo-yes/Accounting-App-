export default function Card({ title, icon }) {
  return (
    <div
      className="
        relative bg-white rounded-2xl p-4 shadow-sm
        flex flex-col items-center justify-center gap-3
        active:scale-95 transition cursor-pointer
      "
    >
      {/* plus icon */}
      <span className="absolute top-3 left-3 w-6 h-6 rounded-md
        bg-green-600 text-white flex items-center justify-center text-sm">
        +
      </span>

      <div className="text-green-600">{icon}</div>

      <span className="font-semibold text-gray-700">
        {title}
      </span>
    </div>
  );
}
