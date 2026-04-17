import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Corporate() {
  return (
    <section className="py-16 bg-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy text-white p-8 lg:p-14 grid lg:grid-cols-12 gap-8 items-center overflow-hidden relative">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-coral/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-sky/20 blur-3xl" />

          <div className="lg:col-span-2 relative">
            <div className="h-16 w-16 rounded-2xl bg-sunshine flex items-center justify-center">
              <Building2 className="h-8 w-8 text-navy" />
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <h3 className="font-display text-2xl lg:text-3xl font-semibold">
              Organizē bērnu pasākumu uzņēmumam vai skolai?
            </h3>
            <p className="mt-3 text-white/75">
              Piedāvājam īpašus piedāvājumus korporatīvajiem klientiem un publiskajiem pasākumiem.
              Rēķins, līgums, lielāki apjomi — nav problēmu.
            </p>
          </div>
          <div className="lg:col-span-3 relative">
            <Button variant="sunshine" size="lg" asChild className="w-full">
              <a href="#kontakti">Saņemt piedāvājumu</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
