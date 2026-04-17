import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { ProductCatalog } from "@/components/ProductCatalog";
import { PackageDeals } from "@/components/PackageDeals";
import { BookingFlow } from "@/components/BookingFlow";
import { PricingTable } from "@/components/PricingTable";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { Corporate } from "@/components/Corporate";
import { GiftCards } from "@/components/GiftCards";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StickyBookCTA } from "@/components/StickyBookCTA";
import { faqs } from "@/data/faqs";

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BumbuLande — Piepūšamo atrakciju noma",
  image: "https://bumbulande.lv/og.jpg",
  telephone: "+371 20 000 000",
  email: "info@bumbulande.lv",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rūpniecības iela 12",
    addressLocality: "Rīga",
    postalCode: "LV-1010",
    addressCountry: "LV",
  },
  areaServed: { "@type": "Country", name: "Latvija" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "09:00",
    closes: "21:00",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "87" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Piepūšamo atrakciju noma Rīgā un Latvijā | BumbuLande" },
      {
        name: "description",
        content:
          "Piepūšamās atrakcijas bērnu ballītēm, dārza svētkiem un pasākumiem. Piegāde, uzstādīšana un drošība iekļauta. Rezervē online — atbildam 24h laikā.",
      },
      { property: "og:title", content: "Piepūšamo atrakciju noma Rīgā | BumbuLande" },
      {
        property: "og:description",
        content:
          "Drošas, sertificētas atrakcijas ar piegādi un uzstādīšanu. 500+ laimīgu pasākumu Rīgā un visā Latvijā.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessLd) },
      { type: "application/ld+json", children: JSON.stringify(faqLd) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-cream pb-20 lg:pb-0">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <ProductCatalog />
        <PackageDeals />
        <BookingFlow />
        <PricingTable />
        <About />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Corporate />
        <GiftCards />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyBookCTA />
    </div>
  );
}
