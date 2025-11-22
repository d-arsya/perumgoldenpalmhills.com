import React, { useState, useEffect } from "react";

const HouseTypes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState("next");

  const houseTypes = [
    {
      type: "Type 70",
      title: "Rumah Keluarga Premium",
      features: [
        "3 Kamar Tidur",
        "2 Kamar Mandi",
        "Balkon Luas",
        "Backyard Private",
        "Ruang Tamu Luas",
        "Dapur Modern",
        "Carport 2 Mobil",
      ],
      description:
        "Hunian luas dengan desain modern untuk kenyamanan dan gaya hidup keluarga yang dinamis. Dilengkapi balkon dan backyard untuk relaksasi.",
      luas: {
        tanah: "90 m²",
        bangunan: "70 m²",
      },
      highlight: "Best for Family",
      image: "/Type 70.jpg",
    },
    {
      type: "Type 40 Mezzanine",
      title: "Modern Living Solution",
      features: [
        "2 Kamar Tidur",
        "1 Kamar Tidur Mezzanine",
        "1 Kamar Mandi",
        "Ruang Tamu",
        "Dapur",
        "Carport",
      ],
      description:
        "Desain inovatif dengan konsep mezzanine yang memaksimalkan ruang. Pilihan sempurna bagi yang mengutamakan estetika dan fungsionalitas.",
      luas: {
        tanah: "60 m²",
        bangunan: "40 m²",
      },
      highlight: "Smart Design",
      image: "/Type 40 Mezzanine.jpg",
    },
    {
      type: "Type 40",
      title: "Starter Home Perfect",
      features: [
        "2 Kamar Tidur",
        "1 Kamar Mandi",
        "Ruang Tamu",
        "Dapur",
        "Carport",
        "Taman Depan",
      ],
      description:
        "Rumah ideal untuk pasangan muda memulai kehidupan baru dengan desain fungsional dan efisien. Cocok untuk keluarga kecil.",
      luas: {
        tanah: "60 m²",
        bangunan: "40 m²",
      },
      highlight: "Best Value",
      image: "/Type 40.jpg",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, isAutoPlaying]);

  const nextSlide = () => {
    setDirection("next");
    setCurrentSlide((prev) => (prev + 1) % houseTypes.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentSlide(
      (prev) => (prev - 1 + houseTypes.length) % houseTypes.length
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const whatsappNumber = "6281220353502";
  const getWhatsappLink = (type) => {
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan ${type} di Golden Palm Hills. Mohon info lebih lanjut.`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section
      id="house-types"
      className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Pilih</span>
            <span className="gold-text"> Tipe Anda</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 animate-scale-x"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Berbagai pilihan tipe rumah yang disesuaikan dengan kebutuhan dan
            budget keluarga Anda
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slide */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {houseTypes.map((house, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white border-2 border-yellow-300 rounded-3xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image Side */}
                      <div className="relative h-96 md:h-auto overflow-hidden group">
                        <img
                          src={house.image}
                          alt={house.type}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Highlight Badge */}
                        <div className="absolute top-6 left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg animate-slide-in-left">
                          {house.highlight}
                        </div>
                        {/* Overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Content Side */}
                      <div className="p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-white to-orange-50">
                        {/* Type Badge */}
                        <div>
                          <div className="inline-block bg-yellow-100 border-2 border-yellow-400 text-yellow-700 px-4 py-2 rounded-lg text-sm font-semibold mb-4 animate-slide-in-right">
                            {house.type}
                          </div>

                          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                            {house.title}
                          </h3>

                          <p className="text-gray-600 text-lg mb-6 leading-relaxed animate-fade-in animation-delay-200">
                            {house.description}
                          </p>

                          {/* Luas */}
                          <div className="flex gap-6 mb-6">
                            <div className="flex items-center gap-2 animate-slide-in-left animation-delay-300">
                              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center border border-yellow-300 transform hover:rotate-12 transition-transform duration-300">
                                <span className="text-yellow-600">📐</span>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">
                                  Luas Tanah
                                </p>
                                <p className="text-gray-900 font-bold">
                                  {house.luas.tanah}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 animate-slide-in-left animation-delay-400">
                              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center border border-yellow-300 transform hover:rotate-12 transition-transform duration-300">
                                <span className="text-yellow-600">🏠</span>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">
                                  Luas Bangunan
                                </p>
                                <p className="text-gray-900 font-bold">
                                  {house.luas.bangunan}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="mb-8">
                            <h4 className="text-yellow-600 font-semibold mb-3">
                              Fasilitas:
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                              {house.features.map((feature, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 animate-fade-in"
                                  style={{
                                    animationDelay: `${0.5 + idx * 0.1}s`,
                                  }}
                                >
                                  <svg
                                    className="w-5 h-5 text-yellow-600 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="text-gray-700 text-sm">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <a
                          href={getWhatsappLink(house.type)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-gold w-full text-center text-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-transform duration-300 animate-fade-in animation-delay-1000"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Tanya Detail {house.type}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-yellow-400 text-gray-900 hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border-2 border-yellow-300 z-10 transform hover:scale-110"
            aria-label="Previous slide"
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
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-yellow-400 text-gray-900 hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border-2 border-yellow-300 z-10 transform hover:scale-110"
            aria-label="Next slide"
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

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {houseTypes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full transform hover:scale-110 ${
                  currentSlide === index
                    ? "w-12 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {houseTypes.map((house, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                currentSlide === index
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-yellow-300 hover:border-yellow-400 hover:shadow-md"
              }`}
            >
              {house.type}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-scale-x {
          animation: scale-x 1s ease-out forwards;
          transform-origin: left;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default HouseTypes;
