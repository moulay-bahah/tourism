import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface TourCardProps {
  eyebrow: string
  title: string
  description: string
  image: string
  priority?: boolean
}

export function TourCard({ eyebrow, title, description, image, priority = false }: TourCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={image}
          alt={`${title} in Mauritania`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
          {eyebrow}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
        <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-sm text-sm font-bold text-primary transition-colors hover:text-accent">
          Plan This Experience
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
