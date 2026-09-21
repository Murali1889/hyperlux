import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogLd14: BlogPost = {
  id: "ld-14",
  title: "NDA Clause Extraction: Catching Carve-Outs That Gut It",
  slug: "nda-clause-extraction",
  excerpt:
    "NDA clause extraction has to catch mutual versus one-way structure and carve-outs like residuals clauses, which can quietly erase most of an NDA's protection.",
  description:
    "How NDA clause extraction distinguishes mutual from one-way agreements, why residuals and independent development carve-outs matter, and a worked example.",
  metaTag: "NDA Clause Extraction: Catching Carve-Outs That Gut It",
  content: `
    <p>Read an NDA clause by clause and every individual sentence can look reasonable, standard, even protective, while the document as a whole leaves the receiving party almost completely free to reuse what it learned. That is not a hypothetical. It is the ordinary effect of two clauses that show up constantly, separately, in negotiated confidentiality agreements: a residuals clause that lets the receiving party's personnel keep and use anything retained in "unaided memory," and a carve-out excluding information that was "independently developed" from the confidentiality obligation entirely. Neither clause is unusual. Neither is, by itself, obviously dangerous. Combined, they can leave a disclosing party with almost nothing enforceable, and a keyword-matching extraction tool that flags both clauses as "present, standard language" will never tell anyone that.</p>

    <p>This matters for anyone building or buying <a href="/use-cases/contract-abstraction">contract abstraction</a> tooling that processes NDAs at volume, vendor onboarding, M&A due diligence, fintech partnership evaluations, loan servicing agreements that bundle in confidentiality terms. The failure mode isn't missing a clause. It's finding every clause, tagging each one correctly, and still missing the interaction between them that determines whether the agreement actually protects anything.</p>

    <h2>What NDA clause extraction actually has to identify</h2>

    <p>A working extraction pipeline for NDAs needs to classify and pull several distinct things out of a document that can run anywhere from two pages to twenty: the structural type of the agreement, mutual or one-way; the definition of confidential information and how broad or narrow it is; the standard carve-outs to that definition; the duration of the obligation; any residuals language; and the remedies available on breach. Each of these is its own extraction sub-problem, and most vendor pages describe them as a flat checklist, present or absent, without addressing how the items on that checklist interact with each other. That interaction is where the real risk lives, and it's also where automated review most commonly fails silently, because a clause-presence checklist has no way to represent "clause A neutralizes clause B."</p>

    <h2>Mutual versus one-way: the structural difference that keyword matching gets wrong</h2>

    <p>The surface-level distinction between a mutual and a one-way NDA is simple: in a mutual NDA both signatories can be a disclosing party and a receiving party, and in a one-way NDA only one party discloses while the other receives. Detecting which type an NDA is sounds like it should be trivial, check the title, check whether the document defines both a "Disclosing Party" and "Receiving Party" role for each signatory. In practice this is exactly the kind of detection that breaks on real contracts, because the title and the operative language frequently disagree with each other.</p>

    <p>The most common failure pattern is a mutual NDA template, title says "Mutual Non-Disclosure Agreement," cover page lists both parties symmetrically, where the confidentiality obligations clause was drafted or edited to bind only one party in practice. This happens when a party starts from a mutual template because it looks more balanced or standard, then negotiates in one-directional restrictions into the obligations section without updating the definitions or the document type. An extraction system that classifies mutual versus one-way based on the document title, or even based on whether both roles are defined in the recitals, will misclassify this contract as symmetrical protection when the actual operative obligations in the confidentiality covenant section bind only the receiving party. The only way to catch this reliably is to check where the restriction language actually attaches grammatically, does the confidentiality covenant say "each party shall" or does it say "Receiving Party shall," and then cross-reference that against whether both parties are ever assigned the Receiving Party role anywhere in the operative sections, not just the definitions block.</p>

    <table>
      <thead>
        <tr><th>Structural marker</th><th>True mutual NDA</th><th>One-way NDA with mutual-style title</th></tr>
      </thead>
      <tbody>
        <tr><td>Recitals define both roles</td><td>Yes, both parties assigned Disclosing and Receiving Party roles</td><td>Often yes, even though only one party ever discloses in practice</td></tr>
        <tr><td>Confidentiality covenant subject</td><td>"Each party" or "the Receiving Party," where Receiving Party has been defined to include both signatories interchangeably</td><td>"Receiving Party" tied to a single named party, even inside a document titled mutual</td></tr>
        <tr><td>Carve-outs apply to</td><td>Both parties' disclosures symmetrically</td><td>Only the disclosures of the party actually treated as discloser in the operative text</td></tr>
        <tr><td>Residuals clause, if present</td><td>Should be mutual if information genuinely flows both directions</td><td>Frequently one-sided even in a mutual-titled document, granting residuals rights to only one side</td></tr>
        <tr><td>What a title-only classifier reports</td><td>Correctly flags as mutual</td><td>Incorrectly flags as mutual, missing the asymmetric obligations buried in the covenant section</td></tr>
      </tbody>
    </table>

    <p>The practical consequence of getting this wrong in a lending or fintech context is straightforward: a partnership or vendor NDA gets classified as offering the disclosing party's business reciprocal protection because the document is titled and structured to look mutual, when the actual restrictive covenant only ever binds one side. Nobody downstream questions it because the extraction tool reported "mutual, standard" and moved on.</p>

    <h2>The residuals clause: what it actually permits and why it's controversial</h2>

    <p>A residuals clause carves out from the confidentiality obligation anything "retained in the unaided memory" of the receiving party's personnel after exposure to confidential information, typically framed around general ideas, concepts, know-how, and techniques rather than specific documented material. The rationale drafters give is practical rather than legal: employees who review a disclosing party's confidential material cannot selectively erase what they absorbed, so a residuals clause acknowledges that reality instead of pretending an NDA can enforce something biologically implausible.</p>

    <p>That justification is reasonable as far as it goes, and it's also exactly why residuals clauses are considered one of the most consequential provisions to miss in NDA review. A narrowly drafted residuals clause limits itself to genuinely general knowledge, excludes anything intentionally memorized, and explicitly states that it does not affect confidentiality obligations for tangible or documented confidential information. A broadly drafted residuals clause extends the same "unaided memory" language to cover use for competitive purposes without those limits, which functionally lets the receiving party's team walk away from a diligence process or a technical evaluation and build a directly competing product, so long as they can characterize what they used as "retained in memory" rather than "copied from a document."</p>

    <p>The clause is also structurally asymmetric in a way that's easy to miss on a read-through. A party negotiating hard for residuals rights while refusing to grant them mutually is a specific, identifiable red flag, one side wants the freedom to walk away with retained knowledge while insisting the other side cannot. In a mutual NDA where information genuinely flows in both directions, an unbalanced residuals clause that grants that freedom to only one signatory is inconsistent with the document's own stated mutuality, the same structural mismatch problem described above showing up inside a single clause rather than across the whole agreement.</p>

    <h2>The independently developed information carve-out</h2>

    <p>Separately from residuals, essentially every negotiated NDA excludes from its definition of confidential information anything that: was already in the public domain, was already known to the receiving party before disclosure, was rightfully received from a third party without restriction, or was independently developed by the receiving party without reference to or use of the disclosed information. These four exclusions are close to universal, and their absence from an NDA is itself a signal worth flagging, a document that asks a receiving party to treat information that's already public, or that it already independently knew, as if it were newly disclosed and secret is asking for something courts are generally reluctant to enforce anyway.</p>

    <p>The independent development carve-out specifically creates a proof problem that has nothing to do with how well it's drafted. If a receiving party is later accused of misusing confidential information, the carve-out lets it claim the information in question was arrived at independently, without reference to the disclosure, and the disclosing party then has to prove a negative: that no independent, clean development path existed. That is a genuinely hard thing to prove, particularly for a receiving party that operates in the same space as the discloser and has engineers who plausibly could have arrived at similar solutions on their own. This isn't a drafting flaw in any individual NDA, it's an inherent feature of how the independent development carve-out functions, and it's precisely why pairing it with a residuals clause compounds the problem rather than merely adding to it.</p>

    <h2>Worked example: how the two carve-outs stack to gut protection</h2>

    <p>Consider an NDA between a lending platform evaluating a document-processing vendor's OCR technology during a technical diligence call, a common scenario in fintech partnership evaluations. The NDA is titled mutual, defines confidential information broadly to include technical specifications, model architecture, and pricing, and includes both a standard independent development carve-out and a residuals clause. Read individually, all four elements look fine.</p>

    <table>
      <thead>
        <tr><th>Clause</th><th>What it says</th><th>What it permits in combination</th></tr>
      </thead>
      <tbody>
        <tr><td>Confidentiality definition</td><td>Covers technical specifications, model architecture, pricing, and business plans disclosed during diligence</td><td>Establishes broad protection on paper</td></tr>
        <tr><td>Independent development carve-out</td><td>Excludes information the receiving party can show it developed without reference to the disclosure</td><td>Receiving party's engineers, who now know what "good" looks like after the demo, can build a similar system and characterize it as independently developed</td></tr>
        <tr><td>Residuals clause</td><td>Permits use of ideas, concepts, and techniques retained in unaided memory, not limited to tangible documents</td><td>Even design choices and architectural approaches discussed verbally in the diligence call, never reduced to a document, are freely reusable</td></tr>
        <tr><td>Combined effect</td><td>Neither clause alone eliminates protection</td><td>Together, the receiving party's engineers can absorb the approach shown in diligence, wait a reasonable interval, build something functionally similar, and defend it as both independently developed and residuals-permitted, with the disclosing party carrying the burden of proving otherwise on both fronts simultaneously</td></tr>
      </tbody>
    </table>

    <p>The disclosing party in this scenario is not protected by the fact that its confidentiality definition was broad. It's not protected by the fact that pricing and architecture were explicitly named as confidential. Both carve-outs sit underneath that definition and each independently narrows what's actually enforceable, and because they overlap in what they exclude, general approaches and techniques not tied to a specific document, they don't just subtract from protection twice, they create a combined defense where the receiving party can invoke whichever carve-out fits better for a given piece of information. A clause extraction tool that reports "confidentiality definition: broad, includes technical specs" without separately flagging that a residuals clause and an independent development carve-out both apply to that same category of information is reporting a false sense of protection.</p>

    <h2>What a real court did with a residuals clause: Space Data Corp. v. Google</h2>

    <p>The interaction between a residuals clause and a misappropriation claim isn't just a theoretical concern, it played out in federal litigation. In <em>Space Data Corp. v. Alphabet Inc. and Google LLC</em>, No. 5:16-cv-03260, filed in the U.S. District Court for the Northern District of California, Space Data alleged that Google misused confidential information shared under an NDA that included a residuals clause while evaluating Space Data's high-altitude balloon technology, technology that Google's Project Loon later pursued independently. The court's ruling on Google's motion to dismiss turned in part on the residuals clause: the court found that Space Data's complaint did not sufficiently plead how Google's alleged conduct fell outside the scope of what the residuals provision permitted, or how Google's use went beyond what the clause's carve-out for retained, unaided knowledge allowed.</p>

    <p>The practical lesson from that ruling for anyone building NDA extraction tooling is specific: a residuals clause doesn't just create a substantive defense, it raises the disclosing party's pleading burden at the earliest stage of litigation, before discovery, before any evidence exchange. A plaintiff has to affirmatively plead facts showing the defendant's conduct falls outside the residuals carve-out, which is a materially harder bar to clear than pleading ordinary misappropriation. Extraction tooling that flags "residuals clause present" as a mid-severity item, on par with a duration term or a governing law clause, is understating what the clause actually does to a disclosing party's legal position if the relationship goes wrong.</p>

    <h2>What a clause extraction system needs to check to catch this, technically</h2>

    <p>Detecting the individual clauses, residuals language, independent development carve-out, mutual versus one-way structure, is the easier half of the problem and is achievable with clause-type classification trained on labeled NDA paragraphs, similar to how contract clause classifiers are trained and benchmarked across other clause categories in commercial agreements more broadly. The harder half is flagging the interactions. A system built to actually surface risk, rather than just presence, needs to do at least three additional things beyond per-clause classification.</p>

    <p>First, it needs to check grammatical binding, whether the operative confidentiality covenant subject is "each party," "both parties," or a single named Receiving Party, cross-referenced against the roles assigned in the recitals, to catch the mutual-titled-but-one-way-bound pattern described above. Second, it needs to check whether a residuals clause and an independent development carve-out apply to overlapping categories of information, both typically covering general approaches, techniques, and concepts rather than fixed documents, and flag that overlap as a combined-risk item rather than reporting each clause separately with no relationship between them. Third, for a residuals clause specifically, it needs to distinguish the narrow version, no intentional memorization, explicit carve-back for tangible confidential information, from the broad version that extends to competitive use without those limits, since those two versions produce meaningfully different legal exposure despite using overlapping vocabulary and often appearing under the identical clause heading.</p>

    <p>None of this argues for eliminating residuals clauses or independent development carve-outs from NDA review, both serve legitimate, well established purposes and neither is inherently a red flag on its own. It's a reason to treat "clause present, standard language" as an incomplete answer to the actual question a lending or fintech risk team is asking, which is whether the NDA in front of them will actually protect the specific information they're about to disclose if the counterparty relationship sours. Related coverage of how automated systems classify and extract contract clauses more broadly is available in our piece on <a href="/documents/legal-docs">document intelligence for legal documents</a>, and a deeper look at how automated tools handle another commonly-missed clause category, <a href="/resources/blogs/force-majeure-clause-extraction">force majeure and indemnification language</a>, is worth reading alongside this one, as is our piece on <a href="/resources/blogs/governing-law-clause-extraction">governing law clause extraction</a>, for anyone evaluating NDA extraction tooling against a broader confidentiality and risk-allocation clause set. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guide: <a href="/resources/blogs/ocr-for-legal-documents">OCR for legal documents</a>.</p>
  `,
  image: "/images/transforming-financial-services.png",
  featuredImage: "/images/transforming-financial-services.png",
  category: "Legal",
  date: "September 12, 2026",
  datePublished: "2026-09-12T00:00:00.000Z",
  dateModified: "2026-09-21T00:00:00.000Z",
  last_updated: "September 21, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "nda clause extraction",
  secondary_keywords: [
    "mutual NDA vs one-way NDA",
    "residuals clause NDA",
    "independently developed information carve-out",
    "NDA clause extraction AI",
    "confidentiality agreement carve-outs",
    "trade secret NDA residuals clause",
  ],
  tags: ["legal", "NDA", "residuals clause", "confidentiality agreement", "clause extraction", "contract abstraction"],
  cluster: "legal",
  faq: [
    {
      question: "What is the difference between a mutual and a one-way NDA that extraction tools need to detect?",
      answer:
        "In a mutual NDA both signatories can act as disclosing and receiving party, while a one-way NDA restricts only one side. Extraction has to check where the confidentiality covenant actually binds, not just the document title, since a mutual-titled NDA can have operative language that only restricts one party.",
    },
    {
      question: "What does a residuals clause in an NDA actually permit?",
      answer:
        "A residuals clause carves out from confidentiality anything retained in the unaided memory of the receiving party's personnel, typically general ideas, concepts, know-how, and techniques, on the reasoning that employees cannot selectively forget what they learned.",
    },
    {
      question: "How does the independently developed information carve-out create risk for a disclosing party?",
      answer:
        "It lets a receiving party claim it arrived at similar information independently rather than through the disclosure. This forces the disclosing party, if a dispute arises, to prove no clean independent development path existed, which is a difficult negative to prove, especially against a counterparty operating in the same technical space.",
    },
    {
      question: "Why is combining a residuals clause with an independent development carve-out riskier than either alone?",
      answer:
        "Both typically cover overlapping categories of information, general approaches and techniques rather than fixed documents. Together they give the receiving party two separate, overlapping defenses for the same category of information, while the disclosing party carries the burden of disproving both.",
    },
    {
      question: "What did the Space Data Corp. v. Google case establish about residuals clauses?",
      answer:
        "In Space Data Corp. v. Alphabet Inc. and Google LLC, No. 5:16-cv-03260 (N.D. Cal.), the court found the plaintiff's complaint did not sufficiently plead how Google's conduct fell outside the residuals clause's carve-out, showing that a residuals clause raises the disclosing party's pleading burden at the motion-to-dismiss stage, before any discovery.",
    },
    {
      question: "How can NDA clause extraction actually catch a mutual NDA that is one-way in practice?",
      answer:
        "By checking the grammatical subject of the confidentiality covenant, whether it reads 'each party' or a single named Receiving Party, against the roles both signatories are assigned in the recitals, rather than relying on the document title or cover page alone.",
    },
  ],
}
