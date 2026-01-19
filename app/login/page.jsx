"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import { loginSchema } from "../schemas/auth.schema";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // امسح الخطأ أول ما يكتب
  }

  async function handleLogin() {
    setErrors({});
    const result = loginSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    const toastId = toast.loading("جاري تسجيل الدخول...");

    try {
      await new Promise((res) => setTimeout(res, 1500));

      toast.success("تم تسجيل الدخول بنجاح", { id: toastId });
      router.replace("/home");
    } catch {
      toast.error("حدث خطأ أثناء تسجيل الدخول", { id: toastId });
    } finally {
      setLoading(false);
    }
  }

  function handleGoogleLogin() {
    const toastId = toast.loading("جاري تسجيل الدخول باستخدام Google");

    setTimeout(() => {
      toast.success("تم تسجيل الدخول بنجاح", { id: toastId });
      router.replace("/home");
    }, 1500);
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
      <header className="h-14 flex items-center px-4 bg-white border-b">
        <Link href="/" className="text-gray-700">
          <ArrowLeft size={22} />
        </Link>
        <h2 className="flex-1 text-center font-semibold">
          تسجيل الدخول
        </h2>
        <div className="w-6" />
      </header>

      {/* Body */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div dir="rtl" className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">

          <h1 className="text-2xl font-bold text-center mb-6">
            تسجيل الدخول
          </h1>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm font-medium">البريد الإلكتروني</label>
            <div className="relative">
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full border rounded-xl py-3 pr-11 pl-4 focus:ring-2
                  ${errors.email ? "border-red-500 focus:ring-red-500/20" : "focus:ring-green-500/20"}`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-sm font-medium">كلمة المرور</label>
            <div className="relative">
              <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className={`w-full border rounded-xl py-3 pr-11 pl-4 focus:ring-2
                  ${errors.password ? "border-red-500 focus:ring-red-500/20" : "focus:ring-green-500/20"}`}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Login */}
          <button
            disabled={loading}
            onClick={handleLogin}
            className="w-full py-3 rounded-xl text-white font-semibold
                       bg-linear-to-r from-green-600 to-green-500
                       disabled:opacity-60 active:scale-[0.97] transition"
          >
            {loading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-500">أو</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className="w-full border rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50"
          >
            <Image src="/google-icon-logo-svgrepo-com.svg" width={20} height={20} alt="google" />
            تسجيل الدخول باستخدام Google
          </button>

          <div className="text-center mt-6 text-sm text-gray-600">
            ليس لديك حساب؟
            <Link href="/register" className="text-green-600 mr-1">
              إنشاء حساب جديد
            </Link>
          </div>
        </div>
      </div>

      <footer className="py-4 text-center text-xs text-gray-400">
        © 2026 إيزي حساب
      </footer>
    </main>
  );
}
