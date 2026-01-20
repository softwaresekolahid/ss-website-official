import { CreditCard, DollarSign, ClipboardList, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: CreditCard,
      title: "Pembayaran Online",
      description: "Kelola pembayaran sekolah dengan lebih mudah, transparan dan tercatat otomatis.",
      color: "blue"
    },
    {
      icon: DollarSign,
      title: "Keuangan Terintegrasi",
      description: "Laporan keuangan real-time dan mudah digunakan dengan manajemen.",
      color: "emerald"
    },
    {
      icon: ClipboardList,
      title: "Sistem Penilaian",
      description: "Pengelolaan nilai siswa akurat dan siap digunakan untuk laporan akademik.",
      color: "yellow"
    },
    {
      icon: Users,
      title: "PPDB Online",
      description: "Proses penerimaan siswa baru lebih mudah dan dapat diakses dari mana saja.",
      color: "purple"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      icon: "text-blue-600",
      hover: "hover:bg-blue-100"
    },
    emerald: {
      bg: "bg-emerald-50",
      icon: "text-emerald-600",
      hover: "hover:bg-emerald-100"
    },
    yellow: {
      bg: "bg-yellow-50",
      icon: "text-yellow-600",
      hover: "hover:bg-yellow-100"
    },
    purple: {
      bg: "bg-purple-50",
      icon: "text-purple-600",
      hover: "hover:bg-purple-100"
    }
  };

  return (
    <section id="Features" className="py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wide mb-2">
            FITUR UNGGULAN
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Semua yang Sekolah Butuhkan
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${colors.bg} ${colors.hover} rounded-xl flex items-center justify-center mb-4 transition-colors duration-300`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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