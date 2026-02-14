import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center text-center text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80"
          alt="Mauritania Desert Road"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 flex flex-col items-center gap-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Nouakchott Taxi & Tourism
        </h1>
        <p className="max-w-[42rem] text-lg text-gray-200 sm:text-xl">
          Book reliable taxi services and exciting tourism tours in Nouakchott, Mauritania. 
          Explore beaches, deserts, and cultural landmarks with us.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild className="h-12 px-8 text-lg">
            <Link href="/taxi">Book a Taxi</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="h-12 px-8 text-lg bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
            <Link href="/tours">Explore Tours</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
