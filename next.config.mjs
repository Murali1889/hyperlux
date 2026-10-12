/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        // Consolidated: removed duplicate passport blog (id 9) into id 7.
        // Both targeted primary keyword "passport ocr" — split rankings pos 43 + 67.
        source: "/resources/blogs/passport-ocr-revolutionizing-document-processing-with-intelligent-solutions",
        destination: "/resources/blogs/passport-ocr-revolutionizing-identity-verification-with-automated-data-extraction",
        permanent: true,
      },
      {
        // Consolidated: the 2025 "OCR in Finance" anecdote post competed with the 2026 pillar guide
        // for "ocr in finance". Folded into ocr-finance.
        source: "/resources/blogs/ocr-in-finance-transforming-document-processing-for-modern-financial-operations",
        destination: "/resources/blogs/ocr-finance",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
