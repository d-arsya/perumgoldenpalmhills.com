import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/tentang" },
    { name: "Program", href: "/#program" },
    { name: "Prestasi", href: "/#prestasi" },
    { name: "Testimoni", href: "/#testimoni" },
    { name: "Kontak", href: "/#kontak" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                MA Tahfizh Nurul Iman
              </h1>
              <p className="text-xs text-gray-600">Jaya dengan Al-Qur'an</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#daftar"
              className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Daftar Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-700 hover:text-pink-500"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#daftar"
              className="block mt-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-2 rounded-full text-center"
            >
              Daftar Sekarang
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
