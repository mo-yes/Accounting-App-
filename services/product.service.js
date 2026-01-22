import { db } from "@/lib/db";

/**
 * إضافة منتج جديد للمخزن
 */
export async function createProduct(userId, product) {
  return await db.products.add({
    userId,
    name: product.name,
    category: product.category,
    price: product.price,
    stock: product.stock,
  });
}

/**
 * البحث عن منتج بالاسم (للإضافة للفاتورة)
 */
export async function searchProducts(userId, keyword) {
  if (!keyword) return [];

  return await db.products
    .where("userId")
    .equals(userId)
    .filter((p) =>
      p.name.toLowerCase().includes(keyword.toLowerCase())
    )
    .toArray();
}

/**
 * اقتراح منتجات من نفس الكاتجري
 * (لو المنتج اللي المستخدم كاتبه مش موجود)
 */
export async function getProductsByCategory(userId, category) {
  return await db.products
    .where("userId")
    .equals(userId)
    .filter((p) => p.category === category)
    .toArray();
}

/**
 * جلب منتج بالـ ID (لما المستخدم يختاره)
 */
export async function getProductById(productId) {
  return await db.products.get(productId);
}

/**
 * خصم الكمية من المخزن بعد حفظ الفاتورة
 */
export async function decreaseStock(productId, qty) {
  const product = await db.products.get(productId);

  if (!product) return;
  if (product.stock < qty) {
    throw new Error("الكمية غير متاحة في المخزن");
  }

  await db.products.update(productId, {
    stock: product.stock - qty,
  });
}
