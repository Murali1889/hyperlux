import { Button } from "@/components/ui/button"
import { Truck, ArrowRight } from "lucide-react"

export default function ShippingDocsCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-400 bg-opacity-30 rounded-full mb-6">
            <Truck className="h-8 w-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">Gain Shipment Visibility Today</h2>

          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Transform your shipping document processing from a manual bottleneck to an automated workflow. Start
            extracting value from your documents in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
