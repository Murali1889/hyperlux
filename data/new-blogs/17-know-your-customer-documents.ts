import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog17: BlogPost = {
  id: "new-17",
  title: "Know Your Customer Documents: The Practical 2026 Playbook",
  slug: "know-your-customer-documents",
  excerpt:
    "KYC documents in 2026 are not what they were in 2020. Selfie liveness, digital ID wallets, eIDAS 2.0, here is what's actually accepted and how to handle it.",
  description:
    "The 2026 playbook for Know Your Customer documents, what's accepted, how to handle digital ID, eIDAS 2.0, selfie liveness, and emerging market documents.",
  metaTag: "Know Your Customer Documents: 2026 Playbook",
  content: `
    <p>KYC documents in 2026 look different than they did in 2020. Selfie liveness checks are standard. eIDAS 2.0 changed the landscape in Europe. Digital ID wallets are real. Emerging market documents are formalizing faster than most playbooks update.</p>
    <p>This guide is the practical 2026 playbook on which documents to accept, which to verify how, and what is actually moving in compliance circles. The goal is to keep your KYC current without overengineering.</p>

    <h2>What "Know Your Customer Documents" Means in 2026</h2>
    <p>KYC documents are the identity and proof-of-address documents you collect during customer onboarding to verify who they are. In 2020 the standard set was passport, driver's license, national ID, plus a utility bill or bank statement.</p>
    <p>In 2026 the set expanded. Digital ID wallets count in many jurisdictions. Mobile-driver's-licenses (mDL) are accepted at federal level in the US. Selfie liveness checks are required, not optional. The 2020 playbook still works but leaves accuracy and customer experience on the table.</p>
    <p>If you are setting up KYC for the first time, start with our <a href="/resources/blogs/kyc-document-verification">KYC document verification piece</a> for the audit perspective. This article covers which documents to accept and how to handle the new categories.</p>

    <h2>The Documents That Should Always Be Accepted</h2>

    <h3>Tier 1: Photo ID</h3>
    <ul>
      <li><strong>Passport.</strong> Universally accepted. MRZ extraction is straightforward.</li>
      <li><strong>National ID card.</strong> Format varies by country. Layout-aware OCR essential.</li>
      <li><strong>Driver's license.</strong> US-specific by state but well-documented; many countries have national versions.</li>
      <li><strong>Mobile driver's license (mDL).</strong> Standardized by ISO 18013-5. Accepted federally in the US. Verification via NFC or QR code.</li>
    </ul>

    <h3>Tier 2: Proof of Address</h3>
    <ul>
      <li>Utility bills (gas, electric, water). Usually dated within 3 months.</li>
      <li>Bank statements. Same recency rule.</li>
      <li>Government correspondence (tax letter, voter registration).</li>
      <li>Mortgage or lease agreement (acceptable but high-friction).</li>
    </ul>

    <h3>Tier 3: Supporting Documentation</h3>
    <ul>
      <li>Source of funds attestation.</li>
      <li>Beneficial ownership form (FinCEN CDD rule).</li>
      <li>Employment letter or pay stub (for high-value relationships).</li>
    </ul>

    <h2>What Is New in 2026</h2>

    <h3>Digital ID Wallets</h3>
    <p>Apple Wallet, Google Wallet, and EUDI Wallet support storing government-issued IDs. The verification flow is different from a photo of a physical document, the wallet shares cryptographically signed claims that you can verify against the issuing authority.</p>
    <p>For implementers: support OpenID for Verifiable Credentials (OID4VC) and ISO 18013-7 (remote presentment). The protocols are stable; the user experience is still settling.</p>

    <h3>eIDAS 2.0 in Europe</h3>
    <p>EU regulation that mandates member states issue digital identity wallets to citizens. As of 2025-2026, the EUDI Wallet is rolling out across member states. Financial institutions operating in Europe must accept EUDI Wallet credentials for KYC. Plan for it.</p>

    <h3>Selfie Liveness Becomes Standard</h3>
    <p>Static selfies are dead for KYC. Customers must show liveness, usually a short video, a 3D depth scan via phone TrueDepth camera, or a series of prompted actions (turn head, blink). Without liveness, photo-of-a-photo attacks are trivial.</p>

    <h3>Mobile Driver's Licenses</h3>
    <p>The US-specific evolution. About 15 states issued mDLs as of 2025. Federal acceptance (TSA, etc.) has been live since 2023. For KYC, treat mDL as equivalent to physical DL but use the ISO 18013-5 verification flow.</p>

    <h3>Emerging Market Documents</h3>
    <p>Aadhaar (India), Singpass (Singapore), MyKad (Malaysia), and similar national digital ID systems are increasingly accepted by international institutions. Each has its own verification API. For onboarding customers from these markets, integrate the local system directly rather than relying on document photos.</p>

    <h2>The Five Verification Steps for Every KYC Document</h2>
    <p>Regardless of document type, run these five steps:</p>
    <ol>
      <li><strong>Capture quality check.</strong> Is the image clear, well-lit, fully visible, not glare-blocked?</li>
      <li><strong>Type identification.</strong> What document is this? Route to the right extraction and verification rules.</li>
      <li><strong>Extraction.</strong> Pull the relevant fields (name, DOB, document number, expiry, MRZ if applicable).</li>
      <li><strong>Authentication.</strong> Verify the document is genuine. Security feature check, MRZ checksum, signature panel inspection.</li>
      <li><strong>Cross-check.</strong> Compare extracted data against application data and any other documents on file.</li>
    </ol>
    <p>Skip any step and your audit trail is incomplete. Auditors check all five. (Our <a href="/resources/blogs/kyc-document-verification">KYC document verification piece</a> covers the audit perspective.)</p>

    <h2>The Patterns That Trip Up Most Teams</h2>

    <h3>1. Accepting Photos of Photos</h3>
    <p>Without liveness, a customer can photograph an existing photo of an ID and pass extraction. Liveness is the cheap fix and should be mandatory in 2026.</p>

    <h3>2. Treating All Driver's Licenses the Same</h3>
    <p>US driver's licenses vary by state. International driving permits are different again. Each has different fields, different security features, different layouts. Layout-aware OCR plus state-specific rules handles this; generic OCR doesn't.</p>

    <h3>3. Skipping Expiry Checks</h3>
    <p>Document was valid at onboarding. Expired three years ago. Customer is still active. Auditor flags. Always extract and monitor expiry dates.</p>

    <h3>4. Inconsistent Naming Across Documents</h3>
    <p>Passport says "Robert James Smith". Utility bill says "R. J. Smith". Application says "Bob Smith". All same person, but no documented reconciliation. Each variation must be cross-checked and documented.</p>

    <h3>5. Failing to Handle Digital ID Wallets</h3>
    <p>Customer presents an EUDI Wallet credential. Your system expects a passport photo. Customer falls back to physical document upload. Friction kills onboarding. Support the digital path.</p>

    <h2>The OCR Step Inside KYC Document Handling</h2>
    <p>KYC OCR has specific requirements:</p>
    <ul>
      <li>MRZ extraction with checksum validation for passports.</li>
      <li>Layout-aware extraction for state-variable driver's licenses.</li>
      <li>Liveness flow for selfie checks.</li>
      <li>Cryptographic verification for digital ID wallet credentials.</li>
      <li>High accuracy on small text (date of birth, document numbers).</li>
    </ul>
    <p>Specialized vendors (Jumio, Onfido, DocsAPI) handle these correctly. Generic OCR will work for typed text but miss the specialized verification.</p>

    <h2>The Way I Explain Modern KYC to Non-Tech People</h2>
    <p>Imagine you run an airport. Passengers need to prove who they are. In 2010, they showed paper passports and you visually checked. In 2020, you scanned passports and your computer extracted the MRZ. In 2026, you accept paper passports, mobile driver's licenses, digital ID wallets, and you require a quick face-scan that matches the ID.</p>
    <p>The airport works because you accept all the modern documents and verify them with modern checks. If you only accepted paper passports in 2026, you would miss most travelers. KYC is the same.</p>

    <h2>What I'd Do Today</h2>
    <p>If you are building KYC from scratch in 2026: support digital ID wallets and mobile driver's licenses from day one. Build them as first-class flows, not afterthoughts. The customer experience advantage matters.</p>
    <p>If you have a working KYC built on 2020 patterns: add selfie liveness if you don't already have it. That single addition closes the biggest fraud vector. Digital ID wallet support can wait until your market demands it.</p>
    <p>If you operate in Europe: budget engineering time for EUDI Wallet integration. The regulation is real, the implementations are stabilizing, and the deadline is now. (<a href="/author/nupura-ughade">I write about regulatory document trends regularly</a>.)</p>

    <h2>Frequently Asked Questions</h2>

    <h3>What documents are accepted for KYC in 2026?</h3>
    <p>Photo ID (passport, national ID, driver's license, mDL, digital ID wallet credential) plus proof of address (utility bill, bank statement, government letter) plus a selfie with liveness check. Specific acceptable documents vary by country and regulator.</p>

    <h3>What is a mobile driver's license (mDL)?</h3>
    <p>A digital version of a state-issued driver's license, stored on a phone and verified cryptographically. Standardized by ISO 18013-5. Accepted federally in the US since 2023 and by financial institutions for KYC in 2026.</p>

    <h3>Do I need to support digital ID wallets?</h3>
    <p>In Europe, yes, EUDI Wallet is mandated under eIDAS 2.0. In the US, support is voluntary but customer experience matters. Most large institutions will support digital ID by 2027.</p>

    <h3>What is selfie liveness?</h3>
    <p>A check that confirms the selfie is from a real, present person, not a photo of a photo or a recorded video. Done via 3D depth scan, prompted actions, or short video. Standard for KYC in 2026.</p>

    <h3>How does KYC differ across countries?</h3>
    <p>Acceptable documents, retention periods, and re-verification triggers vary. Required source-of-funds documentation varies. Always research the specific KYC rules for each market you operate in. Don't assume one playbook works everywhere.</p>

    <h3>What is the most common KYC document fraud in 2026?</h3>
    <p>Synthetic identity, real-looking documents created from real data scraped from public sources. The documents pass extraction and authenticity checks. Detection requires cross-referencing against fraud databases and analyzing velocity patterns, not just document checks alone.</p>
  `,
  image: "/images/passport-mrz-highlight.png",
  featuredImage: "/images/passport-mrz-highlight.png",
  category: "Compliance",
  date: "June 17, 2026",
  datePublished: "2026-06-17T00:00:00.000Z",
  dateModified: "2026-06-17T00:00:00.000Z",
  last_updated: "June 17, 2026",
  readTime: "10 min read",
  author: nupuraUghade,
  primary_keyword: "meaning of know your customer",
  secondary_keywords: [
    "know your customer documents",
    "kyc documents",
    "what is kyc",
    "kyc compliance 2026",
    "eidas 2.0",
    "mobile drivers license",
    "digital id wallet",
  ],
  tags: ["KYC", "compliance", "digital ID", "eIDAS"],
  cluster: "compliance",
  faq: [
    {
      question: "What documents are accepted for KYC in 2026?",
      answer:
        "Photo ID (passport, national ID, driver's license, mDL, digital ID wallet credential), proof of address (utility bill, bank statement, government letter), and a selfie with liveness check. Specific acceptable documents vary by country and regulator.",
    },
    {
      question: "What is a mobile driver's license (mDL)?",
      answer:
        "A digital state-issued driver's license, stored on a phone and verified cryptographically. Standardized by ISO 18013-5. Accepted federally in the US since 2023 and by financial institutions for KYC in 2026.",
    },
    {
      question: "Do I need to support digital ID wallets?",
      answer:
        "In Europe, yes, EUDI Wallet is mandated under eIDAS 2.0. In the US, voluntary but customer experience matters. Most large institutions will support digital ID by 2027.",
    },
    {
      question: "What is selfie liveness?",
      answer:
        "A check that confirms the selfie is from a real, present person, not a photo of a photo or recorded video. Done via 3D depth scan, prompted actions, or short video. Standard for KYC in 2026.",
    },
    {
      question: "How does KYC differ across countries?",
      answer:
        "Acceptable documents, retention periods, re-verification triggers, and required source-of-funds documentation vary. Always research the specific KYC rules for each market. Do not assume one playbook works everywhere.",
    },
    {
      question: "What is the most common KYC document fraud in 2026?",
      answer:
        "Synthetic identity, real-looking documents created from real data scraped from public sources. Documents pass extraction and authenticity checks. Detection requires cross-referencing fraud databases and analyzing velocity patterns.",
    },
  ],
}
