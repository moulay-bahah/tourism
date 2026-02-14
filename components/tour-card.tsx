import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TourCardProps {
  title: string
  description: string
  image: string
  href?: string
  className?: string
}

export function TourCard({ title, description, image, href = "/tours", className }: TourCardProps) {
  return (
    <Card className={cn("group overflow-hidden border-none shadow-md flex flex-col h-full", className)}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-serif text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base line-clamp-3">{description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild variant="ghost" className="group-hover:text-primary pl-0 hover:bg-transparent">
          <Link href={href} className="flex items-center gap-2">
            Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
