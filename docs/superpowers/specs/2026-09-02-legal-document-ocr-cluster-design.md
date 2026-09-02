# Legal Document OCR 21-Post Cluster Design (Topic 4 of 6)

**Date:** 2026-09-02
**Scope:** First topic of the second 3-topic, 63-blog push (topics 4-6, following the completed topics 1-3: invoice-ap-ocr, bank-statement-lending-ocr, kyc-aml-compliance-ocr). Same contract: full 5-step competitive audit per post, 2,000+ words, real concrete asset (sourced regulation/standard/algorithm, never fabricated), zero em/en dashes, zero keyword/slug collisions checked against the full site inventory after every post, mandatory JSON-LD (6 blocks), 1 pillar + 2-3 sibling links + 1 author link. Additional requirement for this batch: content must read more human, varying sentence rhythm and opening-hook structure across posts rather than repeating the same "X explains Y, almost none explain Z" template on every single post.

## Existing coverage checked before locking concepts

Two general legal-document posts already live: `data/new-blogs/33-contract-ocr.ts` (primary_keyword "contract ocr", broad contract data extraction and clause extraction overview) and the legacy `legal-document-automation-the-complete-guide-for-modern-law-firms` post in `data/blogs.ts` (broad legal document automation overview covering redlining, e-discovery, client intake at a high level, with cost benchmarks). Both are broad, general-purpose overview posts, the same pattern seen before topics 1-3 relative to their pre-existing generic content. This cluster goes narrower and more technical on 21 specific sub-mechanisms neither existing post covers in depth.

Checked for potential adjacent overlap: `kyb-verification` (Topic 3) covers business-entity document verification from a lender's onboarding perspective; the new cap-table/minute-book concept in this cluster covers the same document category from a law firm's corporate/M&A processing perspective, a different audience and angle, differentiation to be confirmed explicitly during that post's competitive audit. `state-mortgage-document-requirements` (Topic 2) covers escrow-interest regulatory compliance for lenders; the new closing/title document concept in this cluster covers title company/law firm document processing (deed recording, title commitment exceptions), also a different angle, same differentiation discipline applies.

Pillar candidates: `/documents/legal-docs` (confirmed live) and `/use-cases/contract-abstraction` (confirmed live). Both currently have zero supporting blog cluster.

## The 21 concepts

| # | Concept | Primary keyword |
|---|---|---|
| 1 | Contract redlining and version-diff mechanics | contract redlining software |
| 2 | E-discovery technology-assisted review (TAR 1.0 vs TAR 2.0) | e-discovery document review |
| 3 | Litigation hold tracking and FRCP 37(e) spoliation risk | litigation hold software |
| 4 | Legal citation extraction and Bluebook format verification | legal citation checker |
| 5 | Privilege log automation and redaction mechanics | privilege log automation |
| 6 | LEDES legal billing format processing | ledes billing format |
| 7 | Chain of custody documentation for legal evidence | chain of custody documentation |
| 8 | Force majeure and indemnification clause extraction | force majeure clause extraction |
| 9 | Governing law and choice of law clause detection | governing law clause extraction |
| 10 | Power of attorney and remote online notarization verification | remote online notarization verification |
| 11 | M&A due diligence data room document processing | due diligence data room software |
| 12 | Deposition and court transcript OCR | deposition transcript ocr |
| 13 | Patent claim extraction and classification | patent claim extraction |
| 14 | NDA clause extraction (mutual vs one-way, carve-outs) | nda clause extraction |
| 15 | Arbitration and dispute resolution clause extraction | arbitration clause extraction |
| 16 | Court docket and structured filing extraction | court docket ocr |
| 17 | Cap table and corporate minute book document processing | cap table document automation |
| 18 | Legal hold custodian acknowledgment tracking | legal hold custodian tracking |
| 19 | Title and closing document processing for real estate | title document ocr |
| 20 | Cross-border contract translation and localization | legal document translation ocr |
| 21 | Statute of limitations and legal deadline extraction | legal deadline extraction |

## Pillar and file structure

Pillar link: `/documents/legal-docs` as primary, `/use-cases/contract-abstraction` as secondary where contextually relevant. Sibling links: within-cluster plus `contract-ocr` and `legal-document-automation-the-complete-guide-for-modern-law-firms` where genuinely relevant as the broader overview a narrow post sits underneath. Files: `data/new-blogs/legal-document-ocr/NN-slug.ts`, aggregated into `data/new-blogs.ts` same as topics 1-3.

## Deviation log

None yet, will update inline if a concept turns out to overlap existing content once audited.
