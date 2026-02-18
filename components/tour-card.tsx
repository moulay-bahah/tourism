import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface TourCardProps {
  title: string
  description: string
  image: string
  href?: string
  className?: string
}

export function TourCard({ title, description, image, href = "/tours", className }: TourCardProps) {
  return (
    <span
      className={cn(
        "group flex flex-col h-full bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border/50", 
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col flex-grow p-5 space-y-3">
        <h3 className="font-serif text-xl font-bold tracking-tight text-primary group-hover:text-primary/90 transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </span>
  )
}
