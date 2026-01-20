import { hashPassword } from "../lib/crypto";
import { db } from "../lib/db";

/**
 * Login باستخدام email & password
 */
export async function loginWithEmail(email, password) {
  const hashedPassword = await hashPassword(password);

  const user = await db.users
    .where("email")
    .equals(email)
    .first();

  if (!user || user.password !== hashedPassword) {
    throw new Error("البريد الإلكتروني أو كلمة المرور غير صحيحة");
  }

  return {
    id: user.id,
    email: user.email,
  };
}

/**
 * Register مستخدم جديد
 */
export async function registerWithEmail(name, email, password) {
  const existingUser = await db.users
    .where("email")
    .equals(email)
    .first();

  if (existingUser) {
    throw new Error("هذا البريد مسجل بالفعل");
  }

  const hashedPassword = await hashPassword(password);

  const user = {
    id: crypto.randomUUID(),
    name,
    email,
    password: hashedPassword,
    createdAt: new Date().toISOString(),
  };

  await db.users.add(user);

  return {
  id: user.id,
  email: user.email,
  name: user.name, // ✅
};

}

