import type { Metadata } from "next"
import OperationsPage from "@/components/solutions/operations-efficiency/operations-page"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"

const PATH = "/solutions/operations-efficiency"
const TITLE = "Operations Efficiency OCR: Supply Chain Automation"
const DESCRIPTION =
  "Bill of lading, POD, packing slip, and shipment-log OCR. Shipment data reaches your systems without retyping, with unclear fields flagged for review."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

export default function OperationsEfficiencyPage() {
  return (
    <>
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} service dateModified="2026-10-06" />
      <OperationsPage />
    </>
  )
}
