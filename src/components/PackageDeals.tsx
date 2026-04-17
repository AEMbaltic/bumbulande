import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { packages } from "@/data/packages";

export function PackageDeals() {
  return (
    <section id="pakas" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-handwritten text-2xl text-coral">Gatavās pakas</span>
          <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
            Pilna ballīte vienā cenā
          </h2>
          <p className="mt-4 text-navy/70">
            Nepatīk likt visu kopā pašai? Izvēlies paku — mēs parūpēsimies par pārējo.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                p.highlight
                  ? "bg-navy text-white border-4 border-coral shadow-lift lg:scale-105"
                  : "bg-cream text-navy"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-coral text-white text-xs font-semibold shadow-coral">
                  <Star className="h-3.5 w-3.5 fill-current" /> {p.badge}
                </span>
              )}

              <h3 className={`font-display text-2xl font-semibold ${p.highlight ? "text-white" : "text-navy"}`}>
                {p.name}
              </h3>
              <p className={`mt-1 text-sm ${p.highlight ? "text-white/70" : "text-navy/60"}`}>
                {p.duration}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className={`font-display text-5xl font-bold ${p.highlight ? "text-sunshine" : "text-coral"}`}>
                  €{p.price}
                </span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5 ${p.highlight ? "bg-coral" : "bg-sky/20"}`}>
                      <Check className={`h-3 w-3 ${p.highlight ? "text-white" : "text-sky"}`} />
                    </span>
                    <span className={p.highlight ? "text-white/90" : "text-navy/80"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={p.highlight ? "sunshine" : "coral"}
                size="lg"
                asChild
                className="mt-8 w-full"
              >
                <a href="#rezervet">Izvēlēties paku</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
