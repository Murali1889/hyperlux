import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const post: BlogPost = {
  id: "kg-47",
  title: "OCR Integration with Accounting Software, CRM and ERP: 5 Steps",
  slug: "ocr-integration-with-accounting-crm-erp",
  excerpt:
    "OCR only reads the document. Getting the data into QuickBooks, Xero, NetSuite, SAP, Salesforce or an expense tool takes five steps, and most failures happen in mapping and validation. Here are the field maps and the error table.",
  description:
    "How to connect OCR to QuickBooks, Xero, NetSuite, SAP, Salesforce and expense tools: 5 steps, checked field maps, and fixes for rejected posts.",
  metaTag: "OCR Integration with Accounting, CRM and ERP (2026)",
  summary:
    "To connect OCR to QuickBooks, Salesforce, SAP or an expense tool, use the same five steps: capture the document, extract fields, validate them, map them to the target's fields, then post and confirm. Most failures come from mapping and validation, not from reading the page.",
  content: `
    <p>OCR has done its part the moment it hands you the fields. Then comes the part that eats weekends: getting those fields into QuickBooks, Salesforce, SAP or an expense tool without a duplicate bill, a wrong vendor or a total that quietly changed. It is the same five steps every time: capture, extract, validate, map, and post and confirm. Below: each step, field maps checked against each vendor's API docs, and a guide for each system.</p>

    <h2>How does OCR integration with accounting software work?</h2>

    <p>OCR integration with accounting software is a five-step pipeline: capture the file, extract fields, validate them, map them to the target system's fields, then post and confirm. The OCR only covers step 2. Steps 3 to 5 are code or configuration you own, and they decide whether data lands in the right fields.</p>

    <ol>
      <li>Capture. The file arrives by email, upload, scan or API. Keep the original to attach later. Our <a href="/resources/blogs/email-invoice-parsing">email invoice parsing guide</a> covers intake traps.</li>
      <li>Extract. OCR returns fields as JSON (a plain-text data format): supplier, invoice number, dates, currency, lines, tax, total. It does not know your vendor list or chart of accounts.</li>
      <li>Validate. Check totals, duplicates, vendor match, tax and required fields before posting.</li>
      <li>Map. Turn each field into the target's field and ID: a vendor name becomes a vendor ID, and a category becomes a general ledger (GL) account. <a href="/resources/blogs/data-normalization-extracted-documents">Data normalization</a> cleans the inputs.</li>
      <li>Post and confirm. Call the API, read the response, store the returned ID, attach the source file, and send failures to a person.</li>
    </ol>

    <p>Terms: an ERP is enterprise resource planning software (SAP, NetSuite). A CRM is customer relationship management software (Salesforce). A PO is a purchase order. An API is how programs talk to each other.</p>

    <h2>Which guide covers OCR integration with QuickBooks, Xero, NetSuite and SAP?</h2>

    <p>Use our four system guides: invoice OCR to QuickBooks, Xero, NetSuite and SAP. Each has its own field map and failure modes. Salesforce, other CRMs and expense tools are covered on this page, and the other guides below cover matching, exceptions, email intake and currency.</p>

    <ul>
      <li><a href="/resources/blogs/invoice-ocr-quickbooks-integration">Invoice OCR to QuickBooks sync</a>: for OCR integration with QuickBooks, the Bill field map and five places the sync breaks.</li>
      <li><a href="/resources/blogs/invoice-ocr-xero">Invoice OCR to Xero</a>: ACCPAY versus ACCREC, DRAFT versus AUTHORISED, and tracking categories.</li>
      <li><a href="/resources/blogs/invoice-ocr-netsuite">NetSuite invoice OCR</a>: the vendorbill field map, item versus expense lines and OneWorld subsidiaries.</li>
      <li><a href="/resources/blogs/invoice-ocr-sap">Invoice OCR to SAP</a>: for OCR integration with SAP, why PO and non-PO invoices post differently, and BAPI versus IDoc.</li>
      <li><a href="/resources/blogs/ocr-accounting">OCR accounting</a>: which accounting documents to automate first.</li>
      <li><a href="/resources/blogs/accounts-payable-ocr">Accounts payable OCR</a>: the intake-to-routing pipeline and five vendor tests.</li>
      <li><a href="/resources/blogs/3-way-match-invoice-automation">3-way match automation</a>: how to tell a real mismatch from an OCR misread.</li>
      <li><a href="/resources/blogs/non-po-invoice-exception-routing">Non-PO invoice exception routing</a>: a true no-PO invoice versus a missed PO number.</li>
      <li><a href="/resources/blogs/email-invoice-parsing">Email invoice parsing</a>: forwarded threads, email-body invoices and sender checks.</li>
      <li><a href="/resources/blogs/multi-currency-invoice-ocr">Multi-currency invoice OCR</a>: picking the currency and the exchange rate to book.</li>
    </ul>

    <h2>What fields does each system expect?</h2>

    <p>Every system wants IDs, not names, plus a vendor, dates, lines and a total, but the field names differ. The tables below list them for QuickBooks, Xero, NetSuite, SAP and Salesforce, each checked against the vendor's API docs on September 21, 2026.</p>

    <h3>QuickBooks Online</h3>
    <p>Docs: <a href="https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/bill" target="_blank" rel="noopener">Bill</a>, <a href="https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/vendor" target="_blank" rel="noopener">Vendor</a>, <a href="https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/attachable" target="_blank" rel="noopener">Attachable</a>.</p>
    <table>
      <thead><tr><th>Field</th><th>What to put in it, and what the docs say</th></tr></thead>
      <tbody>
        <tr><td><code>VendorRef</code> (required)</td><td>The matched vendor's Id, not the name.</td></tr>
        <tr><td><code>Line</code> (required)</td><td>Account-based line: Amount and AccountRef. Item-based line: ItemRef, Qty and UnitPrice. Your rules pick the account.</td></tr>
        <tr><td><code>TxnDate</code></td><td>Invoice date. The docs call it the posting date that affects the financial statements.</td></tr>
        <tr><td><code>DueDate</code></td><td>If omitted, SalesTermRef days are added to TxnDate.</td></tr>
        <tr><td><code>DocNumber</code></td><td>Supplier invoice number, 21 characters at most. A duplicate throws an error unless include=allowduplicatedocnum is set.</td></tr>
        <tr><td><code>TotalAmt</code></td><td>Read only. QuickBooks calculates it and overwrites what you send, so tie out totals yourself.</td></tr>
        <tr><td><code>CurrencyRef</code></td><td>Required when multicurrency is on.</td></tr>
        <tr><td>New vendor <code>DisplayName</code></td><td>Up to 500 characters, unique across Vendor, Customer and Employee records.</td></tr>
        <tr><td>Source file</td><td>A separate multipart upload to Attachable after the bill exists, up to 100 MB per request.</td></tr>
      </tbody>
    </table>

    <h3>Xero</h3>
    <p>Docs: <a href="https://developer.xero.com/documentation/api/accounting/invoices" target="_blank" rel="noopener">Invoices</a>. A supplier bill is an invoice of Type ACCPAY.</p>
    <table>
      <thead><tr><th>Field</th><th>What to put in it, and what the docs say</th></tr></thead>
      <tbody>
        <tr><td><code>Type</code> (required)</td><td>ACCPAY for a supplier bill.</td></tr>
        <tr><td><code>Contact</code> (required)</td><td>Send only ContactID. Other fields update the contact record itself.</td></tr>
        <tr><td><code>LineItems</code> (one or more)</td><td>Description, Quantity, UnitAmount, AccountCode, TaxType (overrides the account default) and Tracking (up to 2 per line).</td></tr>
        <tr><td><code>Date</code>, <code>DueDate</code></td><td>YYYY-MM-DD. Date defaults to today.</td></tr>
        <tr><td><code>InvoiceNumber</code></td><td>Supplier's number, 255 characters at most. Not unique for bills, so duplicate checks are yours.</td></tr>
        <tr><td><code>Status</code></td><td>DRAFT (the default; no journals; account codes may be missing), SUBMITTED (awaits approval) or AUTHORISED (creates journals).</td></tr>
        <tr><td><code>SubTotal</code>, <code>TotalTax</code>, <code>Total</code></td><td>Send all three on a SUBMITTED or AUTHORISED bill and Xero checks them against the lines, allowing a RoundingAmount up to 0.10 either way. The API spec calls this opt-in per organisation.</td></tr>
        <tr><td>Source file</td><td>Up to 10 attachments, 25 MB each, after the invoice exists.</td></tr>
      </tbody>
    </table>

    <h3>NetSuite</h3>
    <p>Docs: <a href="https://system.netsuite.com/help/helpcenter/en_US/APIs/REST_API_Browser/record/v1/2025.2/index.html#/definitions/vendorBill" target="_blank" rel="noopener">REST API Browser, vendorBill</a> (release 2025.2).</p>
    <table>
      <thead><tr><th>Field</th><th>What to put in it, and what the docs say</th></tr></thead>
      <tbody>
        <tr><td><code>entity</code></td><td>The vendor, by internal ID.</td></tr>
        <tr><td><code>subsidiary</code></td><td>The legal entity billed. OneWorld needs your own rule to pick it.</td></tr>
        <tr><td><code>tranDate</code></td><td>The bill's posting date, which sets where it shows on the accounts payable register.</td></tr>
        <tr><td><code>dueDate</code></td><td>Without one, the docs say the bill is missing from aging reports.</td></tr>
        <tr><td><code>tranId</code></td><td>Reference No., suggested for the vendor's invoice number.</td></tr>
        <tr><td><code>expense</code> lines</td><td>Account, amount, memo, department, class, location, taxAmount.</td></tr>
        <tr><td><code>item</code> lines</td><td>Item, quantity, rate, amount, description, plus orderDoc and orderLine to point at a PO.</td></tr>
        <tr><td><code>currency</code>, <code>exchangeRate</code></td><td>The bill's currency and its rate.</td></tr>
        <tr><td><code>externalId</code></td><td>Your ID for the source document. A PUT to record/v1/vendorBill/eid:&lt;ID&gt; creates the bill or updates it, so retries do not duplicate.</td></tr>
      </tbody>
    </table>

    <h3>SAP</h3>
    <p>Docs: SAP Help Portal, <a href="https://help.sap.com/docs/SAP_S4HANA_CLOUD/bb9f1469daf04bd894ab2167f8132a1a/7bc52558ef790a02e10000000a44147b.html" target="_blank" rel="noopener">Supplier Invoice OData service</a> (S/4HANA Cloud). The BAPI column comes from secondary references, because SAP documents that function module inside its systems.</p>
    <table>
      <thead><tr><th>Document data</th><th>OData field (mandatory, per SAP Help)</th><th>BAPI_INCOMINGINVOICE_CREATE</th></tr></thead>
      <tbody>
        <tr><td>Company code</td><td>CompanyCode</td><td>COMP_CODE</td></tr>
        <tr><td>Invoice date</td><td>DocumentDate</td><td>DOC_DATE</td></tr>
        <tr><td>Posting date</td><td>PostingDate</td><td>PSTNG_DATE</td></tr>
        <tr><td>Supplier's invoice number</td><td>SupplierInvoiceIDByInvcgParty</td><td>REF_DOC_NO</td></tr>
        <tr><td>Supplier</td><td>InvoicingParty</td><td>Check the function module documentation</td></tr>
        <tr><td>Currency</td><td>DocumentCurrency (items must match the header)</td><td>CURRENCY</td></tr>
        <tr><td>Gross total</td><td>InvoiceGrossAmount (net items plus tax)</td><td>GROSS_AMOUNT</td></tr>
        <tr><td>Line with a PO</td><td>PurchaseOrder, PurchaseOrderItem, SupplierInvoiceItem, TaxCode, SupplierInvoiceItemAmount</td><td>PO_NUMBER, PO_ITEM, INVOICE_DOC_ITEM, TAX_CODE, ITEM_AMOUNT</td></tr>
        <tr><td>Line with no PO</td><td>G/L item: GLAccount, DebitCreditCode, SupplierInvoiceItemAmount</td><td>ACCOUNTINGDATA table</td></tr>
      </tbody>
    </table>
    <p>Per SAP Help, the OData service is synchronous, needs a deep create (all nodes in one request), and can park or hold an invoice. An SAP Community answer says the BAPI needs BAPI_TRANSACTION_COMMIT to save.</p>

    <h3>Salesforce (an Opportunity with a file attached)</h3>
    <p>Docs: <a href="https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm" target="_blank" rel="noopener">Opportunity</a>, <a href="https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentversion.htm" target="_blank" rel="noopener">ContentVersion</a>, <a href="https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocumentlink.htm" target="_blank" rel="noopener">ContentDocumentLink</a>.</p>
    <table>
      <thead><tr><th>Field</th><th>What to put in it, and what the docs say</th></tr></thead>
      <tbody>
        <tr><td><code>Opportunity.Name</code> (required)</td><td>Deal or contract title, up to 120 characters.</td></tr>
        <tr><td><code>Opportunity.StageName</code> (required)</td><td>A picklist value from your process, not the document.</td></tr>
        <tr><td><code>Opportunity.CloseDate</code> (required)</td><td>Expected close date.</td></tr>
        <tr><td><code>Opportunity.Amount</code></td><td>Estimated total sale amount, such as contract value.</td></tr>
        <tr><td><code>Opportunity.AccountId</code></td><td>The matched Account, by ID.</td></tr>
        <tr><td><code>ContentVersion</code></td><td>Title, PathOnClient (full path with extension, needed for preview) and VersionData (base64, adding about 37% to size). The docs give 50 MB as the SOAP API upload limit.</td></tr>
        <tr><td><code>FirstPublishLocationId</code></td><td>Set to the Opportunity's ID to create the file and link it in one transaction.</td></tr>
        <tr><td><code>ContentDocumentLink</code></td><td>Links an existing file to more records, custom objects included. ShareType is required.</td></tr>
      </tbody>
    </table>

    <h2>What should you check before posting?</h2>

    <p>Check six things before any post: totals and line math, duplicates, vendor match, tax, dates and period, and required fields. If one fails, send the record to a person with the failing field highlighted. Xero, for example, refuses updates to bills in a locked period.</p>

    <table>
      <thead><tr><th>Check</th><th>Rule</th><th>Why (from the docs)</th></tr></thead>
      <tbody>
        <tr><td>Totals and line math</td><td>Quantity x unit price equals each line amount, and lines plus tax equal the total to the cent.</td><td>QuickBooks overwrites TotalAmt. SAP defines InvoiceGrossAmount as net items plus tax. Xero validates totals you send.</td></tr>
        <tr><td>Duplicates</td><td>Same supplier and invoice number, then amount and date. See <a href="/resources/blogs/duplicate-invoice-detection">duplicate invoice detection</a>.</td><td>Xero bills can repeat an invoice number. QuickBooks flags a duplicate DocNumber, which holds only 21 characters.</td></tr>
        <tr><td>Vendor match</td><td>Resolve to the system's vendor ID. Never create a vendor without review.</td><td>QuickBooks needs a vendor Id, and a new DisplayName must be unique across vendors, customers and employees.</td></tr>
        <tr><td>Tax</td><td>Each line has a tax code the target knows, and tax total equals line tax.</td><td>SAP PO lines require TaxCode. Xero TaxType overrides the account default.</td></tr>
        <tr><td>Dates and period</td><td>Dates read as real dates, and the period is open.</td><td>QuickBooks TxnDate is the posting date. SAP keeps DocumentDate and PostingDate apart.</td></tr>
        <tr><td>Required fields</td><td>Every mandatory field holds a real value, never a dummy one.</td><td>SAP's header has 7 mandatory fields. A Salesforce Opportunity needs Name, StageName and CloseDate.</td></tr>
      </tbody>
    </table>

    <h3>Worked example: two misreads the totals check catches</h3>

    <p>Take three lines: 12 x 24.50 = 294.00, 3 x 118.75 = 356.25, and freight of 45.00. The subtotal is 695.25. Tax at 8.25% on the two goods lines (650.25) is 53.6456, rounded to 53.65. The total is 748.90. We ran this in Python with the decimal module.</p>

    <ul>
      <li>OCR reads the total as 748.98. Lines plus tax give 748.90, so the check fails by 0.08.</li>
      <li>OCR reads the quantity 12 as 17. Then 17 x 24.50 = 416.50 against a printed 294.00, a gap of 122.50.</li>
    </ul>

    <p>One trap: Xero allows a RoundingAmount up to 0.10 either way when you send totals. Use it only for rounding printed on the invoice, not to pass a misread like the 0.08 above.</p>

    <p>This matters because OCR is never perfect. In our <a href="/resources/blogs/ocr-accuracy-benchmark-2026">benchmark</a>, the best result on invoice line items was 93%, so some lines will be wrong. In our <a href="/resources/blogs/best-ocr-software-for-accounts-payable">200-invoice AP trial</a>, our own pipeline (DocsAPI, our product) reached 81% touchless with a validation layer we built, and about 65% before it. More in <a href="/resources/blogs/invoice-line-item-ocr">invoice line-item extraction</a>.</p>

    <h2>What do you do when the ERP rejects a post?</h2>

    <p>A rejected post is the good outcome. The bad one is a post that goes through wrong. Read the error, fix the mapped field and retry only that record. Most OCR integration for ERP systems fails in repeatable ways: duplicates, missing required fields, wrong IDs, rate limits and closed periods. Never retry blindly, because a timed-out post may have succeeded.</p>

    <table>
      <thead><tr><th>System</th><th>What you see</th><th>Likely cause (per the docs)</th><th>What to do</th></tr></thead>
      <tbody>
        <tr><td>QuickBooks</td><td>Error on DocNumber</td><td>The same DocNumber already exists</td><td>Look up that vendor's bill. Same invoice: log and skip. A different bill: retry with include=allowduplicatedocnum.</td></tr>
        <tr><td>QuickBooks</td><td>HTTP 429</td><td>Over 500 requests a minute or 10 a second per company</td><td>Wait 60 seconds, as the docs advise. Batch requests (30 payloads is the recommended maximum).</td></tr>
        <tr><td>Xero</td><td>HTTP 400 with validation errors</td><td>A field fails validation, such as totals that do not tie</td><td>Post with SummarizeErrors=false so each invoice in a batch reports its own errors. Resend only the failures.</td></tr>
        <tr><td>Xero</td><td>HTTP 429</td><td>Over 60 calls a minute, or 5 at once, for one organisation</td><td>Pause that organisation until the Retry-After time. About 50 invoices per request is practical.</td></tr>
        <tr><td>NetSuite</td><td>Timeout, unsure if it posted</td><td>The first call may have created the bill</td><td>Post with PUT to vendorBill/eid:&lt;ID&gt;. The same ID updates instead of duplicating.</td></tr>
        <tr><td>SAP OData</td><td>Error messages in the response</td><td>A mandatory field is missing, or item currency differs from the header</td><td>Fix it and resend the whole deep create, because all nodes are created together.</td></tr>
        <tr><td>SAP</td><td>Invoice posted but blocked</td><td>Price or quantity outside tolerance</td><td>The service can release a blocked invoice, but releasing is a buyer or AP decision.</td></tr>
        <tr><td>Salesforce</td><td>HTTP 400, or 403 with REQUEST_LIMIT_EXCEEDED</td><td>400: an error in the request body. 403 with that code: the org's API request limit</td><td>For 400, check required fields first. For 403, slow down, queue and retry later.</td></tr>
      </tbody>
    </table>

    <p>Make posting safe to repeat. Log the source file, the payload and the returned ID for every attempt, and check that log before any retry.</p>

    <h2>How does OCR integration with CRM and Salesforce work?</h2>

    <p>OCR integration with CRM usually means reading a document, filling a few record fields, and attaching the file to the right record. Typical documents are business cards, contracts, order forms and ID copies. OCR with Salesforce integration follows the same pattern: fields go into an object such as Lead or Opportunity, and the file links through ContentVersion.</p>

    <p>Salesforce has a native option. Salesforce Help describes an Intelligent Document Reader that uses Amazon Textract through your own AWS account and maps a form's fields to a Salesforce object's fields. The page we opened lists Health Cloud editions, so check yours. Otherwise, call an OCR API and write to Salesforce yourself, using the table above.</p>

    <p>Business cards are the classic case. A Salesforce Lead needs Company and LastName, so a card with no company fails or gets a dummy value. Send those to review. HubSpot's contacts API needs at least one of email, firstname or lastname, treats email as the unique identifier, and has a batch upsert that creates or updates by email. One wrong character in an email creates a new contact, so a person should see emails.</p>

    <p>For contracts and ID copies, attach the file to the Opportunity, Account or Contact and write only the few fields you use, such as contract value into Amount. The risk is attaching to the wrong record, so match by ID, not fuzzy name. Treat ID fields as claims, not proof (see <a href="/resources/blogs/know-your-customer-documents">know your customer documents</a>). Loan teams feed a loan system instead: see <a href="/resources/blogs/ocr-for-lending-and-underwriting">OCR for loan underwriting</a>.</p>

    <h2>How do you automate expense reports with OCR?</h2>

    <p>To automate expense reports with OCR, the employee photographs a receipt, OCR fills merchant, date and total, and the expense tool adds category, tax and policy checks before approval and posting. Microsoft's Dynamics 365 receipt OCR follows the same split: it extracts three fields, then matches receipts to expenses.</p>

    <p>OCR for expense management is only the capture step. Microsoft Learn says its receipt OCR extracts merchant name, date and total amount. Category, tax, payment method and project come from the expense tool or the employee, and whether an expense is allowed is a policy call.</p>

    <p>Two flows exist: receipt-first, where the employee creates an expense from a receipt, and card-feed-first, where card transactions are imported and receipts are matched to them. Microsoft's page describes matching unattached receipts to unattached expenses.</p>

    <p>To reach the books, an approved expense becomes a transaction. In QuickBooks Online that is a Purchase, which requires Line, PaymentType (Cash, Check or CreditCard) and AccountRef (a bank or credit card account). Check for duplicates first: one expense can arrive twice, as a card transaction and as a receipt. Match on date, amount and merchant.</p>

    <h2>What is an OCR data entry automation tool?</h2>

    <p>An OCR data entry automation tool reads documents and fills fields that a person would otherwise type. Some are built into the system you already use, some are AP or expense platforms, and some are OCR APIs you connect yourself. OCR to automate data entry works best when every field has a validation rule and a review queue behind it.</p>

    <table>
      <thead><tr><th>Type</th><th>Examples</th><th>Good when</th><th>Watch out for</th></tr></thead>
      <tbody>
        <tr><td>Built into the target system</td><td>NetSuite Bill Capture, Dynamics 365 receipt capture, Salesforce Intelligent Document Reader</td><td>You use one system and want the fewest moving parts</td><td>Limits. Oracle says Bill Capture is US only, takes PDFs up to 30 pages, 8 MB per file, one bill per file, and a person clicks Create Bill. Dynamics reads three receipt fields.</td></tr>
        <tr><td>AP or expense platform</td><td>Tools ranked in our <a href="/resources/blogs/best-ocr-software-for-accounts-payable">AP tools trial</a></td><td>You want intake, approval and payment in one product</td><td>Which objects and fields it writes to your ERP. In our trial, no AP tool reached the 99% touchless rate vendors advertise.</td></tr>
        <tr><td>OCR or document AI API</td><td>AWS Textract, Google Document AI, DocsAPI</td><td>You have developers, unusual documents or high volume</td><td>You write validation, mapping, posting and the exception queue. Costs: <a href="/resources/blogs/invoice-ocr-pricing-models">how invoice OCR pricing models compare</a>.</td></tr>
      </tbody>
    </table>

    <p>Ask any vendor: Which objects and fields do you write? Do you post as draft or final? What happens when a post is rejected? How do you avoid duplicates on retry? Is the original file attached to the record? Vendors who cannot answer sell extraction and leave the integration to you.</p>

    <h2>Where to start</h2>
    <p>Pick one document type and one system, and get that loop right before you add the next.</p>

    <ul>
      <li>If you are still choosing a system, start with <a href="/resources/blogs/smarter-invoice-processing-the-ocr-advantage-for-finance-departments">OCR for invoices and AP documents</a>. If you already run one, open its guide above, build the field map for your chart of accounts, and run 20 real invoices from your messiest suppliers next to manual entry (<a href="/resources/blogs/invoice-ocr-parallel-run-sample-size">parallel run sample size</a>).</li>
      <li>If you are a developer starting from nothing, build steps 3 to 5 first with the checklist and error table. Any OCR API that returns JSON can feed them.</li>
      <li>If you need invoice fields as JSON, see our <a href="/solutions/finance-automation">finance automation</a> page. DocsAPI is our product. Its public manifest describes an HTTP API that returns JSON and lists no prebuilt connectors for QuickBooks, Xero, NetSuite, SAP or Salesforce, so plan to write or buy the mapping and posting code.</li>
    </ul>

    <h2>Sources</h2>

    <p>We opened each vendor's documentation on September 21, 2026 and checked every table field against it. Docs change, so recheck before you build. We did not run these calls against live sandboxes, so treat the tables as a starting point, not tested code.</p>

    <ul>
      <li>Intuit: <a href="https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/bill" target="_blank" rel="noopener">Bill</a>, <a href="https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/vendor" target="_blank" rel="noopener">Vendor</a>, <a href="https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/attachable" target="_blank" rel="noopener">Attachable</a>, <a href="https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/purchase" target="_blank" rel="noopener">Purchase</a>, <a href="https://developer.intuit.com/app/developer/qbo/docs/learn/limits-and-throttles" target="_blank" rel="noopener">API limits</a>.</li>
      <li>Xero: <a href="https://developer.xero.com/documentation/api/accounting/invoices" target="_blank" rel="noopener">Invoices</a>, <a href="https://developer.xero.com/documentation/guides/oauth2/limits" target="_blank" rel="noopener">API limits</a>.</li>
      <li>NetSuite and Oracle: <a href="https://system.netsuite.com/help/helpcenter/en_US/APIs/REST_API_Browser/record/v1/2025.2/index.html#/definitions/vendorBill" target="_blank" rel="noopener">REST API Browser</a>, <a href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156335203191.html" target="_blank" rel="noopener">Upsert Operation</a>, <a href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0417034348.html" target="_blank" rel="noopener">Bill Capture limits</a>, <a href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1021105256.html" target="_blank" rel="noopener">Uploading vendor bills</a>.</li>
      <li>SAP: <a href="https://help.sap.com/docs/SAP_S4HANA_CLOUD/bb9f1469daf04bd894ab2167f8132a1a/7bc52558ef790a02e10000000a44147b.html" target="_blank" rel="noopener">Supplier Invoice OData V2</a> and its header, PO item and G/L item pages. For the BAPI, an <a href="https://community.sap.com/t5/application-development-and-automation-discussions/bapi-incominginvoice-create/m-p/2662312" target="_blank" rel="noopener">SAP Community answer</a> and a <a href="https://sapmm.wordpress.com/2010/03/14/fu-bapi_incominginvoice_create/" target="_blank" rel="noopener">copy of the function module documentation</a>. The SAP Business Accelerator Hub needs a sign-in, so we did not use it.</li>
      <li>Salesforce: <a href="https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lead.htm" target="_blank" rel="noopener">Lead</a>, <a href="https://help.salesforce.com/s/articleView?id=ind.admin_intelligent_document_reader.htm&amp;language=en_US&amp;type=5" target="_blank" rel="noopener">Intelligent Document Reader</a>, <a href="https://developer.salesforce.com/docs/platform/api-rest/guide/errorcodes.html" target="_blank" rel="noopener">REST status codes</a>, plus the three objects linked above.</li>
      <li>HubSpot <a href="https://developers.hubspot.com/docs/api-reference/crm-contacts-v3/guide" target="_blank" rel="noopener">contacts API guide</a>. Microsoft <a href="https://learn.microsoft.com/en-us/dynamics365/project-operations/expense/match-receipt-expense-ocr" target="_blank" rel="noopener">Capture a receipt using OCR</a>.</li>
      <li>Ours: the <a href="/resources/blogs/ocr-accuracy-benchmark-2026">OCR accuracy benchmark</a> and the public DocsAPI manifest at docsapi.co/llms-full.txt.</li>
    </ul>
  `,
  image: "/images/invoice-processing.png",
  featuredImage: "/images/invoice-processing.png",
  category: "AI Document Intelligence",
  date: "October 5, 2026",
  datePublished: "2026-10-05T00:00:00.000Z",
  dateModified: "2026-10-08T00:00:00.000Z",
  last_updated: "October 8, 2026",
  readTime: "13 min read",
  author: nupuraUghade,
  primary_keyword: "ocr integration with accounting software",
  secondary_keywords: [
    "ocr integration with quickbooks",
    "ocr integration with crm",
    "ocr with salesforce integration",
    "ocr integration for erp systems",
    "ocr integration with sap",
    "ocr to automate data entry",
    "ocr data entry automation tool",
    "automate expense reports with ocr",
    "ocr for expense management",
  ],
  tags: [
    "OCR integration",
    "QuickBooks",
    "Xero",
    "NetSuite",
    "SAP",
    "Salesforce",
    "expense management",
    "data entry automation",
  ],
  cluster: "industry-trends",
  faq: [
    {
      question: "Can OCR post into QuickBooks or SAP without any code?",
      answer:
        "Not by itself. OCR returns fields, and a connector or your own code maps them and calls the target's API. Some products ship that layer, and some systems have built-in capture, such as NetSuite Bill Capture. DocsAPI's public manifest describes an HTTP API that returns JSON and does not list prebuilt connectors, so plan to build or buy the posting step.",
    },
    {
      question: "Should OCR post bills as drafts or as final?",
      answer:
        "Start with drafts or a review step. Xero accepts DRAFT, SUBMITTED or AUTHORISED, and only AUTHORISED creates journals. NetSuite Bill Capture asks a person to click Create Bill after reviewing suggestions. SAP's service can park or hold an invoice. Move to automatic posting only for suppliers whose parallel-run results were clean.",
    },
    {
      question: "How do I stop duplicates when a post is retried?",
      answer:
        "Use the target's safe-retry option where one exists: a NetSuite PUT to an external ID creates or updates, so a retry does not create a second bill. In QuickBooks, look up the vendor's bill by DocNumber before retrying. In Xero, bills can repeat invoice numbers, so check supplier plus invoice number yourself. Store the returned ID for every post.",
    },
    {
      question: "Does OCR know my chart of accounts or GL codes?",
      answer:
        "No. OCR reads text and knows nothing about your books. QuickBooks needs an AccountRef, Xero an AccountCode and SAP a GLAccount for lines without a PO. Those come from vendor-to-account rules or a person. Send suppliers you have never coded before to a review queue instead of guessing.",
    },
    {
      question: "How do I attach the original invoice to the record?",
      answer:
        "Attach it in a separate step after the record exists. QuickBooks takes a multipart upload to Attachable with the bill's Id, up to 100 MB per request. Xero allows up to 10 attachments per invoice, 25 MB each. In Salesforce, create a ContentVersion with FirstPublishLocationId set to the record's ID. Without this, an auditor has no source document.",
    },
    {
      question: "Can I send business card scans to HubSpot?",
      answer:
        "Yes, through the API. A contact needs at least one of email, firstname or lastname, and HubSpot treats email as the primary unique identifier. A batch upsert endpoint creates or updates contacts by email, so a re-scanned card updates the contact instead of duplicating it. Have a person check email addresses, because one wrong character creates a new contact.",
    },
    {
      question: "Is OCR for expense management available in every country?",
      answer:
        "No. Microsoft's Dynamics 365 receipt OCR page lists the USA, Canada, the UK and Australia as supported, the EU partly (English receipts only), and Asia, Japan and Africa as not supported. It also says support is not expanding. Test your countries, languages and receipt types before you commit to a tool.",
    },
    {
      question: "What are the limits of NetSuite Bill Capture?",
      answer:
        "Oracle's docs say it is available only in the United States and accepts PDF, JPEG and PNG. PDFs can run to 30 pages, images to 1 page, each file up to 8 MB, one bill per file, and up to 50 files per upload. A person reviews the suggestions and clicks Create Bill. Bills without a PO have a few unsupported features.",
    },
    {
      question: "Can OCR to automate data entry run with no human review?",
      answer:
        "Not for most invoice streams. In our benchmark of 8 AP tools on 200 real invoices, none reached the 99% touchless rate vendors advertise, and the realistic ceiling was in the low 80s. Our own pipeline scored 81% with a validation layer we built and about 65% without it. Keep a review queue for the rest.",
    },
    {
      question: "What does DocsAPI connect to?",
      answer:
        "Its public manifest describes an HTTP API that returns extracted fields as JSON, with classification and validation, and it runs as a cloud API. The manifest does not list prebuilt connectors for QuickBooks, Xero, NetSuite, SAP or Salesforce, so the mapping and posting code is yours or a partner's. This page states only what the manifest says.",
    },
  ],
}
