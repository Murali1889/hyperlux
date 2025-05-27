import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from 'react-hot-toast';
import FeedbackProviderClient from "@/providers/FeedbackProviderClient"

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
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-video-preview': 1,
    'max-snippet': 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K5PD9TF5DE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K5PD9TF5DE');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MMLTFQL4');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <FeedbackProviderClient>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster position="top-center" />
          </div>
        </FeedbackProviderClient>
      </body>
    </html>
  )
}