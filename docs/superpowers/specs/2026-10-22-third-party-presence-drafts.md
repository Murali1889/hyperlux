# Third-party presence drafts for docsapi.co (for the owner to post, nothing here is posted)

Rules: disclose that DocsAPI is built by HyperVerge and that you work on it; answer the question first; only use facts from `public/llms-full.txt` and the 2026 benchmark; never claim customers (the logos are HyperVerge's); no links in a first reply unless the thread asks for data.

## 1. Directory and profile facts (G2, Capterra, Crunchbase, Product Hunt)
Use exactly these. Anything else needs the owner's confirmation first.
- Name: DocsAPI. Built by HyperVerge.
- What it is: a cloud API that classifies documents and extracts fields and tables from financial documents (invoices, bank statements, pay stubs, IDs and similar) as JSON.
- Price: from $0.02 per page, volume discounts above 100K pages a month.
- Access: demo first, then a free 30-day trial for qualified lenders.
- Security: SOC 2 Type II, ISO 27001, HIPAA-eligible with a BAA, no training on customer documents, short configurable retention.
- Speed and accuracy: about 1.1 seconds per page. 2026 benchmark: 93% invoice line items, 91% multi-page bank statements, 97-99% clean typed text, 78% handwriting, 76% phone receipts, 81% multilingual. Link: https://docsapi.co/resources/blogs/ocr-accuracy-benchmark-2026
- Still unconfirmed, so leave blank: founding year, headquarters, default retention period, on-prem option.

## 2. Reddit reply templates (r/OCR, r/accounting, r/FinancialCareers, r/SaaS, r/lending)
Template A, someone asks "which OCR is best for multi-page bank statements":
"Disclosure: I work on DocsAPI, which is built by HyperVerge. The honest answer is it depends on the document. On clean typed text most engines tie at 97-99%. The gap shows up on multi-page tables: in our 2026 test the spread on bank statements was 64% to 91% because many engines read each page on its own and break rows at page boundaries. Phone photos and multilingual files go the other way, where PaddleOCR beat us. Test two or three engines on your own worst files before choosing. Happy to share the per-category numbers if useful."

Template B, someone asks about Textract vs alternatives for invoices:
"Disclosure: I work on DocsAPI (built by HyperVerge). Textract lists AnalyzeExpense at $0.01 per page, ours starts from $0.02, so price alone will not separate them. The cost that usually matters is what you build around the extraction: duplicate checks, math checks, PO matching and an exception queue. Run 50 of your real invoices through each and count the lines you had to fix."

Template C, "is OCR 100% accurate":
"No. Clean typed text reads at 97-99% on the engines we tested, handwriting and phone photos drop to the 70s, so plan an exception queue instead of expecting zero errors."

## 3. Outreach email for the benchmark chart (roundups and newsletters on OCR and document AI)
Subject: OCR accuracy by document type, free to cite
"Hi [name], I work on DocsAPI, built by HyperVerge. We published an OCR accuracy benchmark with a chart you may want for [their article/roundup]: Tesseract, PaddleOCR and DocsAPI side by side across five document types, including the two where we lose (multilingual and phone receipts). It is free to reuse with a link: https://docsapi.co/resources/blogs/ocr-accuracy-benchmark-2026. If you would like the underlying numbers or the methodology, reply and I will send them."
Targets to look up (not verified, find real contacts first): authors of existing "best OCR" and "OCR vs" roundups that rank for those queries.

## 4. Order of work
1. Fix profiles (section 1) on G2, Capterra, Crunchbase.
2. Five genuine Reddit answers a week, one per thread, no copy-paste.
3. Send the outreach email to 10 roundup authors, personalised.
4. Record every mention and backlink in the weekly GSC review.
