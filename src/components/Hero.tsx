import { MessageCircle } from 'lucide-react';

export default function Hero() {
	return (
		<section className="relative bg-slate-50 pt-25 sm:pt-35 lg:pt-30 pb-16 sm:pb-15  overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full blur-3xl opacity-20"></div>
				<div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-20"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				{/* Badge */}
				<div className="flex justify-center mb-8 sm:mb-10">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
						<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
						<span className="text-sm font-medium text-emerald-700">Solusi Digital No. #1 Sekolah Modern</span>
					</div>
				</div>

				{/* Main Heading */}
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6">
					Manajemen Sekolah
					<br className="hidden sm:inline" />
					<span >Tinggal </span>
					<span className="relative bg-gradient-to-r from-blue-600 via-yellow-400 to-teal-600 bg-clip-text text-transparent">"Klik"</span>
				</h1>

				{/* Description */}
				<p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
					Kelola seluruh aktivitas sekolah dengan lebih mudah, cepat, dan efisien dalam satu sistem online terintegrasi. Tinggalkan cara lama yang rumit.
				</p>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
					<a
						href="https://request-demo.softwaresekolah.com/"
						className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:opacity-95 transition"
						target='_blank'
					>
						<MessageCircle className="w-5 h-5" />
						<span>Request Demo pekerjaan kami? click!</span>
					</a>

					<a
						href="#Orientation"
						className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 rounded-full bg-white border-2 border-gray-300 text-gray-900 font-semibold text-sm hover:border-gray-400 hover:shadow-lg transition"
					>
						Pelajari Lebih Lanjut
					</a>
				</div>
			</div>
		</section>
	);
}