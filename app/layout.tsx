import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "sonner";
import AuthGuard from "@/components/AuthGuard/AuthGuard";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "برنامج محاسبة",
  description: "برنامج محاسبة للأجهزة والادوات المنزلية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <AuthProvider>
            {children}
        <Toaster richColors position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
