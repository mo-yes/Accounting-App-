import { Menu } from "lucide-react";

export default function HomeHeader({ name = "مستخدم" }) {
  return (
    <header
      dir="ltr"
      className="flex items-center justify-between px-4 py-3 bg-white shadow-sm"
    >
      <Menu />
      <h2 className="text-green-700 font-semibold">
        مرحباً، {name}
      </h2>
    </header>
  );
}
