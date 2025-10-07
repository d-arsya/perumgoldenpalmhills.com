import { Download, Facebook, Instagram, Youtube } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <img src="/logo.png" alt="" />
              </div>
              <div>
                <h3 className="font-bold text-lg">MA Tahfizh Nurul Iman</h3>
                <p className="text-sm text-gray-400">Jaya dengan Al-Qur'an</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Lembaga pendidikan Islam yang berfokus pada penghafalan Al-Qur'an
              dengan sanad.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Menu Cepat</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="/#home"
                  className="hover:text-pink-400 transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/tentang"
                  className="hover:text-pink-400 transition-colors"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href="/#program"
                  className="hover:text-pink-400 transition-colors"
                >
                  Program
                </a>
              </li>
              <li>
                <a
                  href="/#prestasi"
                  className="hover:text-pink-400 transition-colors"
                >
                  Prestasi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Informasi</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="/fasilitas"
                  className="hover:text-pink-400 transition-colors"
                >
                  Fasilitas
                </a>
              </li>
              <li>
                <a
                  href="/ekstrakurikuler"
                  className="hover:text-pink-400 transition-colors"
                >
                  Ekstrakurikuler
                </a>
              </li>
              <li>
                <a
                  href="/kegiatan"
                  className="hover:text-pink-400 transition-colors"
                >
                  Kegiatan
                </a>
              </li>
              <li>
                <a
                  href="/pendaftaran"
                  className="hover:text-pink-400 transition-colors"
                >
                  Pendaftaran
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/pptq.nurul.iman.2025"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/pptq.nurul.iman/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCoyBxqpqk0Hn1gEs0RMBreA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="/Brosur PPTQ Nurul Iman.pdf"
                download
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-blue-500 px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
              >
                <Download size={16} />
                <span>Download Brosur</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 MA Tahfizh Nurul Iman. All rights reserved.</p>
          <p className="mt-2">Yayasan Al Kahfi Hidayatullah Surakarta</p>
        </div>
      </div>
    </footer>
  );
}
