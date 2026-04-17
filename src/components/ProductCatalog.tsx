import { motion } from "framer-motion";
import { useState } from "react";
import { Ruler, Baby, Users, Zap, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, type Product } from "@/data/products";

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [active, setActive] = useState(0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group rounded-3xl bg-white shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[4/3] bg-cream overflow-hidden">
        <img
          src={product.thumbnails[active]}
          alt={`${product.name} — piepūšamā atrakcija`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-coral text-white text-xs font-semibold shadow-coral">
            {product.badge}
          </span>
        )}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2">
          {product.thumbnails.map((thumb, i) => (
            <button
              key={i}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`flex-1 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                i === active ? "border-coral scale-105" : "border-white/80 opacity-70 hover:opacity-100"
              }`}
              aria-label={`Skatīt foto ${i + 1}`}
            >
              <img src={thumb} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-navy">{product.name}</h3>
        <p className="mt-1 text-sm text-navy/60">{product.tagline}</p>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-display text-3xl font-bold text-coral">€{product.pricePerDay}</span>
          <span className="text-sm text-navy/60">/dienā</span>
        </div>

        <ul className="mt-5 space-y-2 text-sm text-navy/80 border-t border-navy/5 pt-4">
          <Spec icon={Ruler} label="Izmērs" value={product.specs.size} />
          <Spec icon={Baby} label="Vecums" value={product.specs.age} />
          <Spec icon={Users} label="Kapacitāte" value={product.specs.capacity} />
          <Spec icon={Zap} label="Elektrība" value={product.specs.power} />
          <Spec icon={Home} label="Vajadzīgā vieta" value={product.specs.space} />
        </ul>

        <div className="mt-6 flex flex-col gap-2">
          <Button
            variant="coral"
            asChild
            className="w-full"
            onClick={() => {
              const evt = new CustomEvent("preselect-attraction", { detail: product.slug });
              window.dispatchEvent(evt);
            }}
          >
            <a href="#rezervet">Rezervēt šo atrakciju</a>
          </Button>
          <a
            href="#kontakti"
            className="text-sm text-center text-navy/70 hover:text-coral inline-flex items-center justify-center gap-1"
          >
            Uzzināt vairāk <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Spec({ icon: Icon, label, value }: { icon: typeof Ruler; label: string; value: string }) {
  return (
    <li className="flex items-center justify-between gap-3">
      <span className="inline-flex items-center gap-2 text-navy/60">
        <Icon className="h-4 w-4" /> {label}
      </span>
      <span className="font-medium text-navy text-right">{value}</span>
    </li>
  );
}

export function ProductCatalog() {
  return (
    <section id="atrakcijas" className="py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-handwritten text-2xl text-coral">Mūsu atrakcijas</span>
            <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
              Izvēlies favorītu — mēs atvedam.
            </h2>
            <p className="mt-4 text-navy/70">
              Visas atrakcijas ir sertificētas, dezinficētas un gatavas svētkiem.
              Cenas ietver piegādi, uzstādīšanu un demontāžu Rīgas robežās.
            </p>
          </div>
          <Button variant="outline" asChild>
            <a href="#rezervet">Pārbaudīt brīvu datumu</a>
          </Button>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
