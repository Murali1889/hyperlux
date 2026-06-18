import type { Metadata } from "next"
import { SITE_URL, SITE_NAME, SITE_OG_IMAGE } from "./seo"

export interface PageMetaInput {
  title: string
  description: string
  path: string
  image?: string
  type?: "website" | "article"
  noindex?: boolean
}

export function buildPageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  noindex = false,
}: PageMetaInput): Metadata {
  // Root path → bare domain (no trailing slash) to avoid canonical-with-slash duplicates
  const url =
    path === "/" || path === ""
      ? SITE_URL
      : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
  const ogImage = image ?? SITE_OG_IMAGE

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
  }
}
