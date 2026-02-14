import { Star } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Ahmed Ould Bilal",
    role: "Local Business Owner",
    content: "The most reliable taxi service in Nouakchott. Always on time and the cars are very clean. Highly recommended for business travel.",
    avatar: "AH",
  },
  {
    name: "Sarah Jenkins",
    role: "tourist from UK",
    content: "Our desert tour to Chinguetti was absolutely magical. The guides were knowledgeable and safe. It was the highlight of our trip to Mauritania!",
    avatar: "SJ",
  },
  {
    name: "Mohamed Lemine",
    role: "Frequent Traveler",
    content: "I use their airport transfer service every time I fly. Hassle-free and professional. Great communication via WhatsApp too.",
    avatar: "ML",
  },
]

export function Testimonials() {
  return (
    <Section className="bg-muted/30">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-serif font-bold tracking-tight text-primary">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground text-lg">
          Trusted by locals and travelers alike.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-none shadow-sm bg-background">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.avatar}`} alt={testimonial.name} />
                <AvatarFallback>{testimonial.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
