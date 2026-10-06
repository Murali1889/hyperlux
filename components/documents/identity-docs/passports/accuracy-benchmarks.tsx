import { IdAccuracySection } from "../id-honest-sections"

export default function AccuracyBenchmarks() {
  return (
    <IdAccuracySection
      doc="passports"
      check={{
        badge: "ICAO 9303",
        title: "MRZ Check Digits",
        body: "The machine-readable zone carries check digits for the passport number, birth date and expiry date. A misread usually fails the checksum, so it gets flagged instead of passing silently.",
      }}
    />
  )
}
