import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { TourCard } from "@/components/tour-card"

const destinations = [
  {
    title: "Nouakchott Beach Experience",
    description: "Explore the stunning Atlantic coastline with pristine beaches, water activities, and fresh seafood dining.",
    image: "/images/Nouakchott_Beach.jpg",
  },
  {
    title: "Sahara Desert Adventure",
    description: "Experience the majestic Sahara with dune exploration, camel riding, and traditional Mauritanian tea ceremony.",
    image: "/images/Sahara_Desert.jpg",
  },
  {
    title: "Cultural City Tour",
    description: "Discover Nouakchott's vibrant markets, historic landmarks, traditional crafts, and authentic local cuisine.",
    image: "/images/city_nkc.jpg",
  }
]

export function Destinations() {
  return (
    <Section>
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
            Featured Destinations
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore the hidden gems of Mauritania. From the Atlantic coast to the deep Sahara, adventure awaits.
          </p>
        </div>
        <Button asChild variant="outline" className="hidden md:inline-flex">
           <Link href="/tours">View All Tours</Link>
        </Button>
      </div>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <TourCard
            key={destination.title}
            title={destination.title}
            description={destination.description}
            image={destination.image}
          />
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <Button asChild variant="outline" size="lg">
           <Link href="/tours">View All Tours</Link>
        </Button>
      </div>
    </Section>
  )
}
