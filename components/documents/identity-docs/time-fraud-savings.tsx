import { IdTimeChecksSection } from "./id-honest-sections"

export default function TimeFraudSavings() {
  return (
    <IdTimeChecksSection
      doc="passports, national IDs and driver's licences"
      checks={["MRZ check digits validated on passports and IDs that carry one", "Field formats checked before the data moves on", "Low-confidence fields flagged for a reviewer instead of guessed"]}
    />
  )
}
