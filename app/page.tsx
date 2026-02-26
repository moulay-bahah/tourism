import { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Destinations } from "@/components/destinations"
import { WhyChooseUs } from "@/components/why-choose-us"
// import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Mauritania Tours & Travel | Discover the Sahara Desert",
  description: "Book unforgettable Mauritania tours and travel packages. Experience the Sahara desert, historic Chinguetti, and expert guided tours from Nouakchott.",
}

export default function Home() {
  // Discover the Heart of <br /> <span className="text-secondary">Mauritania</span>:
  const title = <><span className="text-3xl md:text-5xl block mt-4">Expert Guided Tours</span></>
  const description = `Your gateway to unforgettable guided tours in Nouakchott and beyond.`

  return (
    <main className="flex-1 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Mauritania Tours & Travel",
            "description": "Book unforgettable Mauritania tours and travel packages. Experience the Sahara desert, historic Chinguetti, and expert guided tours from Nouakchott.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Avenue Gamal Abdel Nasser",
              "addressLocality": "Nouakchott",
              "addressCountry": "MR"
            }
          })
        }}
      />
      <Hero title={title} description={description} />
      
      <section className="container py-16 text-center max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold font-serif md:text-4xl text-primary">Experience the Magic of Mauritania</h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Mauritania is a land of stunning contrast, from the endless dunes of the Sahara Desert to the vibrant capital city of Nouakchott. Renowned for its safety and warm hospitality, it's the perfect destination for travelers seeking an authentic, off-the-beaten-path adventure. Let our local experts guide you through historic towns like Chinguetti, lush oases like Terjit, and the breathtaking Banc d'Arguin coast.
        </p>
      </section>

      <Services />
      <Destinations />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      {/* <CTASection /> */}
    </main>
  )
}
