import { Instagram, Facebook, MapPin, Mail, MessageCircle } from 'lucide-react';
import logo from '../assets/image/software sekolah.png';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center flex-shrink-0">
					<img src={logo} alt="Software Sekolah Logo" className="h-10 w-auto" />
					<span className="font-bold text-lg text-white">Software<span className="text-teal-600">Sekolah</span></span>
				</div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Solusi manajemen sekolah terintegrasi yang membantu sekolah bekerja lebih efektif, 
              transparan, dan profesional.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/softwaresekolah_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
                target='_blank'
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/softwaresekolah.official" 
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
                target='_blank'
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Hubungi Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  PT. Sistem Sekolah Sukses<br />
                  YKP Pandugo II Blok P No.1<br />
                  Penjaringanasari, Rungkut<br />
                  Surabaya - Jawa Timur 60297
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a 
                  href="mailto:info@softwaresekolah.com" 
                  className="text-gray-400 text-sm hover:text-emerald-400 transition-colors"
                >
                  info@softwaresekolah.com
                </a>
              </div>
            </div>
          </div>

          {/* Consultation Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Konsultasi</h4>
            <p className="text-gray-400 text-sm mb-4">
              Ingin tahu lebih lanjut? Chat kami sekarang.
            </p>
            <a 
              href="https://api.whatsapp.com/send?phone=6281211124114&text=Halo...Saya%20telah%20mengunjungi%20website%20softwaresekolah.com%2C%20saya%20tertarik%20untuk%20mendapatkan%20penjelasan%20lebih%20lanjut%20dari%20anda.." 
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              target='_blank'
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 PT. Sistem Sekolah Sukses. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}