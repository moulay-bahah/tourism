import type { Metadata } from "next"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Hero } from "@/components/hero"
import { Section } from "@/components/ui/section"

const whatsappUrl =
  "https://wa.me/22237111107?text=Hello%2C%20I%27d%20like%20to%20plan%20a%20Mauritania%20trip."

export const metadata: Metadata = {
  title: "Contact a Local Mauritania Travel Planner",
  description:
    "Contact Afro Service Tourism in Nouakchott by WhatsApp, phone, or email to discuss a private Mauritania tour, transfer, or custom itinerary.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact a Local Mauritania Travel Planner",
    description:
      "Talk with a Nouakchott-based team about private tours and travel support in Mauritania.",
  },
}

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Afro Service Tourism",
  url: "https://mauritania-tour.com/contact",
  telephone: "+22237111107",
  email: "afroservices9@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nouakchott",
    addressCountry: "MR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+22237111107",
    contactType: "customer service",
    availableLanguage: ["English", "French", "Arabic"],
  },
}

const contactMethods = [
  {
    title: "WhatsApp",
    value: "+222 37 11 11 07",
    note: "Best for trip ideas and quick questions",
    href: whatsappUrl,
    icon: MessageCircle,
    external: true,
  },
  {
    title: "Phone",
    value: "+222 37 11 11 07",
    note: "Call our Nouakchott team",
    href: "tel:+22237111107",
    icon: Phone,
    external: false,
  },
  {
    title: "Email",
    value: "afroservices9@gmail.com",
    note: "Useful for detailed itineraries",
    href: "mailto:afroservices9@gmail.com",
    icon: Mail,
    external: false,
  },
]

const faqs = [
  {
    question: "Can you create a private itinerary?",
    answer: "Yes. Share your dates, group size, interests, and preferred pace. We can help coordinate a route, transport, guides, and stays around those details.",
  },
  {
    question: "Do you arrange airport pickup?",
    answer: "Yes. We can arrange pickup or drop-off between Nouakchott–Oumtounsy International Airport and your accommodation.",
  },
  {
    question: "How far ahead should I contact you?",
    answer: "Earlier is helpful for longer trips and busy travel periods, but you are welcome to ask about shorter-notice transfers and city services.",
  },
  {
    question: "Can you advise on entry requirements?",
    answer: "We can share practical planning context for your trip. Because entry rules can change, always confirm current requirements with official government or embassy guidance before travel.",
  },
]

export default function ContactPage() {
  return (
    <main id="main-content" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Hero
        compact
        imageSrc="/tourism/beach4.jpeg"
        eyebrow="Talk to a Local Travel Planner"
        title="Let’s shape your Mauritania journey."
        description="Send your dates, group size, and a few ideas. Our Nouakchott-based team will help you work out the next step."
        primaryAction={{ href: whatsappUrl, label: "Message Us on WhatsApp", external: true }}
      />

      <Section className="bg-muted/55">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Contact Details</p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Choose the easiest way to reach us.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              For a useful first reply, include your travel dates, number of guests, and the places or experiences you have in mind.
            </p>

            <div className="mt-8 space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noreferrer" : undefined}
                  className="group flex items-start gap-4 rounded-2xl border border-border/70 bg-white p-5 shadow-sm transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <method.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-primary">{method.title}</span>
                    <span className="mt-1 block break-words text-foreground/80">{method.value}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{method.note}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm">
              <div className="flex items-center gap-3 border-b border-border/70 p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-lg font-bold text-primary">Based in Nouakchott</h2>
                  <p className="text-sm text-muted-foreground">Serving travelers across Mauritania</p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15070.58975996462!2d-15.955937352499996!3d18.118030857030522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1771426949140!5m2!1sen!2sus"
                width="100%"
                height="470"
                className="block w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing Nouakchott, Mauritania"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Good to Know</p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Frequently asked questions.</h2>
          </div>
          <div className="mt-9 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-border/70 bg-white px-5 py-4 open:shadow-sm">
                <summary className="cursor-pointer list-none pr-8 font-bold text-primary marker:hidden">
                  {faq.question}
                  <span className="float-right text-accent transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 pr-8 leading-7 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>
    </main>
  )
}
