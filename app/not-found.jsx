import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-4">
      
      {/* Image */}
      <Image
        src="/Not-Found.png"
        alt="Page not found"
        width={600}
        height={600}
        priority
        className="mb-6"
      />

      {/* Text */}
      <h1 className="text-2xl font-bold text-gray-800">
        الصفحة غير موجودة
      </h1>

      <p className="mt-2 text-gray-500 max-w-md">
        الصفحة التي تحاول الوصول إليها غير متاحة أو تم نقلها
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 text-white font-medium hover:bg-green-700 transition"
      >
        الرجوع للرئيسية
      </Link>
    </main>
  );
}
