import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"

const whatsappUrl =
  "https://wa.me/22237111107?text=Hello%2C%20I%27d%20like%20to%20plan%20a%20Mauritania%20trip."

export function CTASection() {
  return (
    <Section className="bg-secondary">
      <div className="rounded-3xl bg-background px-6 py-12 shadow-[0_24px_80px_rgba(15,48,62,0.12)] sm:px-10 md:py-16 lg:px-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Start a Conversation</p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
              Tell us what you want to experience.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Share your dates, group size, and interests. We will reply with practical next steps for a trip designed around you.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild variant="accent" size="xl">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/contact">
                Contact Details
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
