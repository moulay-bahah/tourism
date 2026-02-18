import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Destinations } from "@/components/destinations"
import { WhyChooseUs } from "@/components/why-choose-us"
// import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  const title = <>Discover the Heart <br /> of <span className="text-secondary">Mauritania</span></>
  const description = `Your gateway to unforgettable guided tours in Nouakchott and beyond.`

  return (
    <main className="flex-1 flex flex-col">
      <Hero title={title} description={description} />
      <Services />
      <Destinations />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      {/* <CTASection /> */}
    </main>
  )
}
