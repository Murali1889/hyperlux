import type { BlogPost } from "@/types/resources"
import { blog01 } from "./new-blogs/01-make-pdf-searchable"
import { blog02 } from "./new-blogs/02-readable-pdf-vs-image-pdf"
import { blog03 } from "./new-blogs/03-ocr-pdf-honest-guide"
import { blog04 } from "./new-blogs/04-pdf-text-recognition"
import { blog05 } from "./new-blogs/05-scanned-pdf-searchable"
import { blog06 } from "./new-blogs/06-free-online-ocr-tools"
import { blog07 } from "./new-blogs/07-pdf-parser-online"
import { blog08 } from "./new-blogs/08-optical-character-reader-2026"
import { blog09 } from "./new-blogs/09-context-engineering-document-ai"
import { blog10 } from "./new-blogs/10-document-detection-before-ocr"
import { blog11 } from "./new-blogs/11-docling-vs-llamaparse-vs-docsapi"
import { blog12 } from "./new-blogs/12-data-normalization-extracted-documents"
import { blog13 } from "./new-blogs/13-vlm-vs-ocr"
import { blog14 } from "./new-blogs/14-kyc-document-verification"
import { blog15 } from "./new-blogs/15-aml-document-checks"
import { blog16 } from "./new-blogs/16-revenue-cycle-management-document-intake"
import { blog17 } from "./new-blogs/17-know-your-customer-documents"
import { blog18 } from "./new-blogs/18-aws-textract-vs-docsapi"
import { blog19 } from "./new-blogs/19-abbyy-finereader-alternative"
import { blog20 } from "./new-blogs/20-paddleocr-vs-tesseract-vs-docsapi"
import { blog21 } from "./new-blogs/21-ocr-accounting"
import { blog22 } from "./new-blogs/22-ocr-banking"
import { blog23 } from "./new-blogs/23-document-fraud-detection-api"
import { blog24 } from "./new-blogs/24-mortgage-ocr"
import { blog25 } from "./new-blogs/25-credit-card-statement-ocr"
import { blog26 } from "./new-blogs/26-document-classification-software"
import { blog27 } from "./new-blogs/27-ocr-meaning-finance"
import { blog28 } from "./new-blogs/28-real-time-document-validation-api"
import { blog29 } from "./new-blogs/29-ocr-finance"
import { blog30 } from "./new-blogs/30-accounts-payable-ocr"
import { blog31 } from "./new-blogs/31-best-ocr-software-accounts-payable"
import { blog32 } from "./new-blogs/32-enterprise-document-ocr"
import { blog33 } from "./new-blogs/33-contract-ocr"
import { blog34 } from "./new-blogs/34-ocr-accuracy-benchmark-2026"

// Invoice/AP-OCR cluster (topic 1 of 3, 21 posts) — see
// docs/superpowers/specs/2026-08-07-invoice-ap-ocr-cluster-design.md
import { blogAp01 } from "./new-blogs/invoice-ap-ocr/01-invoice-ocr-quickbooks"
import { blogAp02 } from "./new-blogs/invoice-ap-ocr/02-invoice-ocr-netsuite"
import { blogAp03 } from "./new-blogs/invoice-ap-ocr/03-invoice-ocr-sap"
import { blogAp04 } from "./new-blogs/invoice-ap-ocr/04-invoice-ocr-xero"
import { blogAp05 } from "./new-blogs/invoice-ap-ocr/05-3-way-match-invoice-automation"
import { blogAp06 } from "./new-blogs/invoice-ap-ocr/06-duplicate-invoice-detection"
import { blogAp07 } from "./new-blogs/invoice-ap-ocr/07-invoice-line-item-ocr"
import { blogAp08 } from "./new-blogs/invoice-ap-ocr/08-early-payment-discount-capture"
import { blogAp09 } from "./new-blogs/invoice-ap-ocr/09-non-po-invoice-exception-routing"
import { blogAp10 } from "./new-blogs/invoice-ap-ocr/10-invoice-fraud-detection"
import { blogAp11 } from "./new-blogs/invoice-ap-ocr/11-month-end-ap-close"
import { blogAp12 } from "./new-blogs/invoice-ap-ocr/12-multi-currency-invoice-ocr"
import { blogAp13 } from "./new-blogs/invoice-ap-ocr/13-email-invoice-parsing"
import { blogAp14 } from "./new-blogs/invoice-ap-ocr/14-handwritten-faxed-invoice-ocr"
import { blogAp15 } from "./new-blogs/invoice-ap-ocr/15-partial-shipment-invoice-matching"
import { blogAp16 } from "./new-blogs/invoice-ap-ocr/16-ap-clerk-day-before-after-ocr"
import { blogAp17 } from "./new-blogs/invoice-ap-ocr/17-invoice-ocr-cfo-business-case"
import { blogAp18 } from "./new-blogs/invoice-ap-ocr/18-build-vs-buy-invoice-ocr"
import { blogAp19 } from "./new-blogs/invoice-ap-ocr/19-invoice-ocr-pricing-models"
import { blogAp20 } from "./new-blogs/invoice-ap-ocr/20-rules-based-vs-ai-invoice-extraction"
import { blogAp21 } from "./new-blogs/invoice-ap-ocr/21-invoice-ocr-parallel-run-sample-size"

