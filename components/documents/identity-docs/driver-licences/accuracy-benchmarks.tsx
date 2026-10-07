import { IdAccuracySection } from "../id-honest-sections"

export default function AccuracyBenchmarks() {
  return (
    <IdAccuracySection
      doc="driver's licences"
      check={{
        badge: "PDF417",
        title: "Barcode on the Back",
        body: "US and Canadian licences carry an AAMVA PDF417 barcode that encodes the same details as the front. DocsAPI decodes it alongside the printed fields.",
      }}
    />
  )
}
