import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/37120000000?text=Sveiki!%20V%C4%93los%20uzzin%C4%81t%20par%20atrakciju%20rezerv%C4%81ciju"
      target="_blank"
      rel="noreferrer"
      aria-label="Rakstīt WhatsApp"
      className="fixed z-30 bottom-5 right-5 h-14 w-14 lg:h-16 lg:w-16 rounded-full bg-[#25D366] text-white shadow-lift flex items-center justify-center hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-7 w-7 lg:h-8 lg:w-8" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" />
    </a>
  );
}
