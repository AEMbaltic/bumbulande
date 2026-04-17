import { motion } from "framer-motion";
import inflatable from "@/assets/inflatable-3.png";

export function About() {
  return (
    <section id="par-mums" className="py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-lift">
              <img
                src={inflatable}
                alt="Mūsu komanda uzstāda piepūšamo atrakciju ārā vasaras pasākumā"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-soft">
                <div className="font-handwritten text-xl text-coral">Sveiki, esam Anna un Mārtiņš</div>
                <div className="text-sm text-navy/70 mt-0.5">BumbuLande dibinātāji</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <span className="font-handwritten text-2xl text-coral">Par mums</span>
            <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
              Mēs sākām, jo nevarējām atrast normālu pakalpojumu.
            </h2>
            <div className="mt-6 space-y-4 text-navy/80 leading-relaxed">
              <p>
                2019. gadā mūsu meitas 5. dzimšanas dienā piegādātāja atrakcija atveda divas stundas
                vēlu, bija netīra un sapuvusi vienā stūrī. Visa ballīte uz pārpratuma.
              </p>
              <p>
                Tajā vakarā nolēmām — labāk darīsim paši. Tā sākās BumbuLande: viena LEGO pils, viens
                furgons un solījums katram klientam: <strong className="text-navy">laikā, tīri, droši</strong>.
              </p>
              <p>
                5 gadus vēlāk esam organizējuši 500+ ballītes Rīgā un visā Latvijā. Katra atrakcija
                pēc pasākuma tiek dezinficēta, katrā piegādē esam mēs paši — nevis algots šoferis.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { v: "5+", l: "gadu pieredze" },
                { v: "500+", l: "laimīgi pasākumi" },
                { v: "100%", l: "drošības sertifikāts" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-white p-5 text-center shadow-soft">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-coral">{s.v}</div>
                  <div className="text-xs text-navy/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
