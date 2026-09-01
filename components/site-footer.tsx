import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react"

const whatsappUrl = "https://wa.me/22237111107"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3 rounded-md" aria-label="Afro Service Tourism home">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white p-2">
                <Image src="/images/logo.png" alt="" width={50} height={45} />
              </span>
              <span>
                <span className="block font-serif text-xl font-bold text-white">Afro Service Tourism</span>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-secondary">Mauritania</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-white/70">
              Private tours, airport transfers, and practical local support for travelers exploring Nouakchott and the Mauritanian Sahara.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li><Link href="/" className="transition-colors hover:text-white">Home</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>Nouakchott, Mauritania</span>
              </li>
              <li>
                <a href="tel:+22237111107" className="flex items-center gap-3 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  +222 37 11 11 07
                </a>
              </li>
              <li>
                <a href="mailto:afroservices9@gmail.com" className="flex items-center gap-3 break-all transition-colors hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  afroservices9@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-accent-foreground" aria-label="Chat on WhatsApp">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/afro_service_tourism" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-accent-foreground" aria-label="Visit Afro Service Tourism on Instagram">
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Afro Service Tourism. All rights reserved.</p>
          <p>Local knowledge. Thoughtful journeys.</p>
        </div>
      </div>
    </footer>
  )
}
