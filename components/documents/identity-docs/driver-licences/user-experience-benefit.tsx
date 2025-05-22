import Image from "next/image"

export default function UserExperienceBenefit() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">User Experience Benefit</h2>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Transforming Rental Car Check-ins</h3>
                <p className="text-gray-700 mb-6">
                  By implementing our driver licence OCR, a major rental car company halved their check-in time from 8
                  minutes to under 4 minutes. Customer support tickets related to data entry errors dropped by 65%,
                  while staff reported significantly improved workflow efficiency.
                </p>
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="text-indigo-700 font-bold text-2xl">50%</div>
                    <div className="text-gray-600 text-sm">Faster Check-ins</div>
                  </div>
                  <div className="h-10 border-l border-gray-300"></div>
                  <div>
                    <div className="text-indigo-700 font-bold text-2xl">65%</div>
                    <div className="text-gray-600 text-sm">Fewer Support Tickets</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg?height=400&width=500&query=car rental agent helping customer with digital tablet"
                alt="Car rental agent helping customer with digital tablet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
