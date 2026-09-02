import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogLd04: BlogPost = {
  id: "ld-04",
  title: "Legal Citation Checker: Why Regex Alone Gets It Wrong",
  slug: "legal-citation-checker",
  excerpt:
    "410 U.S. 113, 164-65 is a valid Bluebook pincite. 410 U.S. 113, 164-165 is not. Here is what a citation checker actually has to encode to tell them apart.",
  description:
    "How a legal citation checker parses Bluebook format: case italicization rules, reporter abbreviation tables, and pincite formatting, plus why regex alone fails.",
  metaTag: "Legal Citation Checker: The Bluebook Rules Explained",
  content: `
    <p>Take two citations that look almost identical to a human reviewer skimming a brief: <em>Roe v. Wade</em>, 410 U.S. 113, 164-65 (1973), and <em>Roe v. Wade</em>, 410 U.S. 113, 164-165 (1973). One of those is a correctly formatted Bluebook pincite. The other is wrong, and not in a way a spell checker or a generic proofreading tool would ever catch, because both strings are spelled correctly, both are grammatically fine, and both point a reader to the exact same two pages. The difference is a single Bluebook rule about dropping repeated digits in a page range, and it is the kind of rule that a document intelligence system built for <a href="/documents/legal-docs">legal document processing</a> either encodes explicitly or gets wrong silently, citation after citation, without ever throwing an error.</p>

    <p>That gap, the space between "looks like a citation" and "is a correctly formatted citation," is where most legal citation checker content stops being useful. It is easy to find articles that list a handful of citation-checking products and describe what they promise to do. It is much harder to find anything that explains the actual structural rules those products have to encode, or why a naive pattern-matching approach breaks on real legal text long before it gets anywhere near comprehensive. This post covers both: the specific Bluebook rules a citation checker has to get right, and what a citation-parsing pipeline that actually works looks like under the hood, using a real, publicly documented open source tool as the concrete example.</p>

    <h2>What "correct" means for a case name</h2>

    <p>Bluebook Rule 10.2 governs how a case name gets formatted inside a citation, and it is more involved than "italicize it." The rule requires dropping every party after the first named plaintiff and first named defendant, so a case captioned <em>Smith, Jones, and Rodriguez v. Acme Corp., Beta LLC, and Gamma Inc.</em> gets cited as <em>Smith v. Acme Corp.</em>, full stop, regardless of how many additional parties the actual case involved. Given names get dropped in favor of surnames alone. Geographic descriptors attached to a party, "State of," "City of," "Commonwealth of," get retained when they are part of the formal party name but the rule treats them differently depending on context. And critically, when "United States" is itself a named party to the case, as it is in the overwhelming majority of federal criminal appeals, it is never abbreviated to "U.S." inside the case name itself, even though "U.S." is the correct abbreviation for the reporter two words later in the same citation string. A checker that does not encode that exception will either wrongly flag <em>United States v. Nixon</em> as inconsistent or, worse, silently "correct" it to something incorrect.</p>

    <h2>Table T6, and why word-by-word abbreviation is not optional</h2>

    <p>Once a case name appears inside a citation clause rather than in running prose, Bluebook Table T6 requires abbreviating a specific, enumerated list of words wherever they appear in a party name. "Association" becomes "Ass'n." "Corporation" becomes "Corp." "Incorporated" becomes "Inc." "Company" becomes "Co." "Brothers" becomes "Bros." "Department" becomes "Dep't." The word "and" becomes an ampersand. "Number" becomes "No." This is not a stylistic preference the citation checker can skip if it wants to save space, it is a required substitution, and it only applies inside citations, not inside case names that appear in the body text of a sentence, where Rule 10.2.1 permits only eight specific words (including "&," "Ass'n," "Co.," and "Inc.") to be abbreviated, and only when they do not begin the party's name. A single case name can therefore need two different correct renderings inside the same brief depending on whether it sits in a sentence or in a citation, and a checker that applies one abbreviation rule uniformly everywhere will flag half of the correctly formatted instances as errors.</p>

    <h2>Reporter abbreviations and the spacing rule nobody notices until it's wrong</h2>

    <p>The reporter abbreviation itself, "U.S." for United States Reports, "F.3d" for the Federal Reporter's third series, "S.W.2d" for South Western Reporter second series, comes from Bluebook Table T1, which maps every recognized federal and state reporter to its required abbreviated form. Getting the abbreviation itself right is only half of it. The Bluebook also specifies spacing between the pieces of that abbreviation based on whether each component is a single capital letter or a longer word fragment: abbreviations made of single letters or a letter plus an ordinal, like "F.3d" or "N.E.2d," are strung together with no internal spaces, while abbreviations that include a multi-letter word fragment, like "F. Supp. 3d" or "App'x," take spaces on either side of that fragment. That means "F.3d" is correct and "F. 3d" is a formatting error, while "F.Supp.3d" is a formatting error and "F. Supp. 3d" is correct, and the only thing distinguishing the two rules is whether "Supp." is a single letter or a full word abbreviation. A checker built on a single space-insertion rule will get one of the two forms wrong every time.</p>

    <h2>The pincite rule that breaks naive validation</h2>

    <p>A pincite, the specific page a writer is pointing a reader to within a longer opinion, gets appended after a comma following the case's first page: <em>Sweatt v. Painter</em>, 339 U.S. 629, 632 (1950), where 629 is where the opinion starts and 632 is the specific page being cited. When the pincite spans a range of pages rather than a single page, Bluebook Rule 3.2(a) requires dropping repeated digits beyond the tens place in the second number of the range, so a range from page 8842 to page 8848 gets written as "8842-48," not "8842-8848." This is the rule behind the Roe v. Wade example at the top of this post: 164-65 is correct, 164-165 repeats a digit that Rule 3.2(a) requires dropping. Non-consecutive pages within the same citation get separated by commas rather than a range, and footnote pincites use a different notation entirely, "n." followed directly by the footnote number with no space, as in 495 n.3, or "nn." with a range for multiple consecutive footnotes, as in 495 nn.3-5. None of these are edge cases invented for this post. They are the default, everyday case, and a checker that treats every dash-separated number pair as a valid range without checking the digit-dropping rule will pass through a meaningful share of real citations as correct when they are not.</p>

    <h2>A worked comparison: five citations, five different failure modes</h2>

    <p>Here is what checking five superficially similar citations against these rules actually looks like, using cases most legal readers will recognize.</p>

    <table>
      <thead>
        <tr><th>Citation as written</th><th>Rule being tested</th><th>Verdict</th></tr>
      </thead>
      <tbody>
        <tr><td><em>Brown v. Board of Education</em>, 347 U.S. 483, 495 (1954)</td><td>Rule 10.3, reporter and pincite format</td><td>Correct as written</td></tr>
        <tr><td><em>Miranda v. Arizona</em>, 384 U.S. 436, 444-45 (1966)</td><td>Rule 3.2(a), digit-dropping in page range</td><td>Correct, digits dropped properly</td></tr>
        <tr><td><em>Miranda v. Arizona</em>, 384 U.S. 436, 444-445 (1966)</td><td>Rule 3.2(a), digit-dropping in page range</td><td>Incorrect, should be 444-45</td></tr>
        <tr><td><em>United States v. Nixon</em>, 418 U. S. 683 (1974)</td><td>Rule 6.1(a), spacing between single-letter reporter abbreviations</td><td>Incorrect, should be 418 U.S. 683 with no internal space</td></tr>
        <tr><td>Smith v. United States, 502 U.S. 878 (1992)</td><td>Rule 10.2.1, case-name italicization</td><td>Incorrect, case name must be italicized</td></tr>
      </tbody>
    </table>

    <p>Every entry in that table is wrong for a different structural reason. A checker that only tests one of these rules, say, reporter abbreviations against Table T1, will pass four of the five broken citations without comment. This is the actual difficulty of the problem: it is not one pattern to match, it is a stack of independent, narrow rules that all have to fire correctly at once, on every citation, and a system that nails four out of five rule categories still produces a document full of citations a court clerk would flag.</p>

    <h2>Why regex alone cannot carry this</h2>

    <p>A single regular expression, or even a moderately large set of them, can catch a meaningful share of well-formed citations that follow the most common pattern: volume number, reporter abbreviation, page number, parenthetical year. Where regex-only matching falls apart is at the boundary cases that make up a real brief. Short-form citations refer back to a case already cited in full earlier in the document using only the volume, reporter, and "at," as in "384 U.S., at 444," with no case name at all, which means a checker has to track citation state across the entire document to know what "384 U.S., at 444" is even referring to. Signal words like "id." and "supra" refer to the immediately preceding citation or an earlier full citation respectively, and correctly resolving either one requires the same kind of document-level memory a stateless pattern match does not have. Reporter abbreviations themselves are not a fixed, small list either, state reporters number in the hundreds once regional and historical series are included, and a regex built to recognize "U.S." and "F.3d" will simply fail to recognize a properly formatted citation to a reporter it was never taught about. And case names routinely contain characters, ampersands, apostrophes in "Ass'n," periods inside abbreviations, that make it genuinely hard to write a single pattern that reliably finds where a case name ends and the citation clause begins without either cutting it short or swallowing the sentence around it.</p>

    <h2>What a real citation-parsing pipeline looks like</h2>

    <p>The clearest publicly documented example of how this problem actually gets solved at scale is eyecite, an open source citation-extraction tool built by the Free Law Project, the nonprofit behind CourtListener and the Caselaw Access Project. Eyecite does not rely on a single regex pass. It runs a layered pipeline: a tokenizer first scans the input text and narrows down candidate matches, the default implementation uses the pyahocorasick library to efficiently filter which of the tool's many citation-extraction regexes are even worth attempting against a given span of text, before the actual extraction regexes run using Python's standard regex engine, and a separate, faster HyperscanTokenizer is available that compiles the full set of extraction patterns into a single Hyperscan database so they can all be matched in one pass instead of many sequential ones. That extraction layer depends on two companion data packages the same project maintains, reporters-db and courts-db, which encode the actual reference tables, the equivalent of Bluebook Table T1's reporter list and the court abbreviations from Table T7, as structured, machine-readable data rather than hardcoded strings scattered through pattern code. The published regex database behind eyecite's matching logic was built and validated against more than 55 million real citations pulled from the Caselaw Access Project and CourtListener's own collections, which is a meaningfully different foundation than a pattern set written by hand against a handful of textbook examples. On top of extraction, eyecite explicitly handles the four citation reference types described above as distinct categories: full citations with a case name, short-form citations, "supra" references, and "id." references, because resolving the latter three correctly requires exactly the document-level state tracking that a stateless regex cannot provide on its own.</p>

    <h2>Regex-only matching versus a layered pipeline</h2>

    <table>
      <thead>
        <tr><th>Capability</th><th>Regex-only matching</th><th>Tokenizer plus reference-database pipeline</th></tr>
      </thead>
      <tbody>
        <tr><td>Full citations in standard form</td><td>Handles most of these correctly</td><td>Handles these correctly</td></tr>
        <tr><td>Reporter coverage</td><td>Limited to reporters explicitly hardcoded into the pattern set</td><td>Draws from a maintained, structured reporter table covering hundreds of series</td></tr>
        <tr><td>Short-form citations ("384 U.S., at 444")</td><td>Cannot resolve without document context</td><td>Resolved against the preceding full citation in the same document</td></tr>
        <tr><td>"Id." and "supra" references</td><td>Cannot resolve, no memory of prior matches</td><td>Resolved by tracking citation state across the document</td></tr>
        <tr><td>Case-name boundary detection</td><td>Frequently over- or under-matches around punctuation</td><td>Handled as a distinct parsing stage separate from citation-string matching</td></tr>
        <tr><td>Validation against Bluebook formatting rules</td><td>Only as thorough as the specific patterns someone wrote</td><td>Checked against structured rule and reference data, not ad hoc patterns</td></tr>
      </tbody>
    </table>

    <h2>Where this matters outside a law firm's briefing desk</h2>

    <p>Citation accuracy is not only a law review or litigation concern. Loan documents, security agreements, and intercreditor agreements that reference case law or statutory authority, common in commercial lending files and the kind of contracts covered under our <a href="/use-cases/contract-abstraction">contract abstraction</a> workflows, carry the same citation formatting risk when those references get extracted, indexed, or cross-checked programmatically. A document intelligence system processing a stack of legal opinions, demand letters, or litigation exhibits attached to a loan file needs to extract and normalize citations the same way a law firm's citation checker does, matching reporter abbreviations against a real reference table, tracking short-form and "id." references across a multi-page document, and applying the digit-dropping and spacing rules correctly, or it produces a searchable index full of citations that look plausible but do not actually match the canonical form a downstream legal research tool expects. The same extraction discipline that catches a malformed pincite in a brief is what keeps a document processing pipeline from silently mis-indexing a case reference buried in a scanned exhibit, a related problem to the broader legal document workflows covered in our <a href="/resources/blogs/contract-ocr">contract OCR guide</a>.</p>

    <h2>What to check in a citation checker before trusting its output</h2>

    <p>Ask whether the tool distinguishes between case names inside a citation clause versus case names inside running prose, since Table T6's abbreviation list only applies to the former and a tool applying it universally will flag correct prose citations as errors. Ask whether it tracks document-level state well enough to resolve short-form, "id.," and "supra" references, since a huge share of citations in any real brief after the first reference to a case use one of these shortened forms rather than a full citation every time. Ask what reference data backs its reporter recognition, a small hardcoded list of common federal reporters, or a maintained table covering the full range of state and historical reporters a litigation document might actually cite. And ask specifically whether it enforces the page-range digit-dropping rule, since it is exactly the kind of rule that a system optimized to catch "obviously wrong" citations, missing reporters, malformed years, will quietly miss, because "164-165" reads as perfectly reasonable to anyone who has not memorized Rule 3.2(a).</p>

    <p>The rules covered here, italicization, party-name abbreviation, reporter spacing, pincite digit-dropping, are not exotic. They are the default, expected case in any properly formatted legal citation, which is exactly why a checker that gets them wrong is more dangerous than one that visibly fails. A tool that throws an error on a garbled citation is easy to distrust appropriately. A tool that silently accepts "164-165" as fine, or strips italics inconsistently, produces output that looks trustworthy right up until a court clerk or an opposing counsel catches the mismatch. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/legal-document-automation.png",
  featuredImage: "/images/legal-document-automation.png",
  category: "Legal",
  date: "September 2, 2026",
  datePublished: "2026-09-02T00:00:00.000Z",
  dateModified: "2026-09-02T00:00:00.000Z",
  last_updated: "September 2, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "legal citation checker",
  secondary_keywords: [
    "bluebook citation format",
    "legal citation extraction",
    "case citation validator",
    "reporter abbreviation table",
    "pincite format rules",
    "citation parsing pipeline",
  ],
  tags: ["legal", "OCR", "document AI", "legal tech", "citation extraction"],
  cluster: "legal",
  faq: [
    {
      question: "What is a legal citation checker actually verifying?",
      answer:
        "It verifies that a citation matches Bluebook structural rules: case name italicization and abbreviation, reporter abbreviation against Table T1, spacing between abbreviation components, and pincite formatting including page-range digit-dropping.",
    },
    {
      question: "Why is 410 U.S. 113, 164-165 an incorrect Bluebook citation?",
      answer:
        "Bluebook Rule 3.2(a) requires dropping repeated digits beyond the tens place in a page range, so the second number should read 65, not 165. The correct form is 164-65.",
    },
    {
      question: "Why can't regular expressions alone reliably check citations?",
      answer:
        "Regex handles standard full citations reasonably well but cannot resolve short-form citations, id. references, or supra references, which require tracking document-level state, and it struggles with the hundreds of state and historical reporter abbreviations not hardcoded into the pattern set.",
    },
    {
      question: "What is eyecite?",
      answer:
        "Eyecite is an open source citation-extraction tool built by the Free Law Project. It uses a tokenizer to narrow candidate matches, extraction regexes validated against over 55 million real citations, and structured reference data from companion packages reporters-db and courts-db.",
    },
    {
      question: "Does Table T6 abbreviation apply to every mention of a case name?",
      answer:
        "No. Table T6's abbreviation list applies to case names inside a citation clause. Case names appearing in running prose follow a separate, much shorter list of permitted abbreviations under Rule 10.2.1.",
    },
    {
      question: "Why is United States never abbreviated to U.S. as a party name?",
      answer:
        "Bluebook rules treat United States as a party name differently from U.S. as a reporter abbreviation. When United States is a named party, such as in United States v. Nixon, it is always spelled out, even though U.S. is the correct abbreviation for United States Reports two words later in the same citation.",
    },
  ],
}
