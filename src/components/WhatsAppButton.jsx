import { Phone } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6285848347795"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50 animate-bounce"
      aria-label="Chat WhatsApp"
    >
      <Phone size={28} />
    </a>
  );
}
