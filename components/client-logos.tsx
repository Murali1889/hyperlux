// These would be actual financial institutions that might use industry classification solutions
const clients = [
  {
    name: "HSBC",
    logo: "/placeholder.svg?height=40&width=100",
    description: "Global banking and financial services organization",
  },
  {
    name: "Citibank",
    logo: "/placeholder.svg?height=40&width=100",
    description: "Multinational investment bank and financial services corporation",
  },
  {
    name: "DBS Bank",
    logo: "/placeholder.svg?height=40&width=100",
    description: "Multinational banking and financial services corporation",
  },
  {
    name: "Standard Chartered",
    logo: "/placeholder.svg?height=40&width=100",
    description: "Multinational banking and financial services company",
  },
  {
    name: "OCBC Bank",
    logo: "/placeholder.svg?height=40&width=100",
    description: "Singapore's oldest bank and a leading financial services group",
  },
  {
    name: "UOB",
    logo: "/placeholder.svg?height=40&width=100",
    description: "Multinational banking organization headquartered in Singapore",
  },
]

export default function ClientLogos() {
  return (
    <section className="py-12 border-b">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-8">
          <p className="text-sm font-medium text-muted-foreground">TRUSTED BY LEADING FINANCIAL INSTITUTIONS</p>
          <h3 className="text-2xl font-bold">Our clients process over 2 million loan applications monthly</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.name} className="group relative flex flex-col items-center">
              <div className="h-16 w-40 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center p-3 transition-all duration-300 group-hover:shadow-md">
                <div className="text-lg font-bold text-slate-700">{client.name}</div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 w-40 text-center transition-opacity duration-300 pointer-events-none">
                {client.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#case-studies"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
          >
            View our case studies
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
