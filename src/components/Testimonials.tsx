import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-handwritten text-2xl text-coral">Atsauksmes</span>
          <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
            Ko saka vecāki
          </h2>
          <div className="mt-4 inline-flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-sunshine text-sunshine" />
              ))}
            </div>
            <span className="text-navy font-semibold">4.9/5</span>
            <span className="text-navy/60 text-sm">no 87 atsauksmēm Google</span>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl bg-cream p-6 flex flex-col"
            >
              <div className="flex">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-sunshine text-sunshine" />
                ))}
              </div>
              <blockquote className="mt-4 text-navy/85 text-sm leading-relaxed flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-navy/5">
                <div className="font-semibold text-navy text-sm">{t.name}</div>
                <div className="text-xs text-navy/50 mt-0.5">{t.date}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-coral font-medium hover:underline"
          >
            Lasīt visas atsauksmes Google <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
