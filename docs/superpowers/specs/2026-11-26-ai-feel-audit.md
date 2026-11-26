# AI-feel audit of every docsapi.co page (2026-11-26)

Method: fetched the live HTML of all 236 sitemap URLs, extracted the main text, scored AI-writing tells (humanize-writing list: stock vocabulary, filler phrases, significance inflation, dashes, sentence rhythm, bold-colon lists, cross-page repeated openers and sentences), then read the flagged passages on every page. Scores are tells per 1,000 words (site median 1.5). Pages changed Nov 3 to 19 were left alone unless they carried a false claim.

Counts: Reads AI: rewrite 4, Reads AI: frozen until Dec 1 23, Partly fixed, rewrite queued 61, Fixed today, rest after Dec 1 5, Fixed today 19, Reads human 120, n/a 4

## Fixed today
- 100 component files behind the home, products, industries, demo, 5 solution, 6 use-case and 10 document pages: 219 sentences of stock marketing copy rewritten in plain words.
- Removed claims nothing supports: 'Join hundreds of companies/financial institutions/organizations', 'Join leading lenders/healthcare organizations/companies', 'industry-leading accuracy', 'thousands of document templates', named LOS integrations (Encompass, Calyx Point, Mortgage Cadence), AES-256, 'End-to-end compliance with all HIPAA requirements' (now: HIPAA-eligible with a BAA), MRZ check digits 'ensure authenticity' (they check data integrity).
- 58 blog excerpts that used the 'X guides explain A. Almost none explain B.' or 'Here is the real...' template rewritten as plain answer-first sentences.
- 832 filler 'actually' and 'genuinely' removed from 60 posts outside the freeze.
- Invented case studies removed: SBA post ('A community bank I advised', 45 to 12 day close, also in its title, excerpt, meta description and FAQ), two client anecdotes in revolutionizing-document-management, the controller with 214 invoices in 3-way-match, the '$200K' fraud system story (that post was last changed Nov 17, inside the freeze; fixed anyway because it was a false claim). Unsourced SBA stats removed ('70% cost reduction', '40-60% faster', '20% approval rates', '96-99% accuracy').

## Still open
- 4 legacy posts need full rewrites (stock article skeleton).
- 61 Aug to Sep posts: openers and fillers fixed, but bodies still read machine-written (stacked qualifiers, padded sentences, near-identical length). 71 of 84 in this group had zero impressions Nov 10 to 23.
- 23 frozen posts and 6 frozen template spots: fix after Dec 1.
- For the owner: unverified claims left in place: GDPR and CCPA compliance, 'over 100 languages' (national ID FAQ), pre-built connectors (SAP, Oracle, Dynamics, NetSuite, Sage, QuickBooks, SharePoint, Box), penetration testing, TLS 1.3 and AES-256 in the compliance FAQ. First-person stories credited to the author that we cannot verify are marked below.
- Dead code: a commented-out testimonials block on /industries quotes 'Global Lending' and 'CIMB Bank' with a 99.9% accuracy claim. Not live; should be deleted.

## Every page

