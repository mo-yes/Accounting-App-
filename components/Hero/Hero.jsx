import Link from "next/link";

export default function Hero() {
  {/* Hero */}
  return (
    <section className="px-4 py-10 sm:py-12
  text-center bg-linear-to-b from-white to-gray-50">
  
  {/* Title */}
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed">
    برنامج  تاجر
    <br />
    <span className="text-green-600">للأجهزة والادوات المنزلية</span>
  </h2>

  {/* Subtitle */}
  <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
    إدارة المشتريات والمبيعات من موبايلك بسهولة
  </p>

  {/* CTA Button */}
  <div className="mt-6 sm:mt-8">
    <Link
      href="/register"
      className="inline-flex items-center justify-center
      bg-green-600 text-white px-10 py-3 rounded-xl
                  text-sm sm:text-base font-medium
                  hover:bg-green-700 transition
                  w-full sm:w-auto"
    >
      ابدأ الآن
    </Link>
  </div>
</section>
  )
}
