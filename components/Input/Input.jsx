export default function Input({ label, icon, error, ...props }) {
  return (
    <div className="mb-4">
      <label className="text-sm font-medium">{label}</label>
      <div className="relative">
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>
        <input
          {...props}
          className={`
            w-full rounded-xl py-3 pr-11 pl-4 border transition
            outline-none
            ${
              error
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300  focus:ring-2 focus:ring-green-500"
            }
          `}
        />
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}