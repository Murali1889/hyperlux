import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DocsAPI - AI-Powered Industry Classification for Small Business Lending",
  description:
    "Transform your small business lending with AI-powered industry classification that's 5x faster and 3x more accurate than manual processes.",
  generator: 'docsapi.com',
  icons: {
    icon: '/docsapi-logo.png',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
          <Footer />
          <Toaster position="top-center" />
          </div>
      </body>
    </html>
  )
}
