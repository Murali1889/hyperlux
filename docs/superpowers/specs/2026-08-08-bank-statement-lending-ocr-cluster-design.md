# Bank Statement / Lending OCR 21-Post Cluster Design (Topic 2 of 3)

**Date:** 2026-08-08
**Scope:** Second of the 3-topic, 63-blog push. Same contract as topic 1 (see `2026-08-07-invoice-ap-ocr-cluster-design.md`): full competitive audit per post, 2,000+ words, real concrete asset, zero em-dashes, zero keyword collisions.

## Existing coverage checked before locking concepts

6 posts already live: `mortgage-ocr`, `credit-card-statement-ocr`, `ocr-technology-in-banking` (new-blogs), plus legacy `ocr-bank-statement-technology-revolutionizing-financial-data-processing`, `revolutionizing-finance-how-automated-bank-statement-analysis-transforms-lending-decisions`, `the-ultimate-guide-to-small-business-lending-automation-revolutionizing-sba-loans-and-financing`. Their full keyword footprint was pulled and cross-checked. The legacy "Automated Bank Statement Analysis" post has brief cash-flow-metrics and fraud-pattern sections; concepts 14 and 17 below go deeper and more technical than those brief mentions, same pattern used for build-vs-buy in topic 1.

Real long-tail demand mined from `gap.keywords_*.csv`: income verification API, pay stub verification, underwriting automation, mortgage document automation/management — all with real volume/KD data, used to validate and phrase the concepts below.

## The 21 concepts

| # | Concept | Primary keyword |
|---|---|---|
| 1 | Pay stub / income verification OCR | income verification api |
| 2 | W-2/1099 tax form OCR for underwriting | w2 1099 ocr underwriting |
| 3 | Tax transcript (4506-C) OCR | 4506-c tax transcript ocr |
| 4 | Bank statement asset verification (VOA) | verification of assets ocr |
| 5 | Auto loan document OCR | auto loan document ocr |
| 6 | Personal/unsecured loan doc OCR | personal loan document ocr |
| 7 | HELOC document OCR | heloc document ocr |
| 8 | Small business line of credit doc OCR | business line of credit ocr |
| 9 | Student loan refinance doc OCR | student loan refinance ocr |
| 10 | Credit union lending OCR | credit union lending ocr |
| 11 | Hard money/private lender doc OCR | hard money lender document ocr |
| 12 | Neobank/fintech lending OCR | fintech lending api ocr |
| 13 | DTI ratio calculation from OCR'd statements | dti calculation ocr |
| 14 | Cash-flow underwriting methodology | cash flow underwriting ocr |
| 15 | NSF/overdraft detection | nsf overdraft detection ocr |
| 16 | Multi-account statement aggregation | multi account bank statement ocr |
| 17 | Bank statement fraud/alteration detection | bank statement fraud detection |
| 18 | Real-time vs batch underwriting processing | real time bank statement processing |
| 19 | Fair lending/ECOA compliance audit trails | ecoa compliance document ocr |
| 20 | State-specific mortgage doc requirements | state mortgage document requirements |
| 21 | Bank statement OCR pricing/accuracy at scale | bank statement ocr pricing |

## Pillar and file structure

Pillar link: `/use-cases/loan-verification` (confirmed live route). Sibling links: within-cluster plus the 6 existing bank-statement/lending posts where contextually relevant. Files: `data/new-blogs/bank-statement-lending-ocr/NN-slug.ts`, aggregated into `data/new-blogs.ts` same as topic 1.

## Deviation log (concepts swapped mid-build, if any)

None yet — will update inline if a concept turns out to overlap existing content once audited, same process as topic 1's 3 swaps.
