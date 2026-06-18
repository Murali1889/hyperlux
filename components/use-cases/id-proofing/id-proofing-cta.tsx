"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function IdProofingCta() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure your onboarding process today.</h2>
          <p className="text-lg text-indigo-100 mb-8">
            Join hundreds of organizations that have transformed their identity verification process with our AI-powered
            ID proofing solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
              <Link href="/book-demo">Request Demo</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
