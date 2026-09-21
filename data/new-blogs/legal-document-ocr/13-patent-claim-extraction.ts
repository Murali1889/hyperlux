import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogLd13: BlogPost = {
  id: "ld-13",
  title: "Patent Claim Extraction: Why Dependency Chains Break",
  slug: "patent-claim-extraction",
  excerpt:
    "Pull claim 5 from a patent with a flat extractor and the words are right but the scope is wrong, since dependent claims incorporate limits by legal rule.",
  description:
    "The structural rules behind patent claims: preamble, transitional phrase, dependency chains, 112(f) means claims, and why flat extraction gets scope wrong.",
  metaTag: "Patent Claim Extraction: Claims, Chains, MPF Rules",
  content: `
    <p>Take claim 5 of a real utility patent, run it through a document extraction pipeline that treats claims as flat paragraphs of text, and ask the pipeline what claim 5 actually covers. It will hand back the correct words, spelled correctly, in the correct order. It will also, in a large share of cases, hand back the wrong scope entirely, because claim 5 might read "The apparatus of claim 3, further comprising a sensor coupled to the housing," and a system that doesn't resolve "claim 3" back through claim 3's own dependency chain has no idea that claim 3 itself depends on claim 1, and that claim 1 is where the actual housing, the actual apparatus, and half the limitations claim 5 is quietly relying on are defined. The extractor got every word right and still produced a claim scope that describes a different, incomplete invention. That gap, between reading the text correctly and resolving what the text legally means, is the entire problem with patent claim extraction, and it is a structural problem, not an OCR quality problem.</p>

    <p>This matters for anyone processing patent files, litigation exhibits, licensing due diligence packets, or IP-backed loan collateral through a <a href="/documents/legal-docs">legal document</a> pipeline, because claims are the only part of a patent that has legal force. The specification explains the invention; the claims define what's actually owned. An extraction system that flattens claim structure into generic paragraphs is producing a document index that looks complete and is quietly wrong about the one section of the patent that determines infringement, licensing scope, and collateral value.</p>

    <h2>The three-part anatomy every claim actually has</h2>

    <p>Every patent claim, independent or dependent, is built from three structural pieces, and a claim extraction system needs to recognize the boundary between each one, because the legal weight of a word depends on which part of the claim it sits in. The first piece is the preamble, the introductory phrase before the transitional word, typically something like "A method for authenticating a user device" or "An apparatus for filtering particulate matter." The preamble names the general category of the invention and sometimes states its intended use or purpose. Whether the preamble actually limits the claim's scope, whether a court has to treat "for authenticating a user device" as a real requirement or just a label, depends on whether the preamble supplies antecedent basis for terms used later in the claim body, or whether it merely states an intended use that the body's structure independently satisfies. This is not a cosmetic distinction. Two claims with identical bodies can have different enforceable scope depending on whether their preambles are limiting.</p>

    <p>The second piece is the transitional phrase, a single word or short phrase sitting between the preamble and the body, and it carries more legal weight per character than almost anything else in the document. The third piece is the body, the actual list of elements, structures, steps, or limitations, usually broken into indented clauses, each one adding a specific requirement the claimed invention must include. A claim extraction system that treats the whole thing as one undifferentiated block of text loses the ability to answer basic downstream questions: what category of invention is this, what's the actual scope-defining transitional word, and what is the discrete list of required elements versus the introductory framing around them.</p>

    <h2>Independent claims versus dependent claims: a rule of legal construction, not just phrasing</h2>

    <p>An independent claim stands alone. It recites a complete set of elements without referring to any other claim, and it defines the broadest scope of protection in a claim set built around it. A dependent claim does the opposite: it explicitly refers back to another claim by number, typically opening with language like "The method of claim 1, further comprising..." or "The apparatus of claim 4, wherein the sensor is a pressure sensor," and it adds one or more additional limitations on top of everything the referenced claim already requires.</p>

    <p>What makes this more than a stylistic convention is that it's codified as a rule of legal construction. Under 37 CFR 1.75(c), the federal regulation governing patent claim form, a dependent claim "shall be construed to include all the limitations of the claim incorporated by reference into the dependent claim." That is not a suggestion for how a reader should interpret the claim, it is the binding rule for how the claim's scope is legally determined. Claim 5 in the example above does not merely reference claim 3 for context, it legally incorporates every single limitation in claim 3, which in turn incorporates every limitation in whatever claim 3 itself depends from, all the way back to the independent claim at the root of the chain. A dependent claim's actual scope, the full list of elements a product or process would need to include to fall within it, cannot be read off the dependent claim's own text. It has to be assembled by walking the chain back to its independent claim and merging every limitation along the way.</p>

    <h2>Why flat text extraction breaks exactly here</h2>

    <p>A naive extraction pipeline, one built to pull claims as a numbered list of paragraphs, gets two things right and one thing catastrophically wrong. It correctly identifies where each claim starts and ends, and it correctly captures the literal text of each claim. What it fails to do is resolve the reference. "The apparatus of claim 3" is just a string to a text extractor unless something in the pipeline is specifically built to parse that reference, look up claim 3's own text, check whether claim 3 is itself dependent, and recurse until it reaches an independent claim, accumulating every limitation along the way.</p>

    <p>There are three concrete ways this goes wrong in practice. First, scale: a patent with thirty claims and a five-level-deep dependency chain on claim 30 means resolving claim 30's true scope requires correctly parsing and merging five separate claims' worth of limitations, and a single missed or misparsed link anywhere in that chain produces a wrong answer for every claim below it. Second, OCR-specific failure: claim numbers are usually the single most common digit-only tokens on a claims page, and a scanned patent where OCR misreads "claim 3" as "claim 8" doesn't produce a garbled sentence a human would immediately notice, it produces a grammatically perfect sentence that silently points the entire dependency chain at the wrong independent claim, merging in a completely different set of limitations than the ones the patent actually intends. Third, structural collapse under multiple dependency, which is its own distinct failure mode significant enough to need its own explanation.</p>

    <h2>Multiple dependent claims: the branching structure flat extraction can't represent</h2>

    <p>Most dependent claims reference exactly one other claim. But 37 CFR 1.75(c) also permits a claim to reference more than one other claim at once, called a multiple dependent claim, and it comes with two specific structural rules that a claim extraction system has to enforce or its output is simply incorrect. First, a multiple dependent claim "shall refer to such other claims in the alternative only," meaning a claim written as "The apparatus of claims 2, 3, or 4, further comprising..." is not one claim with a merged, combined scope pulling from all three referenced claims simultaneously. It is legally three separate claims compressed into one piece of drafting, each alternative carrying its own independently resolved dependency chain and its own distinct scope. Second, "a multiple dependent claim shall not serve as a basis for any other multiple dependent claim," meaning the branching structure can only go one level deep before collapsing back to single dependency, which caps how much a downstream claim can fan out.</p>

    <p>A flat extraction pipeline that reads "claims 2, 3, or 4" and represents it as a single merged scope, effectively an AND of all three referenced claims' limitations, produces a claim set that is narrower and legally wrong compared to what the multiple dependent claim actually protects, which is three separate, alternative, and broader scopes. This is exactly the kind of error that looks fine on a claim chart and is wrong the moment someone relies on it to assess whether a product falls inside or outside the patent's coverage.</p>

    <h2>The transitional phrase changes claim scope by itself</h2>

    <p>Between the preamble and the body sits the transitional phrase, and its choice alone changes what the claim covers, independent of anything in the body. The USPTO's own claim interpretation guidance, at MPEP 2111.03, sets out three standard transitional phrases and their distinct legal effect, and a system that treats all three as interchangeable connective tissue is discarding information that materially changes claim scope.</p>

    <table>
      <thead>
        <tr><th>Transitional phrase</th><th>Legal effect</th><th>Practical consequence</th></tr>
      </thead>
      <tbody>
        <tr><td>"Comprising"</td><td>Open-ended. The claim covers the recited elements plus any additional, unrecited elements.</td><td>A claim to "a device comprising A and B" is infringed by a device with A, B, and C. Adding components does not avoid the claim.</td></tr>
        <tr><td>"Consisting of"</td><td>Closed. The claim covers only the recited elements and nothing else.</td><td>A claim to "a composition consisting of A and B" is not infringed by a product also containing C, even if C is trivial. This phrase is common in chemical and pharmaceutical claims where excluding unlisted ingredients matters.</td></tr>
        <tr><td>"Consisting essentially of"</td><td>Hybrid. Covers the recited elements plus additional elements that do not materially affect the claimed invention's basic and novel characteristics.</td><td>Whether an added element is permitted turns on a factual question, does it materially change the invention, that a flat extraction system cannot answer and should flag for review rather than silently classify either way.</td></tr>
      </tbody>
    </table>

    <p>An extraction system that captures the claim body correctly but drops or normalizes away the transitional word has thrown out the single token most likely to determine whether a given product infringes at all. "Comprising" and "consisting of" bodies can be textually identical and cover legally opposite sets of real-world products.</p>

    <h2>Means-plus-function claims: when the claim doesn't describe structure at all</h2>

    <p>A separate structural category sits inside claim bodies rather than at the preamble or transitional-phrase level: means-plus-function claiming, governed by 35 U.S.C. 112(f). This provision allows a claim element to be written as a function to be performed rather than the physical structure that performs it, phrased as "means for [performing some function]" instead of naming an actual mechanism. The statute is explicit about what that buys the drafter and what it costs: a means-plus-function limitation "shall be construed to cover the corresponding structure, material, or acts described in the specification and equivalents thereof," not the function in the abstract. In practice this means the claim's real scope isn't fully stated in the claim text at all, it has to be located in the patent's specification, in whatever specific structure is described there as performing the recited function, and then extended to structural equivalents.</p>

    <p>The USPTO's own examination guidance, at MPEP 2181, sets out a three-prong test examiners use to identify when 112(f) applies to a claim limitation: the limitation uses "means" or "step," or a generic placeholder functioning the same way, in place of a structural term; that placeholder is modified by functional language, usually linked with "for" or a similar phrase like "configured to"; and the limitation lacks sufficient structure, material, or acts to perform the recited function on its own. When a claim uses "means" language and none of the exceptions apply, a presumption arises that 112(f) governs it. That presumption isn't automatic in the other direction, though. The Federal Circuit's 2015 en banc decision in Williamson v. Citrix Online, LLC, 792 F.3d 1339, held that a claim limitation lacking the word "means" can still be subject to 112(f) if it fails to recite sufficiently definite structure and instead recites function without structure, overturning what had been a "strong" presumption against applying 112(f) to means-free claim language. The practical upshot is that a claim extraction system cannot rely on the literal word "means" as either a necessary or sufficient signal, some claims lacking "means" are still functionally means-plus-function claims under Williamson, and some claims containing "means" recite enough structure to escape 112(f) entirely.</p>

    <p>Why this matters for extraction: a system that treats a means-plus-function limitation as if the claim text itself fully states the invention's scope is wrong by construction, because the statute says the actual covered structure lives in the specification, not the claim. Correctly flagging a limitation as means-plus-function should trigger a different extraction path, one that pulls the corresponding structure out of the specification rather than treating the claim body's functional language as self-contained.</p>

    <h2>Worked example: a five-claim set, resolved correctly versus resolved flat</h2>

    <p>Here is a simplified but representative claim set, the kind that shows up constantly in mechanical and electronics patents, with both a correct and a flat-extraction resolution of claim 5's actual scope.</p>

    <table>
      <thead>
        <tr><th>Claim</th><th>Text</th><th>Flat extraction reads it as</th><th>Correctly resolved scope</th></tr>
      </thead>
      <tbody>
        <tr><td>1 (independent)</td><td>A housing comprising a base and a lid.</td><td>Base + lid.</td><td>Base + lid.</td></tr>
        <tr><td>2</td><td>The housing of claim 1, wherein the base includes a mounting bracket.</td><td>Base + mounting bracket only (claim 1's text not merged).</td><td>Base + lid + mounting bracket.</td></tr>
        <tr><td>3</td><td>The housing of claim 2, further comprising a gasket between the base and the lid.</td><td>Base + gasket only.</td><td>Base + lid + mounting bracket + gasket.</td></tr>
        <tr><td>4</td><td>The housing of claim 1, wherein the lid is hinged.</td><td>Base + hinged lid.</td><td>Base + lid, hinged + [independent branch, does not include claim 2's or claim 3's limitations].</td></tr>
        <tr><td>5</td><td>The housing of claim 3, further comprising a sensor coupled to the base.</td><td>Base + sensor only, two words from a paragraph, dependency unresolved.</td><td>Base + lid + mounting bracket + gasket + sensor coupled to the base.</td></tr>
      </tbody>
    </table>

    <p>Claim 5's correctly resolved scope requires five separate elements. A flat extraction pipeline that doesn't walk the chain reports two. That is not a rounding error or a minor omission, it is a claim that appears to cover roughly 40 percent of what it actually covers, which is exactly the kind of error that produces a wrong infringement read, a wrong licensing valuation, or a wrong collateral assessment if that patent is sitting behind an IP-backed loan. Notice also that claim 4, despite referencing claim 1 just like claim 2 does, sits on a completely separate branch and correctly excludes claim 2 and claim 3's limitations entirely. A pipeline that merges all "claim 1 descendants" into one bucket instead of respecting each individual chain would incorrectly attribute claim 4's hinge limitation to claim 5, or vice versa.</p>

    <h2>What an extraction pipeline actually needs to do</h2>

    <p>Getting claim scope right requires treating claims as a graph, not a list. Every claim needs to be parsed for its reference number if it has one, and dependent claims need their scope computed recursively: fetch the referenced claim's full resolved scope, not just its raw text, and append the current claim's own added limitations on top. Multiple dependent claims need to be expanded into their separate alternative branches rather than merged. The preamble, transitional phrase, and body need to stay tagged as distinct fields, not concatenated into one string, because downstream logic, does this claim's scope include unlisted elements, is this preamble limiting, needs to query them separately. Means-plus-function limitations need to be flagged using something like the same three-prong logic examiners apply, not a simple string match on the word "means," given Williamson's holding that the word alone is neither necessary nor sufficient. And OCR quality on the claims page specifically deserves extra scrutiny on digit tokens, since a single misread claim number silently redirects an entire downstream chain without producing any obviously malformed output a reviewer would catch by eye.</p>

    <p>None of this is exotic. It is the direct, mechanical consequence of what 37 CFR 1.75(c) already says a dependent claim legally means, and what MPEP 2111.03 and 2181 already say about transitional phrases and functional claiming. The rules are public and specific. The gap is that most document extraction built for legal or financial workflows is built for contracts, where clause boundaries matter but rarely form multi-level reference chains with this much legal consequence riding on getting the reference resolution right. Patents are unusual in the density of load-bearing cross-references packed into a few hundred words of claims text, closer in structure to the citation networks covered in our piece on <a href="/resources/blogs/legal-citation-checker">legal citation checking</a> than to an ordinary contract clause. The extraction discipline needed to get that right, correctly parsing structured legal text instead of treating it as prose, is the same discipline covered more broadly in our <a href="/resources/blogs/contract-ocr">contract OCR guide</a>, even though the specific reference rules a patent claim follows are its own, separately codified, body of law. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guide: <a href="/resources/blogs/ocr-for-legal-documents">OCR for legal documents</a>.</p>
  `,
  image: "/images/the-ultimate-guide-to-small-business.png",
  featuredImage: "/images/the-ultimate-guide-to-small-business.png",
  category: "Legal",
  date: "September 11, 2026",
  datePublished: "2026-09-11T00:00:00.000Z",
  dateModified: "2026-09-21T00:00:00.000Z",
  last_updated: "September 21, 2026",
  readTime: "12 min read",
  author: nupuraUghade,
  primary_keyword: "patent claim extraction",
  secondary_keywords: [
    "independent vs dependent patent claims",
    "means-plus-function claims 112(f)",
    "patent claim dependency chain",
    "37 CFR 1.75 dependent claim",
    "transitional phrase comprising consisting of",
    "Williamson v Citrix means-plus-function",
  ],
  tags: ["legal", "patent", "claim extraction", "means-plus-function", "IP due diligence"],
  cluster: "legal",
  faq: [
    {
      question: "What is the difference between an independent and a dependent patent claim?",
      answer:
        "An independent claim recites a complete set of elements on its own without referring to any other claim. A dependent claim refers back to another claim by number and adds further limitations, and under 37 CFR 1.75(c) it is legally construed to include every limitation of the claim it references.",
    },
    {
      question: "Why does naive text extraction break patent claim dependency chains?",
      answer:
        "A dependent claim's true scope isn't in its own text, it has to be assembled by resolving the referenced claim's own full scope, recursively, back to the independent claim. Flat extraction that captures each claim as an isolated paragraph never performs that resolution, so it reports a narrower and incorrect scope for every dependent claim.",
    },
    {
      question: "What are the three parts of a patent claim?",
      answer:
        "The preamble, an introductory phrase naming the invention's category; the transitional phrase, a word like \"comprising\" or \"consisting of\" that sets the claim's boundary; and the body, the list of elements or steps that are the actual limitations.",
    },
    {
      question: "How does \"comprising\" differ from \"consisting of\" in a patent claim?",
      answer:
        "\"Comprising\" is open-ended and covers the recited elements plus any additional ones. \"Consisting of\" is closed and covers only the recited elements, so a product with an extra unlisted component would not infringe a claim using \"consisting of\" even if it would infringe an otherwise identical claim using \"comprising.\"",
    },
    {
      question: "What triggers means-plus-function treatment under 35 U.S.C. 112(f)?",
      answer:
        "The MPEP 2181 three-prong test: the limitation uses \"means,\" \"step,\" or an equivalent generic placeholder; that placeholder is modified by functional language, typically linked with \"for\"; and the limitation lacks sufficient structure, material, or acts to perform the function on its own. Under Williamson v. Citrix Online, 792 F.3d 1339 (Fed. Cir. 2015), a claim can still trigger 112(f) even without the word \"means\" if it recites function without adequate structure.",
    },
    {
      question: "What is a multiple dependent claim and why does it break flat extraction?",
      answer:
        "A multiple dependent claim references more than one other claim at once, such as \"the apparatus of claims 2, 3, or 4.\" Under 37 CFR 1.75(c) it must be read in the alternative only, meaning it represents separate, distinct scopes rather than one merged scope. Extraction that merges the referenced claims into a single combined scope produces a claim that is narrower and legally incorrect.",
    },
  ],
}
