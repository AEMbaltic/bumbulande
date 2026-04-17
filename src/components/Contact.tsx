import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="kontakti" className="py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-handwritten text-2xl text-coral">Sazinies</span>
          <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
            Esam vienā tālrunī
          </h2>
          <p className="mt-4 text-navy/70">
            Atbildam katru dienu 9:00–21:00. Ātrākais veids — WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Phone,
              label: "Telefons",
              value: "+371 20 000 000",
              href: "tel:+37120000000",
              accent: "bg-coral/10 text-coral",
            },
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "Tieši rakstīt",
              href: "https://wa.me/37120000000?text=Sveiki!%20V%C4%93los%20uzzin%C4%81t%20par%20atrakciju%20rezerv%C4%81ciju",
              accent: "bg-sky/15 text-sky",
            },
            {
              icon: Mail,
              label: "E-pasts",
              value: "info@bumbulande.lv",
              href: "mailto:info@bumbulande.lv",
              accent: "bg-sunshine/30 text-navy",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="group rounded-3xl bg-white p-7 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all"
            >
              <div className={`h-14 w-14 rounded-2xl ${c.accent} flex items-center justify-center`}>
                <c.icon className="h-6 w-6" />
              </div>
              <div className="mt-5 text-sm font-medium text-navy/60">{c.label}</div>
              <div className="mt-1 font-display text-xl font-semibold text-navy group-hover:text-coral transition-colors">
                {c.value}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white p-7 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-navy text-white flex items-center justify-center">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-navy">Darba laiks</div>
                <p className="mt-1 text-sm text-navy/70">
                  Pirmdiena–Svētdiena: 9:00–21:00<br />
                  Atrakciju piegāde arī agros rītos pēc vienošanās.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-navy text-white flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-navy">Piegādes reģions</div>
                <p className="mt-1 text-sm text-navy/70">
                  Rīga + 50 km bezmaksas piegāde dažādās zonās. Tālāki braucieni visā Latvijā
                  pēc vienošanās.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl overflow-hidden shadow-soft aspect-[16/7]">
          <iframe
            title="BumbuLande pakalpojumu zona"
            src="https://www.openstreetmap.org/export/embed.html?bbox=23.9,56.85,24.3,57.05&layer=mapnik&marker=56.95,24.10"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
