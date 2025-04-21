import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Linkedin } from "lucide-react"

export default function BlogAuthor({ author }: { author: any }) {
  return (
    <Section className="py-8">
      <div className="max-w-3xl mx-auto">
        <Card className="border-slate-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="h-24 w-24 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                <img
                  src={author.avatar || "/placeholder.svg"}
                  alt={author.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">{author.name}</h3>
                <p className="text-muted-foreground mb-4">{author.title}</p>
                <p className="mb-4">{author.bio}</p>
                <div className="flex justify-center md:justify-start gap-3">
                  {author.twitter && (
                    <a
                      href={author.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {author.linkedin && (
                    <a
                      href={author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
