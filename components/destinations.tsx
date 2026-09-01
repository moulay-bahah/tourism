import { Section } from "@/components/ui/section"
import { TourCard } from "@/components/tour-card"

const destinations = [
  {
    eyebrow: "Atlantic Coast",
    title: "Nouakchott by the Sea",
    description:
      "Visit the lively fish market, take in the open coastline, and experience the capital through local food and daily life.",
    image: "/tourism/beach4.jpeg",
  },
  {
    eyebrow: "Sahara",
    title: "Desert & Oasis Journeys",
    description:
      "Travel by 4×4 through changing desert landscapes, pause for Mauritanian tea, and shape a route around the places that interest you most.",
    image: "/tourism/desert3.jpeg",
  },
  {
    eyebrow: "Culture",
    title: "Nouakchott City Life",
    description:
      "Explore markets, museums, artisan workshops, and neighborhood stories with a guide who brings the city into focus.",
    image: "/tourism/nkc2.jpeg",
  },
]

export function Destinations() {
  return (
    <Section>
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Signature Experiences</p>
        <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
          Three sides of Mauritania.
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Start with an idea. We will help turn it into a route that fits your time and travel style.
        </p>
      </div>

      <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination, index) => (
          <TourCard key={destination.title} {...destination} priority={index === 0} />
        ))}
      </div>
    </Section>
  )
}
