import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("صيغة البريد الإلكتروني غير صحيحة"),

  password: z
    .string()
    .min(6, "كلمة المرور يجب ألا تقل عن 6 أحرف"),
});

// export const loginWithGoogleSchema = z.object({
//   email: z
//     .string()
//     .min(1, "البريد الإلكتروني مطلوب")
//     .email("صيغة البريد الإلكتروني غير صحيحة"),
// });


export const registerSchema = z.object({
    name: z
      .string()
      .min(2, "الاسم يجب ألا يقل عن حرفين")
      .max(50, "الاسم طويل جدًا"),

    email: z
      .string()
      .min(1, "البريد الإلكتروني مطلوب")
      .email("صيغة البريد الإلكتروني غير صحيحة"),

    password: z
      .string()
      .min(6, "كلمة المرور يجب ألا تقل عن 6 أحرف"),

    confirmPassword: z
      .string()
      .min(1, "تأكيد كلمة المرور مطلوب"),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "كلمتا المرور غير متطابقتين",
    path: ["confirmPassword"],
  });
