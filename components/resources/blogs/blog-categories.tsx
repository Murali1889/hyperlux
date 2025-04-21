import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"

const categories = [
  "All",
  "Small Business Lending",
  "Commercial Banking",
  "Credit Unions",
  "Fintech",
  "Risk Management",
  "Compliance",
  "Technology",
  "Industry Trends",
]

export default function BlogCategories() {
  return (
    <Section className="py-6">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category, index) => (
          <Button
            key={category}
            variant={index === 0 ? "default" : "outline"}
            size="sm"
            className={index === 0 ? "bg-indigo-600 hover:bg-indigo-700" : ""}
          >
            {category}
          </Button>
        ))}
      </div>
    </Section>
  )
}
