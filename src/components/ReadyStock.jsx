import React, { useState } from "react";

const ReadyStock = () => {
  const [currentImage, setCurrentImage] = useState(0);

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
  ];

  const galleryImages = [
    "/Gate.jpg",
    "/Jalan.jpg",
    "/Lapangan.jpg",
    "/Masjid.jpg",
    "/Ready 1.jpg",
    "/Ready 2.jpg",
  ];

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
    <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-4 animate-pulse">
            🔥 UNIT TERBATAS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Ready Stock</span>
            <span className="gold-text"> Siap Huni</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unit terpilih yang siap untuk ditempati segera. Langsung akad,
            langsung huni!
          </p>
        </div>

        {/* Ready Stock Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {readyStockUnits.map((unit, index) => (
            <div
              key={index}
              className="group bg-zinc-800 border-2 border-yellow-400/30 rounded-2xl overflow-hidden hover:border-yellow-400 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={unit.image}
                  alt={unit.unit}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg animate-pulse">
                  ✓ {unit.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{unit.type}</h3>
                  <span className="text-yellow-400 font-semibold text-sm">
                    {unit.unit}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {unit.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <svg
                        className="w-4 h-4 text-yellow-400 flex-shrink-0"
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
                  className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 rounded-lg text-center hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              Galeri <span className="gold-text">Proyek</span>
            </h3>
            <p className="text-gray-400">
              Lihat foto-foto terbaru proyek Golden Palm Hills
            </p>
          </div>

          {/* Main Gallery Carousel */}
          <div className="relative rounded-2xl overflow-hidden bg-zinc-800 border border-yellow-400/30">
            {/* Main Image */}
            <div className="relative h-96 md:h-[500px]">
              <img
                src={galleryImages[currentImage]}
                alt={`Gallery ${currentImage + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-yellow-400 text-white hover:text-black w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
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
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-yellow-400 text-white hover:text-black w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
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
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {currentImage + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="bg-zinc-900 p-4">
              <div className="flex gap-3 overflow-x-auto">
                {galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      currentImage === index
                        ? "border-yellow-400 scale-110"
                        : "border-transparent opacity-60 hover:opacity-100"
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
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-zinc-800 to-zinc-900 border-2 border-yellow-400 rounded-2xl p-8 md:p-12 shadow-2xl shadow-yellow-400/20 max-w-3xl">
            <div className="mb-6">
              <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-lg mb-4 animate-bounce">
                🎉 PROMO TERBATAS!
              </div>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Hanya 2 Juta All In
            </h3>
            <h4 className="text-2xl md:text-3xl font-bold gold-text mb-6">
              Langsung Akad!
            </h4>
            <p className="text-xl text-gray-300 mb-8">
              Kesempatan emas untuk memiliki rumah impian dengan proses mudah
              dan cepat
            </p>
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 text-xl"
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
    </section>
  );
};

export default ReadyStock;
