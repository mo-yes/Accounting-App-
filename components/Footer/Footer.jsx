import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="text-xl font-bold text-green-600">
            تاجر
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-green-600 transition">
              الرئيسية
            </Link>
            <Link href="#" className="hover:text-green-600 transition">
              المميزات
            </Link>
            <Link href="#" className="hover:text-green-600 transition">
              تواصل معنا
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center
                          text-gray-500 hover:bg-green-600 hover:text-white
                          transition-all duration-300 hover:-translate-y-1"
            >
              <Facebook size={18} />
            </Link>

            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center
                          text-gray-500 hover:bg-green-600 hover:text-white
                          transition-all duration-300 hover:-translate-y-1"
            >
              <Instagram size={18} />
            </Link>

            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center
                          text-gray-500 hover:bg-green-600 hover:text-white
                          transition-all duration-300 hover:-translate-y-1"
            >
              <Twitter size={18} />
            </Link>

            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center
                          text-gray-500 hover:bg-green-600 hover:text-white
                          transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin size={18} />
            </Link>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 text-center text-xs text-gray-400">
          © 2026 تاجر — جميع الحقوق محفوظة
        </div>

      </div>
    </footer>
  );
}

