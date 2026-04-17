import { motion } from "framer-motion";

const rows = [
  { label: "Atrakcijas noma (1 diena)", value: "No €199" },
  { label: "Piegāde Rīgā (līdz 10 km)", value: "Bezmaksas", highlight: true },
  { label: "Piegāde ārpus Rīgas", value: "€0.50 / km" },
  { label: "Uzstādīšana un demontāža", value: "Iekļauta cenā", highlight: true },
  { label: "Otra noma diena", value: "−30%" },
  { label: "Depozīts (atgriežams)", value: "€50" },
];

export function PricingTable() {
  return (
    <section id="cenas" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-handwritten text-2xl text-coral">Caurspīdīgas cenas</span>
          <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
            Bez slēptām maksām
          </h2>
          <p className="mt-4 text-navy/70">
            Visu redzi šeit. Bez "zvaniet, lai uzzinātu cenu" — tavu laiku cienām.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-3xl overflow-hidden bg-cream shadow-soft"
        >
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`flex items-center justify-between px-6 lg:px-8 py-5 ${
                i !== rows.length - 1 ? "border-b border-navy/5" : ""
              }`}
            >
              <span className="text-navy">{r.label}</span>
              <span className={`font-semibold ${r.highlight ? "text-sky" : "text-navy"}`}>
                {r.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
