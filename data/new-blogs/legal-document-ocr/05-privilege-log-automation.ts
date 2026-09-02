import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogLd05: BlogPost = {
  id: "ld-05",
  title: "Privilege Log Automation: Why Keyword Screening Fails",
  slug: "privilege-log-automation",
  excerpt:
    "A real study found keyword privilege screening hits 94.74% recall but only 20.39% precision. Here is why, and what actually works.",
  description:
    "Privilege log automation needs to separate attorney-client privilege from work product doctrine. The FRE 502(d) angle and why keyword screening fails.",
  metaTag: "Privilege Log Automation: The Technical Reality",
  content: `
    <p>Run a standard privilege keyword list, "attorney," "counsel," "privileged," "confidential," "legal advice," against a real document population and a published empirical study found it catches 94.74% of the documents attorneys had actually coded as privileged. That sounds like a win. Then look at precision: only 20.39%. For every five documents the keyword list flags, roughly four are not privileged at all. That is not a rounding error in a review workflow, that is a privilege log padded with thousands of non-privileged rows, a review team burning hours re-checking false positives, and, buried inside that noise, a smaller but real number of genuinely privileged documents the list missed entirely because they never contained a privilege term in the first place.</p>
    <p>That last part is the part most privilege review guidance skips. Keyword lists don't just over-catch, they also structurally miss a category of protected material, and the reason is not a tuning problem, it's that attorney-client privilege and work product doctrine are protected by two different legal tests, and a keyword or metadata filter built around one test is blind to the other. For lenders and fintechs building document workflows around <a href="/documents/legal-docs">legal document processing</a>, this distinction shows up constantly in regulatory inquiries, CFPB civil investigative demands, and fair lending litigation where loan files, underwriting notes, and compliance memos all get pulled into the same production.</p>

    <h2>What a privilege log has to actually prove</h2>
    <p>Federal Rule of Civil Procedure 26(b)(5)(A) sets the baseline: when a party withholds information otherwise discoverable by claiming privilege or work product protection, it must expressly make the claim and describe the nature of the withheld material in a way that, without revealing the protected content, lets other parties assess the claim. In practice that means a log row with a date, author, all recipients (including cc and bcc), a document type, a subject matter description specific enough to be tested, and a stated basis, attorney-client privilege, work product, or both.</p>
    <p>That last field, the stated basis, is where automation breaks down first. A tool that treats "privileged" as one bucket will log every withheld document the same way regardless of which doctrine actually protects it. That matters because a challenge to an attorney-client privilege claim and a challenge to a work product claim get argued on completely different grounds, and a log that can't distinguish them invites a challenge on the log itself, independent of whether the underlying documents were properly withheld.</p>

    <h2>Attorney-client privilege: a narrow, person-based test</h2>
    <p>Attorney-client privilege protects a confidential communication between a client and an attorney (or the attorney's agent) made for the purpose of seeking or providing legal advice. Four things have to be true at once: there has to be a communication, it has to have been kept confidential, it has to be between privileged persons, and its purpose has to be legal advice rather than business advice. Break any one of those and the privilege doesn't attach, or it attaches and is later waived.</p>
    <p>The Supreme Court's decision in <em>Upjohn Co. v. United States</em>, 449 U.S. 383 (1981), is the case that made this workable inside a corporation. Before Upjohn, some courts limited privilege to communications with a narrow "control group" of senior executives. Upjohn extended it to communications between in-house or outside counsel and any employee, at any level, made at the direction of a corporate superior for the purpose of the corporation obtaining legal advice, as long as the employee knew the communication was for that purpose. That is the doctrinal basis for why a warehouse manager's email to the general counsel about a specific incident can be privileged even though the manager isn't an executive.</p>
    <p>The failure mode automated systems run into constantly: an in-house lawyer's involvement in a communication does not automatically make it privileged. General counsel signing off on marketing copy, approving a vendor contract's business terms, or being copied on an operational email because they sit on a cross-functional committee is business advice with a lawyer in the room, not legal advice. Courts routinely find these communications unprotected specifically because the lawyer was acting in a business capacity, not a legal one. A classifier that flags anything with counsel's name in the To or Cc field will over-redact this category every time.</p>

    <h2>Work product doctrine: a different test with a different author</h2>
    <p>Work product protection comes from a completely separate rule and a completely separate doctrinal history. Federal Rule of Civil Procedure 26(b)(3) protects documents and tangible things prepared in anticipation of litigation or for trial by or for a party or the party's representative, and that representative can be the party's attorney, consultant, surety, indemnitor, insurer, or agent. The doctrine originates in <em>Hickman v. Taylor</em>, 329 U.S. 495 (1947), where the Supreme Court held that an attorney's interview notes and mental impressions gathered while preparing a case deserved protection from routine discovery, separate from and in addition to attorney-client privilege.</p>
    <p>The technical distinction that matters for classification: work product protection does not require an attorney as the author. It requires that the document was created because of anticipated litigation, regardless of who wrote it. A claims investigator's report, a compliance officer's internal review memo, or a third-party forensic accountant's analysis can all be work product if they were prepared because litigation was reasonably anticipated, even if no attorney touched the document at all. Conversely, a document created in the ordinary course of business, an underwriting checklist filled out during normal loan processing, a routine audit log, doesn't become work product later just because it turns out to be relevant once litigation starts. The trigger is why and when the document was created, not who created it or what it says.</p>
    <p>Work product also splits into two tiers with different protection strength. Fact work product, factual material gathered in anticipation of litigation, is only qualifiedly protected and can be discovered if the requesting party shows substantial need and an inability to obtain the equivalent without undue hardship. Opinion work product, an attorney's mental impressions, conclusions, opinions, or legal theories, gets protection that is close to absolute and is almost never ordered produced.</p>

    <h2>The two doctrines side by side</h2>
    <table>
      <thead><tr><th>Dimension</th><th>Attorney-client privilege</th><th>Work product doctrine</th></tr></thead>
      <tbody>
        <tr><td>Governing rule</td><td>Common law / FRE 502</td><td>FRCP 26(b)(3)</td></tr>
        <tr><td>Foundational case</td><td>Upjohn Co. v. United States (1981)</td><td>Hickman v. Taylor (1947)</td></tr>
        <tr><td>Who must be involved</td><td>An attorney or the attorney's agent</td><td>Anyone acting for the party, attorney or not</td></tr>
        <tr><td>Trigger</td><td>Communication for the purpose of legal advice</td><td>Preparation because of anticipated litigation</td></tr>
        <tr><td>Protects</td><td>Confidential communications</td><td>Documents and tangible things, including non-communicative materials</td></tr>
        <tr><td>Strength</td><td>Near-absolute while confidentiality holds</td><td>Qualified (fact) or near-absolute (opinion)</td></tr>
        <tr><td>How it's lost</td><td>Disclosure to a non-privileged third party</td><td>Disclosure to an adversary, or a substantial-need showing (fact work product only)</td></tr>
        <tr><td>Typical automated-classifier signal</td><td>Attorney name/title in header or metadata</td><td>No reliable metadata signal, requires context about litigation timing</td></tr>
      </tbody>
    </table>

    <h2>Why keyword-only screening over-redacts and under-redacts at the same time</h2>
    <p>Once the two doctrines are laid out separately, the keyword failure mode stops being surprising. A keyword or metadata classifier built around attorney names, titles, and boilerplate terms like "privileged," "confidential," and "attorney-client" is really a proxy for attorney-client privilege detection. It performs reasonably on that half of the problem because the signal it's looking for, an attorney's presence, correlates loosely with the doctrine's actual trigger.</p>
    <p>It performs badly on work product for a structural reason: work product's trigger is authorial intent and timing, not attorney involvement, and neither of those shows up as a keyword. A risk committee's internal memo about a pattern of loan defaults, written by a compliance analyst after outside counsel told the company litigation was reasonably anticipated, contains no attorney name, no "privileged" stamp, and no legal-sounding language at all. It reads like an ordinary business memo. A keyword filter will pass it straight into the production set. That is under-redaction, and it is invisible in a keyword-hit report because the report only shows you what matched, not what a case-specific legal test would have caught.</p>
    <p>Over-redaction happens on the other end of the same mechanism. Boilerplate email disclaimers contain the word "confidential" in nearly every signature block in corporate email. Vendor contracts use "privileged and proprietary" as standard legal language unrelated to litigation. In-house counsel gets copied on routine business threads as a matter of habit, and every one of those threads lights up a name-based filter. The published study's own numbers make the shape of this problem concrete: the full keyword term list scored 94.74% recall but just 20.39% precision, while individual terms performed even more unevenly in isolation, "Counsel*" alone hit 51.89% precision, "Attorney*" hit 49.80%, and "Privi*" hit only 37.55%. Broadening the term list to catch more true positives (chasing recall) mechanically drags precision down further, because the terms that catch the stragglers are also the terms that fire on ordinary business email.</p>

    <h2>A worked example: a fair lending document production</h2>
    <p>Picture a mid-size online lender responding to a CFPB civil investigative demand after a fair lending complaint. The production set pulls from loan origination files, underwriting notes, and internal compliance communications across an 18-month window. Four documents illustrate exactly where a keyword-only tool gets it wrong.</p>
    <ul>
      <li><strong>Document A:</strong> An email from a loan officer to in-house counsel asking whether a specific applicant's file can be denied on the stated grounds, with counsel's reply providing legal analysis. This is attorney-client privilege, a clean case, and a keyword or name-based filter catches it correctly.</li>
      <li><strong>Document B:</strong> An internal memo from the compliance team, written six weeks after outside counsel advised the company that a CFPB inquiry was reasonably anticipated, analyzing a pattern in the lender's approval rates by applicant demographic. No attorney authored it, no attorney is copied, and it contains none of the standard privilege vocabulary. It is work product because of when and why it was created. A keyword filter passes it straight through, an under-redaction that, if it slips into the production, cannot necessarily be clawed back cleanly if the company can't show the disclosure was inadvertent and that reasonable steps were taken.</li>
      <li><strong>Document C:</strong> A marketing email approving revised loan advertisement copy, with general counsel cc'd because company policy requires legal sign-off on all external-facing content. Contains the word "confidential" in the footer and general counsel's name in the header. Not privileged, this is business review with a lawyer copied on it, not legal advice. A keyword and name-based filter flags it, an over-redaction that inflates the log and gives opposing counsel an easy target to challenge, because the description on the log won't hold up once tested.</li>
      <li><strong>Document D:</strong> A spreadsheet of loan-level default data attached to Document A's privileged email chain. The spreadsheet itself is factual underwriting data that exists independent of the privileged communication, attaching it to a privileged email doesn't automatically privilege the data itself unless the selection or compilation of that specific data reflects the attorney's legal analysis. This is the kind of partial-privilege, family-relationship question that a document-level keyword hit (the parent email matched, so log the attachment too) gets wrong by default.</li>
    </ul>
    <p>Four documents, four different outcomes, and a single keyword pass gets two of the four wrong in opposite directions. That is the over-redaction and under-redaction problem in miniature, and it scales linearly with production size.</p>

    <h2>FRE 502(d) clawback orders: what they fix and what they don't</h2>
    <p>Federal Rule of Evidence 502 addresses a related but separate problem: what happens when a privileged document slips through and gets produced anyway. Rule 502(b) sets a three-part test for inadvertent disclosure to avoid waiver: the disclosure has to be inadvertent, the producing party has to have taken reasonable steps to prevent it, and the producing party has to have promptly taken reasonable steps to rectify it once discovered, including following the clawback procedure in FRCP 26(b)(5)(B). Litigating whether "reasonable steps" were taken, and whether a keyword-only screening process counts as reasonable, is its own expensive side dispute.</p>
    <p>Rule 502(d) sidesteps that fight entirely. It lets a court enter an order providing that disclosure of privileged material in that litigation is not a waiver in that proceeding or any other federal or state proceeding, without requiring proof that any particular "reasonable steps" standard was met. A well-drafted 502(d) order is what makes it defensible to produce faster and review less exhaustively on the front end, because inadvertent production of a privileged document isn't a waiver disaster, it's a clawback request.</p>
    <p>What a 502(d) order does not do is eliminate the privilege log requirement or make the underlying classification problem go away. FRCP 26(b)(5)(A)'s logging obligation is independent of whether a 502(d) order is in place, and a party that produces privileged material under a 502(d) order still typically has to identify what it's clawing back and why, which puts the same attorney-client-versus-work-product classification question right back on the table, just after the fact instead of before it. The order changes the cost of a mistake, not the difficulty of avoiding one.</p>

    <h2>What actually improves accuracy: signals beyond the keyword</h2>
    <p>The empirical study's numbers aren't an argument against automation, they're an argument against a specific weak version of it. The gap between 94.74% recall and 20.39% precision is exactly the gap that additional signal closes. A few approaches that move the needle in practice:</p>
    <ul>
      <li><strong>Litigation-hold timing as a feature.</strong> Since work product hinges on whether litigation was reasonably anticipated at creation time, tagging documents against the litigation-hold or anticipated-litigation date and weighting anything created afterward differently catches a category keyword search structurally can't see.</li>
      <li><strong>Role and custodian modeling, not just name matching.</strong> Distinguishing when in-house counsel is acting in a legal capacity versus a business capacity requires looking at the surrounding thread and subject matter, not just whether their name appears, which is closer to what a trained classifier does than what a keyword filter does.</li>
      <li><strong>Family-level consistency checks.</strong> Treating attachments as their own classification question rather than automatically inheriting the parent email's privilege status catches the Document D problem from the worked example above.</li>
      <li><strong>Machine learning trained on prior attorney-coded decisions.</strong> The same study that produced the 20.39% precision figure found that predictive models trained on human privilege calls substantially outperformed keyword lists on the precision side without giving up the recall keyword lists are good at, essentially learning the pattern of what actually gets coded privileged rather than matching on vocabulary.</li>
    </ul>
    <p>None of these signals matter if the underlying document data feeding them is bad. This is where document intelligence infrastructure actually intersects with privilege review: a scanned or poorly structured legacy file, an old paper loan file digitized years after the fact, often has no clean metadata at all. The author, date, and recipient fields a privilege classifier needs have to be reconstructed from OCR'd letterhead, signature blocks, and header text rather than pulled from a clean email header. Getting that extraction right, correctly separating a document's structural metadata from its body text, is a prerequisite for any of the classification signals above to work on anything beyond native email. The same document classification and extraction pipeline that powers <a href="/resources/blogs/contract-redlining-software">automated contract redlining</a> is doing structurally similar work here: segmenting a document accurately enough that downstream logic, privilege classification in this case, clause extraction in that one, has something reliable to act on.</p>

    <h2>Building a privilege log workflow that holds up</h2>
    <p>A defensible process, automated or not, tends to share a few characteristics regardless of tooling. It classifies attorney-client privilege and work product as separate questions with separate criteria, rather than one "is this privileged" flag. It treats keyword hits as a triage signal that routes documents to review, not a final determination, especially given how far precision drops as the term list broadens. It handles attachments and parent documents as independent classification events. And it logs the specific basis, not just "privileged," because a challenge to the log tests exactly that specificity under Rule 26(b)(5)(A).</p>
    <p>For lending and fintech document teams building or buying into a privilege review workflow, the practical takeaway from the numbers above is blunt: a keyword list alone will hand you a log that is both too long and too short at once, expensive to defend on the documents it shouldn't have caught, and exposed on the ones it missed. Getting the doctrine right at the classification layer, before the keyword pass even runs, is what actually shrinks that gap.</p>
    <p>Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/ocr-accuracy.png",
  featuredImage: "/images/ocr-accuracy.png",
  category: "Legal",
  date: "September 2, 2026",
  datePublished: "2026-09-02T00:00:00.000Z",
  dateModified: "2026-09-02T00:00:00.000Z",
  last_updated: "September 2, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "privilege log automation",
  secondary_keywords: [
    "attorney-client privilege vs work product",
    "FRE 502(d) clawback",
    "privilege screening keyword search",
    "automated privilege review",
    "privilege log requirements FRCP 26",
    "predictive coding privilege review",
  ],
  tags: ["legal", "privilege log", "ediscovery", "compliance"],
  cluster: "legal",
  faq: [
    {
      question: "What is the difference between attorney-client privilege and work product doctrine?",
      answer:
        "Attorney-client privilege protects confidential communications between a client and an attorney made for the purpose of legal advice. Work product doctrine, under FRCP 26(b)(3), protects documents and materials prepared in anticipation of litigation regardless of whether an attorney authored them. Privilege turns on who was communicating and why; work product turns on when and why a document was created.",
    },
    {
      question: "Why does keyword-only privilege screening both over-redact and under-redact?",
      answer:
        "Keyword lists match on vocabulary like 'privileged' or an attorney's name, which correlates loosely with attorney-client privilege but not at all with work product, since work product doesn't require an attorney's involvement. This causes over-redaction on business communications that merely mention counsel or use boilerplate confidentiality language, and under-redaction on genuine work product, like a compliance memo prepared in anticipation of litigation, that contains no privilege vocabulary at all.",
    },
    {
      question: "What does a privilege log legally need to include?",
      answer:
        "Under FRCP 26(b)(5)(A), a party withholding privileged material must expressly claim the privilege and describe the nature of the withheld documents, communications, or things without revealing the protected content itself, specifically enough that other parties can assess the claim. In practice this means date, author, recipients, document type, subject matter, and the specific privilege basis asserted.",
    },
    {
      question: "What is a Rule 502(d) order and how does it relate to privilege logs?",
      answer:
        "FRE 502(d) lets a court order that disclosure of privileged material in that case is not a waiver in that or any other proceeding, without requiring proof of the 'reasonable steps' standard under 502(b). It reduces the risk of producing faster with less exhaustive upfront review, but it does not eliminate the FRCP 26(b)(5)(A) logging obligation or the underlying classification work.",
    },
    {
      question: "Can a document be both attorney-client privileged and work product?",
      answer:
        "Yes. A memo written by an attorney analyzing a case for legal advice, prepared after litigation was reasonably anticipated, can satisfy both tests at once. A privilege log should identify both bases where both genuinely apply, since they are argued and challenged on different grounds.",
    },
    {
      question: "How accurate is keyword search at catching privileged documents?",
      answer:
        "A published empirical study on privilege document review found a full keyword term list achieved 94.74% recall but only 20.39% precision, meaning it caught most privileged documents but roughly four out of five documents it flagged were not actually privileged. Individual terms performed even more unevenly, with precision ranging from about 37% to 52% depending on the term.",
    },
  ],
}
