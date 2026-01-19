import Link from "next/link";
import { LogIn } from "lucide-react";

export default function Header() {
  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/90 backdrop-blur
        border-b
        transition-shadow
        hover:shadow-md
      "
    >
      <nav className="h-16 max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-green-600"
        >
          تاجر
        </Link>

        {/* Actions */}
        <Link
          href="/login"
          className="
            inline-flex items-center gap-2
            bg-green-600 text-white
            px-5 py-2 rounded-xl
            text-sm font-medium
            hover:bg-green-700 transition
          "
        >
          <LogIn size={18} />
          تسجيل الدخول
        </Link>

      </nav>
    </header>
  );
}
