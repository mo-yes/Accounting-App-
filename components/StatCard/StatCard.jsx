export default function StatCard({ label, value, icon }) {
  return (
    <div className="flex items-center justify-between py-3 px-4">
      
      {/* النص */}
      <div className="text-sm text-gray-800">
        {label}:
        <span className="mr-1 font-semibold text-green-700">
          {value}
        </span>
      </div>

      {/* الأيقونة */}
      <div className="text-green-600">
        {icon}
      </div>

    </div>
  );
}
