import { Car, Map, Plane, Clock, Shield, Star } from "lucide-react"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/service-card"

const services = [
  {
    title: "Premium Taxi Service",
    description: "Experience the comfort of our modern fleet. Available 24/7 for city rides and airport transfers.",
    icon: Car,
  },
  {
    title: "Guided City Tours",
    description: "Immerse yourself in Nouakchott's culture with our expert local guides.",
    icon: Map,
  },
  {
    title: "Airport Transfer",
    description: "Seamless and punctual transfers to and from Nouakchott International Airport (NKC).",
    icon: Plane,
  },
  {
    title: "All-Day Rental",
    description: "Rent a car with a driver for a full day of meetings or exploration.",
    icon: Clock,
  },
  {
    title: "Safe & Secure",
    description: "Your safety is our priority. Verified drivers and tracked vehicles for peace of mind.",
    icon: Shield,
  },
  {
    title: "VIP Experience",
    description: "Luxury vehicle options for special occasions and business travel.",
    icon: Star,
  },
]

export function Services() {
  return (
    <Section className="bg-slate-50 dark:bg-slate-900/50">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
          Our Services
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We provide top-notch transportation and tourism services tailored to your needs in Mauritania.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </Section>
  )
}
