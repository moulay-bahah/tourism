import { Clock3, Compass, Handshake, ShieldCheck } from "lucide-react"
import { Section } from "@/components/ui/section"

const features = [
  {
    name: "Local from the Start",
    description: "Plan directly with a Nouakchott-based team that understands the routes, rhythm, and practical details of travel here.",
    icon: Compass,
  },
  {
    name: "Built Around You",
    description: "Choose the pace, interests, and level of support that suit you. Your itinerary is shaped around your trip—not a fixed template.",
    icon: Handshake,
  },
  {
    name: "Reliable Coordination",
    description: "Drivers, guides, transfers, and stays are organized as one connected plan, with a clear local contact throughout.",
    icon: ShieldCheck,
  },
  {
    name: "Support When Needed",
    description: "Our team remains reachable for arrivals, itinerary adjustments, and practical questions while you are traveling.",
    icon: Clock3,
  },
]

export function WhyChooseUs() {
  return (
    <Section className="relative bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_top_right,hsl(var(--accent)),transparent_36%)]" aria-hidden="true" />
      <div className="relative">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">Why Travel with Us</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Local care makes the difference.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Good travel support should feel calm, personal, and clear—from the first message to the final airport transfer.
          </p>
        </div>

        <dl className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                <feature.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <dt className="mt-5 text-xl font-bold text-white">{feature.name}</dt>
              <dd className="mt-3 text-sm leading-7 text-white/65">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
