import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { Destinations } from "@/components/destinations"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Section } from "@/components/ui/section"
import { WhyChooseUs } from "@/components/why-choose-us"

const whatsappUrl =
  "https://wa.me/22237111107?text=Hello%2C%20I%27d%20like%20to%20plan%20a%20Mauritania%20trip."

export const metadata: Metadata = {
  title: "Private Mauritania Tours & Local Guides",
  description:
    "Explore Nouakchott and the Mauritanian Sahara with private tours, local guides, 4x4 transport, airport transfers, and trip planning support.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Private Mauritania Tours & Local Guides",
    description:
      "Private tours, local guides, 4x4 transport, and travel support across Mauritania.",
  },
}

const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Afro Service Tourism",
  url: "https://mauritania-tour.com",
  logo: "https://mauritania-tour.com/images/logo.png",
  image: "https://mauritania-tour.com/images/hero.jpg",
  description:
    "Private tours, local guides, airport transfers, and travel planning support in Mauritania.",
  telephone: "+22237111107",
  email: "afroservices9@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nouakchott",
    addressCountry: "MR",
  },
  areaServed: { "@type": "Country", name: "Mauritania" },
  sameAs: ["https://www.instagram.com/afro_service_tourism"],
}

const planningPoints = [
  "A trip shaped around your dates, pace, and interests",
  "One local contact from arrival through departure",
  "Transport, guides, and accommodation coordinated together",
]

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
      />
      <Hero
        eyebrow="Private Tours • Local Guides • 24/7 Support"
        title={<>See Mauritania with people who know it best.</>}
        description="From Nouakchott’s Atlantic coast to the silence of the Sahara, plan a private journey with a responsive local team beside you."
        primaryAction={{ href: whatsappUrl, label: "Plan Your Trip", external: true }}
        secondaryAction={{ href: "/services", label: "Explore Our Services" }}
        highlights={["Local trip planning", "Private 4×4 travel", "Airport pickup"]}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Welcome to Mauritania</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
              Travel deeper, with the details handled locally.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Mauritania rewards curious travelers: ancient caravan towns, wide Atlantic beaches, desert oases, and generous traditions of hospitality. We connect those experiences into one clear, comfortable itinerary.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Tell us how you like to travel. We will help coordinate the route, a private driver, knowledgeable guides, accommodation, and arrival support—without pushing a one-size-fits-all package.
            </p>
          </div>

          <aside className="relative rounded-2xl border border-border/80 bg-white p-7 shadow-[0_20px_60px_rgba(15,48,62,0.10)] sm:p-9" aria-label="Trip planning benefits">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-secondary/70 blur-2xl" aria-hidden="true" />
            <p className="relative text-sm font-bold uppercase tracking-[0.18em] text-accent">A Simpler Way to Plan</p>
            <h3 className="relative mt-3 text-2xl font-bold text-primary">Your trip, handled as one journey.</h3>
            <ul className="relative mt-7 space-y-5">
              {planningPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="leading-6 text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Services preview />
      <Destinations />
      <WhyChooseUs />
      <CTASection />
    </main>
  )
}