| Verdict | Page | Score | Why |
|---|---|---|---|
| Reads AI: rewrite | /resources/blogs/intelligent-document-processing-the-future-of-automated-data-extraction | 30.6 | Stock AI article skeleton (Introduction, Benefits, Future, Conclusion), 'In today's', 'revolutionary', 'streamlined'. Full rewrite needed. |
| Reads AI: rewrite | /resources/blogs/legal-document-automation-the-complete-guide-for-modern-law-firms | 19.6 | 'In today's fast-paced legal environment', 'game-changing', 'This comprehensive guide'. Full rewrite needed. |
| Reads AI: rewrite | /resources/blogs/revolutionizing-document-management-with-ocr-technology | 8.3 | Two invented client anecdotes and a fake 'I remember' removed today; body still reads templated. Rewrite needed. |
| Reads AI: rewrite | /resources/blogs/the-ultimate-guide-to-small-business-lending-automation-revolutionizing-sba-loans-and-financing | 34.0 | Stock AI article skeleton and unsourced stats; invented SBA case study, false title and meta removed today. Full rewrite needed. |
| Reads AI: frozen until Dec 1 | /resources/blogs/auto-loan-document-ocr | 2.0 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; 'actually'/'genuinely' 12 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/bank-statement-ocr-pricing | 1.0 | 'actually'/'genuinely' 27 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/build-vs-buy-invoice-ocr | 0.5 | 'actually'/'genuinely' 22 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/cash-flow-underwriting-ocr | 1.0 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; 'actually'/'genuinely' 23 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/credit-card-statement-ocr | 2.6 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; long stacked-qualifier sentences, uniform ~1,950 word length. Unverified first-person claim: 'I once had to reconcile 400 expense reports' |
| Reads AI: frozen until Dec 1 | /resources/blogs/document-classification-software | 4.2 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; 'actually'/'genuinely' 11 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/dti-calculation-ocr | 1.0 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; 'actually'/'genuinely' 22 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/duplicate-invoice-detection | 1.5 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; 'actually'/'genuinely' 14 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/ecoa-compliance-document-ocr | 4.0 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; 'actually'/'genuinely' 47 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/handwritten-faxed-invoice-ocr | 2.0 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; 'actually'/'genuinely' 16 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/hard-money-lender-document-ocr | 0.0 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; 'actually'/'genuinely' 24 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/invoice-line-item-ocr | 0.0 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; 'actually'/'genuinely' 14 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/know-your-customer-documents | 4.2 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/mrz-passport-verification | 0.0 | 'actually'/'genuinely' 25 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/multi-account-bank-statement-ocr | 0.0 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; 'actually'/'genuinely' 19 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/multi-currency-invoice-ocr | 0.0 | 'actually'/'genuinely' 18 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/national-id-verification-ocr | 3.0 | 'actually'/'genuinely' 16 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/nsf-overdraft-detection-ocr | 0.0 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; 'actually'/'genuinely' 15 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/pay-stub-income-verification-ocr | 0.5 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; 'actually'/'genuinely' 25 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/pdf-parser-online | 1.3 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; 'actually'/'genuinely' 13 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/prior-authorization-automation | 1.4 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; 'actually'/'genuinely' 17 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/proof-of-address-verification | 0.0 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; 'actually'/'genuinely' 23 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Reads AI: frozen until Dec 1 | /resources/blogs/rules-based-vs-ai-invoice-extraction | 0.0 | templated 'guides explain X, almost none Y' or 'Here is the real' opener; 'actually'/'genuinely' 19 times; long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/3-way-match-invoice-automation | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/4506-c-tax-transcript-ocr | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/adverse-media-screening | 0.5 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/air-waybill-verification | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/ap-clerk-day-before-after-ocr | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/bank-statement-fraud-detection | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/beneficial-ownership-verification | 0.5 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/biometric-face-match-kyc | 1.5 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/business-line-of-credit-ocr | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/container-number-verification | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/context-engineering-document-ai | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length. Unverified first-person claim: 'My first RAG demo failed in front of the CFO' |
| Partly fixed, rewrite queued | /resources/blogs/court-docket-ocr | 0.8 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/credit-union-lending-ocr | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/cross-border-kyc-compliance | 2.6 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/customer-due-diligence-process | 9.3 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/dangerous-goods-declaration-processing | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/dea-number-verification | 0.7 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/demurrage-detention-documentation | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/denial-code-extraction | 2.5 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/early-payment-discount-capture | 3.6 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/ein-verification-kyc | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/email-invoice-parsing | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/eob-parsing-automation | 2.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/fintech-lending-api-ocr | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/force-majeure-clause-extraction | 0.7 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/heloc-document-ocr | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/hipaa-deidentification-automation | 0.3 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/hl7-fhir-document-processing | 1.1 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/incoterms-clause-extraction | 1.5 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/invoice-fraud-detection | 3.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/invoice-ocr-cfo-business-case | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/invoice-ocr-parallel-run-sample-size | 0.5 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/invoice-ocr-pricing-models | 0.5 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/invoice-ocr-sap | 1.6 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/kyb-verification | 2.1 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/kyc-document-expiry-automation | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/kyc-record-retention-requirements | 3.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/legal-citation-checker | 0.4 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/legal-deadline-extraction | 3.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/legal-hold-custodian-tracking | 2.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/litigation-hold-software | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/liveness-detection-kyc | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/medical-necessity-documentation | 0.7 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/month-end-ap-close-bottleneck | 1.5 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/non-po-invoice-exception-routing | 2.1 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/pep-screening-kyc | 5.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/perpetual-kyc-monitoring | 3.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/personal-loan-document-ocr | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/privilege-log-automation | 2.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/real-time-bank-statement-processing | 0.5 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/real-time-sanctions-screening | 4.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/revenue-cycle-management-document-intake | 1.4 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/sanctions-screening-ocr | 0.5 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/state-mortgage-document-requirements | 3.6 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/student-loan-refinance-ocr | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/suspicious-activity-report-filing | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/synthetic-identity-fraud-detection | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/travel-rule-compliance-crypto | 3.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/verification-of-assets-ocr | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/w2-1099-tax-form-ocr-underwriting | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Partly fixed, rewrite queued | /resources/blogs/watchlist-screening-automation | 0.0 | Fixed today: opener and filler adverbs. Still: long stacked-qualifier sentences, uniform ~1,950 word length |
| Fixed today, rest after Dec 1 | / | 25.9 | Stock marketing copy rewritten in plain words; unverifiable claims removed; frozen part left: hero eyebrow 'Intelligent document automation for smarter lending' |
| Fixed today, rest after Dec 1 | /documents/shipping-docs | 17.9 | Stock marketing copy rewritten in plain words; unverifiable claims removed; frozen part left: FAQ 'comprehensive document processing' |
| Fixed today, rest after Dec 1 | /products | 8.3 | Stock marketing copy rewritten in plain words; unverifiable claims removed; frozen part left: hero 'Intelligent document automation' |
| Fixed today, rest after Dec 1 | /use-cases | 43.6 | Stock marketing copy rewritten in plain words; unverifiable claims removed; frozen part left: hero says 'Unlock business value', 'unmatched speed, accuracy' |
| Fixed today, rest after Dec 1 | /use-cases/id-proofing | 3.8 | Stock marketing copy rewritten in plain words; unverifiable claims removed; frozen part left: 'Comprehensive ID Proofing Solution', 'comprehensive risk scoring' |
| Fixed today | /book-demo | 9.7 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /documents/financial-docs | 2.3 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /documents/financial-docs/bank-statements | 14.8 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /documents/identity-docs | 12.5 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /documents/identity-docs/driver-licences | 5.9 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /documents/identity-docs/national-ids | 3.9 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /documents/identity-docs/passports | 6.6 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /documents/legal-docs | 9.4 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /documents/medical-docs | 46.2 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /industries | 29.9 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /solutions/compliance-risk | 7.3 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /solutions/customer-experience | 15.5 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /solutions/finance-automation | 48.0 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /solutions/legal-automation | 26.0 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /solutions/operations-efficiency | 53.5 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /use-cases/contract-abstraction | 7.4 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /use-cases/digital-archiving | 8.9 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /use-cases/invoice-processing | 9.1 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Fixed today | /use-cases/loan-verification | 19.1 | Stock marketing copy rewritten in plain words; unverifiable claims removed |
| Reads human | /about | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /author/nupura-ughade | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /documents | 0.0 | Plain copy with specific numbers |
| Reads human | /documents/financial-docs/invoices | 1.5 | Plain copy with specific numbers |
| Reads human | /documents/financial-docs/purchase-orders | 1.7 | Plain copy with specific numbers |
| Reads human | /pricing | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs | 3.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/835-remittance-advice-processing | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/abbyy-finereader-alternative | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/accounts-payable-ocr | 8.8 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/advance-beneficiary-notice-processing | 2.8 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/advance-ship-notice-processing | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/aml-document-checks | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/arbitration-clause-extraction | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/aws-textract-vs-docsapi | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/bank-statement-ocr-errors-balance-check | 1.2 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/best-ocr-software-2026 | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/best-ocr-software-for-accounts-payable | 1.6 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/bill-of-lading-processing | 0.6 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/bulk-and-high-volume-ocr-processing | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/cap-table-document-automation | 0.3 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ccda-document-processing | 2.7 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/certificate-of-origin-verification | 1.9 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/chain-of-custody-documentation | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/cms-1500-form-processing | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/contract-ocr | 2.6 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/contract-redlining-software | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/convert-fax-tiff-jpg-png-to-text | 2.9 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/customs-entry-summary-processing | 1.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/customs-power-of-attorney-processing | 3.8 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/data-normalization-extracted-documents | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/deposition-transcript-ocr | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/docling-vs-llamaparse-vs-docsapi | 6.3 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/document-detection-before-ocr | 2.5 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/document-fraud-detection-api | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/due-diligence-data-room-software | 3.6 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/duplicate-invoice-detection-ocr | 0.8 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/e-discovery-document-review | 2.3 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/eligibility-verification-automation | 0.3 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/enterprise-document-ocr | 3.1 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/extract-invoice-data-to-excel | 2.5 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/extract-tables-from-scanned-pdf | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/free-online-ocr-tools | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/freight-bill-audit-automation | 1.2 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/freight-invoice-automation | 0.7 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/governing-law-clause-extraction | 1.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/hcc-risk-adjustment-coding | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/hipaa-minimum-necessary-redaction | 0.6 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/how-does-ocr-work | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/how-to-fix-ocr-errors | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/how-to-measure-ocr-accuracy | 1.4 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/hs-code-classification | 3.6 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/idp-vs-ocr-understanding-the-key-differences-for-automation-success | 2.0 | Measured tests or specific facts, no stacked AI tells. Unverified first-person claim: '...I shipped used OCR alone' |
| Reads human | /resources/blogs/insurance-card-ocr | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/invoice-ocr-api | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/invoice-ocr-netsuite | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/invoice-ocr-quickbooks-integration | 0.0 | Measured tests or specific facts, no stacked AI tells. Unverified first-person claim: 'I have wired OCR output into QuickBooks Online enough times' |
| Reads human | /resources/blogs/invoice-ocr-xero | 0.5 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/kyc-document-verification | 6.1 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ledes-billing-format | 2.3 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/legal-document-translation-ocr | 0.6 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/letter-of-credit-document-compliance | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/loinc-code-extraction | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/make-pdf-searchable | 0.0 | Measured tests or specific facts, no stacked AI tells. Unverified first-person claim: 'I had known at 5:48 PM' anecdote |
| Reads human | /resources/blogs/master-house-bill-of-lading-reconciliation | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/medical-coding-automation | 0.6 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/medical-fax-automation | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/mortgage-ocr | 3.3 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/multilingual-ocr-guide | 1.1 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/nda-clause-extraction | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ndc-code-extraction | 3.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/npi-verification-api | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-accounting | 6.2 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-accuracy-benchmark-2026 | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-apis-the-secret-weapon-smart-finance-teams-are-using-right-now | 2.8 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-bank-statement-technology-revolutionizing-financial-data-processing | 1.1 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-checkbox-and-signature-detection | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-finance | 4.1 | Measured tests or specific facts, no stacked AI tells. Unverified first-person claim: 'I have built finance OCR pipelines that processed 4 million pages a month' |
| Reads human | /resources/blogs/ocr-for-kyc-verification | 1.7 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-for-legal-documents | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-for-lending-and-underwriting | 0.6 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-for-medical-documents | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-for-passports-id-cards-and-drivers-licenses | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-for-shipping-and-logistics-documents | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-for-tax-documents | 0.7 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-image-preprocessing-what-helps-what-hurts | 2.7 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-integration-with-accounting-crm-erp | 0.8 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-layout-analysis-and-key-value-extraction | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-pdf-honest-guide | 0.5 | Measured tests or specific facts, no stacked AI tells. Unverified first-person claim: 'What I learned running OCR on 4 million PDF pages a month' |
| Reads human | /resources/blogs/ocr-stamps-watermarks-highlighter | 2.8 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-technology-in-banking | 4.9 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/ocr-upside-down-sideways-pages | 2.1 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/optical-character-reader-2026 | 2.6 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/packing-list-reconciliation | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/paddleocr-vs-tesseract-vs-docsapi | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/partial-shipment-invoice-matching | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/passport-ocr-revolutionizing-identity-verification-with-automated-data-extraction | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/patent-claim-extraction | 0.6 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/pdf-text-recognition | 4.8 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/proof-of-delivery-processing | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/readable-pdf-vs-image-pdf | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/real-time-document-validation-api | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/release-of-information-processing | 2.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/remote-online-notarization-verification | 1.6 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/revolutionizing-finance-how-automated-bank-statement-analysis-transforms-lending-decisions | 3.6 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/scanned-pdf-searchable | 2.0 | Measured tests or specific facts, no stacked AI tells. Unverified first-person claim: 'I had three machines... a 200-page court document' |
| Reads human | /resources/blogs/section-321-de-minimis-processing | 0.4 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/shipment-status-edi-processing | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/smarter-invoice-processing-the-ocr-advantage-for-finance-departments | 5.5 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/smb-lending-automation-document-processing | 3.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/split-loan-packet-pdf | 2.4 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/title-document-ocr | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/transforming-financial-services-the-complete-guide-to-document-automation | 3.2 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/understanding-ocr-accuracy-metrics-challenges-and-improvement-strategies | 4.8 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/vgm-declaration-processing | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/vlm-vs-ocr | 0.4 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/warehouse-receipt-processing | 0.9 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /resources/blogs/what-is-zonal-ocr | 3.1 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /tools/free-ocr | 0.0 | Measured tests or specific facts, no stacked AI tells |
| Reads human | /tools/which-ocr | 3.0 | Measured tests or specific facts, no stacked AI tells |
| n/a | /ai.txt |  | machine file or under 120 words |
| n/a | /llms-full.txt |  | machine file or under 120 words |
| n/a | /llms.txt |  | machine file or under 120 words |
| n/a | /resources |  | machine file or under 120 words |
