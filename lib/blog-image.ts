// Two hero images were multi-megabyte PNGs shared by dozens of posts.
// Serve the compressed WebP copies in public/images instead.
const WEBP: Record<string, string> = {
  "/images/ocr-process.png": "/images/ocr-process.webp",
  "/images/invoice-processing.png": "/images/invoice-processing.webp",
}

export function optimizedImage(src?: string): string {
  if (!src) return "/placeholder.svg"
  return WEBP[src] || src
}
