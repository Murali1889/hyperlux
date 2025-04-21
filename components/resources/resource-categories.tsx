import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, FileText, Mail, TrendingUp, Lightbulb, Award } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    title: "Blogs",
    description: "Insights, tips, and best practices for AI document processing and lending automation",
    icon: BookOpen,
    color: "bg-indigo-100 text-indigo-600",
    link: "/resources/blogs",
  },
  {
    title: "Articles",
    description: "In-depth analysis and research on OCR software for mortgage and small business lending",
    icon: FileText,
    color: "bg-blue-100 text-blue-600",
    link: "/resources/articles",
  },
  {
    title: "Newsletters",
    description: "Regular updates on document automation trends and OCR innovations",
    icon: Mail,
    color: "bg-green-100 text-green-600",
    link: "/resources/newsletters",
  },
  {
    title: "Case Studies",
    description: "Real-world success stories showcasing 99.9% accurate data extraction and fraud detection",
    icon: Award,
    color: "bg-purple-100 text-purple-600",
    link: "/resources/case-studies",
  },
  {
    title: "Industry Trends",
    description: "Latest developments in AI-powered OCR software and financial technology",
    icon: TrendingUp,
    color: "bg-amber-100 text-amber-600",
    link: "/resources/trends",
  },
  {
    title: "Guides & Tutorials",
    description: "Step-by-step instructions for integrating OCR software with your CRM or LOS",
    icon: Lightbulb,
    color: "bg-red-100 text-red-600",
    link: "/resources/guides",
  },
]

export default function ResourceCategories() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.title} href={category.link} className="group">
            <Card className="border-slate-200 h-full transition-all duration-200 group-hover:border-indigo-300 group-hover:shadow-md">
              <CardContent className="p-6 space-y-4">
                <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  )
}
