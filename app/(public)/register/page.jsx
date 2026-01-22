"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerSchema } from "../../schemas/auth.schema";
import { registerWithEmail } from "../../../services/auth.service";
import Input from "@/components/Input/Input";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleRegister() {
    setErrors({});

    const result = registerSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    const toastId = toast.loading("جاري إنشاء الحساب...");

    try {
      await registerWithEmail(form.name, form.email, form.password);

      toast.success("تم إنشاء الحساب بنجاح، سجل الدخول الآن", { id: toastId });

      localStorage.removeItem("session");
      router.replace("/login");
    } catch (err) {
      toast.error(err?.message || "حدث خطأ أثناء إنشاء الحساب", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header
        dir="ltr"
        className="h-14 px-4 bg-white border-b flex items-center"
      >
        <Link href="/" aria-label="رجوع">
          <ArrowLeft />
        </Link>
        <h2 className="flex-1 text-center font-semibold">إنشاء حساب جديد</h2>
      </header>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div
          className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6"
          dir="rtl"
        >
          <h1 className="text-2xl font-bold text-center mb-6">
            إنشاء حساب جديد
          </h1>

          <Input
            label="الاسم"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            icon={<User size={18} />}
          />

          <Input
            label="البريد الإلكتروني"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            icon={<Mail size={18} />}
          />

          <Input
            label="كلمة المرور"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            icon={<Lock size={18} />}
          />

          <Input
            label="تأكيد كلمة المرور"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            icon={<Lock size={18} />}
          />

          <button
            disabled={loading}
            onClick={handleRegister}
            className="w-full mt-4 py-3 rounded-xl text-white font-semibold
              bg-green-600 disabled:opacity-60 transition"
          >
            {loading ? "جارٍ الإنشاء..." : "إنشاء حساب"}
          </button>

          <p className="text-center mt-4 text-sm text-gray-600">
            لديك حساب بالفعل؟
            <Link href="/login" className="text-green-600 mr-1">
              تسجيل الدخول
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

/* ---------- Input Component ---------- */
// function Input({ label, icon, error, ...props }) {
//   return (
//     <div className="mb-4">
//       <label className="text-sm font-medium">{label}</label>
//       <div className="relative">
//         <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
//           {icon}
//         </span>
//         <input
//           {...props}
//           className={`
//             w-full rounded-xl py-3 pr-11 pl-4 border transition
//             outline-none
//             ${
//               error
//                 ? "border-red-500 focus:ring-red-500 focus:border-red-500"
//                 : "border-gray-300  focus:ring-2 focus:ring-green-500"
//             }
//           `}
//         />
//       </div>
//       {error && (
//         <p className="text-red-500 text-xs mt-1">{error}</p>
//       )}
//     </div>
//   );
// }
