import React, { useEffect, useRef, useState } from "react";

const Features = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".feature-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
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

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float-delayed"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Keunggulan</span>
            <span className="gold-text"> Golden Palm Hills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 animate-scale-x"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rumah komersil dengan harga grosir yang menawarkan berbagai
            keunggulan untuk kenyamanan dan investasi masa depan Anda
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card group relative bg-white backdrop-blur-sm border-2 border-yellow-200 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-300/30 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transition: "all 0.6s ease-out",
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {/* Icon with Gradient Background */}
              <div
                className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-4xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg relative`}
              >
                <span className="relative z-10">{feature.icon}</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-800">
          <div className="inline-block bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Rumah Komersil Harga Grosir
            </h3>
            <p className="text-xl text-yellow-600 font-semibold animate-pulse">
              ✅ Alhamdulillah Aman Dari Banjir
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(20px) translateX(-10px);
          }
          66% {
            transform: translateY(-20px) translateX(10px);
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

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-scale-x {
          animation: scale-x 1s ease-out forwards;
          transform-origin: left;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Features;
