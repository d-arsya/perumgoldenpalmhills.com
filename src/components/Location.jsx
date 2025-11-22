import React, { useState } from "react";

const Location = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const contactNumbers = [
    { number: "6281220353502", label: "Marketing 1" },
    { number: "6282227002676", label: "Marketing 2" },
    { number: "6282227003531", label: "Marketing 3" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Halo, saya ${formData.name}.\nNo HP: ${formData.phone}\n\n${formData.message}`
    );
    window.open(`https://wa.me/6281220353502?text=${message}`, "_blank");
  };

  const nearbyPlaces = [
    { icon: "🏭", name: "Kawasan Industri Cikarang", distance: "5 km" },
    { icon: "🏥", name: "RS Mitra Keluarga", distance: "7 km" },
    { icon: "🏫", name: "Sekolah & Universitas", distance: "3 km" },
    { icon: "🛒", name: "Mall & Pusat Belanja", distance: "8 km" },
    { icon: "⛽", name: "SPBU", distance: "2 km" },
    { icon: "🍽️", name: "Restoran & Cafe", distance: "1 km" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Lokasi</span>
            <span className="gold-text"> Strategis</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Berada di lokasi premium dengan akses mudah ke berbagai fasilitas
            penting
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Map & Address */}
          <div>
            {/* Google Maps Placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-yellow-300 mb-6 shadow-lg">
              <div className="relative h-96">
                <iframe
                  title="Golden Palm Hills Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.6549486379913!2d107.09908177485606!3d-6.36263669362743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b046d0e97f1%3A0xb14e904ca5c0da46!2sNew%20Golden%20Palm%20Hills!5e1!3m2!1sid!2sid!4v1763831560153!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white border-2 border-yellow-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-md">
                  📍
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Alamat Lengkap
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Jl Raya Setu Serang, Sukadami
                    <br />
                    Cikarang Selatan, Bekasi
                    <br />
                    Jawa Barat, Indonesia
                  </p>
                </div>
              </div>

              {/* Nearby Places */}
              <div>
                <h4 className="text-yellow-600 font-semibold mb-4">
                  Dekat dengan:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {nearbyPlaces.map((place, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-orange-50 border border-yellow-200 rounded-lg p-3 hover:border-yellow-400 transition-colors"
                    >
                      <span className="text-2xl">{place.icon}</span>
                      <div>
                        <p className="text-gray-900 text-sm font-medium">
                          {place.name}
                        </p>
                        <p className="text-yellow-600 text-xs">
                          {place.distance}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form & Info */}
          <div>
            {/* Contact Numbers */}
            <div className="bg-white border-2 border-yellow-200 rounded-2xl p-6 mb-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hubungi Kami
              </h3>
              <div className="space-y-3">
                {contactNumbers.map((contact, index) => (
                  <a
                    key={index}
                    href={`https://wa.me/${contact.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-orange-50 hover:bg-orange-100 border border-yellow-200 hover:border-yellow-400 rounded-xl p-4 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-md">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">{contact.label}</p>
                        <p className="text-gray-900 font-semibold">
                          +{contact.number}
                        </p>
                      </div>
                    </div>
                    <svg
                      className="w-6 h-6 text-yellow-600 transform group-hover:translate-x-1 transition-transform"
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
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border-2 border-yellow-200 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kirim Pesan
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-orange-50 border-2 border-yellow-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-orange-50 border-2 border-yellow-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="08xx xxxx xxxx"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-orange-50 border-2 border-yellow-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                    placeholder="Saya tertarik dengan Golden Palm Hills..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-gold w-full flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Kirim via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
