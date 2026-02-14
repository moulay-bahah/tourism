import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const destinations = [
  {
    title: "Nouakchott Beach",
    description: "Relax by the Atlantic Ocean and enjoy fresh seafood at the chaotic but charming Port de Pêche.",
    image: "https://images.unsplash.com/photo-1544015759-42b78f4b1b86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Chinguetti",
    description: "Explore the ancient library city and the mesmerizing dunes of the Sahara Desert.",
    image: "https://images.unsplash.com/photo-1539650116455-ea782bd6d38b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Banc d'Arguin",
    description: "Witness millions of migratory birds in this UNESCO World Heritage coastal park.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
]

export function Destinations() {
  return (
    <section className="container py-24 space-y-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Destinations</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore the beauty of Mauritania with our curated tours.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {destinations.map((destination) => (
          <Card key={destination.title} className="overflow-hidden border-none shadow-md">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={destination.image}
                alt={destination.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{destination.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{destination.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center pt-8">
        <Button size="lg" asChild>
          <Link href="/tours">View All Destinations</Link>
        </Button>
      </div>
    </section>
  )
}
