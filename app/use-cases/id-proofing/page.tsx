import type { Metadata } from "next"
import IdProofingHero from "@/components/use-cases/id-proofing/id-proofing-hero"
import KeyChallenges from "@/components/use-cases/id-proofing/key-challenges"
import SolutionFeatures from "@/components/use-cases/id-proofing/solution-features"
import ProcessFlow from "@/components/use-cases/id-proofing/process-flow"
import OutcomesBenefits from "@/components/use-cases/id-proofing/outcomes-benefits"
import DemoAnimation from "@/components/use-cases/id-proofing/demo-animation"
import IdProofingFaq from "@/components/use-cases/id-proofing/id-proofing-faq"
import IdProofingCta from "@/components/use-cases/id-proofing/id-proofing-cta"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"
import { UseCaseContent } from "@/components/seo/use-case-content"

const PATH = "/use-cases/id-proofing"
const TITLE = "ID Proofing API: Passport, License, mDL Verify"
const DESCRIPTION =
  "Verify passports, driver's licenses, national IDs, and mobile DLs with OCR plus liveness check and sanctions screening in one API call."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

const CONTENT = {
  intro:
    "ID proofing is the process of confirming that a person is who they claim to be by verifying a government-issued identity document and matching it to the live person presenting it. In 2026, ID proofing has moved from a manual back-office check to a real-time API call that combines document OCR, authenticity verification, biometric liveness, and sanctions screening in a single flow. This page explains how modern ID proofing works, where it is used, and how to evaluate an ID proofing API for your onboarding or KYC workflow.",
  sections: [
    {
      heading: "How ID proofing works in 2026",
      paragraphs: [
        "A modern ID proofing flow runs four steps in sequence. First, document capture and OCR reads the identity document (passport, driver's license, national ID) and extracts the machine-readable zone, the visual fields, and the security features. Second, authenticity verification checks the document against known templates, validates the MRZ checksums, and looks for signs of tampering or forgery. Third, biometric liveness compares a selfie to the document photo and confirms the selfie is a real person present at capture, not a photo of a photo or a deepfake. Fourth, screening checks the verified identity against sanctions lists, PEP lists, and internal fraud databases.",
        "The reason all four steps matter is that each one catches a different attack. OCR without authenticity verification passes a well-made fake. Authenticity without liveness passes a real document held by an impostor. Liveness without screening onboards a real person who happens to be on a sanctions list. A production ID proofing pipeline runs all four and produces an audit trail showing the result of each, which is what regulators expect when they examine your onboarding process.",
      ],
    },
    {
      heading: "Where ID proofing is used",
      paragraphs: [
        "The largest use case is customer onboarding for regulated financial services: banks, fintechs, lenders, crypto exchanges, and payment platforms all need to verify identity before opening an account, driven by KYC and Customer Identification Program requirements. Fast, accurate ID proofing directly improves onboarding conversion because every failed or slow verification is a potential drop-off.",
        "Beyond finance, ID proofing appears in gig-economy worker onboarding, age verification for restricted goods, healthcare patient identity, telecom SIM registration, and any workflow where an organization must confirm a real identity remotely. The common thread is that a decision or an account depends on knowing the person is genuine, and the verification has to happen in seconds rather than days.",
      ],
    },
    {
      heading: "How to evaluate an ID proofing API",
      paragraphs: [
        "Evaluate an ID proofing API on document coverage, accuracy on your real applicant mix, liveness robustness against presentation and deepfake attacks, and the completeness of the audit trail. Document coverage matters because global onboarding means passports and IDs from dozens of countries with different layouts and security features. Test the API on your actual applicant documents, not the vendor's clean demo set, because accuracy on the demo tells you nothing about accuracy on a worn passport photographed under bad lighting.",
        "The audit trail is the requirement teams underestimate. For any verification, you should be able to reconstruct which document was submitted, what the authenticity and liveness results were, what confidence scores the system assigned, and who reviewed the case if it was flagged. Regulators expect this documentation on demand, and the vendors that provide it cleanly are the ones that survive an examination.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is ID proofing?",
      answer:
        "ID proofing is the process of confirming that a person is who they claim to be by verifying a government-issued identity document and matching it to the live person presenting it. Modern ID proofing combines document OCR, authenticity verification, biometric liveness, and sanctions screening in a single real-time API call.",
    },
    {
      question: "How is ID proofing different from KYC?",
      answer:
        "ID proofing is the identity-verification step within a broader KYC process. KYC (Know Your Customer) is the full regulatory obligation to understand who your customers are, including ongoing monitoring and risk assessment. ID proofing is the specific moment where you verify the identity document and confirm the live person matches it.",
    },
    {
      question: "How accurate is automated ID proofing?",
      answer:
        "On clean captures, document authenticity and MRZ extraction clear 99% accuracy, and biometric matching is highly reliable. End-to-end verification success depends more on capture quality than the underlying models, ranging from about 78% to 92% depending on whether users capture through an app-controlled flow or an unrestricted photo upload.",
    },
    {
      question: "What documents can be verified?",
      answer:
        "Modern ID proofing supports passports, driver's licenses, national ID cards, residence permits, and mobile driver's licenses from most countries. Passports are the most reliable because the machine-readable zone is standardized under ICAO 9303 with built-in checksums. Coverage of a specific country's driver's licenses and national IDs varies by vendor, so test on your applicant mix.",
    },
  ],
}

export default function IdProofingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} service />
      <IdProofingHero />
      <KeyChallenges />
      <SolutionFeatures />
      <ProcessFlow />
      <OutcomesBenefits />
      <DemoAnimation />
      <UseCaseContent intro={CONTENT.intro} sections={CONTENT.sections} faqs={CONTENT.faqs} />
      <IdProofingFaq />
      <IdProofingCta />
    </main>
  )
}
