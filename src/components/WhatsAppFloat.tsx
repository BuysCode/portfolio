import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5521978207000?text=Ol%C3%A1%2C%20Guilherme!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

export default function WhatsAppFloat() {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110"
    >
      <MessageCircle size={28} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-btn bg-bg-card px-4 py-2 text-sm font-medium text-text shadow-lg border border-border opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Fale comigo
      </span>
    </Link>
  );
}
