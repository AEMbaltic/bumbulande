import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#atrakcijas", label: "Atrakcijas" },
    { href: "#pakas", label: "Pakas" },
    { href: "#cenas", label: "Cenas" },
    { href: "#par-mums", label: "Par mums" },
    { href: "#faq", label: "FAQ" },
    { href: "#kontakti", label: "Kontakti" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur-md border-b border-navy/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-navy">
          <span className="inline-flex h-9 w-9 rounded-2xl bg-coral items-center justify-center text-white font-bold shadow-coral">
            B
          </span>
          BumbuLande
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-navy/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-coral transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+37120000000" className="flex items-center gap-2 text-sm font-medium text-navy hover:text-coral">
            <Phone className="h-4 w-4" /> +371 20 000 000
          </a>
          <Button variant="coral" size="default" asChild>
            <a href="#rezervet">Rezervēt</a>
          </Button>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Izvēlne"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-navy/5 bg-cream">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-navy font-medium"
              >
                {l.label}
              </a>
            ))}
            <Button variant="coral" asChild className="mt-2">
              <a href="#rezervet" onClick={() => setOpen(false)}>Rezervēt atrakciju</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
