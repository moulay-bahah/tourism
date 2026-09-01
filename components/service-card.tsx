import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

export function ServiceCard({ title, description, icon: Icon, className }: ServiceCardProps) {
  return (
    <Card
      className={cn(
        "group border-border/70 bg-white shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg",
        className,
      )}
    >
      <CardHeader className="pb-3">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <CardTitle className="text-xl leading-7 text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-7 text-muted-foreground">
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}
