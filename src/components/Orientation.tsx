import { Check } from 'lucide-react';

export default function Advantage() {
  return (
    <section id="Orientation" className="py-16 px-4 bg-white pb-20" >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Apa Itu <span className="text-emerald-500">Software Sekolah?</span>
            </h2>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              Layanan Sistem Informasi Manajemen Sekolah Terintegrasi yang 
              menghubungkan seluruh bagian sekolah dalam satu platform digital.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Mulai dari <span className="text-emerald-500 font-semibold">administrasi</span>, <span className="text-blue-500 font-semibold">akademik</span>, <span className="text-orange-500 font-semibold">keuangan</span>, <span className="text-red-500 font-semibold">hingga komunikasi</span> — semua 
              terkelola dalam satu sistem yang saling terhubung.
            </p>
            
            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-emerald-600" strokeWidth={3} />
                </div>
                <p className="text-gray-700">Kurangi beban administrasi manual</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-blue-600" strokeWidth={3} />
                </div>
                <p className="text-gray-700">Percepat proses akademik & keuangan</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-yellow-600" strokeWidth={3} />
                </div>
                <p className="text-gray-700">Tingkatkan pelayanan siswa & orang tua</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Card */}
          <div>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Saatnya Go Digital! 
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Kenalkan, SoftwareSekolah.com — solusi manajemen sekolah terintegrasi 
                  yang membantu sekolah bekerja lebih efektif, transparan, dan profesional.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    100%
                  </div>
                  <div className="text-sm font-medium text-blue-700 uppercase tracking-wide">
                    Online System
                  </div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                    24/7
                  </div>
                  <div className="text-sm font-medium text-purple-700 uppercase tracking-wide">
                    Akses Data
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}