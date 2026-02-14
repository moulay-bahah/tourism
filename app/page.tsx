import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Destinations } from "@/components/destinations"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <Services />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </main>
  )
}
