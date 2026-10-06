export const SITE_URL = "https://docsapi.co"
export const SITE_NAME = "DocsAPI"
export const SITE_TAGLINE = "Document AI & OCR API for Builders"
export const SITE_DESCRIPTION =
  "DocsAPI, built by HyperVerge, is the document intelligence API for SMB lending and fintech: OCR, classification, KYC and AML document checks in one API."
export const SITE_LOGO = `${SITE_URL}/docsapi-logo.png`
export const SITE_OG_IMAGE = `${SITE_URL}/og-default.png`
export const ORG_CONTACT_EMAIL = "contact@hyperverge.co"
export const ORG_FOUNDING_DATE = "2023-01-01"

// DocsAPI is a HyperVerge product. Its own sameAs stays empty (it has no separate
// profiles); HyperVerge's profiles belong on PARENT_ORG so DocsAPI is not declared to be HyperVerge.
export const ORG_SAME_AS: string[] = []

export const PARENT_ORG = {
  name: "HyperVerge",
  url: "https://hyperverge.co",
  sameAs: [
    "https://www.linkedin.com/company/hyperverge-inc-/",
    "https://twitter.com/HyperVerge",
    "https://www.facebook.com/HyperVerge/",
    "https://www.instagram.com/hypervergeinc/",
  ],
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path
  if (!path.startsWith("/")) path = `/${path}`
  return `${SITE_URL}${path}`
}

export function blogUrl(slug: string): string {
  return `${SITE_URL}/resources/blogs/${slug}`
}

export function authorUrl(slug: string): string {
  return `${SITE_URL}/author/${slug}`
}
