import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JSX } from "react"

export function Hero({title, description}: {title: string | JSX.Element, description: string | JSX.Element}) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center text-center overflow-hidden">
      {/* Vibrant Sunset to Ocean Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary/95 to-accent/90">
      </div>
      <div className="container relative z-10 flex flex-col items-center gap-8 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-5">
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-5xl font-serif font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-lg">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-gray-100 drop-shadow-md">
             {description}
          </p>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="h-12 w-8 rounded-full border-2 border-white/60 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}
