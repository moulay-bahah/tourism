import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80"
          alt="Mauritania Desert Landscape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </div>

      <div className="container relative z-10 flex flex-col items-center gap-8 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-5">
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-5xl font-serif font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-lg">
            Discover the Heart <br /> of <span className="text-secondary">Mauritania</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200 sm:text-xl md:text-2xl font-light leading-relaxed drop-shadow-md">
             Your gateway to the Sahara. Reliable taxi services and unforgettable guided tours in Nouakchott and beyond.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button size="lg" asChild className="h-14 px-8 text-lg font-semibold shadow-lg hover:scale-105 transition-transform">
            <Link href="/taxi">Book a Taxi</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-black hover:scale-105 transition-all">
            <Link href="/tours">Explore Tours</Link>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="h-12 w-8 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}
