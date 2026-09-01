import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroProps {
  title: ReactNode
  description: ReactNode
  eyebrow?: string
  imageSrc?: string
  compact?: boolean
  primaryAction?: { href: string; label: string; external?: boolean }
  secondaryAction?: { href: string; label: string }
  highlights?: string[]
}

export function Hero({
  title,
  description,
  eyebrow = "Locally Guided Travel in Mauritania",
  imageSrc = "/images/hero.jpg",
  compact = false,
  primaryAction,
  secondaryAction,
  highlights = [],
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative isolate flex overflow-hidden bg-primary text-white",
        compact ? "min-h-[430px] md:min-h-[500px]" : "min-h-[620px] md:min-h-[700px]",
      )}
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,36,48,0.96)_0%,rgba(8,36,48,0.82)_47%,rgba(8,36,48,0.28)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(8,36,48,0.58)_0%,transparent_55%)]" />

      <div className="mx-auto flex w-full max-w-7xl items-center px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-secondary sm:text-sm">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
            {description}
          </p>

          {primaryAction || secondaryAction ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryAction ? (
                <Button asChild variant="accent" size="xl">
                  {primaryAction.external ? (
                    <a href={primaryAction.href} target="_blank" rel="noreferrer">
                      {primaryAction.label}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <Link href={primaryAction.href}>
                      {primaryAction.label}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </Button>
              ) : null}
              {secondaryAction ? (
                <Button asChild variant="hero" size="xl">
                  <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
                </Button>
              ) : null}
            </div>
          ) : null}

          {highlights.length > 0 ? (
            <ul className="mt-9 flex flex-col gap-3 text-sm font-bold text-white/85 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  )
}
