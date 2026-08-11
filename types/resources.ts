export interface FAQ {
  question: string
  answer: string
}

export interface Author {
  id: string
  slug: string
  name: string
  title: string
  avatar: string
  bio: string
  longBio?: string
  knowsAbout?: string[]
  credentials?: string[]
  twitter?: string
  linkedin?: string
}

export type BlogCluster = "ocr" | "ai-doc" | "compliance" | "comparison" | "industry-trends"

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  description?: string
  content: string
  image: string
  featuredImage: string
  category: string
  date: string
  datePublished?: string
  dateModified?: string
  last_updated?: string
  readTime: string
  author: Author
  metaTag: string
  primary_keyword?: string
  secondary_keywords?: string[]
  tags?: string[]
  faq?: FAQ[]
  cluster?: BlogCluster
  noindex?: boolean
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  featuredImage: string
  category: string
  date: string
  readTime: string
  author: Author
  tags: string[]
}

export interface Newsletter {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  date: string
  category: string
}

export interface ResourceCategory {
  id: string
  name: string
  slug: string
  count: number
  icon: string
}
