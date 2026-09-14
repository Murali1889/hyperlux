import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogLd18: BlogPost = {
  id: "ld-18",
  title: "Legal Hold Custodian Tracking: Sent Isn't Confirmed",
  slug: "legal-hold-custodian-tracking",
  excerpt:
    "A sent hold notice and a confirmed hold are not the same fact. Here is the real gap between IT-level preservation and custodian behavior, and how to track it.",
  description:
    "Why a delivered hold notice does not prove a confirmed hold, how IT-level preservation differs from custodian compliance, and what to track to defend it.",
  metaTag: "Legal Hold Custodian Tracking: The Real Compliance Gap",
  content: `
    <p>A sent hold notice and a confirmed hold are not the same thing, and a legal department that treats them as interchangeable is building its defense on a record that proves delivery, not compliance. The notice going out tells you a message left your mail server. It does not tell you whether the custodian who received it understood what to stop deleting, whether the account that notice was aimed at even has a preservation mechanism sitting behind it, or whether anyone is watching what that custodian does for the next eighteen months while the case grinds toward trial. Courts do not ask whether a hold notice existed. They ask whether the organization can show, custodian by custodian and system by system, that preservation actually held. That is a narrower question than most legal hold programs are built to answer, and the gap between the two is where <a href="/documents/legal-docs">document intelligence workflows for legal teams</a> earn their keep, because closing it is a records problem before it is a legal one.</p>

    <h2>Three things get conflated under "the hold went out"</h2>
    <p>Ask a legal ops team whether a custodian is "on hold" and you will usually get a confident yes. Push on what that yes actually rests on, and it tends to collapse into one of three separate, non-overlapping facts, each of which people casually treat as proof of the others.</p>
    <ul>
      <li><strong>A system-level preservation mechanism exists.</strong> Somewhere in Exchange, SharePoint, a backup platform, or a case management tool, a flag or policy is set that stops a specific data source from being purged. This is a machine state. It requires no human to know it exists.</li>
      <li><strong>A notice was delivered to a person.</strong> An email landed in an inbox, or a letter was mailed. This is a fact about routing, not about comprehension.</li>
      <li><strong>A person confirmed understanding and took no destructive action.</strong> This is a human state, and it is the only one of the three that actually describes behavior rather than infrastructure.</li>
    </ul>
    <p>The mistake almost every hold program makes is assuming that fact one implies fact three, or that fact three implies fact one. It does not work either direction. A mailbox can be technically preserved at the server level while the human who owns it never opens the notice, never learns what is covered, and continues normal business use in total ignorance of an obligation that exists purely as backend metadata. And a custodian can read a hold notice carefully, click every acknowledgment button offered, sit through training, and still be entirely unprotected if the IT ticket to actually apply the hold to their mailbox, their OneDrive, or their shared drive location was never completed, got misrouted, or expired when a case was mistakenly marked closed in a compliance console. Acknowledgment tracking and preservation tracking are two different systems of record, and the organizations that get burned are almost always the ones that only maintained one of them, or maintained both without ever reconciling them against each other.</p>

    <h2>How preservation actually happens inside the systems</h2>
    <p>It helps to look at what a technical hold mechanism actually does, because the mechanics explain exactly why it is orthogonal to human acknowledgment. Take Exchange Online's Litigation Hold feature, which is the mechanism most organizations rely on for mailbox preservation and which Microsoft documents in detail. In the normal, unheld workflow, when a user permanently deletes an item, either with a hard delete or by emptying Deleted Items, the item moves to the Deletions subfolder inside the hidden Recoverable Items folder. When that item is purged from Deletions, or when a deletion policy's retention period expires, it moves again to a second hidden subfolder called Purges, and it is marked for permanent removal. On a mailbox with no hold in place, the Managed Folder Assistant, an automated background process, sweeps through and permanently erases items sitting in Purges. The entire cycle, from user delete to permanent erasure, can complete in a matter of weeks with no human intervention at any step.</p>
    <p>Placing a mailbox on Litigation Hold changes exactly one thing in that chain: items that land in the Purges subfolder are retained for the hold's specified duration instead of being erased by the Managed Folder Assistant. Microsoft also expands the Recoverable Items storage quota on a held mailbox, from 30 GB to 100 GB, or up to 110 GB when auto-expanding archiving is enabled, specifically because a held mailbox accumulates deleted and purged items instead of shedding them. None of this depends on the mailbox owner knowing the hold exists. A custodian who deletes an email, empties the folder, and moves on with their day has, from their own point of view, gotten rid of it. On a held mailbox, that email is sitting in a folder they cannot see or access, preserved regardless of their intent or awareness. This is the technical reality behind the phrase "in-place preservation," and it is also exactly why a system-level hold, on its own, tells you nothing about whether the custodian understands their obligations or is behaving consistently with them.</p>
    <p>It also matters what Litigation Hold does not cover. It is an Exchange mailbox mechanism. Microsoft 365 organizations running Microsoft Purview eDiscovery cases use a separate, broader hold type that can span Exchange mailboxes, SharePoint sites, OneDrive accounts, and Teams content within one policy, because those locations are not touched by a plain mailbox litigation hold. Teams data compounds this further: one-on-one and group chat messages are actually stored in the mailboxes of the people participating in the conversation, so a mailbox hold does catch them, but files shared inside a chat live in the sharer's OneDrive, and channel conversations live in the team's own mailbox and connected SharePoint site, both of which need to be placed on hold separately for that content to be preserved. A legal team that hears "the custodian's account is on litigation hold" and assumes that covers everything the custodian might have said in a Teams channel is making an assumption the underlying architecture does not support.</p>

    <h2>What the Sedona Conference actually requires from an acknowledgment mechanism</h2>
    <p>Most guidance on legal holds gestures at "getting confirmation" from custodians without describing what a defensible acknowledgment mechanism has to accomplish. The Sedona Conference's Commentary on Legal Holds, Second Edition: The Trigger and the Process, a working group publication from its Working Group on Electronic Document Retention and Production, is more specific than most sources on this point. Guideline 8 of that commentary lays out seven characteristics of an effective hold notice, and it is worth reading closely because it treats acknowledgment and technical preservation as separate, coequal requirements rather than one standing in for the other. An effective notice, per the guideline, identifies the right custodians and data stewards, then:</p>
    <ul>
      <li>communicates in a manner that helps recipients take effective, good-faith action;</li>
      <li>is in an appropriate form, which may be written and sent by email;</li>
      <li>explains how preservation is to be carried out and who can answer questions about it;</li>
      <li>"includes a mechanism for the recipient to acknowledge that the notice has been received, read, and understood," in the commentary's own words;</li>
      <li>separately addresses features of the underlying systems that complicate preservation, such as auto-delete functionality that needs to be suspended;</li>
      <li>is periodically reviewed and revised as the matter develops; and</li>
      <li>is reinforced with periodic reminder notices so the obligation stays current in recipients' minds.</li>
    </ul>
    <p>Notice that acknowledgment, item (d), and suspending automated deletion at the system level, item (e), are listed as two distinct requirements. The drafters were not treating them as the same task viewed from different angles. Elsewhere in the same commentary, discussing implementation, the drafters draw the identical distinction this article is built around: they note it is "important to distinguish between preserving information in place, and collecting and sequestering it," and observe that "a technical solution, such as placing a custodian's data on hold on the server side," can preserve information independent of what the custodian does. In the very next paragraph, the commentary pivots to the human side, stating that "it is critical that recipients of hold notices understand their duty to preserve information and how to meet that duty," and recommends training as a tool for effectiveness. That sequencing, technical preservation in one paragraph, human comprehension in the next, is the commentary itself acknowledging these are separate problems that both need solving, not one problem with two names.</p>
    <p>Guideline 9 of the same commentary pushes this further into documentation: organizations should document the hold implementation process with enough specificity to demonstrate it was reasonable and good faith if it is ever challenged, starting with the date and identity of who initiated the hold and the reasoning behind the triggering event. A documentation practice that only logs "notice sent, notice acknowledged" is documenting one of the two layers Sedona describes and leaving the other invisible.</p>

    <h2>The four combinations, and why only one of them is actually defensible</h2>
    <p>Once you separate the technical layer from the human layer, every custodian in a matter falls into one of four states. Only one of them is genuinely defensible on its own; the other three each create a different kind of exposure, and they are easy to mistake for each other if your tracking only captures one dimension.</p>
    <table>
      <thead><tr><th>IT-level preservation</th><th>Custodian acknowledgment</th><th>What this actually proves</th><th>Residual risk if challenged</th></tr></thead>
      <tbody>
        <tr><td>Flag applied and verified</td><td>Acknowledged and understood</td><td>Data is technically safe and the custodian knew their obligation</td><td>Lowest risk, but still needs ongoing behavioral monitoring for deliberate circumvention</td></tr>
        <tr><td>Flag applied and verified</td><td>Not acknowledged</td><td>Data is technically safe, but no evidence the custodian ever knew to stop unusual behavior around it</td><td>Opposing counsel argues the process was not reasonable because nobody confirmed the custodian understood the scope</td></tr>
        <tr><td>Not applied, or lapsed</td><td>Acknowledged and understood</td><td>The custodian believes they are compliant while the underlying system offers no actual protection</td><td>Highest hidden risk; the audit trail looks complete because acknowledgment logs exist, masking a live gap in preservation</td></tr>
        <tr><td>Not applied, or lapsed</td><td>Not acknowledged</td><td>Neither layer functioned</td><td>Usually caught fastest by a basic completeness check, but represents a total process failure if it reaches a spoliation motion</td></tr>
      </tbody>
    </table>
    <p>The third row is the one worth sitting with, because it is the quiet failure mode almost nobody's checklist catches. An acknowledgment log that shows one hundred percent custodian confirmation looks, on paper, like the strongest evidence a legal team could produce. If a meaningful fraction of those acknowledgments correspond to mailboxes or shared drives where the technical hold was never actually applied, that log is not evidence of a defensible process. It is evidence that the organization believed it had one.</p>

    <h2>A worked example: six custodians in one matter</h2>
    <p>Picture a mid-size case with six identified custodians, three months into the hold. A monthly reconciliation between the acknowledgment tracker and the IT preservation console produces a table like this.</p>
    <table>
      <thead><tr><th>Custodian</th><th>Data sources in scope</th><th>IT hold flag status</th><th>Notice acknowledged</th><th>Reconciliation flag</th></tr></thead>
      <tbody>
        <tr><td>VP of Sales</td><td>Mailbox, OneDrive</td><td>Applied, verified</td><td>Yes, day 2</td><td>Clean</td></tr>
        <tr><td>Regional manager</td><td>Mailbox, Teams channel</td><td>Applied, verified</td><td>No response after two reminders</td><td>Escalate: acknowledgment gap on a preserved custodian</td></tr>
        <tr><td>Contract analyst (departed)</td><td>Mailbox converted to shared</td><td>Applied before departure, unverified since conversion</td><td>Yes, prior to departure</td><td>Escalate: hold status uncertain after mailbox type change</td></tr>
        <tr><td>Operations director</td><td>Mailbox, shared drive folder</td><td>Mailbox applied; shared drive ticket never confirmed</td><td>Yes, day 1</td><td>Escalate: partial technical coverage behind a clean acknowledgment</td></tr>
        <tr><td>Field technician</td><td>Mailbox only</td><td>Applied, verified</td><td>Yes, day 3</td><td>Clean</td></tr>
        <tr><td>Outside contractor</td><td>Personal email, non-tenant device</td><td>Not applicable, outside the organization's systems</td><td>Yes, via separate preservation instruction</td><td>Escalate: technical hold cannot reach a non-tenant account by definition</td></tr>
      </tbody>
    </table>
    <p>Two of the six custodians reconcile cleanly. The other four each represent a distinct failure pattern: an acknowledgment gap sitting on top of solid technical preservation, a status change (departure and mailbox conversion) that silently put a previously verified hold into question, a partial technical failure hiding behind a fully signed acknowledgment, and a custodian whose relevant data was never reachable by an in-tenant technical mechanism at all, which meant the entire burden of preservation for that custodian rested on the human layer alone. A tracking system that only recorded acknowledgment would have shown five of six custodians confirmed, which reads as a strong compliance story and is, in fact, a coin flip on whether preservation held.</p>

    <h2>What has to be tracked to defend the process if it is ever challenged</h2>
    <p>If a spoliation motion gets filed, the record produced needs to answer questions at both layers, cross-referenced by custodian, not as two disconnected logs. Build the tracking around these fields:</p>
    <ul>
      <li><strong>Custodian-to-data-source mapping.</strong> Which mailbox, OneDrive account, Teams memberships, shared drives, and endpoints belong to this custodian, and which specific hold mechanism is supposed to cover each one.</li>
      <li><strong>Per-source technical hold timestamp.</strong> The date the flag was actually applied and confirmed active on each individual data source, not the date a ticket was opened requesting it.</li>
      <li><strong>Hold continuity verification.</strong> Periodic confirmation that each flag is still active, since holds can lapse if a case is closed in a compliance console, if a mailbox is converted to a shared mailbox, or if an account is deleted and later recreated under a similar name.</li>
      <li><strong>Notice delivery and acknowledgment timestamp per custodian.</strong> Tracked separately from the technical layer, with the method of acknowledgment recorded.</li>
      <li><strong>Escalation log for non-responders.</strong> Showing the organization followed up rather than treating silence as compliance.</li>
      <li><strong>A reconciliation record.</strong> Documented proof that someone actually cross-checked the acknowledgment log against the technical hold console on a recurring basis, rather than maintaining two systems that were never compared.</li>
      <li><strong>Matched release timestamps.</strong> When the hold ends, both the technical flag and the custodian's obligation should be released together and recorded together; a mismatch, where one layer is released while the other quietly continues or quietly stops, is its own defensibility problem months or years later.</li>
    </ul>
    <p>Every field on that list needs a timestamp and needs to live in a system nobody can quietly edit after the fact. A spreadsheet updated by hand fails this test for the same reason it fails for delivery and acknowledgment tracking generally, discussed in more depth in our piece on <a href="/resources/blogs/litigation-hold-software">litigation hold software and FRCP 37(e)</a>: opposing counsel will ask who had write access and when each row was last touched, and an editable document cannot answer that credibly. That companion piece covers the legal standard, what a 37(e) spoliation motion actually tests and what the acknowledgment record needs to survive one. This piece covers the layer underneath it: whether the technical preservation mechanism a program relies on was actually applied, verified, and kept in sync with the acknowledgment log, which is a records-reconciliation problem the legal standard alone does not solve.</p>

    <h2>Where the gap actually opens in practice</h2>
    <p>The failure patterns above are not hypothetical edge cases; they cluster around a predictable set of blind spots. Personal or BYOD devices used for work messaging sit entirely outside any tenant-level technical mechanism, which means the entire preservation burden for anything sent from them rests on the custodian's memory and honesty. Shared or functional mailboxes, the kind used by a team rather than an individual, often have no clear single owner responsible for acknowledgment, so they slip through custodian-based tracking that assumes a one-to-one mapping between people and accounts. Departing employees are a recurring trigger: converting a mailbox to a shared mailbox, or offboarding an account through standard HR workflows, can interact with hold settings in ways that are easy to miss unless someone specifically checks hold status as part of the offboarding process rather than assuming it carries over automatically. Cloud storage or messaging outside the organization's own tenant, a personal Dropbox account, a Gmail address a contractor used out of habit, an encrypted messaging app, cannot be reached by any in-tenant technical hold at all, which means acknowledgment and documented instruction are the only defense available, and that defense needs to be explicit rather than assumed.</p>

    <h2>Building tracking that survives a motion</h2>
    <p>None of this requires exotic tooling. It requires treating IT-level preservation and custodian-level acknowledgment as two systems of record that get reconciled against each other on a schedule, not two boxes that both get checked once and then forgotten. The organizations that get hurt in spoliation disputes are rarely the ones with no process at all; they are usually the ones who had a real process for one layer and quietly assumed it covered the other. A useful discipline borrowed from the broader discovery world, and covered in more detail in our post on <a href="/resources/blogs/e-discovery-document-review">e-discovery document review</a>, is to treat every preservation claim as something that needs an independently verifiable source, the same standard chain-of-custody practices demand for physical and digital evidence more broadly, which we walk through in our piece on <a href="/resources/blogs/chain-of-custody-documentation">chain of custody documentation</a>. Applied to legal holds, that discipline means the acknowledgment log and the technical hold console should point back to the same custodian record, with the same identifiers, checked against each other on a recurring basis rather than living as separate artifacts that only get compared for the first time when a motion forces the question. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/legal-document-automation.png",
  featuredImage: "/images/legal-document-automation.png",
  category: "Legal",
  date: "September 16, 2026",
  datePublished: "2026-09-16T00:00:00.000Z",
  dateModified: "2026-09-16T00:00:00.000Z",
  last_updated: "September 16, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "legal hold custodian tracking",
  secondary_keywords: [
    "custodian acknowledgment tracking",
    "litigation hold notice acknowledgment",
    "technical hold flag verification",
    "Sedona Conference legal hold guidelines",
    "Microsoft 365 litigation hold",
    "eDiscovery custodian compliance",
  ],
  tags: ["legal", "litigation hold", "custodian compliance", "e-discovery"],
  cluster: "legal",
  faq: [
    {
      question: "What is legal hold custodian tracking?",
      answer:
        "Legal hold custodian tracking is the practice of recording, for each individual custodian in a matter, whether a preservation notice was delivered, whether the custodian acknowledged and understood it, and separately, whether the underlying systems holding that custodian's data actually have a technical preservation mechanism applied and verified. It requires cross-referencing two distinct records rather than maintaining one.",
    },
    {
      question: "What is the difference between IT-level data preservation and custodian-level compliance?",
      answer:
        "IT-level preservation is a system state, such as a Litigation Hold flag on an Exchange mailbox, that stops data from being purged regardless of whether the account owner knows about it. Custodian-level compliance is a human state, describing whether the person understands their obligation and behaves consistently with it. Neither implies the other; a mailbox can be technically preserved while the owner is unaware, or a custodian can be fully informed while the technical hold on their account was never actually applied.",
    },
    {
      question: "Does an acknowledged hold notice prove the custodian is compliant?",
      answer:
        "No. Acknowledgment proves the custodian received and confirmed understanding of the notice at a point in time. It does not prove that a technical preservation mechanism was applied to every data source that custodian uses, and it does not monitor ongoing behavior. A fully acknowledged custodian roster can still sit on top of significant technical preservation gaps if the two tracking systems are never reconciled against each other.",
    },
    {
      question: "What does the Sedona Conference say custodian acknowledgment mechanisms must include?",
      answer:
        "Guideline 8 of The Sedona Conference Commentary on Legal Holds, Second Edition, states that an effective hold notice includes a mechanism for the recipient to acknowledge that the notice has been received, read, and understood, and separately addresses features of the underlying information systems, such as auto-delete functionality, that need to be suspended. The commentary treats acknowledgment and technical suspension of automated deletion as two distinct requirements, not one standing in for the other.",
    },
    {
      question: "Does Microsoft 365 litigation hold cover Teams chats and OneDrive files automatically?",
      answer:
        "Not entirely. Exchange Online Litigation Hold applies to mailbox content, and it does capture one-on-one and group Teams chat messages because those are stored in participants' mailboxes. It does not automatically cover files shared in those chats, which live in the sharer's OneDrive, or Teams channel conversations, which live in the team's mailbox and connected SharePoint site. Those locations need to be placed on hold separately through a broader eDiscovery case hold.",
    },
    {
      question: "What records do you need to defend a legal hold process in court?",
      answer:
        "At minimum, a custodian-to-data-source mapping, a per-source timestamp showing when the technical hold was actually applied and verified, periodic confirmation the hold is still active, delivery and acknowledgment timestamps per custodian tracked separately from the technical layer, an escalation log for non-responders, a documented reconciliation showing the two layers were cross-checked against each other, and matched release timestamps when the hold ends.",
    },
  ],
}
