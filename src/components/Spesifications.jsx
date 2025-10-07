import React from "react";

const Specifications = () => {
  const specifications = [
    {
      icon: "🏗️",
      label: "Pondasi",
      value: "Cakar ayam, sloop beton bertulang",
      description: "Fondasi kuat dan kokoh untuk bangunan yang tahan lama",
    },
    {
      icon: "🧱",
      label: "Dinding",
      value: "Bata merah / dobel dinding",
      description: "Material premium untuk insulasi dan kekuatan optimal",
    },
    {
      icon: "✨",
      label: "Lantai",
      value: "Granit 60 x 60",
      description: "Lantai granit mewah dan mudah perawatan",
    },
    {
      icon: "🏠",
      label: "Atap",
      value: "Rangka baja ringan / genteng morando",
      description: "Rangka modern anti karat dengan genteng berkualitas",
    },
    {
      icon: "📐",
      label: "Plafon",
      value: "Rangka hollow / gypsum",
      description: "Plafon rapi dengan finishing halus",
    },
    {
      icon: "🚪",
      label: "Kusen",
      value: "Alumunium / panel",
      description: "Kusen modern anti rayap dan tahan lama",
    },
    {
      icon: "🚽",
      label: "Closet",
      value: "Duduk",
      description: "Toilet modern untuk kenyamanan keluarga",
    },
    {
      icon: "⚡",
      label: "Listrik",
      value: "1300 Watt",
      description: "Daya listrik cukup untuk kebutuhan rumah tangga",
    },
    {
      icon: "💧",
      label: "Air Bersih",
      value: "PAM",
      description: "Air bersih mengalir dari PAM berkualitas",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Spesifikasi</span>
            <span className="gold-text"> Bangunan</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dibangun dengan material berkualitas tinggi dan standar konstruksi
            modern untuk hunian yang nyaman dan tahan lama
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="group bg-zinc-800/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-6 hover:border-yellow-400 hover:bg-zinc-800/80 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-400/10"
              >
                {/* Icon */}
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    {spec.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-yellow-400 font-bold text-lg mb-1">
                      {spec.label}
                    </h3>
                    <p className="text-white font-semibold text-base">
                      {spec.value}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed pl-[72px]">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quality Assurance Badge */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-zinc-800 to-zinc-900 border-2 border-yellow-400 rounded-2xl p-8 shadow-2xl shadow-yellow-400/20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-3xl">
                  ✓
                </div>
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Kualitas Terjamin
                  </h3>
                  <p className="text-yellow-400 font-semibold">
                    Material Premium & Konstruksi Profesional
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="bg-zinc-700/50 px-6 py-3 rounded-lg">
                  <p className="text-sm text-gray-400">Garansi Struktur</p>
                  <p className="text-white font-bold">5 Tahun</p>
                </div>
                <div className="bg-zinc-700/50 px-6 py-3 rounded-lg">
                  <p className="text-sm text-gray-400">Sertifikat</p>
                  <p className="text-white font-bold">SHM & IMB</p>
                </div>
                <div className="bg-zinc-700/50 px-6 py-3 rounded-lg">
                  <p className="text-sm text-gray-400">Developer</p>
                  <p className="text-white font-bold">Terpercaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
