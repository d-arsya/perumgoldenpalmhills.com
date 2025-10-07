import React from "react";

const Features = () => {
  const features = [
    {
      icon: "🏘️",
      title: "Lokasi Strategis",
      description:
        "Berada di kawasan berkembang Cikarang Selatan dengan akses mudah ke berbagai fasilitas umum dan pusat bisnis",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: "🛣️",
      title: "Infrastruktur Premium",
      description:
        "Jalan cluster lebar 10 meter dengan paving block berkualitas, sistem drainase modern, dan penerangan jalan lengkap",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "💰",
      title: "Investasi Menguntungkan",
      description:
        "Nilai properti terus meningkat seiring perkembangan kawasan industri dan pemukiman di sekitar Cikarang",
      color: "from-yellow-400 to-amber-600",
    },
    {
      icon: "🏋️",
      title: "Fasilitas Olahraga",
      description:
        "Dilengkapi area jogging track, lapangan basket, dan taman bermain untuk gaya hidup sehat keluarga",
      color: "from-amber-400 to-orange-600",
    },
    {
      icon: "🕌",
      title: "Fasilitas Ibadah",
      description:
        "Musholla terintegrasi dalam cluster untuk kemudahan beribadah dan aktivitas keagamaan bersama",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      icon: "🌳",
      title: "Lingkungan Asri",
      description:
        "Taman hijau dan area terbuka yang dirancang untuk kenyamanan dan kesejukan lingkungan hunian",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: "🔒",
      title: "Keamanan 24 Jam",
      description:
        "Sistem keamanan berlapis dengan CCTV, pos satpam, dan akses gerbang otomatis untuk ketenangan keluarga",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "💧",
      title: "Bebas Banjir",
      description:
        "Alhamdulillah lokasi aman dari banjir dengan sistem drainase terintegrasi dan elevasi tanah optimal",
      color: "from-cyan-400 to-blue-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Keunggulan</span>
            <span className="gold-text"> Golden Palm Hills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Rumah komersil dengan harga grosir yang menawarkan berbagai
            keunggulan untuk kenyamanan dan investasi masa depan Anda
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-zinc-800/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20"
            >
              {/* Icon with Gradient Background */}
              <div
                className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-4xl transform group-hover:rotate-12 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Rumah Komersil Harga Grosir
            </h3>
            <p className="text-xl text-yellow-400 font-semibold">
              ✅ Alhamdulillah Aman Dari Banjir
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
