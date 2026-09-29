// src/components/WhatsAppButton.jsx
import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "../data";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/40 transition hover:scale-110"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
