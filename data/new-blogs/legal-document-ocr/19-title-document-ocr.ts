import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogLd19: BlogPost = {
  id: "ld-19",
  title: "Title Document OCR: Reconciling Title Exceptions to Deeds",
  slug: "title-document-ocr",
  excerpt:
    "Title document OCR is not lender-side mortgage extraction. It means reconciling exceptions against the recorded chain of title, not just reading text.",
  description:
    "Why title and closing document processing differs from lender-side mortgage OCR, and how commitment exceptions get reconciled against recorded deed history.",
  metaTag: "Title Document OCR: Reconciling Exceptions to Deeds",
  content: `
    <p>A title examiner pulls the county's grantor-grantee index for a rural parcel, cross-references it against the legal description on a purchase contract, and finds a mortgage recorded against a prior owner in 2004 that was, according to the seller's closing statement from a 2013 refinance, paid off in full eleven years ago. No satisfaction of mortgage was ever recorded. The scanned commitment package for this deal reads perfectly, every character on every page transcribed correctly by whatever OCR engine the title company ran it through. The deal still cannot close on schedule, because nothing in that clean transcription told anyone the 2004 mortgage was still sitting open on the public record, still technically a lien on the property, still an exception the title company has to either clear or insure around before it will issue a policy. That gap, between reading a document accurately and knowing whether what it says is still true against everything else recorded against that parcel, is the actual work of title and closing document processing, and it is a fundamentally different problem from the mortgage document processing a lender's origination team runs.</p>

    <p>Most vendors selling into real estate document automation do not draw that line clearly, and the confusion has a cost. A tool built to extract borrower income, loan terms, and property addresses off a Closing Disclosure or a Note is solving a text-extraction problem: read the fields, populate the loan origination system, move on. A title company or the real estate attorney handling closing is solving a reconciliation problem: take every item listed as an exception on a title commitment, match it against the actual chain of recorded instruments for that parcel going back to a legally sufficient root of title, and determine whether each exception is still live, has been released but never marked so in the index, or represents a break in the chain that needs curative work before closing. Our <a href="/documents/legal-docs">legal document intelligence</a> coverage touches this distinction in passing across the cluster; this post is about the mechanics of the title side specifically, because it is the harder half of the problem and the half most document automation content skips.</p>

    <h2>Lender-side extraction and title-side reconciliation are not the same job</h2>

    <p>A mortgage document processing pipeline, the kind built for loan origination and servicing, is fundamentally a data-capture exercise applied to a small, well-defined set of forms: the Note, the Deed of Trust or Mortgage, the Closing Disclosure, the appraisal. The fields are known in advance, the document types are standardized (Fannie Mae and Freddie Mac uniform instruments cover the overwhelming majority of residential mortgages), and the extraction task is bounded: pull the principal amount, the interest rate, the borrower names, the property address, the maturity date. Get those fields right and the downstream system, whether that's a loan origination system or a servicing platform, has what it needs.</p>

    <p>Title and closing document processing starts from a different question. The title commitment itself is not a single document to be transcribed; it is a claim about a body of prior recorded documents, and the job is to verify that claim against the actual public record rather than just read what the commitment says. A title company's examiner is not extracting data from one document, they are reconciling one document's assertions (this parcel has these exceptions, this vesting, this legal description) against the recorder's index of every instrument ever filed against that parcel or a predecessor parcel it was subdivided from. That reconciliation step has no equivalent on the lender side, because a lender's Note and Deed of Trust are documents being created at this closing, not documents whose accuracy depends on a decades-deep paper trail nobody in the room actually witnessed.</p>

    <h2>What a title commitment's Schedule B-II actually asks a reader to verify</h2>

    <p>The ALTA Commitment for Title Insurance, the standard form used across the U.S. title industry, has three parts. Schedule A states the basics: commitment date, the type and amount of policy to be issued, the name of the proposed insured, the current vested owner of record, and the legal description of the land. Schedule B, Part I lists Requirements, items that must be satisfied before the policy issues, typically things like recording the new deed, paying off and releasing an existing mortgage, or delivering an affidavit resolving a name discrepancy. Schedule B, Part II lists Exceptions, matters excluded from the coverage the policy would otherwise provide.</p>

    <p>Every ALTA commitment carries a set of standard, pre-printed exceptions that apply regardless of the specific property: survey matters not disclosed by an accurate survey, rights or claims of parties in possession and unrecorded easements, unrecorded mechanic's and materialmen's liens, and taxes or assessments not yet shown as liens of record. These four are boilerplate and mostly get cleared through affidavits at closing rather than research. The exceptions that actually require reconciliation work are the specific ones underneath them, the recorded easements, restrictive covenants, prior mortgages, judgment liens, and other instruments unique to that parcel's history, each one identified by an instrument number, a recording date, and a book and page or document reference in the county records.</p>

    <p>A document extraction pipeline can read that Schedule B-II list accurately and still be functionally useless for closing, because the list itself is not the deliverable. The deliverable is a determination, for every specific exception on that list, of whether it is still a live encumbrance on title, whether it has actually been satisfied but the satisfaction was never recorded (which happens constantly, particularly with older mortgages where a lender that has since been acquired or gone out of business simply never filed the release), or whether it was already extinguished by operation of law and should not even be listed as a current exception.</p>

    <h2>The grantor-grantee index is what a chain-of-title reconciliation actually runs against</h2>

    <p>County land records in most U.S. jurisdictions are indexed two ways: a tract index, where every instrument affecting a given parcel is filed together (common in some states, particularly in the upper Midwest), and a grantor-grantee index, an alphabetical name index split into two lists, one of every party who conveyed an interest in a transaction (the grantor index) and one of every party who received one (the grantee index). Where only a name index exists, which is most of the country, a title search works backward: start with the current owner as a grantee, find the deed that conveyed to them, identify the grantor on that deed, then search the grantor index for that same person's name as a grantee on an earlier transaction, and repeat, building an unbroken sequence of conveyances back to a sufficiently old root of title.</p>

    <p>This is the mechanical core of what "chain of title" reconciliation means, and it is a name-matching and legal-description-matching problem, not a text-extraction problem. Two structurally separate risks show up here. First, common or ambiguous names create false positives and false negatives in a grantor-grantee search, a "John A. Smith" grantor in the chain might or might not be the same "John Smith" indexed as a grantor of an unrelated parcel three years later, and an automated matcher that treats name strings as sufficient identifiers without cross-checking the legal description will either miss a real encumbrance or flag a false one. Second, and this is the doctrinal version of the same problem, a deed that never gets properly linked into the recorded sequence is what property law calls a wild deed, an instrument that is recorded but sits outside the chain of title because the conveyance connecting it to the prior owner of record was never itself recorded, or was recorded late. The case most law students learn this from, <em>Board of Education of Minneapolis v. Hughes</em>, 136 N.W. 1095 (Minn. 1912), turned on exactly this fact pattern: a deed recorded out of sequence relative to a competing conveyance did not give constructive notice to a later purchaser, because a title searcher working the index backward from the current owner would never have found it. A wild deed is invisible to anyone who only reads documents in isolation and only becomes visible to someone actually reconciling the sequence, which is the whole point of the distinction this post is drawing.</p>

    <h2>Legal description matching is where automated exception review usually breaks</h2>

    <p>Every instrument in a chain-of-title search has to be matched to the subject parcel by its legal description, and legal descriptions come in two structurally different formats that a matching system has to handle differently. In platted subdivisions, typical in towns and newer developments, the description is short and referential: "Lot 7, Block 3 of Sunnyside Addition," pointing to a recorded plat map. In unplatted or rural land, particularly in the public-land survey states, descriptions are metes-and-bounds or section-township-range: a sequence of bearings and distances, or a fractional section reference like "the NE quarter of the SW quarter of Section 12, Township 4 North, Range 2 West." These two formats are not interchangeable text strings that a fuzzy-match algorithm can treat the same way. A platted description matches by exact reference to a recorded map; a metes-and-bounds description matches by geometric equivalence, which means two descriptions using different starting points, different bearing conventions, or a typo in a single distance figure can describe the same parcel or a subtly different one, and only a system that actually parses the bearings and distances rather than treating the description as an opaque string can tell the difference.</p>

    <p>This matters directly for exception reconciliation because an easement or a prior mortgage found in the index has to be confirmed as affecting the actual subject parcel, not just a parcel with a similar-looking description nearby. A subdivided property with a legal description that references "the West 40 acres of the NE quarter" of a section, sold off from a larger metes-and-bounds tract decades ago, requires a reconciliation system to understand that an easement recorded against "the NE quarter" as a whole, before the subdivision, still burdens the West 40 today, even though the legal description on the easement instrument and the legal description on the current commitment are not identical strings. Generic document extraction tools built for reading dollar amounts and dates off standardized mortgage forms have no reason to have ever built this capability, because a lender-side Note never needs to reconcile a legal description against a decades-old parent tract.</p>

    <h2>Worked example: an unresolved exception that character-perfect OCR would never catch</h2>

    <p>Take the scenario from the opening, made specific. A purchase and sale agreement lists the subject property with a metes-and-bounds legal description. The title company's search of the grantor-grantee index produces the following sequence of instruments affecting the parcel, going back from the current owner.</p>

    <table>
      <thead>
        <tr><th>Instrument</th><th>Date recorded</th><th>Parties</th><th>What the record shows</th></tr>
      </thead>
      <tbody>
        <tr><td>Warranty Deed, Instr. #2013-004821</td><td>03/14/2013</td><td>Hendricks (grantor) to current owner Alvarez (grantee)</td><td>Conveys the parcel; references a mortgage to First Regional Bank as an existing lien "subject to"</td></tr>
        <tr><td>Deed of Trust, Instr. #2004-011290</td><td>06/02/2004</td><td>Hendricks (borrower) to First Regional Bank (lender)</td><td>Original mortgage, principal amount recorded, no satisfaction of record</td></tr>
        <tr><td>Refinance settlement statement (not a recorded instrument)</td><td>Dated 09/2013</td><td>Hendricks and First Regional Bank</td><td>Off-record document supplied by seller showing the 2004 loan was paid off through a 2013 refinance with a different lender</td></tr>
        <tr><td>Deed of Trust, Instr. #2013-011977</td><td>09/18/2013</td><td>Hendricks (borrower) to Meridian Home Lending (lender)</td><td>Refinance mortgage, recorded properly, this is the loan Hendricks actually had outstanding when selling to Alvarez</td></tr>
      </tbody>
    </table>

    <p>The Schedule B-II exceptions on the current title commitment, generated off the county index alone, list both the 2004 First Regional Bank Deed of Trust and the 2013 Meridian Home Lending Deed of Trust as unreleased exceptions, because the county record shows exactly that: two mortgages, neither one marked satisfied. A generic OCR pipeline reading the commitment would transcribe both entries correctly and stop there, since both are genuinely present as text on the page. The actual reconciliation work is realizing that the 2013 refinance settlement statement, which is not itself a recorded instrument and would never appear in a grantor-grantee index search, is the evidence that the 2004 mortgage was paid off, and that its continued appearance as a live exception is a title defect, an unrecorded satisfaction, not a live lien. Closing cannot proceed on the assumption that this exception will simply resolve itself. The title company has to either obtain a recordable satisfaction or release from First Regional Bank's successor, if the bank still exists in a form that can issue one, or require an affidavit of no default coupled with a specific title company indemnity, sometimes called a gap indemnity in practice, that lets the transaction close with the company taking on the risk that the exception is genuinely stale, backed by its own underwriting judgment rather than a clean recorded release. Either path is manual curative work that starts only after someone, or some system, has correctly flagged that this specific exception does not match what the transaction's own supporting documents say is true, a determination that requires reading the settlement statement and the recorded mortgage as a matched pair, not as two independent pieces of text.</p>

    <h2>What a title-aware extraction and reconciliation pipeline actually has to do</h2>

    <p>Getting this right technically means building several capabilities that a lender-side mortgage OCR system has no reason to build. First, instrument-level extraction that captures recording metadata, instrument number, recording date, book and page, and party names, as structured, independently queryable fields for every document in a chain, rather than leaving that information embedded in running commitment text. Second, a legal description parser that can normalize both platted and metes-and-bounds formats into a comparable geometric or referential representation, so that two descriptions can be checked for the same-parcel relationship even when the text strings differ, which is the specific capability that catches the subdivided-parcel case described above. Third, a name-matching layer for the grantor-grantee sequence that treats identical or similar names as candidates requiring legal-description confirmation rather than automatic matches, since name collisions are common enough in any populous county's index that treating name match alone as sufficient produces both false positives and false negatives. Fourth, and this is the piece most generic tools skip entirely, cross-referencing each Schedule B-II exception against any off-record supporting documents in the file, settlement statements, payoff letters, prior title policies, that might indicate an exception is stale even though no release has been recorded, and flagging the discrepancy for a human examiner rather than either silently trusting the county index or silently trusting the off-record document.</p>

    <p>There is also a statutory dimension to how old an exception even needs to be chased. Most states have adopted some form of a Marketable Title Act, statutes that extinguish older recorded interests once a sufficiently long, unbroken chain of title has run from a qualifying root of title, so that title examiners are not required to search back to the original sovereign grant on every transaction. Michigan's version, enacted originally as Act 200 of 1945, and Ohio's, codified at Ohio Revised Code Sections 5301.47 through 5301.56, both use a forty-year root-of-title standard for most interests (with shorter periods for mineral interests in some states), meaning an interest whose most recent recorded link predates the root of title by more than the statutory period is void unless someone preserved it by filing a notice within the statute's window. A reconciliation pipeline that is chasing every recorded exception back to the sovereign grant on every file is doing unnecessary work; one that has no concept of a statutory root of title at all risks either flagging genuinely extinguished old interests as live exceptions or, worse, missing a preserved interest that falls just inside the statutory window because it never checked whether a notice of preservation was filed. Getting the root-of-title cutoff right, and knowing which state's specific statute and preservation mechanics apply, is exactly the kind of jurisdiction-specific detail that a document automation vendor selling a one-size-fits-all extraction product has little incentive to build correctly, since it does not show up as a feature on a demo.</p>

    <h2>Lender-side mortgage processing versus title-side closing document processing</h2>

    <table>
      <thead>
        <tr><th>Dimension</th><th>Lender-side mortgage document processing</th><th>Title-side closing document processing</th></tr>
      </thead>
      <tbody>
        <tr><td>Core task</td><td>Extract structured fields from a small set of standardized forms</td><td>Reconcile a commitment's claims against a decades-deep chain of recorded instruments</td></tr>
        <tr><td>Document universe</td><td>Note, Deed of Trust, Closing Disclosure, appraisal, largely Fannie Mae/Freddie Mac uniform instruments</td><td>Deeds, mortgages, releases, easements, judgments, plats, and off-record supporting documents spanning decades</td></tr>
        <tr><td>Primary matching problem</td><td>Field-to-form mapping (this number is the principal, this date is the maturity date)</td><td>Instrument-to-instrument and instrument-to-parcel matching across the grantor-grantee index</td></tr>
        <tr><td>What "accurate" means</td><td>Every field transcribed correctly from the document at hand</td><td>Every exception correctly classified as live, stale, or extinguished relative to the full chain</td></tr>
        <tr><td>Failure mode if done wrong</td><td>Wrong loan terms populate an origination or servicing system</td><td>A title policy insures over a defect nobody actually cleared, or closing stalls on an exception that was already resolved off record</td></tr>
        <tr><td>Governing standard</td><td>Fannie Mae/Freddie Mac uniform instrument formats</td><td>ALTA Commitment for Title Insurance form, state Marketable Title Acts, county recording statutes</td></tr>
      </tbody>
    </table>

    <p>The distinction matters for procurement, not just for engineering pride. A title company or real estate law firm evaluating a document intelligence vendor whose case studies and demos are all built around Notes, Deeds of Trust, and Closing Disclosures should treat that as a signal the product was built for lender-side extraction, not for the reconciliation work Schedule B-II actually requires. The two problems share a first step, getting clean text and structured fields out of scanned and PDF documents, which is why the underlying OCR layer overlaps with the mechanics covered in our <a href="/resources/blogs/contract-ocr">contract OCR guide</a>. They diverge completely after that step, in what the extracted data then needs to be checked against.</p>

    <h2>What to check before trusting a title document processing pipeline</h2>

    <p>Ask whether the vendor's product does anything with an extracted exception besides list it, specifically whether it attempts to match each Schedule B-II item against other recorded instruments and off-record supporting documents in the file, or whether "extraction" stops at transcribing the commitment's own text accurately. Ask whether the legal description handling distinguishes platted lot-and-block references from metes-and-bounds and section-township-range descriptions, and whether it can recognize when a currently-described parcel is a subdivided portion of a larger tract referenced in an older instrument, since that is the specific case where string-matching legal descriptions fails silently. Ask whether name matching in a chain-of-title search treats matches as candidates requiring confirmation rather than as automatic hits, given how common name collisions are in any county with a few hundred years of recorded transactions. And ask for a sample run against a file with a genuinely unresolved exception, an unreleased older mortgage with off-record payoff evidence in the file, similar to the worked example above, since a clean demo file with no discrepancies will never surface whether the system does reconciliation work at all or only transcription.</p>

    <p>None of this argues that title examination should stay entirely manual. Chasing a chain of title by hand through decades of grantor-grantee index entries does not scale any better than manual contract review does, and a properly built reconciliation pipeline can surface discrepancies, like a mismatched name or a stale exception, faster and more consistently than an examiner working under deadline pressure across a high volume of files. It is a reason to be specific about what "title document OCR" actually means before trusting it with anything that touches insurability, and to ask a vendor to show reconciliation logic, not just transcription accuracy. For the closing side of this same workflow, particularly how remote and electronic notarization documents get verified before recording, our coverage of <a href="/resources/blogs/remote-online-notarization-verification">remote online notarization verification</a> covers an adjacent piece of the same closing package, and our piece on <a href="/resources/blogs/due-diligence-data-room-software">due diligence data room software</a> covers the same document-classification discipline applied to a commercial real estate or M&amp;A transaction rather than a residential title chain. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/ocr-accuracy.png",
  featuredImage: "/images/ocr-accuracy.png",
  category: "Legal",
  date: "September 17, 2026",
  datePublished: "2026-09-17T00:00:00.000Z",
  dateModified: "2026-09-17T00:00:00.000Z",
  last_updated: "September 17, 2026",
  noindex: true,
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "title document ocr",
  secondary_keywords: [
    "title commitment exceptions",
    "chain of title reconciliation",
    "ALTA Schedule B-II",
    "grantor grantee index search",
    "legal description matching",
    "marketable title act",
  ],
  tags: ["legal", "title insurance", "real estate closing", "OCR", "chain of title"],
  cluster: "legal",
  faq: [
    {
      question: "What is title document OCR, and how is it different from mortgage document OCR?",
      answer:
        "Mortgage document OCR extracts structured fields, loan amount, interest rate, borrower name, from a small set of standardized lender forms like the Note and Deed of Trust. Title document OCR has to do that same text extraction and then reconcile it, matching every exception on a title commitment against the actual recorded chain of title for the parcel to determine whether each one is still a live encumbrance, has been satisfied but never released of record, or was extinguished by statute.",
    },
    {
      question: "What is Schedule B-II on an ALTA title commitment?",
      answer:
        "Schedule B, Part II lists the exceptions to coverage on an ALTA Commitment for Title Insurance. It includes four standard pre-printed exceptions common to nearly every commitment (survey matters, parties in possession, unrecorded mechanic's liens, unpaid taxes not yet of record) plus specific exceptions unique to the property, such as recorded easements, restrictive covenants, prior mortgages, and judgment liens, each identified by an instrument number and recording date.",
    },
    {
      question: "What is a wild deed, and why does it matter for chain-of-title reconciliation?",
      answer:
        "A wild deed is a recorded instrument that sits outside the chain of title because the conveyance linking it to the prior owner of record was never itself recorded, or was recorded late. Board of Education of Minneapolis v. Hughes, 136 N.W. 1095 (Minn. 1912), is the case most law students learn this doctrine from: a deed recorded out of sequence did not give constructive notice to a later purchaser, because a title searcher working the grantor-grantee index backward from the current owner would never have found it.",
    },
    {
      question: "How does a title search actually work through the grantor-grantee index?",
      answer:
        "Where a jurisdiction uses a name-based grantor-grantee index rather than a tract index, a title search works backward: start with the current owner as a grantee, find the deed that conveyed to them, identify the grantor, then search the grantor index for that same person as a grantee on an earlier transaction, and repeat, building an unbroken sequence of conveyances back to a sufficiently old root of title.",
    },
    {
      question: "Why does legal description matching cause problems for automated title exception review?",
      answer:
        "Legal descriptions come in two structurally different formats, short platted references like a lot and block number, and metes-and-bounds or section-township-range descriptions built from bearings and distances. These are not interchangeable text strings. A platted description matches by reference to a recorded plat map, while a metes-and-bounds description matches by geometric equivalence, so a system that treats descriptions as opaque strings instead of parsing them can miss that an easement recorded against a larger parent tract still burdens a subdivided portion of it today.",
    },
    {
      question: "What is a Marketable Title Act, and how does it affect how far back a title reconciliation needs to search?",
      answer:
        "Most states have adopted some version of a Marketable Title Act, statutes that extinguish older recorded interests once an unbroken chain of title has run a set number of years, typically forty, from a qualifying root of title. Michigan's version was originally enacted as Act 200 of 1945, and Ohio's is codified at Ohio Revised Code Sections 5301.47 through 5301.56. These statutes mean an examiner does not need to search back to the original sovereign grant on every file, but they also mean a reconciliation pipeline needs to know the applicable state statute and whether any interest was preserved by a timely filed notice.",
    },
  ],
}
