import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/docsapi-logo.png" alt="DocsAPI Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-white">DocsAPI</span>
            </Link>
            <p className="text-gray-400">AI-powered solutions for small business lending and financial services. DocsAPI is built by <a href="https://hyperverge.co" className="underline hover:text-white">HyperVerge</a>.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/HyperVerge/" target="blank" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/HyperVerge/" target="blank" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/hyperverge-inc-/" target="blank" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/hypervergeinc/" target="blank" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-gray-400 hover:text-white transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Popular Guides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/blogs/best-ocr-software-for-accounts-payable" className="text-gray-400 hover:text-white transition-colors">
                  Best OCR software for AP
                </Link>
              </li>
              <li>
                <Link href="/resources/blogs/accounts-payable-ocr" className="text-gray-400 hover:text-white transition-colors">
                  Accounts payable OCR
                </Link>
              </li>
              <li>
                <Link href="/documents/financial-docs" className="text-gray-400 hover:text-white transition-colors">
                  Financial document OCR
                </Link>
              </li>
              <li>
                <Link href="/resources/blogs/ocr-accuracy-benchmark-2026" className="text-gray-400 hover:text-white transition-colors">
                  OCR accuracy benchmark 2026
                </Link>
              </li>
              <li>
                <Link href="/resources/blogs/paddleocr-vs-tesseract-vs-docsapi" className="text-gray-400 hover:text-white transition-colors">
                  PaddleOCR vs Tesseract
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              {/* <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0" />
                <span>(800) 555-1234</span>
              </li> */}
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0" />
                <span>contact@hyperverge.co</span>
              </li>
              {/* <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0" />
                <span>123 AI Street, San Francisco, CA 94103</span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} DocsAPI. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link> */}
            {/* <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link> */}
            <Link href="/book-demo" className="text-gray-500 hover:text-white text-sm transition-colors">
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
