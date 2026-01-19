import {
  ShoppingCart,
  Package,
  FileText,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "إدارة المبيعات",
    description: "تسجيل فواتير البيع ومتابعة الأرباح بسهولة.",
  },
  {
    icon: Package,
    title: "إدارة المشتريات",
    description: "تنظيم فواتير الشراء ومعرفة تكلفة البضائع.",
  },
  {
    icon: FileText,
    title: "فواتير تلقائية",
    description: "إنشاء فواتير جاهزة للطباعة في ثواني.",
  },
  {
    icon: BarChart3,
    title: "تقارير واضحة",
    description: "تقارير بسيطة توضح الأداء والمكسب.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            كل اللي محتاجه لإدارة شغلك
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            أدوات بسيطة تساعدك تركز على البيع وتسيب الحسابات علينا
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-6
                            hover:bg-white hover:shadow-md transition"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center
                              rounded-xl bg-green-100 text-green-600
                              group-hover:bg-green-600 group-hover:text-white
                              transition"
                >
                  <Icon size={22} />
                </div>

                <h3 className="mt-4 font-semibold text-gray-800">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
