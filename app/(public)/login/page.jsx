"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import { loginSchema } from "../../schemas/auth.schema";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../../stores/auth.store";
import { loginWithEmail } from "../../../services/auth.service";
import Input from "@/components/Input/Input";

export default function LoginPage() {
  const router = useRouter();
  const auth = useAuthStore();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // 1️⃣ تحميل السيشن مرة واحدة
  useEffect(() => {
    auth.loadSession();
  }, []);

  // 2️⃣ لو فيه user → روح الهوم
  useEffect(() => {
    if (auth.userId) {
      router.replace("/home");
    }
  }, [auth.userId]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
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
      const user = await loginWithEmail(form.email, form.password);

      auth.login(user.id);

      toast.success("تم تسجيل الدخول بنجاح", { id: toastId });
      router.replace("/home");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "حدث خطأ أثناء تسجيل الدخول";

      toast.error(message, { id: toastId });
    } finally {
      setLoading(false);
    }
  }

  function handleGoogleLogin() {
    toast.info("تسجيل الدخول باستخدام Google سيكون متاحًا قريبًا");
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
      <header
        dir="ltr"
        className="h-14 px-4 bg-white border-b flex items-center"
      >
        <Link aria-label="الرجوع للرئيسية" href="/" className="text-gray-700">
          <ArrowLeft size={22} />
        </Link>

        <h2 className="flex-1 text-center font-semibold" dir="rtl">
          تسجيل الدخول
        </h2>
      </header>

      {/* Body */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div
          dir="rtl"
          className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6"
        >
          <h1 className="text-2xl font-bold text-center mb-6">تسجيل الدخول</h1>

          {/* Email */}
          <div className="mb-4">
            <div className="relative">
              <Input
                label="البريد الإلكتروني"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                icon={<Mail size={18} />}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <div className="relative">
              <Input
                label="كلمة المرور"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
                icon={<Lock size={18} />}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <button
            disabled={loading}
            onClick={handleLogin}
            className="w-full py-3 rounded-xl text-white font-semibold
              bg-linear-to-r from-green-600 to-green-500
              disabled:opacity-60 transition"
          >
            {loading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
          </button>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-500">أو</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full border rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50"
          >
            <Image
              src="/google-icon-logo-svgrepo-com.svg"
              width={20}
              height={20}
              alt="google"
            />
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
        تاجر © 2026
      </footer>
    </main>
  );
}
