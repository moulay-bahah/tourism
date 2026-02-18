import { ShieldCheck, UserCheck, Clock } from "lucide-react"
import { Section } from "@/components/ui/section"

const features = [
  {
    name: "Safety First",
    description:
      "All our vehicles are regularly inspected, and our drivers are vetted professionals. Your safety is our number one priority.",
    icon: ShieldCheck,
  },
  {
    name: "Expert Local Guides",
    description:
      "See Mauritania through the eyes of a local. Our guides are passionate about sharing their culture and hidden gems.",
    icon: UserCheck,
  },
  {
    name: "24/7 Availability",
    description:
      "Whether you need an early morning airport transfer or a late-night taxi, our team is always ready to serve you.",
    icon: Clock,
  },
]

export function WhyChooseUs() {
  return (
    <Section className="bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
        </div>

      <div className="relative z-10 mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-secondary uppercase tracking-wide">
          Why Choose Us
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
          Experience the Difference
        </p>
        <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
          We don't just offer tours; we offer peace of mind and authentic experiences in Mauritania.
        </p>
      </div>
      <div className="relative z-10 mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20 ring-1 ring-secondary/50">
                <feature.icon className="h-8 w-8 text-secondary" aria-hidden="true" />
              </div>
              <dt className="text-xl font-semibold leading-7 text-white">
                {feature.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-primary-foreground/70">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
