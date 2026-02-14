import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"

export function CTASection() {
  return (
    <Section className="bg-primary text-primary-foreground text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-serif font-bold sm:text-4xl md:text-5xl">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-primary-foreground/80">
          Whether you need a quick ride across town or an expedition into the Sahara, we are here to help. Book your ride or tour today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 h-12 font-semibold">
            <Link href="/taxi">Book a Taxi</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg px-8 h-12 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
