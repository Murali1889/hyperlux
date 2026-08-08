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
]
