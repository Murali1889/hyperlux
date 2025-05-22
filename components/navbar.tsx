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
import { Menu, Phone, FileText, Briefcase, Shield, Users, Scale, CreditCard, FileCheck, BarChart4, Fingerprint, Hospital, Truck, FileSearch, Archive } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  {
    name: "Documents",
    href: "/documents",
    hasDropdown: true,
    dropdownItems: [
      {
        title: "Financial Documents",
        description: "Invoices, purchase orders, bank statements, and receipts",
        href: "/documents/financial-docs",
        icon: <CreditCard className="h-5 w-5 text-indigo-600" />,
        children: [
          {
            title: "Invoices",
            description: "Extract data from invoices with 99% accuracy",
            href: "/documents/financial-docs/invoices",
            icon: <FileText className="h-5 w-5 text-indigo-600" />,
          },
          {
            title: "Purchase Orders",
            description: "Process purchase orders in any format",
            href: "/documents/financial-docs/purchase-orders",
            icon: <FileCheck className="h-5 w-5 text-indigo-600" />,
          },
          {
            title: "Bank Statements",
            description: "Extract transaction data from bank statements",
            href: "/documents/financial-docs/bank-statements",
            icon: <BarChart4 className="h-5 w-5 text-indigo-600" />,
          },
        ],
      },
      {
        title: "Identity Documents",
        description: "Passports, driver's licenses, ID cards, and proof of address",
        href: "/documents/identity-docs",
        icon: <Fingerprint className="h-5 w-5 text-indigo-600" />,
        children: [
          {
            title: "Passports",
            description: "Extract data from passports with MRZ recognition",
            href: "/documents/identity-docs/passports",
            icon: <FileText className="h-5 w-5 text-indigo-600" />,
          },
          {
            title: "National IDs",
            description: "Process national ID cards from various countries",
            href: "/documents/identity-docs/national-ids",
            icon: <FileCheck className="h-5 w-5 text-indigo-600" />,
          },
          {
            title: "Driver Licenses",
            description: "Extract data from driver licenses worldwide",
            href: "/documents/identity-docs/driver-licences",
            icon: <FileText className="h-5 w-5 text-indigo-600" />,
          },
        ],
      },
      {
        title: "Legal Documents",
        description: "Contracts, agreements, NDAs, and legal forms",
        href: "/documents/legal-docs",
        icon: <Scale className="h-5 w-5 text-indigo-600" />,
      },
      {
        title: "Medical Documents",
        description: "Prescriptions, lab reports, and insurance forms",
        href: "/documents/medical-docs",
        icon: <Hospital className="h-5 w-5 text-indigo-600" />,
      },
      {
        title: "Shipping Documents",
        description: "Bills of lading, proofs of delivery, and packing lists",
        href: "/documents/shipping-docs",
        icon: <Truck className="h-5 w-5 text-indigo-600" />,
      },
    ]
  },
  {
    name: "Solutions",
    href: "/solutions",
    hasDropdown: true,
    dropdownItems: [
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
  {
    name: "Use Cases",
    href: "/use-cases",
    hasDropdown: true,
    dropdownItems: [
      {
        title: "Invoice Processing",
        description: "Automate invoice data capture and validation to speed up accounts payable",
        href: "/use-cases/invoice-processing",
        icon: <FileText className="h-5 w-5 text-indigo-600" />,
      },
      {
        title: "Loan Verification",
        description: "Accelerate loan application verification by automating document extraction",
        href: "/use-cases/loan-verification",
        icon: <FileCheck className="h-5 w-5 text-indigo-600" />,
      },
      {
        title: "ID Proofing",
        description: "Instantly verify government IDs with AI-powered OCR and face matching",
        href: "/use-cases/id-proofing",
        icon: <Fingerprint className="h-5 w-5 text-indigo-600" />,
      },
      {
        title: "Contract Abstraction",
        description: "Extract key clauses, dates, and terms from contracts to accelerate review",
        href: "/use-cases/contract-abstraction",
        icon: <FileSearch className="h-5 w-5 text-indigo-600" />,
      },
      {
        title: "Digital Archiving",
        description: "Convert paper and scanned documents into searchable digital archives",
        href: "/use-cases/digital-archiving",
        icon: <Archive className="h-5 w-5 text-indigo-600" />,
      },
    ]
  },
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
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.name}>
              {item.dropdownItems ? (
                <>
                  <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground">
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white p-4 rounded-lg shadow-xl min-w-[420px] border max-h-[75vh] overflow-y-auto">
                    <ul className="flex flex-col gap-4">
                      {item.dropdownItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link href={subItem.href} passHref legacyBehavior>
                            <NavigationMenuLink className="flex gap-3 items-start rounded-md p-3 hover:bg-indigo-50">
                              <div className="flex-shrink-0">{subItem.icon}</div>
                              <div className="flex flex-col">
                                <span className="text-sm font-medium text-indigo-900">{subItem.title}</span>
                                <span className="text-xs text-muted-foreground">{subItem.description}</span>
                              </div>
                            </NavigationMenuLink>
                          </Link>

                          {subItem.children && (
                            <ul className="ml-6 mt-2 border-l border-gray-200 pl-4 space-y-2">
                              {subItem.children.map((child, childIndex) => (
                                <li key={childIndex}>
                                  <Link href={child.href} passHref legacyBehavior>
                                    <NavigationMenuLink className="flex gap-2 items-start rounded-md p-2 hover:bg-indigo-50">
                                      <div className="flex-shrink-0">{child.icon}</div>
                                      <div className="flex flex-col">
                                        <span className="text-sm font-medium text-indigo-900">{child.title}</span>
                                        <span className="text-xs text-muted-foreground">{child.description}</span>
                                      </div>
                                    </NavigationMenuLink>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
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
