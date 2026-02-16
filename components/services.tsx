// import { Car, Map, Plane, Clock, Shield, Star } from "lucide-react"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/service-card"
import { allServices } from "@/data/allServices"

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
        {allServices.map((service) => (
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
