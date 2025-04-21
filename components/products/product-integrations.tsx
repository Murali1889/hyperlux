import { Button } from "@/components/ui/button"
import Link from "next/link"

const integrations = [
  { name: "Salesforce", logo: "/logo-cimb.png" },
  { name: "Oracle", logo: "/logo-grab.png" },
  { name: "SAP", logo: "/logo-hsbc.png" },
  { name: "Microsoft", logo: "/logo-revolut.png" },
  { name: "AWS", logo: "/logo-homecredit.png" },
  { name: "Google Cloud", logo: "/logo-graduate.png" },
]

export default function ProductIntegrations() {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">OCR Software Integrations</h2>
          <p className="text-xl text-gray-600">
            Our AI document processing software integrates seamlessly with your existing tech stack for streamlined
            lending workflows
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-12 w-full flex flex-col items-center justify-center">
                {integration.name === "Salesforce" && (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-10 h-10 text-[#00A1E0]"
                    >
                      <path
                        d="M12 4.5C14.5 4.5 16.5 6.5 16.5 9C16.5 11.5 14.5 13.5 12 13.5C9.5 13.5 7.5 11.5 7.5 9C7.5 6.5 9.5 4.5 12 4.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.5 14C17.5 14 19 15.5 19 17.5C19 19.5 17.5 21 15.5 21C13.5 21 12 19.5 12 17.5C12 15.5 13.5 14 15.5 14Z"
                        fill="currentColor"
                      />
                      <path
                        d="M8.5 14C10.5 14 12 15.5 12 17.5C12 19.5 10.5 21 8.5 21C6.5 21 5 19.5 5 17.5C5 15.5 6.5 14 8.5 14Z"
                        fill="currentColor"
                      />
                      <path
                        d="M17 7.5C18.4 7.5 19.5 8.6 19.5 10C19.5 11.4 18.4 12.5 17 12.5C15.6 12.5 14.5 11.4 14.5 10C14.5 8.6 15.6 7.5 17 7.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M7 7.5C8.4 7.5 9.5 8.6 9.5 10C9.5 11.4 8.4 12.5 7 12.5C5.6 12.5 4.5 11.4 4.5 10C4.5 8.6 5.6 7.5 7 7.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-xs font-medium mt-1 text-[#00A1E0]">Salesforce</span>
                  </>
                )}

                {integration.name === "Oracle" && (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-10 h-10 text-[#C74634]"
                    >
                      <rect x="2" y="8" width="20" height="8" rx="2" fill="currentColor" />
                      <path d="M7 12H17" stroke="white" strokeWidth="1.5" />
                      <path d="M12 8V16" stroke="white" strokeWidth="1.5" />
                    </svg>
                    <span className="text-xs font-medium mt-1 text-[#C74634]">Oracle</span>
                  </>
                )}

                {integration.name === "SAP" && (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-10 h-10 text-[#0FAAFF]"
                    >
                      <path d="M3 12H21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      <path d="M3 7H21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      <path d="M3 17H21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    <span className="text-xs font-medium mt-1 text-[#0FAAFF]">SAP</span>
                  </>
                )}

                {integration.name === "Microsoft" && (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10">
                      <rect x="3" y="3" width="8" height="8" fill="#F25022" />
                      <rect x="13" y="3" width="8" height="8" fill="#7FBA00" />
                      <rect x="3" y="13" width="8" height="8" fill="#00A4EF" />
                      <rect x="13" y="13" width="8" height="8" fill="#FFB900" />
                    </svg>
                    <span className="text-xs font-medium mt-1 text-gray-700">Microsoft</span>
                  </>
                )}

                {integration.name === "AWS" && (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-10 h-10 text-[#FF9900]"
                    >
                      <path
                        d="M7 14.5L12 8L17 14.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M3 17.5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M6.5 17.5V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M17.5 17.5V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="text-xs font-medium mt-1 text-[#FF9900]">AWS</span>
                  </>
                )}

                {integration.name === "Google Cloud" && (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10">
                      <path d="M12 11L7 18H17L12 11Z" fill="#EA4335" />
                      <path d="M12 4L7 11H17L12 4Z" fill="#4285F4" />
                      <path d="M7 11L2 18H12L7 11Z" fill="#FBBC05" />
                      <path d="M17 11L12 18H22L17 11Z" fill="#34A853" />
                    </svg>
                    <span className="text-xs font-medium mt-1 text-[#4285F4]">Google Cloud</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg mb-6">
            Don't see your system? Our flexible API can integrate with virtually any CRM or LOS platform for document
            automation.
          </p>
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
            <Link href="/contact-sales">Talk to Our Integration Specialists</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
