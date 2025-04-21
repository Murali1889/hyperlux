import { Section, SectionHeader } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const latestNewsletters = [
  {
    id: 1,
    title: "Document Processing Trends - Q3 2023",
    excerpt:
      "The latest trends in OCR software and document automation technology and how they're impacting lending institutions across mortgage and small business sectors.",
    date: "September 15, 2023",
    slug: "industry-classification-trends-q3-2023",
    link: "/resources/newsletters/industry-classification-trends-q3-2023",
  },
  {
    id: 2,
    title: "OCR Software Product Updates - August 2023",
    excerpt:
      "New features, improvements, and integrations added to our AI-powered OCR platform for enhanced fraud detection and data extraction.",
    date: "August 31, 2023",
    slug: "hyperverge-product-updates-august-2023",
    link: "/resources/newsletters/hyperverge-product-updates-august-2023",
  },
  {
    id: 3,
    title: "Regulatory Roundup for Document Processing - Summer 2023",
    excerpt:
      "A summary of recent regulatory changes affecting OCR software in lending and financial services, with compliance tips for document automation.",
    date: "August 15, 2023",
    slug: "regulatory-roundup-summer-2023",
    link: "/resources/newsletters/regulatory-roundup-summer-2023",
  },
  {
    id: 4,
    title: "Customer Success Stories with OCR Software - July 2023",
    excerpt:
      "Highlighting recent success stories from customers using our OCR software across different financial sectors, including a lender who saved 100 hours monthly.",
    date: "July 31, 2023",
    slug: "customer-success-stories-july-2023",
    link: "/resources/newsletters/customer-success-stories-july-2023",
  },
]

export default function LatestNewsletters() {
  return (
    <Section>
      <div className="flex justify-between items-center mb-8">
        <SectionHeader
          title="Latest Newsletters on OCR Software & Lending Automation"
          description=""
          className="mb-0"
        />
        <Button asChild variant="outline" className="hidden md:flex">
          <Link href="/resources/newsletters" className="flex items-center gap-2">
            View All Newsletters <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {latestNewsletters.map((newsletter) => (
          <Link key={newsletter.id} href={newsletter.link} className="group">
            <Card className="border-slate-200 h-full transition-all duration-200 group-hover:border-indigo-300 group-hover:shadow-md">
              <CardContent className="p-6 space-y-4">
                <div>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {newsletter.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                    {newsletter.title}
                  </h3>
                  <p className="text-muted-foreground">{newsletter.excerpt}</p>
                </div>
                <div className="pt-2">
                  <span className="text-indigo-600 font-medium text-sm group-hover:underline">Read Newsletter</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Button asChild variant="outline">
          <Link href="/resources/newsletters" className="flex items-center gap-2">
            View All Newsletters <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}
