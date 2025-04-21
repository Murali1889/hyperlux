import { Button } from "@/components/ui/button"

export default function ArticleCategories() {
  const categories = [
    "All Articles",
    "Industry Research",
    "Financial Technology",
    "Risk Management",
    "Lending Innovation",
    "Regulatory Compliance",
    "Market Analysis",
  ]

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-2xl font-bold text-indigo-900">Browse by Category</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={
                index === 0
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
