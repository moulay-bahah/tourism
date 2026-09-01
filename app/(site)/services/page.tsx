import type { Metadata } from "next"
import { CTASection } from "@/components/cta-section"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Section } from "@/components/ui/section"
import { allServices } from "@/data/allServices"

export const metadata: Metadata = {
  title: "Tour Services & Private Travel Planning",
  description:
    "Plan private Mauritania tours, Nouakchott city visits, airport transfers, 4x4 travel, accommodation, and group transport with local support.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Tour Services & Private Travel Planning",
    description:
      "Private tours, transfers, 4x4 travel, and local coordination across Mauritania.",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mauritania Travel Services",
  itemListElement: allServices.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "TravelAgency",
        name: "Afro Service Tourism",
        url: "https://mauritania-tour.com",
      },
      areaServed: { "@type": "Country", name: "Mauritania" },
    },
  })),
}

const steps = [
  { number: "01", title: "Share Your Ideas", copy: "Tell us your dates, group size, interests, and the kind of pace you enjoy." },
  { number: "02", title: "Shape the Plan", copy: "We coordinate a practical route, transport, guides, and stays around your priorities." },
  { number: "03", title: "Travel with Support", copy: "Arrive with a clear plan and a local contact available when you need help." },
]

export default function ServicesPage() {
  return (
    <main id="main-content" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Hero
        compact
        imageSrc="/tourism/desert6.jpeg"
        eyebrow="Flexible, Private, Locally Coordinated"
        title="Travel services that work together."
        description="Choose exactly what you need—from one airport pickup to a complete private journey across Mauritania."
        primaryAction={{ href: "/contact", label: "Request a Custom Plan" }}
      />

      <Services />

      <Section>
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">How It Works</p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            A clear plan in 3 steps.
          </h2>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="rounded-2xl border border-border/70 bg-white p-7 shadow-sm">
              <span className="text-sm font-bold tracking-[0.18em] text-accent">{step.number}</span>
              <h3 className="mt-4 text-2xl font-bold text-primary">{step.title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{step.copy}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CTASection />
    </main>
  )
}
