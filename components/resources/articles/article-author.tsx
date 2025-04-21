import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ArticleAuthor({ slug }: { slug: string }) {
  // In a real application, you would fetch the author data based on the article slug
  const author = {
    name: "Dr. Sarah Chen",
    role: "Chief Research Officer",
    bio: "Dr. Sarah Chen leads HyperVerge's research initiatives, focusing on the intersection of artificial intelligence and financial services. With over 15 years of experience in data science and risk modeling, she has published numerous papers on predictive analytics in lending.",
    image: "/customer-avatar-1.png",
    twitter: "https://twitter.com/sarahchen",
    linkedin: "https://linkedin.com/in/sarahchen",
  }

  return (
    <section className="border-t border-gray-200 py-12">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 rounded-xl bg-indigo-50 p-6 sm:flex-row sm:items-start md:p-8">
          <Image
            src={author.image || "/placeholder.svg"}
            alt={author.name}
            width={100}
            height={100}
            className="rounded-full border-4 border-white shadow-md"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-indigo-900">{author.name}</h3>
            <p className="mb-3 text-indigo-700">{author.role}</p>
            <p className="mb-4 text-gray-700">{author.bio}</p>
            <div className="flex justify-center gap-3 sm:justify-start">
              <Button
                variant="outline"
                size="sm"
                className="border-indigo-200 text-indigo-700 hover:bg-indigo-100"
                asChild
              >
                <a href={author.twitter} target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  Twitter
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-indigo-200 text-indigo-700 hover:bg-indigo-100"
                asChild
              >
                <a href={author.linkedin} target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
