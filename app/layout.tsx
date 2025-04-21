import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ConfettiProvider } from "@/components/global-confetti-trigger"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HyperVerge - AI-Powered Industry Classification for Small Business Lending",
  description:
    "Transform your small business lending with AI-powered industry classification that's 5x faster and 3x more accurate than manual processes.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfettiProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ConfettiProvider>
      </body>
    </html>
  )
}
