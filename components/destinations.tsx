import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { TourCard } from "@/components/tour-card"

const destinations = [
  {
    title: "Nouakchott Beach",
    description: "Relax by the Atlantic Ocean and enjoy fresh seafood at the chaotic but charming Port de Pêche. Watch the colorful fishing boats return at sunset.",
    image: "https://images.unsplash.com/photo-1544015759-42b78f4b1b86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Chinguetti Ancient City",
    description: "Explore the ancient library city, a UNESCO World Heritage site, and witness the mesmerizing dunes of the Sahara Desert surrounding this historic oasis.",
    image: "https://images.unsplash.com/photo-1539650116455-ea782bd6d38b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Banc d'Arguin National Park",
    description: "Witness millions of migratory birds in this UNESCO World Heritage coastal park. A paradise for birdwatchers and nature lovers where desert meets ocean.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Terjit Oasis",
    description: "Refresh yourself in the cooling springs of Terjit, a stunning oasis nestled in a gorge on the Adrar Plateau. Ideally conducive to relaxation.",
    image: "https://images.unsplash.com/photo-1512552808759-67d716d95326?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Placeholder for oasis
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
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
