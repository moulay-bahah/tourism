import { Car, Map, Plane } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const services = [
  {
    title: "Reliable Taxi",
    description: "Safe and comfortable rides around Nouakchott. Available 24/7 for your convenience.",
    icon: Car,
  },
  {
    title: "City Tours",
    description: "Discover the hidden gems of Nouakchott with our guided city tours.",
    icon: Map,
  },
  {
    title: "Airport Transfer",
    description: "Hassle-free pickups and drop-offs to and from Nouakchott International Airport.",
    icon: Plane,
  },
]

export function Services() {
  return (
    <section className="container py-24 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We provide top-notch transportation and tourism services tailored to your needs.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service) => (
          <Card key={service.title} className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
