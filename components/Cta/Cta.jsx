import Link from "next/link";

export default function Cta() {
  return (
    <section className="px-4 py-10 bg-gray-50">
      <div className="max-w-md mx-auto text-center">

        {/* Divider + Title */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm font-medium text-gray-700">
            جاهز نبدأ؟
          </span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Button */}
        <Link
          href="/login"
          className="inline-flex items-center justify-center
                      bg-green-600 text-white px-10 py-3 rounded-xl
                      text-sm font-medium
                      hover:bg-green-700 transition
                      w-full sm:w-auto"
        >
          تسجيل الدخول
        </Link>

      </div>
    </section>
  );
}
