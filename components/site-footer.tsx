import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react"

export function  SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="container py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-4">
          
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-secondary">Nouakchott Taxi & Tourism</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Experience the warmth of Mauritania. From reliable city transfers to breathtaking desert expeditions, we are your trusted local guide.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-secondary">Services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link href="/Services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-secondary">Contact Us</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>123 Avenue de l'Ambassade, Nouakchott, Mauritania</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <span>+222 37 11 11 07</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <span>afroservices9@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-secondary">Follow Us</h4>
            <div className="flex space-x-4">
              {/* <Link href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link> */}
              <Link href="https://www.instagram.com/afro_service_tourism?igsh=MWlkMTl0MDdvenFpNg%3D%3D&utm_source=qr" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          
        </div>
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Nouakchott Taxi & Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
