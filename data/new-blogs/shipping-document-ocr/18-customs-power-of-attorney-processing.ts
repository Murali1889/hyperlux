import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogSd18: BlogPost = {
  id: "sd-18",
  title: "Customs Power of Attorney Processing: 19 CFR 141.31 Rules",
  slug: "customs-power-of-attorney-processing",
  excerpt:
    "A broker kept filing entries under a partnership's power of attorney eleven months after it had quietly expired under a rule most import files never check.",
  description:
    "The 19 CFR 141.31 to 141.37 requirements for a valid customs power of attorney, why duration limits differ by entity type, and what an expired POA breaks.",
  metaTag: "Customs Power of Attorney: 19 CFR 141.31 Requirements",
  content: `
    <p>A partnership signs a power of attorney authorizing its customs broker to file entries on its behalf. The broker's file management system logs it, attaches it to the client record, and moves on. Two years and eleven months later, during a CBP focused assessment, an auditor pulls the POA and checks the execution date against the filing history. Every entry filed after the twenty-four month mark, roughly forty of them, was filed under a document that had already expired by operation of law. Nobody revoked it. Nobody forged anything. The broker simply never knew that a partnership's power of attorney carries a hard two-year ceiling that a corporation's does not, because nothing in the file, the software, or the original signing conversation ever surfaced that distinction. This is not a hypothetical drawn from nowhere; it is the direct, mechanical consequence of a rule sitting in plain text at 19 CFR 141.34, one that document intake processes routinely fail to check because they treat "power of attorney on file" as a binary yes or no rather than a set of entity-specific conditions with an expiration clock attached.</p>

    <p>This post is part of a cluster on <a href="/documents/shipping-docs">shipping document processing</a>, and it covers a document type that gets treated as paperwork overhead when it is actually a standing legal authorization with real conditions attached. The regulation is 19 CFR Part 141, Subpart C, sections 141.31 through 141.39, and it is more specific and more entity-dependent than most import compliance programs assume.</p>

    <h2>What 19 CFR 141.31 actually requires before a broker can act</h2>

    <p>The core rule is short. 19 CFR 141.31(a) states that a power of attorney may be executed for the transaction of a specified part or all of the customs business of the principal, and it establishes the basic premise that a customs broker cannot transact customs business in a client's name without one. The regulation is explicit that this authorization has to exist before the broker acts, not as a formality obtained at some point during the relationship, but as a precondition to every entry filed in that client's name.</p>

    <p>Two structural rules sit inside 141.31 that a lot of intake processes miss entirely. First, 141.31(c) flatly prohibits granting a power of attorney to a minor: "A power of attorney to a minor shall not be accepted." Second, and more consequential for document verification, 141.31(d) draws a hard line between resident and nonresident principals. A resident is defined as an individual living within U.S. customs territory or the Virgin Islands, a partnership in which at least one partner meets that residency test, or a corporation incorporated in one of those jurisdictions. Anyone who does not meet that test is a nonresident. That single classification, buried in a definitions subsection, is what triggers two additional layers of requirements covered further down, because a POA from a nonresident principal is not accepted on the same terms as one from a resident.</p>

    <h2>The form itself: CBP Form 5291 and the equivalent-document rule</h2>

    <p>19 CFR 141.32 governs the actual instrument. Brokers can use CBP Form 5291 directly, or they can use a different document as long as it is "executed in the same manner as a Customs Form 5291," meaning either a general or a limited power of attorney that follows the same structural template. That template opens with the classic "KNOW ALL MEN BY THESE PRESENTS, THAT" formulation and requires specific blanks to be filled in: the principal's full name and legal designation (individual, partnership, or corporation), the principal's state of residence and place of business, the agent's or attorney's name, designation, and address, and either an expiration date or a statement that the grant continues until revoked. The grant of authority itself is broad by design, authorizing the agent to perform "every lawful act and thing" necessary for the customs business described "as fully as said principal could do if present and acting."</p>

    <p>Notably absent from the regulatory text of 141.32 is any requirement for notarization. The sample language calls for the principal's signature, not a notary acknowledgment. This surprises a lot of importers who assume a document this consequential must be notarized; it does not have to be, which means the entire legal weight of the instrument rests on the signature itself being executed by someone with actual authority to bind the entity, a point that becomes important below when a signer's authority is not obvious on the face of the document.</p>

    <p>There is also a narrower alternative form under 141.33, available only to an individual, not a partnership, association, or corporation, who is not a regular importer and needs to authorize an unpaid agent for a single noncommercial shipment. That version can be handwritten or stamped directly on the invoice rather than executed as a standalone instrument, but it is a genuinely limited carve-out and does not apply to any recurring commercial import relationship, which is the context most document verification systems in lending and trade finance actually operate in.</p>

    <h2>Elements that make a customs POA legally sufficient, by entity type</h2>

    <p>Reading 141.31 through 141.37 together, "legally sufficient" is not one checklist, it is a checklist that changes shape depending on who the principal is. The table below reflects what each section actually requires.</p>

    <table>
      <thead>
        <tr><th>Principal type</th><th>Duration limit</th><th>Additional requirement</th><th>Governing section</th></tr>
      </thead>
      <tbody>
        <tr><td>Individual (resident)</td><td>Unlimited unless the document itself states an expiration</td><td>None beyond standard execution</td><td>19 CFR 141.31, 141.34</td></tr>
        <tr><td>Partnership</td><td>Hard cap of 2 years from date of execution, no exceptions</td><td>At least one partner must meet residency criteria for the partnership itself to qualify as resident</td><td>19 CFR 141.31(d), 141.34</td></tr>
        <tr><td>Corporation (resident, qualified to do business in-state)</td><td>Unlimited unless the document states otherwise</td><td>None beyond standard execution</td><td>19 CFR 141.31, 141.34</td></tr>
        <tr><td>Nonresident individual</td><td>Unlimited unless stated</td><td>Designated agent must be a resident authorized to accept service of process on the principal's behalf</td><td>19 CFR 141.36</td></tr>
        <tr><td>Nonresident corporation, not qualified to do business in the relevant state</td><td>Unlimited unless stated</td><td>Must be supported by documentation establishing the signer's authority to execute the POA on the corporation's behalf</td><td>19 CFR 141.37</td></tr>
        <tr><td>Individual, single noncommercial shipment, unpaid agent</td><td>Single shipment only</td><td>Handwritten or stamped statement on the invoice itself, no standalone form required</td><td>19 CFR 141.33</td></tr>
      </tbody>
    </table>

    <p>The partnership row is the one that catches the most operations off guard, because a partnership looks, on paper, like any other business entity with an ongoing relationship to its broker. Nothing about a partnership's POA reads differently from a corporation's at the moment of signing. The difference only becomes visible when someone checks the execution date against a calendar, which is exactly the kind of check that manual file review tends to skip once a relationship is established and "the POA is on file" becomes shorthand for "the POA is valid."</p>

    <h2>Revocation: how a POA can die before its stated expiration date</h2>

    <p>Duration limits are not the only way a power of attorney stops being valid. 19 CFR 141.35 allows revocation at any time by written notice given to and received by CBP, either at the port of entry or electronically. This means a POA's validity is not solely a function of the document's own terms; it can be terminated unilaterally by the principal at any point, and the moment of legal effect is receipt by CBP, not the date the principal signs a revocation letter or the date the broker is informed. A broker who is slow to learn that a client revoked authority, because the revocation went straight to a port office rather than through the broker relationship, can end up acting under a POA that CBP's own records already show as terminated.</p>

    <p>This creates an asymmetry that document verification has to account for: a POA can look perfectly current in a broker's file, unexpired, properly signed, entity type matched to the right duration rule, and still be legally dead because the underlying authorization was revoked through a channel the broker's own recordkeeping never touched. There is no equivalent public, searchable registry a broker can check the way a bank checks a UCC filing; the only reliable signal is direct confirmation with the principal and, where available, cross-referencing CBP's own transaction records for rejected filings tied to that POA.</p>

    <h2>Nonresident principals: the two additional checks most files skip</h2>

    <p>Because 141.31(d) defines residency narrowly, a substantial share of import relationships, any foreign manufacturer acting as importer of record, any offshore holding company, any foreign subsidiary shipping directly, fall into the nonresident category by default. Two additional rules then apply that do not apply to a resident principal.</p>

    <p>19 CFR 141.36 requires that the agent designated by a nonresident principal's power of attorney be a resident who is authorized to accept service of process against that nonresident. This is not a minor technicality. It exists because CBP and other parties need a domestic point of legal contact for a foreign entity, and a POA that names an agent without that authorization is deficient on its face regardless of how correctly every other field was filled in.</p>

    <p>19 CFR 141.37 goes further for nonresident corporations specifically. If the corporation has not qualified to do business under the state law of the district where the agent is empowered to act, the power of attorney must be supported by separate documentation establishing that the person who signed it actually had the authority to do so on the corporation's behalf. This is the corporate-authority documentation requirement, and it is where "properly executed" stops being about the POA form itself and starts being about what stands behind the signature: a board resolution, a certificate of incumbency, or an equivalent instrument showing the signer held the title and authority the POA claims they held. A POA signed by someone whose actual authority within the corporation was never verified is not cured by the fact that the form itself is filled out correctly.</p>

    <h2>The recordkeeping obligation that turns a stale POA into an audit finding</h2>

    <p>19 CFR 111.23 sets broker recordkeeping requirements, and it treats powers of attorney as a distinct category with their own retention rule. An active power of attorney must be retained until revoked. Once revoked, the broker must retain both the revoked POA and the letter of revocation for five years after the date of revocation, or five years after the date the client ceases to be an "active client," whichever period is later. That second condition matters more than it looks: a client can go quiet for years without formally revoking anything, and the retention clock does not start until the file is affirmatively closed out, which means brokers frequently end up holding POA records for far longer than the underlying business relationship actually lasted.</p>

    <p>Separately, 19 CFR 111.29 requires brokers to exercise due diligence in financial settlements and correspondence, and it specifically mandates that brokers include a written notice, on the power of attorney document itself and again annually to active clients, explaining that paying the broker does not discharge the client's own liability for duties and taxes if the broker fails to remit that payment to CBP. That notice requirement means a technically valid, unexpired, properly executed POA can still be deficient as a broker compliance matter if it was issued without the required client notification language attached, which is a separate failure mode from expiration or improper signing authority but one that shows up in the same audit.</p>

    <h2>What happens when a broker acts under a defective POA</h2>

    <p>19 CFR 111.53 lists the grounds on which CBP can initiate proceedings to suspend or revoke a broker's license, and one of them is broad by design: having violated any provision of any law enforced by CBP or the rules and regulations issued under it. Since 141.31 requires a valid power of attorney before a broker transacts customs business in a client's name, filing entries under an expired, revoked, or improperly executed POA is itself a violation of that requirement, which places it squarely inside 111.53's catch-all ground for license action. The regulation does not carve out a special, lesser category for "the POA lapsed by a few months and nobody noticed." Expiration under 141.34 and improper execution under 141.37 are treated the same way as any other regulatory violation once discovered.</p>

    <p>There is a second-order effect that matters just as much for lenders and importers relying on broker-filed entries as evidence of clean title or clean customs standing. An entry filed without valid underlying authority is an entry filed by someone acting outside the scope of the agency relationship the importer believed existed. That undermines the importer's own reasonable-care position under 19 U.S.C. 1484, since reasonable care includes ensuring the party transacting business on your behalf is actually authorized to do so, and it complicates any downstream reliance on that entry, whether for duty drawback, a customs bond claim, or a lender relying on entry documentation as part of a borrowing-base collateral package tied to imported inventory.</p>

    <h2>Worked example: a partnership POA that expired without anyone flagging it</h2>

    <p>Consider a licensed customs broker onboarding a two-partner import business in March. The partnership executes a power of attorney using language that mirrors CBP Form 5291, correctly naming both partners, correctly describing the scope of authority, and signed by a partner with clear authority to bind the partnership. Nothing about the document is deficient at the moment of signing. The broker's intake process files it, links it to the client account in the entry filing system, and treats the relationship as active going forward, filing entries roughly three to four times a month as new shipments arrive.</p>

    <p>Under 19 CFR 141.34, that partnership POA is valid for exactly two years from its execution date, full stop, with no provision for automatic renewal or grace period anywhere in the regulation. Nothing in the broker's intake workflow captured that duration limit as a distinct field to monitor, because the same intake workflow treats a corporation's POA, which carries no such limit, identically to a partnership's. Two years pass. The client relationship is active, shipments keep arriving, entries keep getting filed, and the POA sitting in the file folder looks exactly as valid on day 731 as it did on day one, because nothing about its physical appearance changes when it expires.</p>

    <p>Eleven months after the expiration date, CBP conducts a focused assessment of the broker's client files as part of routine compliance monitoring. The auditor's review includes cross-checking POA execution dates against entity type and against the filing history tied to each POA, which is a standard audit step precisely because 141.34's partnership limit is one of the more commonly missed conditions in the industry. The review turns up roughly forty entries filed after the expiration date, every one of them technically filed without the broker holding a valid power of attorney at the time of filing, even though the broker held what looked, from the file, like an entirely valid and current one for the first two years of the relationship.</p>

    <p>Nothing in this scenario involves fraud, forgery, or bad faith on anyone's part. It is a pure consequence of treating "POA on file" as a static fact rather than a condition with an entity-specific clock attached, and it demonstrates exactly why document verification for this category cannot stop at confirming a signature and a date. It has to check the entity type against the applicable duration rule, calculate the actual expiration date where one applies, and flag the file before that date arrives, not after an external auditor finds it first.</p>

    <h2>What a verification process actually needs to check</h2>

    <p>Getting this right is not about scanning for a signature and a date and calling the document verified. A verification process built for this document type needs to extract and check, at minimum: the principal's legal designation, since that single field determines which duration rule applies under 141.34; the execution date, so a partnership's two-year window can be calculated and monitored rather than assumed; the residency status of the principal under the 141.31(d) definition, since that determines whether 141.36's resident-agent requirement or 141.37's corporate-authority documentation requirement applies at all; whether the named agent meets the resident and service-of-process criteria when the principal is a nonresident; whether supporting authority documentation, such as a board resolution or certificate of incumbency, accompanies the POA when the principal is a nonresident corporation not qualified to do business in the relevant state; and whether the required client payment-liability notice language is present, since its absence is a separate compliance gap from expiration or authority issues. None of these checks require legal judgment about ambiguous facts; they require a system that treats entity type as a routing variable rather than a cosmetic field, and that calculates expiration dates instead of relying on someone remembering to check them before they become an audit finding.</p>

    <h2>Where this connects to the rest of the customs document chain</h2>

    <p>A power of attorney rarely sits in isolation from the rest of an import compliance file. The same broker relationship it authorizes typically produces the <a href="/resources/blogs/customs-entry-summary-processing">customs entry summary</a> filings that depend on it, and if the underlying importer is claiming a small-value exemption rather than a formal entry, the authority question intersects with <a href="/resources/blogs/section-321-de-minimis-processing">Section 321 de minimis processing</a> in similar ways, since an unauthorized filer is unauthorized regardless of entry type or value threshold. For importers whose collateral or trade finance structure depends on entries being filed correctly and on time, verifying that the underlying authorization is current is not a separate exercise from verifying the shipment documents themselves; it is the precondition that makes everything filed under that authority legally attributable to the party who is supposed to be legally responsible for it.</p>

    <p>The broader lesson holds across every document type in this category: a document that looks complete on its face, correctly signed, correctly formatted, correctly filed, can still be functionally worthless if the condition that makes it valid, an entity-specific duration limit, a resident-agent requirement, a signer's actual corporate authority, was never checked against the rule that governs it. A power of attorney is not proof of authority just because it exists in a file. It is proof of authority only for as long as, and only under the conditions, that 19 CFR 141.31 through 141.37 actually specify, and checking those conditions is the entire point of treating this document as something that needs verification rather than mere storage.</p>

    <p>Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guide: <a href="/resources/blogs/ocr-for-shipping-and-logistics-documents">OCR for shipping and logistics documents</a>.</p>
  `,
  image: "/images/ocr-bank-statement-technology.png",
  featuredImage: "/images/ocr-bank-statement-technology.png",
  category: "Logistics",
  date: "September 16, 2026",
  datePublished: "2026-09-16T00:00:00.000Z",
  dateModified: "2026-09-21T00:00:00.000Z",
  last_updated: "September 21, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "customs power of attorney processing",
  secondary_keywords: [
    "19 CFR 141.31 power of attorney",
    "CBP Form 5291 requirements",
    "customs broker power of attorney expiration",
    "nonresident corporation customs power of attorney",
    "customs power of attorney revocation",
    "customs broker recordkeeping requirements",
  ],
  tags: ["logistics", "customs power of attorney", "customs broker", "compliance", "OCR", "shipping documents"],
  cluster: "logistics",
  faq: [
    {
      question: "What does 19 CFR 141.31 require for a customs power of attorney to be valid?",
      answer:
        "19 CFR 141.31 requires a broker to hold a valid power of attorney before transacting customs business in a principal's name, prohibits granting a power of attorney to a minor, and defines resident versus nonresident principals based on where the individual, partnership, or corporation is located or incorporated, a classification that determines which additional requirements under 141.36 and 141.37 apply.",
    },
    {
      question: "How long is a customs power of attorney valid?",
      answer:
        "Under 19 CFR 141.34, a power of attorney issued by a partnership is limited to two years from its date of execution with no extension provision. Powers of attorney issued by individuals or corporations may be granted for an unlimited period unless the document itself states an expiration date.",
    },
    {
      question: "Does a customs power of attorney need to be notarized?",
      answer:
        "No. The template language in 19 CFR 141.32 for CBP Form 5291 and equivalent documents calls for the principal's signature but does not require notarization. The legal weight of the document rests on the signature being executed by someone with actual authority to bind the entity, not on a notary acknowledgment.",
    },
    {
      question: "What extra requirements apply to a nonresident corporation's customs power of attorney?",
      answer:
        "Under 19 CFR 141.37, if a nonresident corporation has not qualified to do business under state law in the district where the agent is empowered to act, the power of attorney must be supported by documentation establishing that the person who signed it actually had the authority to execute it on the corporation's behalf, such as a board resolution or certificate of incumbency.",
    },
    {
      question: "How can a customs power of attorney be revoked?",
      answer:
        "19 CFR 141.35 allows revocation at any time by written notice given to and received by CBP, either at a port of entry or electronically. The revocation takes legal effect on receipt by CBP, which means a POA can become invalid before a broker is even informed if the revocation notice goes directly to a port rather than through the broker relationship.",
    },
    {
      question: "How long must a customs broker retain power of attorney records?",
      answer:
        "Under 19 CFR 111.23, an active power of attorney must be kept until revoked. A revoked power of attorney and its letter of revocation must then be retained for five years after the date of revocation, or five years after the date the client stops being an active client, whichever period is later.",
    },
  ],
}
