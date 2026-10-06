import { IdTimeChecksSection } from "../id-honest-sections"

export default function TimeFraudSavings() {
  return (
    <IdTimeChecksSection
      doc="passports"
      checks={["MRZ check digits validated against ICAO 9303", "Field formats checked before the data moves on", "Low-confidence fields flagged for a reviewer instead of guessed"]}
    />
  )
}
