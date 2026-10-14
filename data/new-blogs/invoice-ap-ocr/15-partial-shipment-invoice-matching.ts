import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogAp15: BlogPost = {
  id: "ap-15",
  title: "Partial Shipment Invoice Matching: Where Errors Compound",
  slug: "partial-shipment-invoice-matching",
  excerpt:
    "Split deliveries against one PO need cumulative tracking, not per-invoice matching. Here is the mechanics, and why OCR errors compound across invoices.",
  description:
    "Partial shipment invoice matching explained: cumulative quantity and amount tracking against one PO, with a real worked example and OCR error compounding.",
  metaTag: "Partial Shipment Invoice Matching: Real Logic (2026)",
  content: `
    <p>A single <a href="/documents/financial-docs/purchase-orders">purchase order</a> for 1,000 units rarely arrives, and gets invoiced, all at once, especially on larger orders where a vendor's own production or logistics constraints make one clean shipment impractical. A vendor ships 800 units this week, 100 next week, and 200 the week after, invoicing each shipment separately against the same PO line. Every guide to <a href="/resources/blogs/3-way-match-invoice-automation">invoice matching</a> mentions "partial matching" as a feature that exists. Almost none explain the mechanic that actually matters: partial invoices need to be tracked cumulatively against the PO line, not evaluated one at a time in isolation, and a matching system that checks each partial invoice independently against the full PO quantity will pass invoices it should not.</p>

    <p>This is the cumulative-tracking mechanics for <a href="/solutions/finance-automation">invoice automation</a>, plus a failure mode specific to OCR-extracted partial invoices that generic matching content never mentions.</p>

    <h2>Why per-invoice matching fails on split deliveries</h2>

    <p>If a matching system checks each partial invoice against the full 1,000-unit PO independently, every single one of the three invoices in the example above (800, 100, 200 units) looks fine in isolation, none exceeds the PO quantity on its own. The actual question that matters is cumulative: do the three invoices, added together, correctly account for the full PO without exceeding it or leaving a gap unaccounted for. A system that only checks each invoice against the original PO total, rather than against the PO total minus everything already invoiced against it, cannot catch over-invoicing across a split delivery, since no single invoice ever breaches the limit on its own.</p>

    <h2>A real worked example of cumulative price-total matching</h2>

    <p>Microsoft's Dynamics 365 documentation for accounts payable invoice matching, one of the more technically detailed public references on this mechanic, gives a concrete illustration worth walking through. A PO line for 1,000 USB drives at $10.00 each, net amount $10,000, gets invoiced across three separate invoices at $10.80 each (a price increase within a 15%-or-$500 tolerance policy):</p>

    <table>
      <thead>
        <tr><th>Invoice</th><th>Quantity</th><th>Unit price</th><th>Net amount</th><th>Cumulative net amount</th><th>Match status</th></tr>
      </thead>
      <tbody>
        <tr><td>Invoice 1</td><td>800</td><td>$10.80</td><td>$8,640</td><td>$8,640</td><td>Passed (within tolerance vs. PO)</td></tr>
        <tr><td>Invoice 2</td><td>100</td><td>$10.80</td><td>$1,080</td><td>$9,720</td><td>Passed (within tolerance vs. PO)</td></tr>
        <tr><td>Invoice 3</td><td>200</td><td>$10.80</td><td>$2,160</td><td>$11,880</td><td>Failed, variance of $1,880 exceeds the $500 tolerance</td></tr>
      </tbody>
    </table>

    <p>Note what makes this fail: not the third invoice's own amount, which is unremarkable at $2,160, but the cumulative total across all three invoices against the original $10,000 PO. Per-invoice matching, checking only Invoice 3 in isolation against the $10,000 PO, would pass it easily. Cumulative matching, checking the running total against the PO, correctly catches that the vendor's price increase compounded across three shipments now exceeds acceptable tolerance, even though each individual invoice looked fine.</p>

    <h2>Where this generalizes beyond any single ERP</h2>

    <p>The specific field names and tolerance configuration screens above are Dynamics 365-specific, but the underlying principle applies to any system doing PO-based matching: track cumulative invoiced quantity and cumulative invoiced amount against each PO line, not just the current invoice's own numbers, and evaluate matching discrepancies against the running total. SAP's invoice verification, NetSuite's bill matching, and any custom-built matching logic all need the equivalent of this cumulative state, whether or not the specific platform exposes it as clearly as Dynamics 365's documentation does. A team building matching logic from scratch, rather than relying on a platform's built-in mechanism, needs to design this cumulative tracking explicitly, since it is easy to build a matcher that quietly assumes every invoice is the only invoice against its PO.</p>

    <h2>How do you know when a PO line is actually closed?</h2>

    <p>Cumulative tracking raises a question generic matching guides skip entirely: when is a split-delivery PO line considered complete? Three practical closure signals, none of them universal, all needing an explicit policy decision rather than a default assumption. Quantity closure: the cumulative invoiced quantity reaches the original PO quantity, the simplest and most common case. Vendor-declared closure: the vendor's final invoice in a series is explicitly marked as the last shipment against that PO, even if the cumulative quantity technically falls short (common with vendors who round down on a final partial shipment rather than exactly matching the ordered amount). Time-based closure: a PO line with partial invoices that has seen no new activity for a defined period (commonly 60 to 90 days) gets manually reviewed and closed regardless of whether the full quantity was ever invoiced, since some POs simply never get fully delivered and sit open indefinitely without an explicit close.</p>

    <p>Interestingly, Dynamics 365's own documentation flags a related and important detail: price-total matching validation occurs specifically on the last invoice for a partially invoiced PO line, not on every invoice equally. This means the closure decision (which invoice counts as "last") directly determines which invoice actually gets full price-tolerance scrutiny under that platform's default behavior, one more reason the question "is this PO line closed yet" is not a minor administrative detail but a decision that changes which specific invoice gets validated most rigorously.</p>

    <h2>The under-delivery case: less arrives than was ordered</h2>

    <p>The reverse of over-invoicing is under-delivery, a vendor ships and invoices less than the full PO quantity and the remaining balance never gets fulfilled at all, whether from a supply issue, a partial cancellation, a discontinued product line, or simply an error nobody caught in time to correct it. A PO line sitting at 800 of 1,000 units invoiced, with no activity for months, represents real unclosed liability exposure and inventory planning risk if left open indefinitely, distinct from the over-invoicing risk this piece focuses on but requiring the same cumulative-tracking infrastructure to even detect. A periodic report of PO lines with partial invoicing and no recent activity, cross-referenced against the time-based closure policy above, is the practical way to surface these before they become a forgotten liability nobody remembers exists. This report costs almost nothing to generate once cumulative tracking exists in the first place, since the underlying data is already captured, it just needs to be surfaced proactively rather than discovered by accident during an unrelated audit months or years later.</p>

    <h2>The OCR-specific risk: extraction errors compound across the series</h2>

    <p>This is the part no generic invoice-matching guide addresses, because it only exists once OCR extraction is in the pipeline at all. A single misread quantity or price on Invoice 1 of a three-invoice split delivery does not just corrupt that one invoice's own matching result, it corrupts the cumulative baseline that Invoice 2 and Invoice 3 get checked against. If extraction misreads Invoice 1's quantity as 900 instead of 800, the cumulative tracking is now off by 100 units before Invoice 2 has even arrived, and Invoice 2 and 3's matching results, however accurately extracted themselves, are being checked against an already-wrong running total.</p>

    <p>This makes extraction accuracy on the first invoice in a split-delivery series more consequential than on a typical standalone invoice, since an error there propagates forward through every subsequent invoice against that same PO line rather than staying contained to a single document. A validation step worth adding specifically for this case: when a new partial invoice arrives against a PO with existing invoiced history, flag any case where the cumulative quantity would exceed the original PO quantity by more than a small tolerance, since this is exactly the signature of an early extraction error compounding forward, not usually a real business discrepancy worth escalating to the vendor before checking the earlier records first.</p>

    <p>The diagnostic worth running when a cumulative match fails unexpectedly: pull every invoice in the series, not just the one that triggered the flag, and recheck each one's extracted quantity and price against its own source document. If the failing invoice's own numbers are correct but an earlier invoice in the series was misread, the fix is correcting that earlier record and re-running cumulative matching from that point forward, not simply forcing the current invoice through with a manual override, which would leave the underlying corrupted baseline in place for any future invoice against the same PO line.</p>

    <h2>What actually gets logged wrong when this is missed</h2>

    <p>The practical failure mode when cumulative tracking is missing or broken: over-payment on the final partial invoice in a series, since it is the one most likely to push a cumulative total over tolerance, but the one least likely to get scrutinized carefully if the matching system only checks it in isolation and it looks unremarkable on its own. This connects to the same underlying risk covered in our <a href="/resources/blogs/duplicate-invoice-detection">duplicate detection</a> piece, a real dollar loss that never triggers an obvious single-document red flag, only visible when you look at the pattern across multiple related documents rather than any one of them alone. Neither a duplicate check nor a per-invoice matching check catches this pattern, because both are designed to evaluate one document, not a series.</p>

    <h2>What I would check in your current matching setup</h2>

    <p>Confirm explicitly whether your matching logic checks each invoice against the original PO total or against the PO total minus everything already invoiced. If you cannot get a clear answer, test it directly: submit two invoices against the same PO line where neither individually exceeds the PO amount but the combined total does, and see whether the second one gets flagged. Then check whether your extraction confidence scoring treats the first invoice in a split-delivery series with any additional scrutiny, since an error there has outsized downstream consequences compared to an error on a standalone invoice.</p>

    <p>Finally, run the stale-PO report described above at least quarterly, POs with partial invoicing history and no activity for 60 to 90 days, and decide explicitly for each one whether it should close, stay open awaiting more shipments, or get escalated as a real fulfillment problem. This is a small, mechanical review that most AP teams never run at all simply because nobody owns it, not because it is difficult.</p>
    <p>None of this is exotic. It is standard matching logic applied consistently to a series of documents instead of one at a time, which is exactly the piece most generic invoice-matching content skips.</p>

    <p>Sources: worked example and matching mechanics referenced from <a href="https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/accounts-payable-invoice-matching" target="_blank" rel="noopener">Microsoft Dynamics 365's accounts payable invoice matching documentation</a>. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guide: <a href="/resources/blogs/smarter-invoice-processing-the-ocr-advantage-for-finance-departments">OCR for invoices, receipts and purchase orders</a>.</p>
  `,
  image: "/images/invoice-processing.png",
  featuredImage: "/images/invoice-processing.png",
  category: "Accounts Payable",
  date: "August 13, 2026",
  datePublished: "2026-08-13T00:00:00.000Z",
  dateModified: "2026-10-14T00:00:00.000Z",
  last_updated: "October 14, 2026",
  readTime: "10 min read",
  author: nupuraUghade,
  primary_keyword: "partial shipment invoice matching",
  secondary_keywords: [
    "split invoice purchase order matching",
    "cumulative invoice matching",
    "partial po invoicing",
    "invoice matching tolerance",
    "multiple invoices one purchase order",
    "po line matching cumulative",
  ],
  tags: ["accounts payable", "invoice OCR", "3-way match", "AP automation", "PO matching"],
  cluster: "industry-trends",
  faq: [
    {
      question: "What is partial shipment invoice matching?",
      answer:
        "Matching logic that handles a purchase order fulfilled and invoiced across multiple separate shipments rather than in one transaction, tracking cumulative quantity and amount invoiced against the PO line rather than evaluating each invoice in isolation.",
    },
    {
      question: "Why does per-invoice matching fail on split deliveries?",
      answer:
        "Each individual partial invoice can look acceptable when checked against the full original PO amount, even when the combined total across all partial invoices exceeds tolerance. Only cumulative tracking against the running total catches this.",
    },
    {
      question: "How does OCR extraction error affect partial shipment matching specifically?",
      answer:
        "An extraction error on an early invoice in a split-delivery series corrupts the cumulative baseline that all subsequent invoices get checked against, meaning the error propagates forward through the rest of the series rather than staying contained.",
    },
    {
      question: "Should the first invoice in a split delivery get extra scrutiny?",
      answer:
        "Yes, since an extraction error there compounds forward through every subsequent invoice matched against the same running total, unlike an error on a standalone invoice.",
    },
    {
      question: "What tolerance should apply to cumulative price-total matching?",
      answer:
        "This is a policy decision specific to your organization, commonly a percentage, a fixed not-to-exceed amount, or both, evaluated against the cumulative invoiced total rather than any single invoice's amount.",
    },
    {
      question: "How do you know when a purchase order line with partial invoices is finally closed?",
      answer:
        "Three common signals: cumulative invoiced quantity reaches the PO quantity, the vendor explicitly marks a final invoice as the last shipment, or a time-based policy closes lines with no activity for 60 to 90 days.",
    },
  ],
}
