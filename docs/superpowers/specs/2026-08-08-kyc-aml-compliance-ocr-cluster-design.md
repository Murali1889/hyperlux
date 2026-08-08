# KYC/AML/Compliance OCR 21-Post Cluster Design (Topic 3 of 3)

**Date:** 2026-08-08
**Scope:** Third and final topic of the 3-topic, 63-blog push. Same contract as topics 1 and 2: full competitive audit per post (5-step: WebSearch keyword → identify 2-3 real competitors → WebFetch each with extraction prompt → diff against planned angle → verdict), 2,000+ words, real concrete asset (sourced fact/formula/regulation, never fabricated), zero em-dashes, zero keyword/slug collisions checked against the full site inventory after every post, mandatory JSON-LD (6 blocks), 1 pillar + 2-3 sibling links + 1 author link.

## Existing coverage checked before locking concepts

3 general KYC/AML posts already live in `data/new-blogs/`: `14-kyc-document-verification.ts` (primary_keyword "kyc" — regulatory landscape, audit failure modes, pipeline, cost-by-volume, build-vs-buy), `15-aml-document-checks.ts` (primary_keyword "anti-money laundering" — 7-field minimum, failure modes, document categories, KYC-vs-AML distinction), `17-know-your-customer-documents.ts` (primary_keyword "meaning of know your customer" — accepted document types, eIDAS 2.0, mobile driver's license, digital ID wallet). Full keyword footprint pulled and cross-checked (kyc, know your customer, aml, kyc document verification, kyc compliance, kyc process, identity verification, kyc audit, aml document checks, anti money laundering, aml compliance, aml extraction, fincen aml, aml audit, know your customer documents, kyc documents, kyc compliance 2026, eidas 2.0, mobile drivers license, digital id wallet). All 3 are broad, general-purpose overview posts — this cluster goes narrower and more technical on 21 specific sub-mechanisms none of the 3 existing posts cover in depth, the same escalation pattern used for topics 1 and 2 relative to pre-existing generic content.

Also checked: `document-fraud-detection-api.ts` (general document forensics, MRZ checksum mentioned only as one of five generic checks, no algorithmic depth), the `identity-docs` use-case landing pages (driver-licences, national-ids, passports — product pages, not blog content, no keyword overlap risk).

Real search demand mined from `gap.keywords_2026-06-17T07_18_56.210Z.csv`: kyc (18,100/mo), know your customer (3,600), sanctions screening (1,300), know your business/KYB (1,300), watchlist screening (1,300+320), automated kyc verification (590), kyc automation (480), adverse media screening (320+210+140+90+70+50+40), video kyc document verification (170), mrz passport verification (170+110+90), kyb know your business (390) — all real volume/KD data, used to validate and phrase the concepts below.

## The 21 concepts

| # | Concept | Primary keyword |
|---|---|---|
| 1 | Passport MRZ checksum verification | mrz passport verification |
| 2 | Beneficial ownership / UBO identification (FinCEN CDD Rule) | beneficial ownership verification |
| 3 | KYB (Know Your Business) document verification | kyb verification |
| 4 | Sanctions screening fuzzy-matching mechanics | sanctions screening ocr |
| 5 | PEP (Politically Exposed Person) screening tiers | pep screening kyc |
| 6 | Watchlist screening false-positive math | watchlist screening automation |
| 7 | Adverse media screening entity resolution | adverse media screening |
| 8 | CDD vs EDD risk-tiering criteria | customer due diligence process |
| 9 | SAR filing thresholds and triggers | suspicious activity report filing |
| 10 | Travel Rule compliance for crypto/VASPs | travel rule compliance crypto |
| 11 | Video KYC liveness detection (anti-spoofing) | liveness detection kyc |
| 12 | Proof of address document verification | proof of address verification |
| 13 | National ID document format OCR variation | national id verification ocr |
| 14 | EIN/TIN verification for business KYB | ein verification kyc |
| 15 | Perpetual KYC / ongoing monitoring triggers | perpetual kyc monitoring |
| 16 | Document expiry tracking and re-verification | kyc document expiry automation |
| 17 | Synthetic identity fraud detection | synthetic identity fraud detection |
| 18 | Cross-border KYC data residency conflicts | cross border kyc compliance |
| 19 | KYC record retention requirements (BSA 5-year rule) | kyc record retention requirements |
| 20 | Real-time vs batch name-screening latency tradeoffs | real time sanctions screening |
| 21 | Biometric face-match FAR/FRR tuning | biometric face match kyc |

## Pillar and file structure

Pillar link: candidate `/solutions/compliance-risk` (confirmed live route from earlier site exploration) or `/use-cases/id-proofing` — will confirm exact live route before post 1 ships. Sibling links: within-cluster plus the 3 existing KYC/AML posts where contextually relevant (e.g., linking to `kyc-document-verification` or `aml-document-checks` as the broader overview a narrow post sits underneath). Files: `data/new-blogs/kyc-aml-compliance-ocr/NN-slug.ts`, aggregated into `data/new-blogs.ts` same as topics 1 and 2.

## Deviation log (concepts swapped mid-build, if any)

None. All 21 concepts shipped as originally planned, no swaps required. Pillar links confirmed live and used as planned: `/solutions/compliance-risk` for the AML/compliance-program-focused posts, `/use-cases/id-proofing` for the identity-document-focused posts. Post 20's title changed from the original "Real-time vs batch name-screening latency tradeoffs" framing to "Real-Time Sanctions Screening: Two Claims, Not One" once competitive audit surfaced the sharper angle (real-time bundles two independent claims, transaction-time synchronicity and list-freshness, that vendors routinely conflate) — same concept and primary keyword, refined framing post-audit.

## Completion status

All 21 posts shipped, verified, built, and committed on branch `seo-eeat-20-blogs`. Cluster-wide audit (run across all 21 files in `data/new-blogs/kyc-aml-compliance-ocr/`):

- Word count range: 2000-2072 (avg 2014), all at or above the 2000-word minimum
- Em/en dashes: 0 across all 21 files
- FAQ entries: exactly 6 per post, 126 total
- JSON-LD: 6 schema blocks (Organization, WebSite, BlogPosting, BreadcrumbList, FAQPage, Person) confirmed present in the built static HTML for every post
- Site-wide collision check (`full_site_audit.js` against all 97 posts now live in `data/new-blogs.ts`, 34 pre-existing + 21 invoice-ap-ocr + 21 bank-statement-lending-ocr + 21 kyc-aml-compliance-ocr): 0 new keyword collisions introduced by this cluster (8 pre-existing collisions remain, all predating this project, none involving Topic 3 posts), 0 slug collisions

Every post passed a full 5-step competitive audit before drafting (WebSearch → identify 2-3 real competitors → WebFetch each with an extraction prompt → diff against the planned differentiation angle → verdict), and every post ships with a real, independently verified concrete asset: ICAO 9303 MRZ checksum arithmetic, FinCEN's 25%/25%/25% UBO thresholds, Cantero v. Bank of America and the OCC's December 2025 preemption determination, Levenshtein-distance worked examples on real transliteration pairs, FATF Recommendation 12 PEP EDD standards, the 31 CFR 1020.320 SAR filing thresholds, FATF/US/EU Travel Rule threshold variance, Group-IB and iProov's 2025-2026 injection-attack statistics, USPS Publication 28 / CASS address standardization, PDF metadata forensics (Producer/Creator/ModDate fields), the AAMVA DL/ID barcode standard (Annex D element codes), the IRS name control derivation algorithm and TIN Matching response code taxonomy, weighted/decaying pKYC risk-scoring mechanics, MRZ/AAMVA unambiguous date encoding versus locale-dependent printed dates, the SSA's 2011 SSN randomization and authorized-user tradeline piggybacking, FATF Recommendation 17's third-party reliance conditions, the BSA's three independent record-retention clocks, the April 2026 OFAC Russian-metals-network 19-hour batch-refresh gap, and NIST FRVT's directional FMR/FNMR demographic bias findings.

This completes the full 63-post project: Topic 1 (Invoice/AP OCR, 21 posts), Topic 2 (Bank Statement/Lending OCR, 21 posts), and Topic 3 (KYC/AML/Compliance OCR, 21 posts), all built one post at a time with full competitive audits, zero content overlap across any of the 97 posts now live on the site, and zero em/en dashes anywhere.
