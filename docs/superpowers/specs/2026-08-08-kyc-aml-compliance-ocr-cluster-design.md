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

None yet — will update inline if a concept turns out to overlap existing content once audited, same process as topics 1 and 2.
