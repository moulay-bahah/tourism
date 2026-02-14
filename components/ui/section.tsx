import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean
  containerClassName?: string
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, containerClassName, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 md:py-24 overflow-hidden", className)}
        {...props}
      >
        {container ? (
          <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", containerClassName)}>
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    )
  }
)
Section.displayName = "Section"

export { Section }
