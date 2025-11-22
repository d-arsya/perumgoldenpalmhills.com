import React, { useState, useEffect } from "react";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setScrollY(currentScrollY);
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
      </div>

      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
        <img
          src="/Gerbang Depan.jpg"
          alt="Golden Palm Hills"
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
      </div>

      {/* Floating Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-yellow-200"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-6 md:py-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 animate-fade-in-left">
              <div className="md:w-24 md:h-24 w-18 flex items-center justify-center">
                <img src="/logo-gph.png" alt="Golden Palm Hills Logo" />
              </div>
              <div>
                <h1 className="text-xl font-bold gold-text">
                  Golden Palm Hills
                </h1>
                <p className="text-xs text-gray-600">
                  by PT Aulia Cahya Anugerah Abadi
                </p>
              </div>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center space-x-2 md:text-md text-sm md:inline hidden animate-fade-in-right"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Promo Badge */}
          <div className="inline-block animate-bounce-slow md:mt-0 mt-24">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-2xl md:text-md text-xs animate-pulse-glow">
              🔥 PROMO SPESIAL - HANYA 2 JUTA ALL IN LANGSUNG AKAD!
            </div>
          </div>

          {/* Main Title with Stagger Animation */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            <span className="text-white inline-block animate-fade-in-up animation-delay-200">
              CLUSTER MODERN
            </span>
            <br />
            <span className="inline-block gold-text animate-fade-in-up animation-delay-400">
              KELUARGA MUDA
            </span>
            <br />
            <span className="text-white inline-block animate-fade-in-up animation-delay-600">
              INDONESIA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto animate-fade-in animation-delay-800">
            Wujudkan impian memiliki <span className="gold-text">rumah</span>{" "}
            idaman dengan lokasi <span className="gold-text">strategis</span>,
            fasilitas lengkap, dan nilai{" "}
            <span className="gold-text">investasi</span> tinggi
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up animation-delay-1000">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full sm:w-auto text-lg transform hover:scale-105 transition-transform duration-300"
            >
              Ambil Promo Sekarang
            </a>
            <a
              href="#house-types"
              className="bg-white border-2 border-yellow-500 text-yellow-600 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-50 transition-all duration-300 w-full sm:w-auto text-lg shadow-md transform hover:scale-105"
            >
              Lihat Tipe Rumah
            </a>
          </div>

          {/* Key Features with Stagger Animation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {[
              { icon: "🛣️", text: "Jalan Lebar 10 Meter", delay: "200" },
              { icon: "📈", text: "Investasi Tinggi", delay: "400" },
              { icon: "⚽", text: "Fasilitas Olahraga", delay: "600" },
              { icon: "🕌", text: "Fasilitas Ibadah", delay: "800" },
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm border-2 border-yellow-200 rounded-lg p-4 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-${feature.delay}`}
              >
                <div className="text-4xl mb-2 animate-bounce-subtle">
                  {feature.icon}
                </div>
                <p className="text-sm font-medium text-gray-800">
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
          className="w-6 h-6 text-yellow-600"
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

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          33% {
            transform: translateY(-30px) scale(1.1);
          }
          66% {
            transform: translateY(30px) scale(0.9);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(251, 146, 60, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(251, 146, 60, 0.8);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
