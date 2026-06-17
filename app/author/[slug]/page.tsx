import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { authorBySlug, authors } from "@/data/authors"
import { blogs } from "@/data/blogs"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Linkedin, ArrowRight, BookOpen, Award } from "lucide-react"
import { PersonJsonLd } from "@/components/json-ld/PersonJsonLd"
import { ProfilePageJsonLd } from "@/components/json-ld/ProfilePageJsonLd"
import { BreadcrumbJsonLd } from "@/components/json-ld/BreadcrumbJsonLd"
import { SITE_URL, SITE_NAME, authorUrl, absoluteUrl } from "@/lib/seo"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const author = authorBySlug(slug)
  if (!author) return { title: "Author Not Found" }

  const title = `${author.name} — ${author.title}`
  const description = author.bio
  const url = authorUrl(author.slug)
  const image = absoluteUrl(author.avatar)

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "profile",
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [{ url: image, width: 400, height: 400, alt: author.name }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [image],
    },
    robots: { index: true, follow: true, "max-image-preview": "large" },
  }
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params
  const author = authorBySlug(slug)
  if (!author) notFound()

  const authoredPosts = blogs.filter((b) => b.author.slug === author.slug)

  return (
    <>
      <PersonJsonLd author={author} />
      <ProfilePageJsonLd author={author} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Authors", url: `${SITE_URL}/author` },
          { name: author.name, url: authorUrl(author.slug) },
        ]}
      />

      <Section className="py-12 md:py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/resources/blogs" className="hover:text-indigo-600">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">{author.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="relative shrink-0">
              <div className="h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                <div className="h-full w-full rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={author.avatar || "/placeholder.svg"}
                    alt={`${author.name}, ${author.title}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                {author.name}
              </h1>
              <p className="text-indigo-600 font-medium text-lg mb-6">{author.title}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                {author.twitter && (
                  <a
                    href={author.twitter}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="group h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all"
                    aria-label={`${author.name} on Twitter`}
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                )}
                {author.linkedin && (
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="group h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all"
                    aria-label={`${author.name} on LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
              </div>

              <p className="text-slate-700 leading-relaxed">{author.bio}</p>
            </div>
          </div>
        </div>
      </Section>

      {(author.longBio || author.credentials?.length || author.knowsAbout?.length) && (
        <Section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
            {author.longBio && (
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About {author.name.split(" ")[0]}</h2>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line">{author.longBio}</p>
              </div>
            )}

            <aside className="space-y-8">
              {author.credentials && author.credentials.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3">
                    <Award className="h-5 w-5 text-indigo-600" /> Credentials
                  </h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    {author.credentials.map((c, i) => (
                      <li key={i} className="leading-relaxed">
                        • {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {author.knowsAbout && author.knowsAbout.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3">
                    <BookOpen className="h-5 w-5 text-indigo-600" /> Topics
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {author.knowsAbout.map((t, i) => (
                      <li
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </Section>
      )}

      <Section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Posts by {author.name.split(" ")[0]}
          </h2>
          <p className="text-slate-600 mb-8">
            {authoredPosts.length} {authoredPosts.length === 1 ? "guide" : "guides"} on document AI, OCR, and compliance.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {authoredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/resources/blogs/${post.slug}`}
                className="group"
              >
                <Card className="h-full border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all duration-200">
                  <CardContent className="p-6 flex flex-col h-full">
                    <span className="text-xs uppercase tracking-wider text-indigo-600 font-semibold mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1 text-indigo-600 font-medium group-hover:gap-2 transition-all">
                        Read <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
