import React, { useState, useEffect, useRef } from "react";

const ReadyStock = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [visibleUnits, setVisibleUnits] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  const readyStockUnits = [
    {
      type: "Type 40",
      unit: "Unit A1",
      features: [
        "2 Kamar Tidur",
        "1 Kamar Mandi",
        "Ruang Tamu",
        "Dapur",
        "Carport",
      ],
      status: "Ready Stock",
      image: "/Ready 1.jpg",
    },
    {
      type: "Type 40",
      unit: "Unit A2",
      features: [
        "2 Kamar Tidur",
        "1 Kamar Mandi",
        "Ruang Tamu",
        "Dapur",
        "Carport",
      ],
      status: "Ready Stock",
      image: "/Ready 2.jpg",
    },
    {
      type: "Type 40",
      unit: "Unit A3",
      features: [
        "2 Kamar Tidur",
        "1 Kamar Mandi",
        "Ruang Tamu",
        "Dapur",
        "Carport",
      ],
      status: "Ready Stock",
      image: "/Ready 1.jpg",
    },
    {
      type: "Type 40",
      unit: "Unit A4",
      features: [
        "2 Kamar Tidur",
        "1 Kamar Mandi",
        "Ruang Tamu",
        "Dapur",
        "Carport",
      ],
      status: "Ready Stock",
      image: "/Ready 2.jpg",
    },
  ];

  const galleryImages = [
    "/Gate.jpg",
    "/Jalan.jpg",
    "/Lapangan.jpg",
    "/Masjid.jpg",
    "/Ready 1.jpg",
    "/Ready 2.jpg",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPosition =
          window.scrollY - (sectionRef.current.offsetTop - window.innerHeight);
        setScrollY(scrollPosition);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const units = entry.target.querySelectorAll(".unit-card");
            units.forEach((unit, index) => {
              setTimeout(() => {
                setVisibleUnits((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const whatsappNumber = "6281220353502";
  const getWhatsappLink = () => {
    const message = encodeURIComponent(
      "Halo, saya tertarik dengan unit Ready Stock di Golden Palm Hills. Mohon info lebih lanjut."
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-4 shadow-lg animate-wiggle">
            🔥 UNIT TERBATAS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Ready Stock</span>
            <span className="gold-text"> Siap Huni</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 animate-scale-x"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unit terpilih yang siap untuk ditempati segera. Langsung akad,
            langsung huni!
          </p>
        </div>

        {/* Ready Stock Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {readyStockUnits.map((unit, index) => (
            <div
              key={index}
              className={`unit-card group bg-white border-2 border-yellow-200 rounded-2xl overflow-hidden hover:border-yellow-400 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-300/30 ${
                visibleUnits.includes(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{
                transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={unit.image}
                  alt={unit.unit}
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700"
                />
                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg animate-bounce-subtle">
                  ✓ {unit.status}
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                    {unit.type}
                  </h3>
                  <span className="text-yellow-600 font-semibold text-sm bg-yellow-50 px-3 py-1 rounded-full">
                    {unit.unit}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {unit.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <svg
                        className="w-4 h-4 text-yellow-600 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={getWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 rounded-lg text-center hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Section with Parallax */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up animation-delay-600">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Galeri <span className="gold-text">Proyek</span>
            </h3>
            <p className="text-gray-600">
              Lihat foto-foto terbaru proyek Golden Palm Hills
            </p>
          </div>

          {/* Main Gallery Carousel */}
          <div
            className="relative rounded-2xl overflow-hidden bg-white border-2 border-yellow-300 shadow-xl transform hover:scale-[1.02] transition-transform duration-500"
            style={{
              transform: `translateY(${Math.sin(scrollY * 0.001) * 10}px)`,
            }}
          >
            {/* Main Image */}
            <div className="relative h-96 md:h-[500px] overflow-hidden">
              <div className="relative w-full h-full">
                {galleryImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      index === currentImage
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-yellow-400 text-gray-900 hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border-2 border-yellow-300 transform hover:scale-110 hover:-translate-x-1"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-yellow-400 text-gray-900 hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border-2 border-yellow-300 transform hover:scale-110 hover:translate-x-1"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-300 backdrop-blur-sm">
                {currentImage + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="bg-orange-50 p-4">
              <div className="flex gap-3 overflow-x-auto">
                {galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-500 transform ${
                      currentImage === index
                        ? "border-yellow-400 scale-110 shadow-lg rotate-0"
                        : "border-yellow-200 opacity-60 hover:opacity-100 hover:scale-105 hover:rotate-3"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-1000">
          <div className="inline-block bg-white border-2 border-yellow-400 rounded-2xl p-8 md:p-12 shadow-xl shadow-yellow-300/30 max-w-3xl transform hover:scale-105 transition-transform duration-500">
            <div className="mb-6">
              <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-lg mb-4 shadow-lg animate-wiggle">
                🎉 PROMO TERBATAS!
              </div>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Hanya 2 Juta All In
            </h3>
            <h4 className="text-2xl md:text-3xl font-bold gold-text mb-6">
              Langsung Akad!
            </h4>
            <p className="text-xl text-gray-700 mb-8">
              Kesempatan emas untuk memiliki rumah impian dengan proses mudah
              dan cepat
            </p>
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 text-xl transform hover:scale-105 transition-transform duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ambil Promo Sekarang
            </a>
            <p className="text-sm text-gray-500 mt-4">
              *Syarat & ketentuan berlaku
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-3deg);
          }
          75% {
            transform: rotate(3deg);
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
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

        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        .animate-scale-x {
          animation: scale-x 1s ease-out forwards;
          transform-origin: left;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ReadyStock;
