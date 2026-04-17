import { faqs } from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="font-handwritten text-2xl text-coral">Jautājumi</span>
          <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
            Biežāk uzdotie jautājumi
          </h2>
          <p className="mt-4 text-navy/70">
            Neatradi atbildi? Raksti WhatsApp — atbildam dažu minūšu laikā.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl bg-cream border-none px-5 data-[state=open]:shadow-soft"
            >
              <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-navy/75 pb-5 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
