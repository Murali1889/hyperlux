import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogLd03: BlogPost = {
  id: "ld-03",
  title: "Litigation Hold Software: What FRCP 37(e) Actually Requires",
  slug: "litigation-hold-software",
  excerpt:
    "A company issued its hold on time, trained every custodian, and still paid $3 million. Here is what FRCP 37(e) really tests, and where holds break.",
  description:
    "FRCP 37(e) explained with the actual rule text and a real case showing why custodian acknowledgment tracking is the compliance gap that matters most.",
  metaTag: "Litigation Hold Software and FRCP 37(e) Explained",
  content: `
    <p>A mid-size electronics company issued its litigation hold notice on the day it received a demand letter. Legal held live training sessions with every identified custodian. The company sent quarterly reminder emails for years while the case dragged on. On paper, this is what a defensible preservation program looks like. It still ended with a $3 million sanction and an adverse-inference jury instruction against the company, because a single vice president told his team to delete the emails anyway, and nobody's acknowledgment record caught it until forensic examiners found the gap.</p>
    <p>That case, <em>GN Netcom, Inc. v. Plantronics, Inc.</em>, is a useful place to start because it shows something most litigation hold guidance skips past: a hold can be procedurally correct and still fail, and the rule that governs what happens next, Federal Rule of Civil Procedure 37(e), draws a sharp line between ordinary preservation failures and the kind that end careers and cases. If you are evaluating <a href="/documents/legal-docs">document intelligence tools for legal teams</a> or building an internal process for tracking holds, understanding that line matters more than any feature checklist.</p>

    <h2>What Rule 37(e) actually says</h2>
    <p>Most vendor content about litigation hold software references "Rule 37(e)" without quoting it, which is part of why so many legal ops teams misunderstand what the rule actually tests. Here is the operative text, from the 2015 amendment to the Federal Rules of Civil Procedure:</p>
    <p>"If electronically stored information that should have been preserved in the anticipation or conduct of litigation is lost because a party failed to take reasonable steps to preserve it, and it cannot be restored or replaced through additional discovery, the court: (1) upon finding prejudice to another party from loss of the information, may order measures no greater than necessary to cure the prejudice; or (2) only upon finding that the party acted with the intent to deprive another party of the information's use in the litigation may: (A) presume that the lost information was unfavorable to the party; (B) instruct the jury that it may or must presume the information was unfavorable to the party; or (C) dismiss the action or enter a default judgment."</p>
    <p>Read closely, this is a two-gate test, not one standard. Gate one asks whether you took reasonable steps and whether the other side was prejudiced by what was lost. Gate two, a separate and much higher bar, asks whether you intended to deprive the other side of the evidence. Courts cannot skip to gate two remedies (adverse inference instructions, dismissal, default judgment) without a specific finding of intent. Negligence, even sloppy negligence, only gets you gate one, and gate one remedies are capped at "no greater than necessary to cure the prejudice." That distinction is the entire architecture of modern spoliation law, and it is the reason a well-designed litigation hold process has to do two different jobs at once.</p>

    <table>
      <thead><tr><th>Element</th><th>37(e)(1): Prejudice-based</th><th>37(e)(2): Intent-based</th></tr></thead>
      <tbody>
        <tr><td>Culpability required</td><td>Negligence is enough</td><td>Specific intent to deprive</td></tr>
        <tr><td>What the court must find</td><td>Prejudice to the other party</td><td>Intent, independent of prejudice</td></tr>
        <tr><td>Available remedies</td><td>Measures no greater than necessary to cure prejudice (e.g., reopening discovery, cost-shifting)</td><td>Adverse inference instruction, presumption of unfavorable content, dismissal, default judgment</td></tr>
        <tr><td>Burden</td><td>Moving party shows prejudice</td><td>Moving party shows intent, often through circumstantial evidence</td></tr>
        <tr><td>Typical trigger in practice</td><td>Auto-delete policy not suspended, forgotten custodian, backup rotation</td><td>Deliberate deletion after a hold, instructing others to delete, selective wipe of a device</td></tr>
      </tbody>
    </table>

    <h2>The "reasonable steps" standard is a process test, not a perfection test</h2>
    <p>The advisory committee notes to the 2015 amendment are explicit that Rule 37(e) does not call for perfection. Courts do not expect every byte of relevant data to survive. What they expect is evidence of a process: that the organization recognized when its preservation duty triggered, identified the people and systems likely to hold relevant information, communicated a clear hold to those people, suspended routine destruction that would otherwise apply, and followed up when compliance was uncertain.</p>
    <p>This is where the confusion usually starts. Teams treat "reasonable steps" as a documentation exercise, something you can satisfy by having a hold letter template in a shared drive. Courts read it as a demonstrated process with evidence at each stage. A hold notice that nobody can prove was received carries almost no weight if a spoliation motion gets filed eighteen months later. The 2010 opinion in <em>Pension Committee of the University of Montreal Pension Plan v. Banc of America Securities</em>, written by Judge Shira Scheindlin before the 2015 amendment, set an aggressive tone here, treating the failure to issue a written hold as gross negligence per se. The Second Circuit later pulled back from a strict per se rule, but the underlying expectation survived the correction: a written hold that reaches identified custodians, and proof that it reached them, is now the baseline courts assume competent counsel will meet.</p>

    <h2>The intent-to-deprive standard, and why it is harder to prove than people assume</h2>
    <p>Rule 37(e)(2) does not define "intent to deprive," and that is deliberate. The drafters wanted courts to look at the totality of circumstances rather than apply a checklist. In practice, courts weigh things like: whether deletion happened after the duty to preserve attached, whether the deletion targeted specifically relevant material rather than routine housekeeping, whether the party gave inconsistent or shifting explanations for the loss, and whether the timing lines up suspiciously with a discovery request or deposition. A single missing email chain rarely proves intent. A pattern, someone deleting messages the week before a deposition, or a custodian's device being wiped the day after receiving a hold reminder, moves a court toward finding intent.</p>
    <p>This is also where the gap between a "reasonable steps" failure and an "intent to deprive" failure gets practically important for anyone building a preservation program. A negligent failure to preserve, a departing employee's mailbox rolling off on a standard 30-day retention schedule because nobody flagged the account, is a 37(e)(1) problem. It is bad, it can still cost money and reopened discovery, but it is curable. A custodian who acknowledges a hold notice and then manually empties a folder anyway is a 37(e)(2) problem, and no amount of "we sent the notice" defends against it once the court finds intent. The acknowledgment record actually cuts both ways here: it proves the custodian knew about the duty, which helps establish the negligence baseline for 37(e)(1), but it also strengthens a 37(e)(2) argument if that same custodian is later shown to have destroyed data anyway, because "I did not know" is no longer available as a defense.</p>

    <h2>Why custodian acknowledgment tracking is the actual compliance gap</h2>
    <p>Almost every litigation hold guide on the internet tells you to send a written hold notice and ask custodians to confirm receipt. Almost none of them explain what "confirm receipt" needs to produce as an evidentiary artifact, or why the gap between "notice sent" and "notice acknowledged and understood" is where most defensible preservation programs quietly fail.</p>
    <p>Three separate things need to be true, and tracked separately, for a hold to hold up under scrutiny:</p>
    <ul>
      <li><strong>Delivery.</strong> The notice reached the custodian's inbox or portal. This is the easiest to prove and the least useful on its own, an email bounce log tells you almost nothing about compliance.</li>
      <li><strong>Acknowledgment.</strong> The custodian took an affirmative action confirming receipt, typically clicking through a hold portal, replying to an email, or signing a form. This is the artifact opposing counsel will subpoena first if a spoliation motion is filed, and it is what turns "we sent a notice" into "the custodian received and confirmed the notice on this date."</li>
      <li><strong>Understanding and ongoing compliance.</strong> The custodian did something more than click a button, confirmed they understood which categories of data were covered, and responded to periodic re-certification requests as the case evolved and the scope of the hold changed.</li>
    </ul>
    <p>Manual tracking, a spreadsheet with custodian names and a column for "acknowledged Y/N," fails in three predictable ways. First, it degrades over time: someone leaves the legal team, the spreadsheet stops getting updated, and six months later nobody can say with confidence who is or is not actually on hold. Second, it cannot handle re-certification at scale. Cases that run for years need custodians to reconfirm their obligations periodically, and a spreadsheet does not send reminders, escalate non-responders, or timestamp each re-confirmation. Third, and this is the one that actually loses spoliation motions, a spreadsheet is easy to challenge as unreliable. Opposing counsel will ask when each cell was last edited, who had write access, and whether the record was created contemporaneously or reconstructed after the fact. A time-stamped, access-controlled audit trail generated by dedicated software answers all three questions before they are asked. A spreadsheet usually cannot.</p>

    <h2>The worked example: what actually broke in GN Netcom v. Plantronics</h2>
    <p>Plantronics did most of the things a well-run legal department is supposed to do. It issued a written hold when litigation with GN Netcom became reasonably anticipated. It trained custodians on their preservation obligations. It sent quarterly reminders reinforcing the hold for years, which is well beyond what most organizations manage even once. By the standards most litigation hold checklists set, this was a compliant program.</p>
    <p>What the checklist missed was enforcement at the point of actual custodian behavior. A senior vice president who had acknowledged the hold, who had sat through training, and who received the quarterly reminders like everyone else, directed subordinates to delete emails and other electronic evidence relevant to the antitrust claims at the center of the case. The delivery and acknowledgment layers of the hold worked exactly as designed. What was missing was any mechanism that would have flagged unusual deletion activity from a custodian who had already confirmed, in writing, that they understood the preservation obligation.</p>
    <p>The court found this rose to the intent-to-deprive standard under Rule 37(e)(2), the higher of the two gates. The sanction was not a modest cost-shifting order. It was a $3 million monetary sanction plus an adverse-inference jury instruction, telling jurors they were permitted to assume the missing emails contained information unfavorable to Plantronics. That instruction, delivered in a case about alleged anticompetitive distribution agreements, functionally handed the plaintiff a persuasive narrative advantage for the rest of the trial. The case eventually settled in 2020, eight years after it began, with the spoliation sanction as one of its defining chapters.</p>
    <p>The lesson is not that training and reminders are worthless. It is that acknowledgment tracking answers the question "did the custodian know," and that question alone does not answer "did the custodian comply." A program that stops at acknowledgment has built half a defense. The other half requires visibility into what happens after the click, which is a data governance and access-control problem, not a notification problem, and it is the part almost no vendor content about litigation hold software actually walks through.</p>

    <h2>What a defensible acknowledgment record needs to contain</h2>
    <p>If a spoliation motion gets filed, the record you produce needs to answer specific, predictable questions. Build your tracking around these fields from the start rather than reconstructing them under deadline pressure:</p>
    <table>
      <thead><tr><th>Field</th><th>Why courts ask for it</th></tr></thead>
      <tbody>
        <tr><td>Date the preservation duty attached</td><td>Establishes the starting line; anything lost before this date is generally not spoliation</td></tr>
        <tr><td>Date the hold notice was issued</td><td>Measures the gap between duty and notice; long gaps invite negligence findings</td></tr>
        <tr><td>Full custodian list and how it was compiled</td><td>Shows the scope was reasonable and covered actual "key players," not just an arbitrary subset</td></tr>
        <tr><td>Delivery timestamp per custodian</td><td>Proves the notice reached the intended recipient, not just that it was sent</td></tr>
        <tr><td>Acknowledgment timestamp and method per custodian</td><td>The single most requested artifact in a spoliation motion; converts "we sent it" into "they confirmed it"</td></tr>
        <tr><td>Non-responder escalation log</td><td>Shows the organization followed up rather than treating silence as compliance</td></tr>
        <tr><td>Re-certification dates as scope changed</td><td>Demonstrates the hold stayed current rather than going stale over a multi-year case</td></tr>
        <tr><td>Release date and reason</td><td>Confirms preservation continued for the full duration the duty existed, not just at the start</td></tr>
      </tbody>
    </table>
    <p>Every field on that list needs a timestamp and an unchangeable audit trail. If your system of record is a document that can be edited without leaving a trace, that record itself becomes a liability the moment opposing counsel questions its integrity. This is the same reasoning that governs evidence authentication generally, covered in more depth in our piece on <a href="/resources/blogs/chain-of-custody-documentation">chain of custody documentation</a>, the value is not just in capturing the data, it is in capturing it in a form nobody can plausibly claim was altered after the fact.</p>

    <h2>Common mistakes that create unnecessary 37(e) exposure</h2>
    <p>Legal teams that end up on the wrong side of a spoliation motion tend to make a small set of repeated mistakes rather than one dramatic failure.</p>
    <p>Treating acknowledgment as optional for junior or peripheral custodians is one. Courts do not grade custodians on seniority, a junior analyst's deleted spreadsheet can be just as prejudicial as an executive's deleted email chain if it contains relevant data. Another is failing to suspend automated retention policies, chat auto-delete settings, backup rotation schedules, device wipe policies for departing employees, at the same moment the hold goes out. A hold notice that says "preserve everything" while the IT department's 90-day auto-purge keeps running in the background is not a reasonable step, it is a paper exercise. A third is scoping the custodian list once at the start of a case and never revisiting it as the issues in the litigation evolve, which is exactly the kind of static, unmonitored process that lets someone like the Plantronics executive slip through a program that looked complete on paper. A fourth, less discussed mistake is losing the acknowledgment records themselves. If the litigation runs three years and your hold-tracking vendor contract lapses, or the spreadsheet gets archived somewhere nobody can find, you have destroyed your own evidence of compliance along with everything else.</p>

    <h2>Where this fits with document intelligence more broadly</h2>
    <p>Litigation hold tracking sits next to, and often overlaps with, the broader problem of managing legal documents at volume, contracts, correspondence, discovery productions, and the custodian data sitting behind all of it. Organizations that already have structured pipelines for extracting and organizing legal documents tend to have an easier time scoping custodian lists accurately in the first place, because they already know where relevant data lives instead of guessing at the start of a hold. The connection is not incidental: a preservation program is only as good as the organization's underlying visibility into its own records, and that visibility is a data infrastructure problem before it is a legal process problem.</p>
    <p>This piece focuses on the legal standard: FRCP 37(e)'s two-gate test, and what the acknowledgment record needs to contain to survive a spoliation motion once one is filed. It does not resolve a separate, adjacent question, whether the technical preservation mechanism on a custodian's mailbox or shared drive was actually applied and stayed applied for the life of the hold. A fully acknowledged custodian roster can still sit on top of a live technical gap if nobody reconciles the two records against each other, which is the specific failure mode our companion piece on <a href="/resources/blogs/legal-hold-custodian-tracking">legal hold custodian tracking</a> walks through in detail, along with how e-discovery teams apply the same independently-verifiable-source discipline covered in our <a href="/resources/blogs/e-discovery-document-review">e-discovery document review</a> guide.</p>
    <p>None of this requires exotic technology. It requires treating custodian acknowledgment as a first-class, timestamped, tamper-evident record rather than a checkbox, and building enough visibility into custodian behavior after acknowledgment that a Plantronics-style gap gets caught by a compliance dashboard instead of a forensic examiner two years into litigation. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/invoice-processing.png",
  featuredImage: "/images/invoice-processing.png",
  category: "Legal",
  date: "September 1, 2026",
  datePublished: "2026-09-01T00:00:00.000Z",
  dateModified: "2026-09-01T00:00:00.000Z",
  last_updated: "September 1, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "litigation hold software",
  secondary_keywords: [
    "FRCP 37(e) spoliation",
    "spoliation motion evidence",
    "custodian acknowledgment",
    "intent to deprive standard",
    "duty to preserve electronically stored information",
    "spoliation sanctions",
  ],
  tags: ["legal", "litigation hold", "e-discovery", "compliance"],
  cluster: "legal",
  faq: [
    {
      question: "What is litigation hold software?",
      answer:
        "Litigation hold software is a system for issuing preservation notices to custodians, tracking whether each custodian received and acknowledged the notice, escalating non-responders, managing re-certification as a case evolves, and producing a timestamped audit trail that can be presented as evidence of reasonable steps under Rule 37(e).",
    },
    {
      question: "What does FRCP Rule 37(e) actually require?",
      answer:
        "Rule 37(e) applies when electronically stored information that should have been preserved is lost because a party failed to take reasonable steps to preserve it. Under 37(e)(1), if the loss caused prejudice, courts may order measures no greater than necessary to cure it. Under 37(e)(2), courts may only impose severe sanctions, an adverse inference instruction, dismissal, or default judgment, if they find the party acted with intent to deprive the other side of the information.",
    },
    {
      question: "What is the difference between 37(e)(1) and 37(e)(2)?",
      answer:
        "37(e)(1) is triggered by negligent failure to preserve plus proven prejudice to the other party, and its remedies are capped at what is necessary to cure that prejudice. 37(e)(2) requires a specific finding of intent to deprive, a much higher bar, and it opens the door to harsher remedies including adverse inference instructions and case-ending sanctions like dismissal or default judgment.",
    },
    {
      question: "Why does custodian acknowledgment tracking matter so much?",
      answer:
        "Acknowledgment tracking converts a hold notice from something you merely sent into something you can prove a specific custodian received and understood on a specific date. It is typically the first record opposing counsel requests in a spoliation motion, and manual tracking methods like spreadsheets are easy to challenge as unreliable because they lack timestamps and access controls.",
    },
    {
      question: "Can a properly issued litigation hold still result in sanctions?",
      answer:
        "Yes. In GN Netcom, Inc. v. Plantronics, Inc., the company issued a written hold, trained custodians, and sent years of reminders, yet still received a $3 million sanction and an adverse-inference jury instruction because a senior executive who had acknowledged the hold directed employees to delete relevant emails anyway. Acknowledgment proves the custodian knew about the duty; it does not by itself prove they complied.",
    },
    {
      question: "What should a defensible litigation hold record include?",
      answer:
        "At minimum: the date the preservation duty attached, the date the hold was issued, the full custodian list and how it was compiled, per-custodian delivery and acknowledgment timestamps, an escalation log for non-responders, re-certification dates as the case scope changed, and the release date. Each of these should be timestamped and stored in a tamper-evident system rather than an editable document.",
    },
  ],
}
