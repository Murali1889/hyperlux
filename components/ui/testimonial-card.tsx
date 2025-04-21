import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: {
    name: string
    title: string
    image?: string
  }
  company: {
    name: string
    logo?: string
    tagline?: string
  }
}

export function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <div className="grid md:grid-cols-[300px_1fr] gap-6 items-center">
      <Card className="bg-primary/5 border-primary/10 h-full">
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full">
          <div className="relative w-full aspect-square max-w-[200px] bg-primary/10 rounded-md overflow-hidden flex items-center justify-center">
            <div className="text-3xl font-bold text-primary/30">{company.name}</div>
          </div>
          {company.tagline && <p className="text-sm font-medium text-muted-foreground">{company.tagline}</p>}
        </CardContent>
      </Card>

      <div className="space-y-4">
        <blockquote className="text-xl italic">"{quote}"</blockquote>
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center">
            {author.image ? (
              <img src={author.image || "/placeholder.svg"} alt={author.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-sm font-medium text-slate-600">
                {author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            )}
          </div>
          <div>
            <div className="font-medium">{author.name}</div>
            <div className="text-sm text-muted-foreground">{author.title}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
