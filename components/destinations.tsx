import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { TourCard } from "@/components/tour-card"

const destinations = [
  {
    title: "Nouakchott Beach Experience",
    description: "Explore the stunning Atlantic coastline with pristine beaches, water activities, and fresh seafood dining.",
    images: ["/tourism/beach4.jpeg", "/tourism/beach1.jpeg", "/tourism/beach2.jpeg", "/tourism/beach3.jpeg"],
  },
  {
    title: "Sahara Desert Adventure",
    description: "Experience the majestic Sahara with dune exploration, camel riding, and traditional Mauritanian tea ceremony.",
    images: ["/tourism/desert4.jpeg", "/tourism/desert1.jpeg", "/tourism/desert2.jpeg", "/tourism/desert3.jpeg", "/tourism/desert5.jpeg", "/tourism/desert6.jpeg"],
  },
  {
    title: "Cultural City Tour",
    description: "Discover Nouakchott's vibrant markets, historic landmarks, traditional crafts, and authentic local cuisine.",
    images: ["/tourism/nkc2.jpeg", "/tourism/nkc.jpeg", "/tourism/nkc3.jpeg", "/tourism/nkc4.jpeg"],
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
        {/* <Button asChild variant="outline" className="hidden md:inline-flex">
           <Link href="/tours">View All Tours</Link>
        </Button> */}
      </div>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <TourCard
            key={destination.title}
            title={destination.title}
            description={destination.description}
            images={destination.images}
          />
        ))}
      </div>
      
      {/* <div className="mt-8 text-center md:hidden">
        <Button asChild variant="outline" size="lg">
           <Link href="/tours">View All Tours</Link>
        </Button>
      </div> */}
    </Section>
  )
}
