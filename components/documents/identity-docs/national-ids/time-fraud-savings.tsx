import { IdTimeChecksSection } from "../id-honest-sections"

export default function TimeFraudSavings() {
  return (
    <IdTimeChecksSection
      doc="national ID cards"
      checks={["MRZ check digits validated where the card has an MRZ", "Field formats checked before the data moves on", "Low-confidence fields flagged for a reviewer instead of guessed"]}
    />
  )
}
