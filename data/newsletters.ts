export type Newsletter = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  date: string
  category: string
}

export const newsletters: Newsletter[] = [
  {
    id: "1",
    title: "Industry Classification Trends - Q3 2023",
    slug: "industry-classification-trends-q3-2023",
    excerpt: "The latest trends in industry classification technology and how they're impacting lending institutions.",
    content: "Full newsletter content would go here...",
    date: "September 15, 2023",
    image: "/resources/industry-classification-diagram.png",
    category: "Quarterly Update",
  },
  {
    id: "2",
    title: "HyperVerge Product Updates - August 2023",
    slug: "hyperverge-product-updates-august-2023",
    excerpt: "New features, improvements, and integrations added to the HyperVerge platform in the past month.",
    content: "Full newsletter content would go here...",
    date: "August 31, 2023",
    image: "/resources/blog-dashboard.png",
    category: "Product Updates",
  },
  {
    id: "3",
    title: "Regulatory Roundup - Summer 2023",
    slug: "regulatory-roundup-summer-2023",
    excerpt:
      "A summary of recent regulatory changes affecting industry classification in lending and financial services.",
    content: "Full newsletter content would go here...",
    date: "August 15, 2023",
    image: "/resources/article-dashboard.png",
    category: "Regulatory Updates",
  },
]
