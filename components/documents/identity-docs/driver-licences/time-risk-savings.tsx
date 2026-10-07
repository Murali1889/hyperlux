import { IdTimeChecksSection } from "../id-honest-sections"

export default function TimeRiskSavings() {
  return (
    <IdTimeChecksSection
      doc="driver's licences"
      checks={["PDF417 barcode decoded alongside the printed fields", "Field formats checked before the data moves on", "Low-confidence fields flagged for a reviewer instead of guessed"]}
    />
  )
}
