// import { Car, Map, Plane, Clock, Shield, Star, Users, Hotel, Headphones } from "lucide-react"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/service-card"
import { Metadata } from "next"
import { allServices } from "@/data/allServices"
import { Hero } from "@/components/hero"

export const metadata: Metadata = {
  title: "Our Services | Nouakchott Tourism & Tours",
  description: "Explore our comprehensive range of transportation and tourism services in Mauritania.",
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
  const description = `Professional transportation and tourism solutions tailored to make your stay in Mauritania unforgettable.`
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section for Services */}
      <Hero title={title} description={description} />

      {/* Services Grid */}
      <Section className="bg-slate-50 dark:bg-slate-900/50 flex-grow">
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
      </Section>
    </div>
  )
}
