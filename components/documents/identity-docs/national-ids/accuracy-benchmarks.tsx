import { IdAccuracySection } from "../id-honest-sections"

export default function AccuracyBenchmarks() {
  return (
    <IdAccuracySection
      doc="national ID cards"
      check={{
        badge: "MRZ + barcode",
        title: "A Second Reading",
        body: "Where a card carries an MRZ, its check digits are validated, so a misread usually fails the checksum and gets flagged. Barcodes on the card are decoded alongside the printed text.",
      }}
    />
  )
}
