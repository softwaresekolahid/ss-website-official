import { Briefcase, Layers, Lightbulb, Shield, ArrowRight } from 'lucide-react';

export default function Advantage() {
  const advantages = [
    {
      icon: Briefcase,
      title: "Profesional",
      description: "Dirancang khusus untuk standar manajemen sekolah modern internasional.",
      color: "blue"
    },
    {
      icon: Layers,
      title: "Adaptif",
      description: "Mudah disesuaikan dengan berbagai jenjang pendidikan (TK, SD, SMP, SMA, Pesantren).",
      color: "emerald"
    },
    {
      icon: Lightbulb,
      title: "Dukungan Penuh",
      description: "Tim support teknis siap membantu Anda kapan pun dibutuhkan via chat/call.",
      color: "yellow"
    },
    {
      icon: Shield,
      title: "Terpercaya",
      description: "Dilengkapi dengan berstandar internasional untuk keamanan dan kestabilan data sekolah.",
      color: "purple"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      icon: "text-blue-600"
    },
    emerald: {
      bg: "bg-emerald-50",
      icon: "text-emerald-600"
    },
    yellow: {
      bg: "bg-yellow-50",
      icon: "text-yellow-600"
    },
    gray: {
      bg: "bg-gray-50",
      icon: "text-gray-600"
    },
    purple: {
      bg: "bg-purple-50",
      icon: "text-purple-600"
    }
  };

  return (
    <section id="Advantage" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kenapa Harus Kami?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kami merancang sistem yang tidak hanya canggih, tapi juga manusiawi dan mudah 
              digunakan oleh berbagai jenjang usia.
            </p>
            <a 
              href="https://api.whatsapp.com/send?phone=6281211124114&text=Halo...Saya%20telah%20mengunjungi%20website%20softwaresekolah.com%2C%20saya%20tertarik%20untuk%20mendapatkan%20penjelasan%20lebih%20lanjut%20dari%20anda.." 
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
            >
              Konsultasi Sekarang 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            const colors = colorClasses[advantage.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-3xl bg-linear-to-r from-slate-800 via-emerald-800 to-emerald-600 p-12 md:p-16 text-center overflow-hidden shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-700 rounded-full opacity-20 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Waktunya Sekolah Anda Go Digital
            </h2>
            <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Hemat waktu, kurangi beban administrasi, dan tingkatkan kualitas 
              layanan pendidikan dengan sistem manajemen sekolah terintegrasi.
            </p>
            <a href="https://request-demo.softwaresekolah.com/" target='_blank'>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2 cursor-pointer">
                Request Demo Sekarang 👋
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}