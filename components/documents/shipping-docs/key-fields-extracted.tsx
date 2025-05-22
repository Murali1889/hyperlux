"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, CheckCircle2 } from "lucide-react"

export default function KeyFieldsExtracted() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonSample)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const jsonSample = `{
  "shipment": {
    "shipmentId": "SHP-1278653",
    "bol": "BOL12345678",
    "origin": {
      "name": "Shanghai Port Terminal",
      "location": "Shanghai, China",
      "date": "2023-09-15"
    },
    "destination": {
      "name": "Port of Los Angeles",
      "location": "Los Angeles, CA, USA",
      "estimatedArrival": "2023-10-10"
    },
    "consignee": {
      "name": "West Coast Distribution Inc.",
      "address": "2500 Navy Way, Los Angeles, CA 90731",
      "contact": "+1-213-555-8790"
    },
    "items": [
      {
        "description": "Electronics - Laptops",
        "quantity": 240,
        "weight": "1200 kg",
        "packages": 20
      },
      {
        "description": "Computer Accessories",
        "quantity": 1500,
        "weight": "850 kg",
        "packages": 30
      }
    ],
    "carrier": "Pacific Shipping Lines",
    "vessel": "PSL Voyager",
    "containerNumbers": ["PSLU1234567", "PSLU7654321"]
  }
}`

  const fields = [
    "Shipment/BOL Numbers",
    "Consignee Details",
    "Origin/Destination",
    "Carrier Information",
    "Vessel/Voyage Details",
    "Container Numbers",
    "Item Descriptions",
    "Quantities and Weights",
    "Dates (Shipment, Delivery)",
    "Signatures and Stamps",
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Fields Extracted</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our OCR technology extracts and structures critical shipment data from your documents, making it ready for
            immediate use.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Extracted Fields</h3>
            <ul className="space-y-2">
              {fields.map((field, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
                  <span>{field}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-2/3">
            <Tabs defaultValue="json">
              <div className="flex justify-between items-center mb-3">
                <TabsList>
                  <TabsTrigger value="json">JSON</TabsTrigger>
                  <TabsTrigger value="api">API Response</TabsTrigger>
                </TabsList>

                <button
                  onClick={copyToClipboard}
                  className="flex items-center text-xs text-slate-500 hover:text-slate-700"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 mr-1 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-1" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <TabsContent value="json" className="mt-0">
                <div className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-auto max-h-[400px]">
                  <pre className="text-sm font-mono">{jsonSample}</pre>
                </div>
              </TabsContent>

              <TabsContent value="api" className="mt-0">
                <div className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-auto max-h-[400px]">
                  <pre className="text-sm font-mono">{`// API endpoint
POST https://api.hyperverge.co/v2/shipping/extract

// Response
{
  "status": "success",
  "statusCode": 200,
  "result": ${jsonSample}
}`}</pre>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
