import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import inf1 from "@/assets/inflatable-1.png";
import inf2 from "@/assets/inflatable-2.png";
import inf3 from "@/assets/inflatable-3.png";

const items = [
  { src: inf1, category: "Dzimšanas dienas", alt: "LEGO atrakcija dzimšanas dienai" },
  { src: inf2, category: "Dārza svētki", alt: "Krāsainā pils dārza svētkos" },
  { src: inf3, category: "Korporatīvie pasākumi", alt: "Atrakcijas korporatīvajā pasākumā" },
  { src: inf2, category: "Dzimšanas dienas", alt: "Pils ar slidkalniņu" },
  { src: inf1, category: "Dārza svētki", alt: "LEGO trase pagalmā" },
  { src: inf3, category: "Dzimšanas dienas", alt: "Šķēršļu josla bērniem" },
];

const filters = ["Visi", "Dzimšanas dienas", "Dārza svētki", "Korporatīvie pasākumi"];

export function Gallery() {
  const [active, setActive] = useState("Visi");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const visible = active === "Visi" ? items : items.filter((i) => i.category === active);

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-handwritten text-2xl text-coral">Galerija</span>
          <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
            Mūsu pēdējie pasākumi
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? "bg-navy text-white shadow-soft"
                  : "bg-white text-navy/70 hover:bg-white hover:text-navy"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {visible.map((item, i) => (
            <motion.button
              key={`${item.src}-${i}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightbox(item.src)}
              className={`group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition-shadow ${
                i % 5 === 0 ? "row-span-2 md:row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-navy/90 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              className="absolute top-6 right-6 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              onClick={() => setLightbox(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt=""
              className="max-h-[90vh] max-w-[90vw] rounded-3xl shadow-lift"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
