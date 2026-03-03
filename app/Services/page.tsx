// import { Car, Map, Plane, Clock, Shield, Star, Users, Hotel, Headphones } from "lucide-react"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/service-card"
import { Metadata } from "next"
import { allServices } from "@/data/allServices"
import { Hero } from "@/components/hero"

export const metadata: Metadata = {
  title: "Mauritania Travel Services & Tours",
  description: "Explore our premium Mauritania travel services, including Sahara desert tours, and professional local tourism guides.",
}

      // <section className="relative bg-slate-900 text-white py-20 text-center">
      //   <div className="absolute inset-0 bg-black/50 overflow-hidden">
      //        {/* Optional: Add a background image here if available, otherwise just dark bg */}
      //   </div>
      //   <div className="container relative z-10 px-4">
      //     <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">Our Services</h1>
      //     <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
      //       Professional transportation and tourism solutions tailored to make your stay in Mauritania unforgettable.
      //     </p>
      //   </div>
      // </section>

export default function ServicesPage() {
  const title = `Our Services`
  const description = `Professional tourism solutions tailored to make your stay in Mauritania unforgettable.`
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": allServices.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": service.title,
              "description": service.description
            }))
          })
        }}
      />
      {/* Hero Section for Services */}
      <Hero title={title} description={description} />

      {/* Services Grid */}
      <Section className="bg-slate-50 dark:bg-slate-900/50 flex-grow">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl font-serif font-bold text-primary">Our Travel & Transportation Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Whether you need reliable Nouakchott taxi services for your business trip or you're planning a multi-day Sahara desert tour in Mauritania, we offer complete travel logistics. Each of our services is designed with safety, comfort, and authenticity in mind.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="bg-white dark:bg-slate-800"
              />
            ))}
          </div>
          <div className="mt-16 text-center border-t pt-8">
            <p className="text-lg text-muted-foreground mb-4">
              Ready to plan your trip? 
            </p>
            <a href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              Contact us for a custom itinerary
            </a>
          </div>
      </Section>
    </div>
  )
}
