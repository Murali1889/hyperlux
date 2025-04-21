import { Section, SectionHeader } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const popularArticles = [
  {
    id: 1,
    title: "The Evolution of Document Classification in Modern Lending",
    excerpt:
      "An in-depth look at how OCR software and AI document processing have evolved and their role in today's lending landscape for mortgage and small business financing.",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234F46E5;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%236366F1;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad1)'/%3E%3Cpath d='M100,100 L500,100 L500,300 L100,300 Z' stroke='white' strokeWidth='2' fill='none' opacity='0.2'/%3E%3Cpath d='M150,150 L450,150 L450,250 L150,250 Z' stroke='white' strokeWidth='2' fill='none' opacity='0.2'/%3E%3Ccircle cx='300' cy='200' r='50' stroke='white' strokeWidth='2' fill='none' opacity='0.3'/%3E%3Ctext x='300' y='205' fontFamily='Arial' fontSize='16' fill='white' textAnchor='middle'%3EIndustry Standards%3C/text%3E%3Cpath d='M200,250 L250,200 L300,220 L350,180 L400,250' stroke='white' strokeWidth='3' fill='none'/%3E%3C/svg%3E",
    category: "Industry Standards",
    date: "July 20, 2023",
    readTime: "12 min read",
    slug: "evolution-sic-naics-codes-lending",
    link: "/resources/articles/evolution-sic-naics-codes-lending",
  },
  {
    id: 2,
    title: "Regulatory Compliance and Document Automation: What Lenders Need to Know",
    excerpt:
      "Understanding the regulatory requirements around document processing and how OCR software ensures compliance with bank-level security and audit trails.",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23EC4899;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23DB2777;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad2)'/%3E%3Crect x='150' y='100' width='300' height='200' stroke='white' strokeWidth='2' fill='none' opacity='0.2'/%3E%3Cpath d='M300,140 L350,180 L300,220 L250,180 Z' stroke='white' strokeWidth='2' fill='none' opacity='0.3'/%3E%3Ccircle cx='300' cy='180' r='60' stroke='white' strokeWidth='2' fill='none' opacity='0.2'/%3E%3Ctext x='300' y='185' fontFamily='Arial' fontSize='16' fill='white' textAnchor='middle'%3ECompliance%3C/text%3E%3Cpath d='M250,250 L280,220 L300,240 L320,220 L350,250' stroke='white' strokeWidth='3' fill='none'/%3E%3Cpath d='M200,150 L400,150' stroke='white' strokeWidth='2' opacity='0.3' strokeDasharray='5,5'/%3E%3Cpath d='M200,170 L400,170' stroke='white' strokeWidth='2' opacity='0.3' strokeDasharray='5,5'/%3E%3Cpath d='M200,190 L400,190' stroke='white' strokeWidth='2' opacity='0.3' strokeDasharray='5,5'/%3E%3C/svg%3E",
    category: "Compliance",
    date: "June 28, 2023",
    readTime: "10 min read",
    slug: "regulatory-compliance-industry-classification",
    link: "/resources/articles/regulatory-compliance-industry-classification",
  },
  {
    id: 3,
    title: "The Role of AI OCR in Transforming Commercial Lending Operations",
    excerpt:
      "How artificial intelligence and OCR software are reshaping commercial lending from application to portfolio management with 99.9% accurate data extraction.",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310B981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23059669;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad3)'/%3E%3Ccircle cx='200' cy='150' r='30' stroke='white' strokeWidth='2' fill='none' opacity='0.3'/%3E%3Ccircle cx='300' cy='250' r='30' stroke='white' strokeWidth='2' fill='none' opacity='0.3'/%3E%3Ccircle cx='400' cy='150' r='30' stroke='white' strokeWidth='2' fill='none' opacity='0.3'/%3E%3Cpath d='M200,150 L300,250' stroke='white' strokeWidth='2' opacity='0.5'/%3E%3Cpath d='M300,250 L400,150' stroke='white' strokeWidth='2' opacity='0.5'/%3E%3Cpath d='M200,150 L400,150' stroke='white' strokeWidth='2' opacity='0.5'/%3E%3Ctext x='300' y='205' fontFamily='Arial' fontSize='16' fill='white' textAnchor='middle'%3EAI Technology%3C/text%3E%3Cpath d='M150,300 L250,200 L350,250 L450,150' stroke='white' strokeWidth='3' fill='none'/%3E%3C/svg%3E",
    category: "AI Technology",
    date: "June 12, 2023",
    readTime: "15 min read",
    slug: "ai-transforming-commercial-lending",
    link: "/resources/articles/ai-transforming-commercial-lending",
  },
]

export default function PopularArticles() {
  return (
    <Section background="muted">
      <div className="flex justify-between items-center mb-8">
        <SectionHeader title="Popular Articles on Document Automation & OCR Software" description="" className="mb-0" />
        <Button asChild variant="outline" className="hidden md:flex">
          <Link href="/resources/articles" className="flex items-center gap-2">
            View All Articles <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {popularArticles.map((article) => (
          <Link key={article.id} href={article.link} className="group">
            <Card className="border-slate-200 overflow-hidden h-full transition-all duration-200 group-hover:border-indigo-300 group-hover:shadow-md">
              <div className="aspect-[16/9] relative overflow-hidden bg-slate-100">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <div className="text-sm text-indigo-600 font-medium mb-2">{article.category}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Button asChild variant="outline">
          <Link href="/resources/articles" className="flex items-center gap-2">
            View All Articles <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}
