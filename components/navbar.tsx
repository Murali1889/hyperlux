"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

const navItems = [
  { name: "Products", href: "/products" },
  { name: "Industries", href: "/industries" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/resources" },
  { name: "Customer", href: "#customer" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex h-16 items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">
            HV
          </div>
          <span className="text-xl font-bold">HYPERVERGE</span>
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Link href="tel:+18005551234" className="hidden md:flex items-center gap-2 text-sm font-medium text-indigo-600">
          <Phone className="h-4 w-4" />
          (800) 555-1234
        </Link>

        <Button asChild variant="outline" className="hidden md:inline-flex">
          <Link href="/contact-sales">Contact Sales</Link>
        </Button>

        <Button asChild className="hidden md:inline-flex bg-indigo-600 hover:bg-indigo-700">
          <Link href="/book-demo">Book a Demo</Link>
        </Button>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-white border-b border-gray-200 md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact-sales" onClick={() => setMobileMenuOpen(false)}>
                  Contact Sales
                </Link>
              </Button>
              <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
                <Link href="/book-demo" onClick={() => setMobileMenuOpen(false)}>
                  Book a Demo
                </Link>
              </Button>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="tel:+18005551234"
                className="flex items-center justify-center gap-2 py-2 text-indigo-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                (800) 555-1234
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
