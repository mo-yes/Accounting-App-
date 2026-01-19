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

export const loginWithGoogleSchema = z.object({
  email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("صيغة البريد الإلكتروني غير صحيحة"),
});