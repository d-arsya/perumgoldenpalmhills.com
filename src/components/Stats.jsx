import React, { useState, useEffect, useRef } from "react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    totalUnits: 0,
    sold: 0,
    marketed: 0,
    ready: 0,
  });

  const sectionRef = useRef(null);

  const stats = [
    {
      icon: "🏘️",
      label: "Jumlah Unit",
      value: 300,
      suffix: "+",
      color: "from-yellow-400 to-yellow-600",
      description: "Total unit yang tersedia",
    },
    {
      icon: "✅",
      label: "Unit Terjual",
      value: 100,
      suffix: "+",
      color: "from-green-400 to-emerald-600",
      description: "Keluarga yang sudah percaya",
    },
    {
      icon: "📢",
      label: "Unit Dipasarkan",
      value: 190,
      suffix: "+",
      color: "from-blue-400 to-blue-600",
      description: "Siap untuk dimiliki",
    },
    {
      icon: "🎯",
      label: "Ready Stock",
      value: 11,
      suffix: "",
      color: "from-orange-400 to-red-600",
      description: "Unit siap huni sekarang",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Lebih rendah untuk mobile
        rootMargin: "0px 0px -50px 0px", // Trigger lebih awal
      }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers = [];

    stats.forEach((stat, index) => {
      let currentCount = 0;
      const increment = stat.value / steps;
      const key = ["totalUnits", "sold", "marketed", "ready"][index];

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.value) {
          currentCount = stat.value;
          clearInterval(timer);
        }
        setCounts((prev) => ({
          ...prev,
          [key]: Math.floor(currentCount),
        }));
      }, interval);

      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-zinc-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Bukti</span>
            <span className="gold-text"> Kepercayaan</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ratusan keluarga Indonesia telah mempercayakan impian rumah mereka
            kepada kami
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const countKey = ["totalUnits", "sold", "marketed", "ready"][index];
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-zinc-800 to-zinc-900 border border-yellow-400/30 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20"
              >
                {/* Icon with Gradient */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 text-3xl mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                >
                  {stat.icon}
                </div>

                {/* Count */}
                <div className="text-center mb-4">
                  <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">
                    {counts[countKey]}
                    <span className="text-yellow-400">{stat.suffix}</span>
                  </h3>
                  <p className="text-xl font-semibold text-yellow-400 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-zinc-800/50 border border-yellow-400/20 rounded-xl p-6 text-center hover:border-yellow-400 transition-all duration-300">
            <div className="text-4xl mb-3">🏆</div>
            <h4 className="text-white font-bold mb-2">Developer Terpercaya</h4>
            <p className="text-gray-400 text-sm">
              PT Aulia Cahya Anugerah Abadi
            </p>
          </div>
          <div className="bg-zinc-800/50 border border-yellow-400/20 rounded-xl p-6 text-center hover:border-yellow-400 transition-all duration-300">
            <div className="text-4xl mb-3">📜</div>
            <h4 className="text-white font-bold mb-2">Legalitas Lengkap</h4>
            <p className="text-gray-400 text-sm">SHM & IMB tersedia</p>
          </div>
          <div className="bg-zinc-800/50 border border-yellow-400/20 rounded-xl p-6 text-center hover:border-yellow-400 transition-all duration-300">
            <div className="text-4xl mb-3">💎</div>
            <h4 className="text-white font-bold mb-2">Kualitas Premium</h4>
            <p className="text-gray-400 text-sm">
              Material & konstruksi terbaik
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-2 border-yellow-400 rounded-2xl p-8 shadow-2xl shadow-yellow-400/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bergabunglah dengan Ratusan Keluarga Bahagia!
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Jangan lewatkan kesempatan emas memiliki rumah impian
            </p>
            <a
              href="https://wa.me/6281220353502?text=Halo,%20saya%20tertarik%20dengan%20Golden%20Palm%20Hills.%20Mohon%20info%20lebih%20lanjut."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi Gratis Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
