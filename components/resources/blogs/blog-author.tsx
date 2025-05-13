import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Linkedin, Mail, Globe } from "lucide-react"

export default function BlogAuthor({ author }: { author: any }) {
  return (
    <Section className="py-12 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Author Image */}
              <div className="relative">
                <div className="h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                  <div className="h-full w-full rounded-full overflow-hidden border-4 border-white">
                    <img
                      src={author.avatar || "/placeholder.svg"}
                      alt={author.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-indigo-400 rounded-full opacity-20"></div>
              </div>

              {/* Author Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{author.name}</h3>
                  <p className="text-indigo-600 font-medium">{author.title}</p>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">{author.bio}</p>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {author.twitter && (
                    <a
                      href={author.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all duration-300"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    </a>
                  )}
                  {author.linkedin && (
                    <a
                      href={author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    </a>
                  )}
                  {author.email && (
                    <a
                      href={`mailto:${author.email}`}
                      className="group h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all duration-300"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    </a>
                  )}
                  {author.website && (
                    <a
                      href={author.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all duration-300"
                      aria-label="Website"
                    >
                      <Globe className="h-4 w-4 group-hover:scale-110 transition-transform" />
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