// Bank Statement/Lending OCR cluster (topic 2 of 3, 21 posts) — see
// docs/superpowers/specs/2026-08-08-bank-statement-lending-ocr-cluster-design.md
import { blogBl01 } from "./new-blogs/bank-statement-lending-ocr/01-pay-stub-income-verification-ocr"
import { blogBl02 } from "./new-blogs/bank-statement-lending-ocr/02-w2-1099-tax-form-ocr-underwriting"
import { blogBl03 } from "./new-blogs/bank-statement-lending-ocr/03-4506-c-tax-transcript-ocr"
import { blogBl04 } from "./new-blogs/bank-statement-lending-ocr/04-verification-of-assets-ocr"
import { blogBl05 } from "./new-blogs/bank-statement-lending-ocr/05-auto-loan-document-ocr"
import { blogBl06 } from "./new-blogs/bank-statement-lending-ocr/06-personal-loan-document-ocr"
import { blogBl07 } from "./new-blogs/bank-statement-lending-ocr/07-heloc-document-ocr"
import { blogBl08 } from "./new-blogs/bank-statement-lending-ocr/08-business-line-of-credit-ocr"
import { blogBl09 } from "./new-blogs/bank-statement-lending-ocr/09-student-loan-refinance-ocr"
import { blogBl10 } from "./new-blogs/bank-statement-lending-ocr/10-credit-union-lending-ocr"
import { blogBl11 } from "./new-blogs/bank-statement-lending-ocr/11-hard-money-lender-document-ocr"
import { blogBl12 } from "./new-blogs/bank-statement-lending-ocr/12-fintech-lending-api-ocr"
import { blogBl13 } from "./new-blogs/bank-statement-lending-ocr/13-dti-calculation-ocr"
import { blogBl14 } from "./new-blogs/bank-statement-lending-ocr/14-cash-flow-underwriting-ocr"
import { blogBl15 } from "./new-blogs/bank-statement-lending-ocr/15-nsf-overdraft-detection-ocr"
import { blogBl16 } from "./new-blogs/bank-statement-lending-ocr/16-multi-account-bank-statement-ocr"
import { blogBl17 } from "./new-blogs/bank-statement-lending-ocr/17-bank-statement-fraud-detection"
import { blogBl18 } from "./new-blogs/bank-statement-lending-ocr/18-real-time-bank-statement-processing"
import { blogBl19 } from "./new-blogs/bank-statement-lending-ocr/19-ecoa-compliance-document-ocr"
import { blogBl20 } from "./new-blogs/bank-statement-lending-ocr/20-state-mortgage-document-requirements"
import { blogBl21 } from "./new-blogs/bank-statement-lending-ocr/21-bank-statement-ocr-pricing"

