import { motion } from "framer-motion";
import { Truck, ShieldCheck, Sparkles, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import inflatable from "@/assets/inflatable-1.png";

const trust = [
  { icon: Truck, label: "Bezmaksas piegāde Rīgā" },
  { icon: ShieldCheck, label: "Apdrošināta darbība" },
  { icon: Sparkles, label: "Dezinficēts pēc katra pasākuma" },
  { icon: Star, label: "100+ laimīgas ballītes gadā" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Floating ambient SVGs - hidden on mobile for perf */}
      <div className="hidden md:block pointer-events-none absolute inset-0">
        <svg className="absolute top-20 left-8 h-16 w-16 text-coral/40 animate-drift" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="10" r="7" />
          <path d="M11 17 L13 17 L12 23 Z" />
        </svg>
        <svg className="absolute top-40 right-1/4 h-12 w-12 text-sky/50 animate-drift-2" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="10" r="6" />
          <path d="M11 16 L13 16 L12 22 Z" />
        </svg>
        <svg className="absolute bottom-20 left-1/3 h-10 w-10 text-sunshine animate-drift" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16.5 L6.5 21 L8.5 13.5 L3 9 L10 9 Z" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky/20 text-navy text-sm font-medium"
            >
              <Sparkles className="h-4 w-4 text-coral" />
              Rezervē jau tagad — sezona aizpildās
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-navy"
            >
              Piepūšamās atrakcijas, kas padara{" "}
              <span className="relative inline-block">
                <span className="relative z-10">ballīti</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-sunshine/70 -z-0 rounded" />
              </span>{" "}
              neaizmirstamu
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 text-lg text-navy/70 max-w-xl"
            >
              Piegāde, uzstādīšana un drošība iekļauta. Ballītes Rīgā un visā Latvijā —
              bez stresa, bez slēptām cenām.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Button variant="coral" size="xl" asChild>
                <a href="#rezervet">Rezervēt atrakciju</a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#atrakcijas">Apskatīt atrakcijas</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {trust.map((t) => (
                <div key={t.label} className="flex items-start gap-2">
                  <div className="shrink-0 h-9 w-9 rounded-full bg-white shadow-soft flex items-center justify-center">
                    <t.icon className="h-4 w-4 text-coral" />
                  </div>
                  <span className="text-xs sm:text-sm text-navy/80 font-medium leading-tight pt-1">
                    {t.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-lift bg-white">
              <img
                src={inflatable}
                alt="Krāsaina LEGO tematikas piepūšamā atrakcija ar slidkalniņu bērnu ballītei"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur rounded-full shadow-soft">
                <span className="font-handwritten text-xl text-coral leading-none">Mīļākais!</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-navy/95 text-white rounded-2xl px-4 py-3 shadow-lift">
                <div className="text-xs opacity-80">No</div>
                <div className="font-display text-2xl font-semibold">€220/dienā</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:flex h-24 w-24 rounded-full bg-sunshine items-center justify-center shadow-coral rotate-[-8deg]">
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-navy leading-none">100+</div>
                <div className="text-[10px] text-navy/80 font-medium">ballītes/gadā</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#kapec-mes" className="inline-flex flex-col items-center text-navy/50 hover:text-coral transition-colors">
            <span className="text-xs font-medium uppercase tracking-wider">Uzzināt vairāk</span>
            <ChevronDown className="h-5 w-5 mt-1 animate-bounce-gentle" />
          </a>
        </div>
      </div>
    </section>
  );
}
