import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog12: BlogPost = {
  id: "new-12",
  title: "Data Normalization for Extracted Documents: What to Standardize and How",
  slug: "data-normalization-extracted-documents",
  excerpt:
    "OCR can read a date correctly and still hand you three formats in one column. Normalization turns extracted text into one consistent form your systems can use. Here are the eight field types, the rules, and a working date example.",
  description:
    "Data normalization turns extracted document text into one consistent format. Eight field types, the rules for each, a working date parser and the checks to run after.",
  metaTag: "Data Normalization for Extracted Documents (2026)",
  content: `
    <p>Data normalization for extracted documents means converting each extracted value into one consistent, machine-readable form: dates as ISO 8601, amounts as a number plus a currency code, phone numbers in E.164, and so on. OCR can read every character correctly and still leave you with "May 12, 2025", "05/12/2025" and "2025-05-12" in the same column. Normalization is the step that turns that column into data a system can sort, match and sum.</p>
    <p>This guide covers the eight field types that need it, the rule for each, a working date parser, and the checks to run afterwards. If you are new to document AI, start with the <a href="/resources/blogs/optical-character-reader-2026">optical character reader guide</a> and come back when downstream systems start rejecting your OCR output.</p>

    <h2>What does normalization look like for each field type?</h2>
    <p>Every field type has its own messy inputs and its own clean target. The table shows the common cases.</p>

    <table>
      <thead><tr><th>Field type</th><th>Raw extracted values</th><th>Normalized form</th><th>Watch out for</th></tr></thead>
      <tbody>
        <tr><td>Date</td><td>"May 12, 2025", "12-May-2025", "2025-05-12"</td><td>2025-05-12 (ISO 8601)</td><td>"05/04/2025" is ambiguous without the document's locale</td></tr>
        <tr><td>Amount</td><td>"$1,234.56", "1.234,56 €", "1234.56 USD"</td><td>1234.56 plus the code USD or EUR</td><td>The decimal mark differs by country</td></tr>
        <tr><td>Phone</td><td>"(555) 123-4567", "+1 555 123 4567"</td><td>+15551234567 (E.164)</td><td>Local numbers need a default country</td></tr>
        <tr><td>Address</td><td>"123 Main St.", "123 Main Street"</td><td>Structured street, city, region, postal code</td><td>Abbreviations and word order vary by country</td></tr>
        <tr><td>Name</td><td>"John Smith", "Smith, John"</td><td>Separate given name, family name and suffix</td><td>Name order is not the same in every culture</td></tr>
        <tr><td>Account or ID number</td><td>"1234-5678", "1234 5678"</td><td>Digits only, then validated</td><td>Strip separators only when they carry no meaning</td></tr>
        <tr><td>Yes or no</td><td>"Yes", "Y", "true", a ticked box</td><td>true or false</td><td>An empty box is not the same as an unreadable one</td></tr>
        <tr><td>Document type</td><td>"Invoice", "Invoice (Original)", "INV"</td><td>One canonical label such as invoice</td><td>Map every variant explicitly</td></tr>
      </tbody>
    </table>

    <h2>How do you normalize dates?</h2>
    <p>Dates are the hardest, because the same string can mean two different days. "05/04/2025" is May 4 in the United States and April 5 in most of Europe. Pick the order from the document's context, such as the vendor country, the language and the document type, then store the result as ISO 8601 (YYYY-MM-DD), which sorts correctly and reads the same in every locale.</p>
    <p>Here is a small parser. It takes the order as an input instead of guessing, and it returns nothing when the value does not parse, so the caller can send it for review:</p>
    <pre><code>from datetime import datetime

def parse_date(raw, day_first):
    formats = ["%d/%m/%Y", "%d/%m/%y"] if day_first else ["%m/%d/%Y", "%m/%d/%y"]
    for fmt in formats:
        try:
            return datetime.strptime(raw.strip(), fmt).date().isoformat()
        except ValueError:
            continue
    return None  # do not guess: route to review

parse_date("05/04/2025", day_first=False)  # "2025-05-04"
parse_date("05/04/2025", day_first=True)   # "2025-04-05"</code></pre>
    <p>Two-digit years need a rule too. Python's <code>%y</code> reads 69 to 99 as 1969 to 1999 and 00 to 68 as 2000 to 2068, so "01/01/01" becomes 2001. If your documents can be older than that, flag two-digit years instead of trusting the default.</p>

    <h2>How do you normalize amounts and currencies?</h2>
    <p>Store the amount as a decimal number and the currency as a separate three-letter ISO 4217 code. Never store the formatted string, because "1.234,56" and "1,234.56" mean different numbers in different countries. Use a decimal type, not a floating-point one, so cents do not drift. Read the currency from the symbol or the code on the document, and when only a symbol such as "$" appears, use the document's country or the vendor's record to choose between dollars. The same rule applies to invoices in several currencies, covered in <a href="/resources/blogs/multi-currency-invoice-ocr">multi-currency invoice OCR</a>.</p>

    <h2>How do you normalize phones, addresses and names?</h2>
    <ul>
      <li><strong>Phones.</strong> Use Google's libphonenumber, which exists for every major language, and store the E.164 form such as +15551234567. Pass a default country for numbers written without a prefix.</li>
      <li><strong>Addresses.</strong> Parse into structured fields rather than cleaning the string. libpostal handles many countries. For US addresses, the USPS publishes its own standard abbreviations and an address service.</li>
      <li><strong>Names.</strong> Store given name, family name and suffix separately, and keep the original string too. Do not assume the first word is the given name, because name order differs across cultures. A library such as python-nameparser handles the common Western patterns.</li>
    </ul>

    <h2>How do you normalize IDs, account numbers and yes-or-no fields?</h2>
    <p>For identifiers, strip spaces and dashes, then validate against the format you expect. Many identifiers have a built-in check you can use: an IBAN passes a mod-97 test, a payment card number passes the Luhn test, and a US bank routing number has a check digit. A US Social Security number does not have a checksum, so check only its length and pattern. For yes-or-no fields, map every variant ("Yes", "Y", "true", a ticked box) to true or false, and keep a third state for a box you could not read, so unreadable never turns into false.</p>

    <h2>What makes normalization hard?</h2>
    <ul>
      <li><strong>Ambiguity needs context.</strong> A one-size-fits-all pattern cannot settle "05/04/2025". Build the parser around the document's origin.</li>
      <li><strong>OCR errors carry through.</strong> If OCR reads "5/4/2025" as "5/A/2025", normalization will fail or, worse, produce a wrong value without warning. Always validate after normalizing, and flag anything that does not look right.</li>
      <li><strong>Edge cases are common.</strong> "01/01/01" has several readings, and "$1.00" is not always a US dollar. Use conservative defaults and send anything ambiguous to a person.</li>
      <li><strong>Rules change.</strong> New currency codes, address formats and date styles appear. Treat the rules as code that needs maintenance.</li>
    </ul>

    <h2>Where does normalization fit in the pipeline?</h2>
    <p>Work in three layers, in this order:</p>
    <ol>
      <li><strong>Extract raw strings.</strong> Keep exactly what the document says. Do not clean during extraction, and store the raw value next to the clean one so you can audit it.</li>
      <li><strong>Normalize.</strong> Apply the rule for each field type, using a library for the hard cases and the document's context for the ambiguous ones.</li>
      <li><strong>Validate.</strong> Check that the result is sensible: the date is in a plausible range, the amount is positive where it should be, and the identifier passes its check. If validation fails, route the field to review. See <a href="/resources/blogs/real-time-document-validation-api">real-time document validation</a> for how this step fits a wider pipeline.</li>
    </ol>

    <h2>What goes wrong when you skip it?</h2>
    <p>The failures are quiet, which is what makes them costly. Nothing throws an error. The reports are just wrong.</p>
    <ul>
      <li>Dates that sort as text, so an invoice from December lands before one from February.</li>
      <li>Amounts that add up to the wrong total because one was read with the wrong decimal mark.</li>
      <li>The same supplier spread over several rows, such as "Acme Inc" and "Acme, Inc.", which understates spend with that vendor and weakens <a href="/resources/blogs/duplicate-invoice-detection">duplicate invoice detection</a>.</li>
      <li>Phone numbers and addresses that downstream systems reject.</li>
    </ul>
    <p>The same discipline shows up in compliance work, where amounts have to be numbers before monitoring can use them. See <a href="/resources/blogs/aml-document-checks">AML document checks</a>.</p>

    <h2>What should you do first?</h2>
    <p>If extracted data feeds other systems, build the normalization layer before you scale up OCR, because cleaning up later is harder. If you already have messy data, start with the field that causes the most downstream bugs, usually dates or vendor names, and fix that one first. When you evaluate a document AI vendor, ask what normalization it does, whether it is locale-aware, and whether it returns the raw value next to the clean one. For the wider limits of OCR itself, see the <a href="/resources/blogs/ocr-pdf-honest-guide">honest guide to OCR</a>.</p>
  `,
  image: "/images/ocr-accuracy.png",
  featuredImage: "/images/ocr-accuracy.png",
  category: "AI Document Intelligence",
  date: "June 17, 2026",
  datePublished: "2026-06-17T00:00:00.000Z",
  dateModified: "2026-10-29T00:00:00.000Z",
  last_updated: "October 29, 2026",
  readTime: "8 min read",
  author: nupuraUghade,
  primary_keyword: "data normalization",
  secondary_keywords: [
    "document data normalization",
    "extracted data normalization",
    "ocr normalization",
    "data cleansing",
    "post-extraction processing",
    "data standardization",
  ],
  tags: ["data normalization", "document AI", "post-processing"],
  cluster: "ai-doc",
  faq: [
    {
      question: "What is data normalization for extracted documents?",
      answer:
        "Data normalization converts extracted text into a consistent format your systems can use. Dates become ISO 8601, currencies become decimal amounts with codes, phone numbers become E.164, and so on. Without it, you have text, not data.",
    },
    {
      question: "Why do OCR pipelines need normalization?",
      answer:
        "Because documents are written in many formats. The same date can appear five different ways across vendors. Downstream systems expect one format. Normalization bridges the two.",
    },
    {
      question: "Should I write my own normalization code or use libraries?",
      answer:
        "Use libraries for dates, phones, and addresses. They handle edge cases you do not know about. Write your own only for domain-specific fields (account numbers, custom IDs) where libraries do not exist.",
    },
    {
      question: "What is the right canonical date format?",
      answer:
        "ISO 8601 (YYYY-MM-DD) for dates without time. ISO 8601 with timezone for date-times. It sorts correctly, parses reliably, and is unambiguous across locales.",
    },
    {
      question: "How do I handle ambiguous dates?",
      answer:
        "Use document context, such as the vendor country, language and document type, to pick the most likely parse. Flag anything genuinely ambiguous ('01/02/03') for human review. Do not silently guess.",
    },
    {
      question: "Where does normalization fit in the OCR pipeline?",
      answer:
        "After OCR extraction, before storage. Extract raw text first. Normalize next. Validate. Then store. Each step has its own concerns; mixing them creates bugs.",
    },
  ],
}
