import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Download,
  ChevronRight,
  Star,
  Award,
  Users,
  BookOpen,
  Home,
  GraduationCap,
  Heart,
  PlayCircle,
  ChevronLeft,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

// Komponen Header dengan Navbar

// Hero Section
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideInLeft">
            <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
              🌟 Pendaftaran Santri Baru 2026/2027
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Pesantren Tahfizh Putri
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Nurul Iman Solo
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lembaga pendidikan Islam yang berfokus pada penghafalan Al-Qur'an
              30 juz dengan sanad, serta pengembangan karakter muslimah yang
              sholihah dan mandiri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://bit.ly/FORMULIRSPMBNUIM2026"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <span>Daftar MA</span>
                <ChevronRight size={20} />
              </a>
              <a
                href="https://bit.ly/ppdbmtsnuruliman2026-2027"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <span>Daftar MTS</span>
                <ChevronRight size={20} />
              </a>
            </div>
            <a
              href="/Brosur PPTQ Nurul Iman.pdf"
              download
              className="inline-flex items-center space-x-2 text-pink-500 hover:text-pink-600 font-medium"
            >
              <Download size={20} />
              <span>Download Brosur</span>
            </a>
          </div>
          <div className="relative animate-slideInRight">
            <div className="aspect-square bg-gradient-to-br from-pink-200 to-blue-200 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/hero.webp"
                alt="Gedung MA Tahfizh Nurul Iman"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-pink-500 to-blue-500 p-3 rounded-full">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-800">Akreditasi B</p>
                  <p className="text-sm text-gray-600">Terakreditasi 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    { icon: Users, value: "189+", label: "Santriwati Aktif" },
    { icon: GraduationCap, value: "35+", label: "Ustadz & Ustadzah" },
    { icon: Award, value: "11+", label: "Tahun Berdiri" },
    { icon: BookOpen, value: "30 Juz", label: "Target Hafalan" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center space-y-3 p-6 rounded-2xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-blue-50 transition-all"
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full">
                <stat.icon className="text-pink-500" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Keunggulan Section
const KeunggulanSection = () => {
  const keunggulan = [
    {
      icon: Heart,
      title: "Pendidikan Berbasis Tauhid",
      desc: "System boarding school dengan lingkungan islami dan kondusif",
    },
    {
      icon: BookOpen,
      title: "Kurikulum Integral",
      desc: "Perpaduan Kemenag, Tahfizh & Diniyah Pesantren",
    },
    {
      icon: Home,
      title: "Lingkungan Kondusif",
      desc: "Tempat yang tenang, alami, dan mendukung pembelajaran",
    },
    {
      icon: Award,
      title: "Berijazah Formal",
      desc: "Raport madrasah, raport pondok, sertifikat tahfizh 20-30 juz",
    },
    {
      icon: GraduationCap,
      title: "Jenjang Lanjutan",
      desc: "Dapat melanjutkan ke PTN/PTS/Ma'had Aly",
    },
    {
      icon: Star,
      title: "Pengembangan Bakat",
      desc: "Melalui perlombaan & kegiatan ekstrakurikuler",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-pink-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Keunggulan Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MA Tahfizh Nurul Iman memberikan pendidikan Islam terbaik dengan
            fasilitas dan sistem pembelajaran yang unggul
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keunggulan.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-pink-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <item.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Program Section
const ProgramSection = () => {
  const programs = [
    {
      title: "Tahfizh Al-Qur'an",
      desc: "Program hafalan 20-30 juz dengan sanad dan metode tahfizh yang teruji",
      features: [
        "Halaqoh Ziyadah",
        "Halaqoh Muroja'ah",
        "Tasmi' Bulanan",
        "Juziyah & MHQ",
      ],
    },
    {
      title: "Pendidikan Formal",
      desc: "Kurikulum Kemenag yang terintegrasi dengan pendidikan pesantren",
      features: [
        "Mata Pelajaran Umum",
        "Mata Pelajaran Agama",
        "Bahasa Arab & Inggris",
        "Sains & Matematika",
      ],
    },
    {
      title: "Boarding School",
      desc: "Asrama dengan lingkungan islami dan pembinaan karakter 24 jam",
      features: [
        "Asrama 3 & 2 Lantai",
        "Musyrifah Berpengalaman",
        "Kegiatan Harian Terstruktur",
        "Pembinaan Akhlak",
      ],
    },
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Program Unggulan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Program pendidikan holistik yang mengintegrasikan tahfizh, akademik,
            dan pembinaan karakter
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-pink-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-6">{program.desc}</p>
              <ul className="space-y-3">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <ChevronRight
                      className="text-pink-500 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Video Profile Section
const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Profil Madrasah
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat lebih dekat kehidupan santri dan fasilitas di MA Tahfizh Nurul
            Iman
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/qW4KXL7ejo4"
              title="Profile MA Tahfizh Nurul Iman"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

// Prestasi Section
const PrestasiSection = () => {
  const prestasi = [
    {
      juara: "Juara 1",
      lomba: "KSM Sosial Sains Beregu",
      nama: "Tim MA Tahfizh",
      tingkat: "Kabupaten",
    },
    {
      juara: "Juara 2",
      lomba: "KSM Matematika Terintegrasi",
      nama: "Lia Rachmawati",
      tingkat: "Kabupaten",
    },
    {
      juara: "Medali Emas",
      lomba: "Olimpiade Bahasa Arab Nasional",
      nama: "Hamida Nur Afandi",
      tingkat: "Nasional",
    },
    {
      juara: "Juara 1",
      lomba: "Olimpiade Bahasa Arab 7",
      nama: "Anisa Kusumaning Astuti",
      tingkat: "Kabupaten",
    },
    {
      juara: "Medali Emas",
      lomba: "Hi-Fest Bahasa Inggris",
      nama: "Nafi'ah Hanaan Asyifa",
      tingkat: "Jawa",
    },
    {
      juara: "Juara 2",
      lomba: "KSM Kimia Terintegrasi",
      nama: "Syifa Naila Alfirdaus",
      tingkat: "Kabupaten",
    },
  ];

  return (
    <section id="prestasi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Prestasi Gemilang
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Santriwati kami telah menorehkan berbagai prestasi di tingkat
            kabupaten, provinsi, hingga nasional
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prestasi.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-pink-50 to-blue-50 p-6 rounded-xl border-l-4 border-pink-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-start space-x-3 mb-3">
                <Star className="text-yellow-500 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800">{item.juara}</h4>
                  <p className="text-sm text-pink-600 font-semibold">
                    {item.tingkat}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 font-medium mb-2">{item.lomba}</p>
              <p className="text-sm text-gray-600">{item.nama}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonial Section
const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "Fatimah Az-Zahra",
      year: "Alumni 2023",
      text: "Alhamdulillah di Nurul Iman saya bisa menghafal 30 juz dengan lancar. Metode tahfizh yang diajarkan sangat efektif dan para ustadzah sangat sabar dalam membimbing.",
      image:
        "https://ui-avatars.com/api/?name=Fatimah+Az-Zahra&background=ec4899&color=fff",
    },
    {
      name: "Siti Nurhaliza",
      year: "Alumni 2024",
      text: "Lingkungan pesantren yang islami membuat saya nyaman dalam belajar. Fasilitas lengkap dan kegiatan yang variatif membuat tidak bosan.",
      image:
        "https://ui-avatars.com/api/?name=Siti+Nurhaliza&background=3b82f6&color=fff",
    },
    {
      name: "Aisyah Rahmawati",
      year: "Alumni 2023",
      text: "Saya sangat bersyukur bisa menimba ilmu di Nurul Iman. Selain hafalan Al-Qur'an, saya juga mendapat bekal akhlak yang baik untuk kehidupan.",
      image:
        "https://ui-avatars.com/api/?name=Aisyah+Rahmawati&background=ec4899&color=fff",
    },
    {
      name: "Khadijah Aminah",
      year: "Alumni 2024",
      text: "Program ekstrakurikuler di sini sangat bagus. Saya bisa mengembangkan bakat di bidang panahan dan bahasa Arab sambil tetap fokus tahfizh.",
      image:
        "https://ui-avatars.com/api/?name=Khadijah+Aminah&background=3b82f6&color=fff",
    },
    {
      name: "Maryam Zakiyah",
      year: "Alumni 2023",
      text: "Para musyrifah di asrama sangat perhatian dan seperti ibu sendiri. Mereka selalu memotivasi kami untuk terus semangat menghafal dan belajar.",
      image:
        "https://ui-avatars.com/api/?name=Maryam+Zakiyah&background=ec4899&color=fff",
    },
    {
      name: "Zahra Nabila",
      year: "Alumni 2024",
      text: "Jadwal kegiatan di sini terstruktur dengan baik. Saya jadi lebih disiplin dan bisa mengatur waktu dengan efektif antara tahfizh dan akademik.",
      image:
        "https://ui-avatars.com/api/?name=Zahra+Nabila&background=3b82f6&color=fff",
    },
  ];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimoni"
      className="py-20 bg-gradient-to-br from-pink-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Testimoni Alumni
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengarkan pengalaman dari alumni yang telah merasakan pendidikan di
            MA Tahfizh Nurul Iman
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-24 h-24 rounded-full border-4 border-pink-500"
              />
              <div className="flex-1 text-center md:text-left">
                <p className="text-gray-700 text-lg italic mb-6">
                  "{testimonials[current].text}"
                </p>
                <h4 className="font-bold text-gray-800 text-xl">
                  {testimonials[current].name}
                </h4>
                <p className="text-pink-500 font-medium">
                  {testimonials[current].year}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 bg-pink-100 hover:bg-pink-200 rounded-full transition-colors"
              >
                <ChevronLeft className="text-pink-500" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      current === idx ? "bg-pink-500 w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 bg-pink-100 hover:bg-pink-200 rounded-full transition-colors"
              >
                <ChevronRight className="text-pink-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section
      id="daftar"
      className="py-20 bg-gradient-to-r from-pink-500 to-blue-500 text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Daftarkan Putri Anda Sekarang!
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Pendaftaran Santri Baru Tahun Ajaran 2025/2026 telah dibuka. Raih
          kesempatan untuk menjadi bagian dari keluarga besar Nurul Iman.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://bit.ly/FORMULIRSPMBNUIM2026"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-pink-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center justify-center space-x-2"
          >
            <span>Daftar Jenjang MA</span>
            <ChevronRight size={24} />
          </a>
          <a
            href="https://bit.ly/ppdbmtsnuruliman2026-2027"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center justify-center space-x-2"
          >
            <span>Daftar Jenjang MTS</span>
            <ChevronRight size={24} />
          </a>
        </div>
        <a
          href="https://wa.me/6285848347795"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-white hover:text-pink-100 font-medium"
        >
          <Phone size={20} />
          <span>Atau hubungi kami via WhatsApp</span>
        </a>
      </div>
    </section>
  );
};

// Contact & Map Section
const ContactSection = () => {
  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Hubungi Kami
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin
                  className="text-pink-500 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Alamat</h4>
                  <p className="text-gray-600">
                    Jl. Lingkar Utara Rejosari RT 07/RW 14 Plesungan,
                    Gondangrejo, Karanganyar, Jawa Tengah
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-pink-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/6285848347795"
                    className="text-gray-600 hover:text-pink-500"
                  >
                    +62 858-4834-7795
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-pink-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                  <a
                    href="mailto:nurulimantahfizh@gmail.com"
                    className="text-gray-600 hover:text-pink-500"
                  >
                    nurulimantahfizh@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0!2d110.9!3d-7.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzYnMDAuMCJTIDExMMKwNTQnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi MA Tahfizh Nurul Iman"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer

// WhatsApp Floating Button

// Main App Component
const App = () => {
  return (
    <div className="font-sans">
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <HeroSection />
      <StatsSection />
      <KeunggulanSection />
      <ProgramSection />
      <VideoSection />
      <PrestasiSection />
      <TestimonialSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default App;
