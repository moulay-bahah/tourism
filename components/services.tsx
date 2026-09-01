import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { allServices } from "@/data/allServices"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"

export function Services({ preview = false }: { preview?: boolean }) {
  const services = preview ? allServices.slice(0, 6) : allServices

  return (
    <Section className="bg-muted/55">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Travel Support</p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Everything your journey needs.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Build one service into your plans or ask us to coordinate the complete trip.
          </p>
        </div>
        {preview ? (
          <Button asChild variant="outline" className="self-start md:self-auto">
            <Link href="/services">
              View All Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        ) : null}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  )
}
