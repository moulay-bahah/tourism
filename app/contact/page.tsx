import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Metadata } from "next"
import { Hero } from "@/components/hero"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us | Book Your Mauritania Tour & Taxi Today",
  description: "Contact our local Mauritania tourism experts for tour inquiries, custom itineraries, and reliable Nouakchott taxi bookings. Get in touch today!",
}

export default function ContactPage() {
  const title = `Get in Touch`
  const description = `We'd love to hear from you.`
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Nouakchott Taxi & Tourism",
            "description": "Contact our local Mauritania tourism experts for tour inquiries, custom itineraries, and reliable Nouakchott taxi bookings.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Avenue Gamal Abdel Nasser",
              "addressLocality": "Nouakchott",
              "addressCountry": "MR"
            },
            "telephone": "+222 37 11 11 07",
            "email": "afroservices9@gmail.com"
          })
        }}
      />
      <Hero title={title} description={description} />
      <Section className="bg-slate-50 dark:bg-slate-900/50 flex-grow">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have a question about our services, pricing, or need to book a ride, our team is ready to answer all your questions.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                  <p className="text-muted-foreground">
                    123 Avenue Gamal Abdel Nasser<br />
                    Nouakchott, Mauritania
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
                  <p className="text-muted-foreground">
                    +222 37 11 11 07 (WhatsApp)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Address</h3>
                  <p className="text-muted-foreground">
                    afroservices9@gmail.com<br />
                    yeslemsouvi@gmail.com
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-1">Average response time: Within 24 hours</p>
                </div>
              </div>

                 {/* Map Placeholder */}
                 <div className="w-full h-64 bg-slate-200 rounded-lg overflow-hidden relative">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15070.58975996462!2d-15.955937352499996!3d18.118030857030522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2s!4v1771426949140!5m2!1sar!2s" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy"
                        title="Map of Nouakchott"
                    ></iframe>
                 </div>
            </div>

            {/* Contact Form */}
            {/* <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch for Tour & Taxi Bookings</h2>
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium leading-none">First name</label>
                    <input id="first-name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium leading-none">Last name</label>
                    <input id="last-name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
                  <input id="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground" placeholder="john.doe@example.com" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium leading-none">Subject</label>
                   <select id="subject" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground">
                        <option value="general">General Inquiry</option>
                        <option value="taxi">Taxi Booking</option>
                        <option value="tour">Tour Reservation</option>
                        <option value="feedback">Feedback</option>
                    </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
                  <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground" placeholder="How can we help you?" required />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div> */}
          </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white dark:bg-slate-900 border-t">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary">Do you help with Mauritania visas?</h3>
              <p className="text-muted-foreground mt-1">Yes, we can provide letters of invitation for our booked tour guests and assist with the visa-on-arrival process at Nouakchott airport.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">Do you offer airport pickups?</h3>
              <p className="text-muted-foreground mt-1">Absolutely! We provide 24/7 reliable taxi and airport transfer services directly from Nouakchott Oumtounsy International Airport to your hotel.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">Are your Sahara desert tours safe?</h3>
              <p className="text-muted-foreground mt-1">Your safety is our priority. Mauritania is known for its hospitality, and our expert local guides ensure all our Sahara and city tours follow secure routes.</p>
            </div>
          </div>
          <div className="text-center pt-8 mt-8 border-t">
            <p className="text-lg text-muted-foreground">
              Still browsing? View all our <Link href="/services" className="text-primary font-medium hover:underline">Mauritania Travel Services</Link>.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
