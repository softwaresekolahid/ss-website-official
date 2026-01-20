import { useState } from 'react';
import logo from '../assets/image/software sekolah.png';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<a href="/" className="flex items-center flex-shrink-0 hover:opacity-80 transition-opacity duration-200">
						<img src={logo} alt="Software Sekolah Logo" className="h-10 w-auto" />
						<span className="font-bold text-lg text-gray-900">
							Software<span className="text-teal-600">Sekolah</span>
						</span>
					</a>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-8 text-sm">
						<a
							href="#Orientation"
							className="relative text-gray-600 font-medium transition-colors duration-300 hover:text-teal-600 group"
						>
							Tentang Kami
							<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-300 group-hover:w-full"></span>
						</a>
						<a
							href="#Features"
							className="relative text-gray-600 font-medium transition-colors duration-300 hover:text-teal-600 group"
						>
							Fitur Kami
							<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-300 group-hover:w-full"></span>
						</a>
						<a
							href="#Advantage"
							className="relative text-gray-600 font-medium transition-colors duration-300 hover:text-teal-600 group"
						>
							Keunggulan
							<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-300 group-hover:w-full"></span>
						</a>
					</nav>

					{/* Desktop CTA */}
					<a href="https://api.whatsapp.com/send?phone=6281211124114&text=Halo...Saya%20telah%20mengunjungi%20website%20softwaresekolah.com%2C%20saya%20tertarik%20untuk%20mendapatkan%20penjelasan%20lebih%20lanjut%20dari%20anda.." target='_blank'>
					<button className="hidden md:inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
						Hubungi Kami
					</button>
					</a>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setOpen(!open)}
						className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
						aria-label="toggle menu"
					>
						<svg
							className="w-6 h-6 text-gray-900 transition-transform duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
							/>
						</svg>
					</button>
				</div>

				{/* Mobile Navigation */}
				{open && (
					<div className="md:hidden border-t bg-white py-4 animate-fadeIn">
						<div className="px-4 flex flex-col gap-2">
							<a
								href="#about"
								className="px-4 py-2.5 text-gray-600 hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:text-teal-700 rounded-lg transition-all duration-300 transform hover:translate-x-2"
							>
								Tentang Kami
							</a>
							<a
								href="#features"
								className="px-4 py-2.5 text-gray-600 hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:text-teal-700 rounded-lg transition-all duration-300 transform hover:translate-x-2"
							>
								Fitur
							</a>
							<a
								href="#advantages"
								className="px-4 py-2.5 text-gray-600 hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:text-teal-700 rounded-lg transition-all duration-300 transform hover:translate-x-2"
							>
								Keunggulan
							</a>
							<a href="https://api.whatsapp.com/send?phone=6281211124114&text=Halo...Saya%20telah%20mengunjungi%20website%20softwaresekolah.com%2C%20saya%20tertarik%20untuk%20mendapatkan%20penjelasan%20lebih%20lanjut%20dari%20anda..">
								<button className="mt-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium w-full hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
									Hubungi Kami
								</button>
							</a>
						</div>
					</div>
				)}
			</div>

			<style>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(-10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fadeIn {
					animation: fadeIn 0.3s ease-out;
				}
			`}</style>
		</header>
	);
}