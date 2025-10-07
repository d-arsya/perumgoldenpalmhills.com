import React, { useState, useEffect } from "react";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "6281220353502";
  const whatsappMessage = encodeURIComponent(
    "Halo, saya tertarik dengan Golden Palm Hills. Mohon info lebih lanjut."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
        <img
          src="/Gerbang Depan.jpg"
          alt="Golden Palm Hills"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-24 h-24 flex items-center justify-center">
                {/* <span className="text-black font-bold text-xl">GP</span> */}
                <img src="/logo-gph.png" alt="" />
              </div>
              <div>
                <h1 className="text-xl font-bold gold-text">
                  Golden Palm Hills
                </h1>
                <p className="text-xs text-gray-400">
                  by PT Aulia Cahya Anugerah Abadi
                </p>
              </div>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center space-x-2 md:text-md text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Hubungi Kami</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Promo Badge */}
          <div className="inline-block animate-bounce md:mt-0 mt-24">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-bold text-lg shadow-2xl md:text-md text-xs">
              🔥 PROMO SPESIAL - HANYA 2 JUTA ALL IN LANGSUNG AKAD!
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-white">CLUSTER MODERN</span>
            <br />
            <span className="gold-text">KELUARGA MUDA</span>
            <br />
            <span className="text-white">INDONESIA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Wujudkan impian memiliki rumah idaman dengan lokasi strategis,
            fasilitas lengkap, dan nilai investasi tinggi
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full sm:w-auto text-lg"
            >
              Ambil Promo Sekarang
            </a>
            <a
              href="#house-types"
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 w-full sm:w-auto text-lg"
            >
              Lihat Tipe Rumah
            </a>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {[
              { icon: "🛣️", text: "Jalan Lebar 10 Meter" },
              { icon: "📈", text: "Investasi Tinggi" },
              { icon: "⚽", text: "Fasilitas Olahraga" },
              { icon: "🕌", text: "Fasilitas Ibadah" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-4 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="text-4xl mb-2">{feature.icon}</div>
                <p className="text-sm font-medium text-gray-300">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