// KYC/AML/Compliance OCR cluster (topic 3 of 3, 21 posts) — see
// docs/superpowers/specs/2026-08-08-kyc-aml-compliance-ocr-cluster-design.md
import { blogKa01 } from "./new-blogs/kyc-aml-compliance-ocr/01-mrz-passport-verification"
import { blogKa02 } from "./new-blogs/kyc-aml-compliance-ocr/02-beneficial-ownership-verification"
import { blogKa03 } from "./new-blogs/kyc-aml-compliance-ocr/03-kyb-verification"
import { blogKa04 } from "./new-blogs/kyc-aml-compliance-ocr/04-sanctions-screening-ocr"
import { blogKa05 } from "./new-blogs/kyc-aml-compliance-ocr/05-pep-screening-kyc"
import { blogKa06 } from "./new-blogs/kyc-aml-compliance-ocr/06-watchlist-screening-automation"
import { blogKa07 } from "./new-blogs/kyc-aml-compliance-ocr/07-adverse-media-screening"
import { blogKa08 } from "./new-blogs/kyc-aml-compliance-ocr/08-customer-due-diligence-process"
import { blogKa09 } from "./new-blogs/kyc-aml-compliance-ocr/09-suspicious-activity-report-filing"
import { blogKa10 } from "./new-blogs/kyc-aml-compliance-ocr/10-travel-rule-compliance-crypto"
import { blogKa11 } from "./new-blogs/kyc-aml-compliance-ocr/11-liveness-detection-kyc"
import { blogKa12 } from "./new-blogs/kyc-aml-compliance-ocr/12-proof-of-address-verification"
import { blogKa13 } from "./new-blogs/kyc-aml-compliance-ocr/13-national-id-verification-ocr"
import { blogKa14 } from "./new-blogs/kyc-aml-compliance-ocr/14-ein-verification-kyc"
import { blogKa15 } from "./new-blogs/kyc-aml-compliance-ocr/15-perpetual-kyc-monitoring"
import { blogKa16 } from "./new-blogs/kyc-aml-compliance-ocr/16-kyc-document-expiry-automation"
import { blogKa17 } from "./new-blogs/kyc-aml-compliance-ocr/17-synthetic-identity-fraud-detection"
import { blogKa18 } from "./new-blogs/kyc-aml-compliance-ocr/18-cross-border-kyc-compliance"
import { blogKa19 } from "./new-blogs/kyc-aml-compliance-ocr/19-kyc-record-retention-requirements"
import { blogKa20 } from "./new-blogs/kyc-aml-compliance-ocr/20-real-time-sanctions-screening"

export const newBlogs: BlogPost[] = [
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
  blog06,
  blog07,
  blog08,
  blog09,
  blog10,
  blog11,
  blog12,
  blog13,
  blog14,
  blog15,
  blog16,
  blog17,
  blog18,
  blog19,
  blog20,
  blog21,
  blog22,
  blog23,
  blog24,
  blog25,
  blog26,
  blog27,
  blog28,
  blog29,
  blog30,
  blog31,
  blog32,
  blog33,
  blog34,
  blogAp01,
  blogAp02,
  blogAp03,
  blogAp04,
  blogAp05,
  blogAp06,
  blogAp07,
  blogAp08,
  blogAp09,
  blogAp10,
  blogAp11,
  blogAp12,
  blogAp13,
  blogAp14,
  blogAp15,
  blogAp16,
  blogAp17,
  blogAp18,
  blogAp19,
  blogAp20,
  blogAp21,
  blogBl01,
  blogBl02,
  blogBl03,
  blogBl04,
  blogBl05,
  blogBl06,
  blogBl07,
  blogBl08,
  blogBl09,
  blogBl10,
  blogBl11,
  blogBl12,
  blogBl13,
  blogBl14,
  blogBl15,
  blogBl16,
  blogBl17,
  blogBl18,
  blogBl19,
  blogBl20,
  blogBl21,
  blogKa01,
  blogKa02,
  blogKa03,
  blogKa04,
  blogKa05,
  blogKa06,
  blogKa07,
  blogKa08,
  blogKa09,
  blogKa10,
  blogKa11,
  blogKa12,
  blogKa13,
  blogKa14,
  blogKa15,
  blogKa16,
  blogKa17,
  blogKa18,
  blogKa19,
  blogKa20,
]
