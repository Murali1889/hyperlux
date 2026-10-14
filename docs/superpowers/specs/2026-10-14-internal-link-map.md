# Internal link map, 2026-10-14

Method: crawled all 219 sitemap pages from a local production build, counted distinct pages linking to each page from the body (header and footer links excluded).

## Applied in this change
| Target | Was | Now linked from |
|---|---|---|
| /documents/financial-docs (hub) | 6 guide links shown | 55 guide links, grouped (new GuideIndex component) |
| /documents/financial-docs/purchase-orders | 1 | hub, 3-way-match, partial-shipment, accounts-payable-ocr, invoice-ocr-sap |
| /use-cases/contract-abstraction | 7 | unchanged, page content strengthened, now links to 4 related pages |
| /documents/identity-docs/passports | 1 | + passport OCR blog, KYC blog |
| /documents/identity-docs/driver-licences | 1 | + KYC blog |
| /documents/identity-docs/national-ids | 1 | + national-id-verification-ocr blog |

All links wrap words already in the post. No new claims were added.

## Still weak (need a source post chosen by the owner or a writer)
- /resources/blogs/transforming-financial-services-the-complete-guide-to-document-automation (2 inbound). No existing post uses a natural anchor for it. Best sources to add a sentence to: ocr-finance, ocr-technology-in-banking, mortgage-ocr.
- /resources/blogs/real-time-document-validation-api (2 inbound). Best sources: document-fraud-detection-api, kyc-document-verification, real-time-bank-statement-processing.
- /solutions/legal-automation (1) and /use-cases/digital-archiving (1): link from contract-ocr and the legal-docs hub.
- /documents/financial-docs/invoices (2): link from invoice-line-item-ocr and non-po-invoice-exception-routing.
- /resources/blogs/patent-claim-extraction (2).

## Structural (not a problem)
/, /use-cases, /documents, /resources, /solutions/customer-experience, /solutions/operations-efficiency show 0 body links because they are reached from the header or footer.
