import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "HyperVerge's Industry Classifier has reduced our classification time by 85% while improving accuracy. It's been a game-changer for our lending operations.",
    author: "Sarah Johnson",
    title: "VP of Lending, AsiaFinance",
    avatar: "/avatar-sarah.png",
    logo: "/logo-asiafinance.png",
  },
  {
    quote:
      "The Document Analyzer has transformed how we process loan applications. What used to take days now takes minutes, with better accuracy than our manual process.",
    author: "Michael Chen",
    title: "CTO, Global Lending Solutions",
    avatar: "/avatar-michael.png",
    logo: "/logo-globallending.png",
  },
  {
    quote:
      "Implementing HyperVerge's Risk Assessment Engine has helped us reduce default rates by 28% in just six months. The ROI has been exceptional.",
    author: "Rachel Kim",
    title: "Chief Risk Officer, Pacific Credit",
    avatar: "/avatar-rachel.png",
    logo: "/logo-cimb.png",
  },
]

export default function ProductTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">OCR Software Success Stories</h2>
          <p className="text-xl text-gray-600">
            Hear from financial institutions that have transformed their document processing with our AI-powered OCR
            software
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-gray-50 rounded-xl p-8 relative">
              <Quote className="h-10 w-10 text-indigo-200 absolute top-6 right-6" />

              <div className="mb-6">
                <div className="relative h-8 w-24 mb-6">
                  {testimonial.logo === "/logo-asiafinance.png" && (
                    <div className="h-full w-full flex items-center">
                      <svg viewBox="0 0 120 40" className="h-full w-full">
                        <text x="0" y="20" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#4338ca">
                          Asia
                        </text>
                        <text x="35" y="20" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#6366f1">
                          Finance
                        </text>
                        <path d="M0,25 L120,25" stroke="#4338ca" strokeWidth="2" />
                        <path d="M0,28 L80,28" stroke="#6366f1" strokeWidth="2" />
                      </svg>
                    </div>
                  )}

                  {testimonial.logo === "/logo-globallending.png" && (
                    <div className="h-full w-full flex items-center">
                      <svg viewBox="0 0 120 40" className="h-full w-full">
                        <circle cx="15" cy="15" r="10" fill="#3498db" />
                        <text x="30" y="20" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="#2c3e50">
                          Global
                        </text>
                        <text x="70" y="20" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="#3498db">
                          Lending
                        </text>
                      </svg>
                    </div>
                  )}

                  {testimonial.logo === "/logo-cimb.png" && (
                    <div className="h-full w-full flex items-center">
                      <svg viewBox="0 0 120 40" className="h-full w-full">
                        <rect x="5" y="5" width="25" height="25" fill="#7d3c98" />
                        <text x="35" y="20" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#7d3c98">
                          Pacific
                        </text>
                        <text x="80" y="20" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#333">
                          Credit
                        </text>
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-gray-700 italic relative z-10">"{testimonial.quote}"</p>
              </div>

              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  {testimonial.author === "Sarah Johnson" && (
                    <div className="h-full w-full bg-gradient-to-r from-indigo-100 to-blue-50 flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="h-full w-full">
                        <defs>
                          <linearGradient id="skin1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f5d0b9" />
                            <stop offset="100%" stopColor="#eac0a7" />
                          </linearGradient>
                          <linearGradient id="hair1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6b4423" />
                            <stop offset="100%" stopColor="#8b5a2b" />
                          </linearGradient>
                          <linearGradient id="suit1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2c3e50" />
                            <stop offset="100%" stopColor="#34495e" />
                          </linearGradient>
                        </defs>
                        {/* Professional woman with shoulder-length brown hair */}
                        <circle cx="50" cy="50" r="50" fill="#f0f0f0" />
                        <path
                          d="M50,92 C65,92 80,82 80,60 L80,45 C80,25 65,15 50,15 C35,15 20,25 20,45 L20,60 C20,82 35,92 50,92 Z"
                          fill="url(#skin1)"
                        />
                        <path
                          d="M50,15 C35,15 20,25 20,45 L20,45 C20,25 35,5 50,5 C65,5 80,25 80,45 L80,45 C80,25 65,15 50,15 Z"
                          fill="url(#hair1)"
                        />
                        <path
                          d="M26,45 C26,45 32,55 50,55 C68,55 74,45 74,45 L74,85 C74,85 65,95 50,95 C35,95 26,85 26,85 Z"
                          fill="url(#suit1)"
                        />
                        <path
                          d="M50,35 C45,35 40,40 40,45 C40,50 45,55 50,55 C55,55 60,50 60,45 C60,40 55,35 50,35 Z"
                          fill="#f5d0b9"
                        />
                        <path
                          d="M42,40 C42,40 45,38 50,38 C55,38 58,40 58,40"
                          fill="none"
                          stroke="#6b4423"
                          strokeWidth="1"
                        />
                        <circle cx="43" cy="42" r="2" fill="#4b3621" />
                        <circle cx="57" cy="42" r="2" fill="#4b3621" />
                        <path d="M48,48 C48,48 50,50 52,48" fill="none" stroke="#c0392b" strokeWidth="1.5" />
                      </svg>
                    </div>
                  )}

                  {testimonial.author === "Michael Chen" && (
                    <div className="h-full w-full bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="h-full w-full">
                        <defs>
                          <linearGradient id="skin2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f0c8a0" />
                            <stop offset="100%" stopColor="#e6b98c" />
                          </linearGradient>
                          <linearGradient id="hair2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1a1a1a" />
                            <stop offset="100%" stopColor="#333333" />
                          </linearGradient>
                          <linearGradient id="suit2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2980b9" />
                            <stop offset="100%" stopColor="#3498db" />
                          </linearGradient>
                        </defs>
                        {/* Professional Asian man with short black hair */}
                        <circle cx="50" cy="50" r="50" fill="#f0f0f0" />
                        <path
                          d="M50,92 C65,92 80,82 80,60 L80,45 C80,25 65,15 50,15 C35,15 20,25 20,45 L20,60 C20,82 35,92 50,92 Z"
                          fill="url(#skin2)"
                        />
                        <path
                          d="M50,15 C35,15 20,25 20,45 L20,45 C20,25 35,10 50,10 C65,10 80,25 80,45 L80,45 C80,25 65,15 50,15 Z"
                          fill="url(#hair2)"
                        />
                        <path
                          d="M26,45 C26,45 32,55 50,55 C68,55 74,45 74,45 L74,85 C74,85 65,95 50,95 C35,95 26,85 26,85 Z"
                          fill="url(#suit2)"
                        />
                        <path
                          d="M50,35 C45,35 40,40 40,45 C40,50 45,55 50,55 C55,55 60,50 60,45 C60,40 55,35 50,35 Z"
                          fill="#f0c8a0"
                        />
                        <path
                          d="M42,40 C42,40 45,38 50,38 C55,38 58,40 58,40"
                          fill="none"
                          stroke="#1a1a1a"
                          strokeWidth="1"
                        />
                        <circle cx="43" cy="42" r="2" fill="#1a1a1a" />
                        <circle cx="57" cy="42" r="2" fill="#1a1a1a" />
                        <path d="M48,48 C48,48 50,50 52,48" fill="none" stroke="#c0392b" strokeWidth="1" />
                        <path
                          d="M35,30 C35,30 40,25 50,25 C60,25 65,30 65,30"
                          fill="none"
                          stroke="#1a1a1a"
                          strokeWidth="4"
                        />
                      </svg>
                    </div>
                  )}

                  {testimonial.author === "Rachel Kim" && (
                    <div className="h-full w-full bg-gradient-to-r from-purple-50 to-indigo-100 flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="h-full w-full">
                        <defs>
                          <linearGradient id="skin3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f5d0b9" />
                            <stop offset="100%" stopColor="#eac0a7" />
                          </linearGradient>
                          <linearGradient id="hair3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1a1a1a" />
                            <stop offset="100%" stopColor="#333333" />
                          </linearGradient>
                          <linearGradient id="suit3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8e44ad" />
                            <stop offset="100%" stopColor="#9b59b6" />
                          </linearGradient>
                        </defs>
                        {/* Professional Asian woman with long black hair */}
                        <circle cx="50" cy="50" r="50" fill="#f0f0f0" />
                        <path
                          d="M50,92 C65,92 80,82 80,60 L80,45 C80,25 65,15 50,15 C35,15 20,25 20,45 L20,60 C20,82 35,92 50,92 Z"
                          fill="url(#skin3)"
                        />
                        <path
                          d="M25,25 C25,25 35,5 50,5 C65,5 75,25 75,25 L75,60 C75,60 65,45 50,45 C35,45 25,60 25,60 Z"
                          fill="url(#hair3)"
                        />
                        <path
                          d="M26,45 C26,45 32,55 50,55 C68,55 74,45 74,45 L74,85 C74,85 65,95 50,95 C35,95 26,85 26,85 Z"
                          fill="url(#suit3)"
                        />
                        <path
                          d="M50,35 C45,35 40,40 40,45 C40,50 45,55 50,55 C55,55 60,50 60,45 C60,40 55,35 50,35 Z"
                          fill="#f5d0b9"
                        />
                        <path
                          d="M42,40 C42,40 45,38 50,38 C55,38 58,40 58,40"
                          fill="none"
                          stroke="#1a1a1a"
                          strokeWidth="1"
                        />
                        <circle cx="43" cy="42" r="2" fill="#1a1a1a" />
                        <circle cx="57" cy="42" r="2" fill="#1a1a1a" />
                        <path d="M48,48 C48,48 50,50 52,48" fill="none" stroke="#c0392b" strokeWidth="1.5" />
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
