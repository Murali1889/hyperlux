"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Menu, X, Phone } from "lucide-react"
import { FileText, Briefcase, Shield, Users, Scale } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  {
    name: "Solutions", href: "/solutions", dropdownItems: [
      {
        title: "Finance Automation",
        description: "Automate invoices, three-way match and bank-statement parsing",
        href: "/solutions/finance-automation",
        icon: <FileText className="h-5 w-5 text-indigo-600" />,
      },
      {
        title: "Operations Efficiency",
        description: "POD, packing-slip & shipment-log OCR for supply chain",
        href: "/solutions/operations-efficiency",
        icon: <Briefcase className="h-5 w-5 text-indigo-600" />,
      },
      {
        title: "Compliance & Risk",
        description: "AML/KYC, SOX, and GDPR redaction with audit trails",
        href: "/solutions/compliance-risk",
        icon: <Shield className="h-5 w-5 text-indigo-600" />,
      },
      {
        title: "Customer Experience",
        description: "30-second digital onboarding with instant document decisions",
        href: "/solutions/customer-experience",
        icon: <Users className="h-5 w-5 text-indigo-600" />,
      },
      {
        title: "Legal Automation",
        description: "Contract clause extraction and NDA redaction",
        href: "/solutions/legal-automation",
        icon: <Scale className="h-5 w-5 text-indigo-600" />,
      },
    ]
  },
  { name: "Industries", href: "/industries" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Resources", href: "/resources" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur-md px-4 md:px-6 flex items-center h-16 justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <img src="/docsapi-logo.png" alt="DocsAPI Logo" className="h-8 w-8" />
        <span className="text-xl font-bold">DocsAPI</span>
      </Link>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList >
          {navItems.map((item) => (
            <NavigationMenuItem key={item.name}>
              {item.dropdownItems ? (
                <>
                  <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground">
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white p-4 rounded-lg shadow-xl w-[380px] border-1 border-black md:w-[320px]">
                    <ul className="grid gap-3">
                      {item.dropdownItems.map((subItem, index) => (
                        <li key={index}>
                          <Link href={subItem.href} legacyBehavior passHref>
                            <NavigationMenuLink className="flex gap-3 rounded-md p-3 hover:bg-indigo-50">
                              {subItem.icon}
                              <div>
                                <div className="font-medium text-indigo-900">{subItem.title}</div>
                                <div className="text-sm text-muted-foreground">{subItem.description}</div>
                              </div>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2">
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>

      <div className="flex items-center gap-4">
        <Button asChild className="hidden md:inline-flex bg-indigo-600 hover:bg-indigo-700">
          <Link href="/book-demo">Book a Demo</Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700 mt-4">
                <Link href="/book-demo">Book a Demo</Link>
              </Button>
              <Link
                href="tel:+18005551234"
                className="flex items-center justify-center gap-2 text-indigo-600 mt-4"
              >
                <Phone className="h-4 w-4" />
                (800) 555-1234
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
