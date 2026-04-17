import { motion } from "framer-motion";
import { Truck, Wrench, ShieldCheck, Heart } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Piegāde līdz durvīm",
    desc: "Mēs atvedam un aizvedam. Tu koncentrējies uz bērniem un viesiem.",
    color: "bg-coral/10 text-coral",
  },
  {
    icon: Wrench,
    title: "Uzstādīšana iekļauta",
    desc: "15–20 minūtēs viss gatavs. Pārbaudīts, drošs, gatavs lietošanai.",
    color: "bg-sky/15 text-sky",
  },
  {
    icon: ShieldCheck,
    title: "Drošība un apdrošināšana",
    desc: "Visas atrakcijas sertificētas. Pilna civiltiesiskā apdrošināšana.",
    color: "bg-sunshine/30 text-navy",
  },
  {
    icon: Heart,
    title: "Pieredze ar bērniem",
    desc: "5 gadi, 500+ ballītes. Zinām, kas darbojas un kas nē.",
    color: "bg-coral/10 text-coral",
  },
];

export function WhyUs() {
  return (
    <section id="kapec-mes" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-handwritten text-2xl text-coral">Kāpēc mēs?</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
            Profesionāla pieeja katrai ballītei
          </h2>
          <p className="mt-4 text-navy/70">
            Mēs neesam puisis ar furgonu. Mēs esam komanda, kurai bērna smaids ir darba mērķis.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl bg-cream p-7 hover:shadow-lift transition-shadow"
            >
              <div className={`h-14 w-14 rounded-2xl ${f.color} flex items-center justify-center`}>
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy">{f.title}</h3>
              <p className="mt-2 text-sm text-navy/70 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
