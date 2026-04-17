import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GiftCards() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-coral to-coral/80 text-white p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sunshine/30 blur-2xl" />
            <Gift className="h-10 w-10" />
            <h3 className="mt-4 font-display text-2xl lg:text-3xl font-semibold">
              Nezini, ko dāvināt? Uzdāvini ballīti.
            </h3>
            <p className="mt-3 text-white/90 max-w-md">
              Dāvanu kartes vecvecākiem, krustvecākiem un draugiem — sākot no €50.
              Dāvinātājs izvēlas summu, mazulis izvēlas atrakciju.
            </p>
            <Button variant="sunshine" size="lg" asChild className="mt-6">
              <a href="#kontakti">Pasūtīt dāvanu karti</a>
            </Button>
          </div>
          <div className="lg:col-span-5 rounded-3xl bg-cream p-8 lg:p-10">
            <span className="font-handwritten text-xl text-coral">Padoms</span>
            <h4 className="mt-1 font-display text-xl font-semibold text-navy">
              Populārākās summas
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                { v: "€50", l: "Mazā svinēšana, papildinājums citai dāvanai" },
                { v: "€100", l: "Daļa no atrakcijas nomas" },
                { v: "€200", l: "Pilna mazākā ballīte" },
              ].map((g) => (
                <li key={g.v} className="flex items-baseline gap-3">
                  <span className="font-display text-xl font-bold text-coral">{g.v}</span>
                  <span className="text-sm text-navy/70">{g.l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
