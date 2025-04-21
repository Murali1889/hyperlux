export interface Author {
  id: string
  name: string
  title: string
  avatar: string
  bio: string
  twitter?: string
  linkedin?: string
}

export interface BlogPost {
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
