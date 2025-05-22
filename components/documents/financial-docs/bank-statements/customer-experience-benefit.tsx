import { Clock, ThumbsUp, Users } from "lucide-react"

export default function CustomerExperienceBenefit() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-indigo-900">Customer Experience Benefit</h2>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-indigo-100 rounded-full blur-lg opacity-70"></div>
                <img
                  src="/loan-officer-customer.png"
                  alt="Loan officer with customer"
                  className="relative rounded-full w-48 h-48 object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">From Days to Hours: Transforming Lending</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With automated bank statement analysis, loan officers can approve applications within hours instead of
                days. This dramatic improvement in turnaround time creates a competitive advantage in lending markets
                where speed matters. Customers experience a seamless process that feels modern and efficient, increasing
                satisfaction and referral rates.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center">
                  <Clock className="h-8 w-8 text-indigo-600 mb-2" />
                  <span className="text-sm font-medium text-gray-700">Faster Decisions</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <ThumbsUp className="h-8 w-8 text-indigo-600 mb-2" />
                  <span className="text-sm font-medium text-gray-700">Higher Satisfaction</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users className="h-8 w-8 text-indigo-600 mb-2" />
                  <span className="text-sm font-medium text-gray-700">More Referrals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
