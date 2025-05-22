import { Button } from "@/components/ui/button"

export default function LegalDocsCta() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-indigo-700">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Automate Your Legal Document Review Today
            </h2>
            <p className="max-w-[700px] text-indigo-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Transform your legal operations with AI-powered document processing that saves time, reduces risk, and
              improves accuracy.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="bg-white text-indigo-700 hover:bg-indigo-50">Request Demo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
