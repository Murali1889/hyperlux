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
    ]
  },
}

export default nextConfig
