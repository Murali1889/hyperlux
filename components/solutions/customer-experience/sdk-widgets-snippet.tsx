"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Copy, Download } from "lucide-react"

export default function SdkWidgetsSnippet() {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Easy Integration</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Implement our SDK in minutes with just a few lines of code.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
              <div className="flex items-center bg-gray-800 px-4 py-2 overflow-x-auto">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-gray-400 text-sm">docsapi-sdk-implementation.js</div>
                <Button variant="ghost" size="sm" className="ml-auto text-gray-400 hover:text-white">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <div className="p-4 text-xs sm:text-sm font-mono overflow-x-auto">
                <pre className="text-green-400">// Initialize the DocsAPI SDK</pre>
                <pre className="text-white">
                  <span className="text-blue-400">import</span> <span className="text-yellow-400">DocsAPISDK</span>{" "}
                  <span className="text-blue-400">from</span>{" "}
                  <span className="text-green-400">'@docsapi/sdk'</span>;
                </pre>
                <pre className="text-white">
                  <span className="text-blue-400">const</span> <span className="text-yellow-400">docsapi</span> ={" "}
                  <span className="text-blue-400">new</span> <span className="text-yellow-400">DocsAPISDK</span>(
                  {"{"}
                </pre>
                <pre className="text-white pl-4">
                  <span className="text-purple-400">apiKey</span>:{" "}
                  <span className="text-green-400">'YOUR_API_KEY'</span>,
                </pre>
                <pre className="text-white pl-4">
                  <span className="text-purple-400">region</span>: <span className="text-green-400">'us'</span>
                </pre>
                <pre className="text-white">{"}"});</pre>
                <pre className="text-white">
                  <span className="text-blue-400">const</span> <span className="text-yellow-400">documentScanner</span>{" "}
                  = <span className="text-yellow-400">docsapi</span>.
                  <span className="text-yellow-400">initDocumentScanner</span>({"{"}
                </pre>
                <pre className="text-white pl-4">
                  <span className="text-purple-400">containerId</span>:{" "}
                  <span className="text-green-400">'scanner-container'</span>,
                </pre>
                <pre className="text-white pl-4">
                  <span className="text-purple-400">onSuccess</span>: <span className="text-blue-400">data</span> {"=>"}{" "}
                  {"{"}
                </pre>
                <pre className="text-white pl-8">
                  <span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(
                  <span className="text-green-400">'Document scanned:'</span>,{" "}
                  <span className="text-blue-400">data</span>);
                </pre>
                <pre className="text-white pl-4">{"}"}</pre>
                <pre className="text-white">{"}"});</pre>
                <pre className="text-white">
                  <span className="text-yellow-400">documentScanner</span>.
                  <span className="text-yellow-400">launch</span>();
                </pre>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              Our SDK provides a simple, secure way to integrate document scanning and verification into your web and
              mobile applications. The lightweight implementation ensures fast loading times and a seamless user
              experience.
            </p>
          </motion.div>

          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl p-6 border border-indigo-100 shadow-md h-full flex flex-col">
              <h3 className="text-xl font-bold text-indigo-900 mb-4">Mobile SDK Documentation</h3>
              <div className="bg-gray-100 p-4 rounded-lg mb-6 flex-1 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-48 h-48 mx-auto bg-indigo-700 rounded-lg flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-1 p-2">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-white rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-center text-sm mt-2 text-gray-700">Scan for mobile docs</p>
                </div>
              </div>
              <Button className="bg-indigo-700 hover:bg-indigo-800 text-white w-full flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download SDK Package
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
