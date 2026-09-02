# Medical/Healthcare Document OCR 21-Post Cluster Design (Topic 5 of 6)

**Date:** 2026-09-02
**Scope:** Second topic of the second 3-topic, 63-blog push. Same contract as topic 4: full 5-step competitive audit per post, 2,000+ words, real concrete asset (sourced regulation/standard/algorithm, never fabricated), zero em/en dashes, zero keyword/slug collisions checked against the full site inventory (including reserved Topic 4 slugs, not yet wired in) after every post, mandatory JSON-LD (6 blocks), 1 pillar + 2-3 sibling links + 1 author link, human non-repetitive voice.

## Existing coverage checked before locking concepts

No existing post has a primary_keyword touching "medical" or "health". `revenue-cycle-management-document-intake` (top-level new-blogs) covers generic B2B accounts-receivable document intake (AR aging, a manufacturing/SaaS-style example), not healthcare-specific revenue cycle management, a genuinely distinct, specialized field (medical billing, insurance claims, denial management). This cluster's insurance-claims-adjacent posts must stay clearly differentiated from that generic AR post during their competitive audits.

Pillar candidate: `/documents/medical-docs` (confirmed live, zero supporting blog cluster).

## The 21 concepts

Built around real, verifiable healthcare data/billing standards: HL7 FHIR, HIPAA Safe Harbor's 18 identifiers, ICD-10-CM/CPT coding, CMS-1500/UB-04 claim forms, NPI and DEA checksum algorithms, NDC drug codes, ANSI X12 835/270/271 EDI transactions, LOINC lab codes, and CARC/RARC denial codes.

| # | Concept | Primary keyword |
|---|---|---|
| 1 | HL7 FHIR clinical document interoperability | hl7 fhir document processing |
| 2 | HIPAA Safe Harbor de-identification (the 18 specific identifiers) | hipaa deidentification automation |
| 3 | ICD-10-CM and CPT medical coding extraction | medical coding automation |
| 4 | Explanation of Benefits (EOB) parsing | eob parsing automation |
| 5 | CMS-1500 and UB-04 standardized claim form processing | cms-1500 form processing |
| 6 | NPI (National Provider Identifier) verification and checksum | npi verification api |
| 7 | Prior authorization document processing | prior authorization automation |
| 8 | HCC risk adjustment coding for Medicare Advantage | hcc risk adjustment coding |
| 9 | C-CDA clinical document processing | ccda document processing |
| 10 | DEA number verification for prescriptions | dea number verification |
| 11 | NDC (National Drug Code) extraction | ndc code extraction |
| 12 | Medical necessity and LCD/NCD coverage documentation | medical necessity documentation |
| 13 | HIPAA minimum necessary standard for redaction | hipaa minimum necessary redaction |
| 14 | 835 remittance advice EDI processing | 835 remittance advice processing |
| 15 | 270/271 eligibility verification EDI processing | eligibility verification automation |
| 16 | Medical record release of information (ROI) processing | release of information processing |
| 17 | Advance Beneficiary Notice (ABN) processing | advance beneficiary notice processing |
| 18 | LOINC lab result code extraction | loinc code extraction |
| 19 | Referral and prior-auth fax processing | medical fax automation |
| 20 | Insurance card OCR (payer ID, group/member number) | insurance card ocr |
| 21 | CARC/RARC denial code extraction and appeals | denial code extraction |

## Pillar and file structure

Pillar link: `/documents/medical-docs`. Sibling links: within-cluster. Files: `data/new-blogs/medical-document-ocr/NN-slug.ts`, aggregated into `data/new-blogs.ts` same as prior topics.

## Deviation log

None yet.
