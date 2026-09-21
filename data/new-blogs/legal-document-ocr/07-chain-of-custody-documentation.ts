import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogLd07: BlogPost = {
  id: "ld-07",
  title: "Chain of Custody Documentation: What FRE 901 Requires",
  slug: "chain-of-custody-documentation",
  excerpt:
    "A 2011 Maryland ruling threw out social media evidence for one missing link. The actual FRE 901 rule and where digital custody logging still falls short.",
  description:
    "What FRE 901 requires for chain of custody documentation, why physical and digital evidence logs differ, and a real case where the gap got evidence excluded.",
  metaTag: "Chain of Custody Documentation: The FRE 901 Standard",
  content: `
    <p>In 2011, Maryland's highest court threw out a set of social media pages that prosecutors had built part of their case around. Not because the pages were fake. Not because anyone proved tampering. The pages got excluded because nobody had done the one unglamorous thing that would have saved them: establishing a documented link between the account and the person who actually posted from it. The court didn't need to find fraud. It only needed to find a gap.</p>

    <p>That case, <em>Griffin v. State</em>, 419 Md. 343, 19 A.3d 415 (Md. 2011), is a useful starting point because it is not really a story about hacking or forgery. It's a story about documentation, or the absence of it, and it maps almost exactly onto the problem lenders and law firms run into when digital documents move through an OCR or extraction pipeline on their way toward becoming evidence in a dispute. This post covers what chain of custody documentation actually has to establish under the <a href="/documents/legal-docs">Federal Rules of Evidence</a>, why the paper-based custody log model doesn't translate cleanly to digital files, and the specific mechanics of the case above so you can see exactly where the gap was.</p>

    <h2>What FRE 901 actually requires, and what it doesn't</h2>

    <p>Federal Rule of Evidence 901(a) sets a deliberately low bar: "the proponent must produce evidence sufficient to support a finding that the item is what the proponent claims it is." That's it. It's not proof beyond a reasonable doubt, it's not even a preponderance standard in the way some people assume. It's a threshold showing, enough that a reasonable juror could conclude the item is genuine. The judge isn't deciding whether the evidence is authentic. The judge is deciding whether the question of authenticity is even allowed to go to the jury.</p>

    <p>Rule 901(b) then lists ten non-exhaustive example methods for clearing that bar, and the rule itself says the list is illustrative, not a closed set. Four of them matter directly for document evidence:</p>

    <table>
      <thead>
        <tr><th>Subsection</th><th>Method</th><th>Typical use</th></tr>
      </thead>
      <tbody>
        <tr><td>901(b)(1)</td><td>Testimony of a witness with knowledge</td><td>A person who handled the item testifies it is what it's claimed to be</td></tr>
        <tr><td>901(b)(4)</td><td>Distinctive characteristics</td><td>Content, appearance, or internal patterns tie the item to its claimed source</td></tr>
        <tr><td>901(b)(9)</td><td>Evidence about a process or system</td><td>Describing a system and showing it produces an accurate result</td></tr>
        <tr><td>901(b)(10)</td><td>Methods provided by statute or rule</td><td>Any authentication method a federal statute or Supreme Court rule separately allows</td></tr>
      </tbody>
    </table>

    <p>Here's the part almost nobody spells out explicitly: physical evidence and digital evidence tend to travel through different subsections of the same rule. Physical evidence has historically leaned on 901(b)(1), a person testifying to what happened to the item while it was in their hands. Digital evidence increasingly leans on 901(b)(9), a description of the system itself and proof that the system reliably produces accurate output. That's not a stylistic difference. It changes what you actually have to document, and it's the reason a custody process built for physical evidence quietly fails when you point it at a digital file.</p>

    <h2>The physical model the rules were originally written around</h2>

    <p>The Advisory Committee's Note to Rule 901 gives its own example of what 901(b)(1) testimony looks like in practice: "testimony establishing narcotics as taken from an accused and accounting for custody through the period until trial, including laboratory analysis." That sentence is the entire physical chain of custody model in miniature. An item is seized. It changes hands a countable number of times, evidence tech to lab, lab to storage, storage to courtroom. At each handoff, someone signs a form: received from, released to, date, time, purpose, condition of the item. The chain is a chain because it's made of discrete, enumerable links, and every link has a name attached to it.</p>

    <p>This model works because physical custody transfer is inherently episodic. A bag of evidence sits in a locker for six weeks, untouched, and that's fine, the log has one entry for "placed in storage" and another for "removed from storage," with nothing in between because nothing happened in between. The number of links in the chain is small enough that a human being can testify to each one from memory, or from a form they filled out and signed at the time.</p>

    <h2>Where digital evidence breaks that model</h2>

    <p>A digital document doesn't sit untouched in a locker. Between the moment a loan file is scanned and the moment it might get pulled into a fraud dispute two years later, it could pass through an upload event, an OCR extraction pass, a reprocessing after a template update, a QA reviewer opening it to check a field, an export into a case management system, and an unknown number of automated backups and index rebuilds. None of those are "custody transfers" in the physical sense, no person signed anything, no bag changed hands, but every single one of them is an event where the file's content could theoretically have been altered. A custody process that only logs the equivalent of "received from / released to" misses nearly everything that actually happened to the file.</p>

    <table>
      <thead>
        <tr><th>Field</th><th>Physical evidence log</th><th>Digital evidence log</th></tr>
      </thead>
      <tbody>
        <tr><td>Unit of custody</td><td>The physical item itself</td><td>A specific byte-for-byte file state</td></tr>
        <tr><td>Transfer event</td><td>Person-to-person handoff, signed</td><td>Any access, copy, or processing step, system-logged</td></tr>
        <tr><td>Integrity check</td><td>Visual inspection, tamper-evident seal</td><td>Cryptographic hash computed and compared</td></tr>
        <tr><td>Number of events</td><td>Small, countable, weeks apart</td><td>Potentially dozens, automated, seconds apart</td></tr>
        <tr><td>Who can attest</td><td>Named individuals who signed the form</td><td>The system itself, under FRE 901(b)(9)</td></tr>
      </tbody>
    </table>

    <p>This is the real, specific gap. It's not that digital evidence is inherently less trustworthy than physical evidence. It's that a custody process copied from a paper-form paradigm, one row per handoff, one signature per row, structurally cannot capture what a digital file actually goes through, because digital files don't move in discrete, human-witnessed handoffs. They move continuously, through systems, and the only entity positioned to log every one of those movements is the system itself. Which is exactly why 901(b)(9), evidence about a process or system, exists as a separate authentication path from 901(b)(1), witness testimony. The rule already anticipated that some things get authenticated by describing how the machine works, not by a person recounting who handed what to whom.</p>

    <h2>The worked example: what actually went wrong in Griffin</h2>

    <p>Going back to <em>Griffin</em>, the specifics matter. The state wanted to introduce printouts from a MySpace profile in the name of "Sistasouljah," a profile the state claimed belonged to the defendant's girlfriend, to show she had allegedly threatened a witness. The profile listed a birthdate and contained a photo of a couple embracing. When the girlfriend testified, the state never asked her about the pages at all. Instead, the state tried to authenticate the printouts through the testimony of the lead investigator, essentially a person describing what the page said, without anyone establishing that the account was actually hers and that she was the one who posted the specific content in question.</p>

    <p>The Maryland Court of Appeals held that wasn't enough under Maryland's Rule 5-901, which mirrors FRE 901, and reversed the conviction, remanding for a new trial. The court's opinion is useful because it doesn't stop at "this failed," it spells out what would have worked: asking the purported creator of the profile to authenticate it directly, searching the creator's own computer for evidence she posted the content, or obtaining records directly from the platform linking the account's creation and the specific post to her. All three of those are just different ways of closing the same gap, tying a specific digital artifact to a specific person or process with something more than an investigator's say-so about what a printed page displayed.</p>

    <p>Translate that into a document-processing context and the lesson is direct. It is not enough for a custody log to say "document received, document processed, document exported." A log has to tie the specific file state at each step to the specific system or person responsible for that step, the same way the state needed to tie the specific MySpace post to a specific person's specific action, not just to an account name that anyone glancing at a printout could have typed.</p>

    <h2>What NIST SP 800-86 and ISO/IEC 27037 actually specify</h2>

    <p>Two standards get cited constantly in this space and rarely explained. NIST Special Publication 800-86, the federal forensic guide most often referenced in U.S. digital evidence handling, structures the process into four phases: collection, examination, analysis, and reporting, with hash verification recommended at the point of collection and again at any point the evidence changes hands or gets copied. ISO/IEC 27037:2012, the international standard covering the same territory, breaks it down slightly differently into four processes, identification, collection, acquisition, and preservation, built around three stated principles: auditability, repeatability, and reproducibility. Auditability means every step taken can be independently reviewed after the fact. Repeatability means the same process applied to the same evidence by a different examiner produces the same result. Reproducibility means the same process applied under the same conditions, even with different tools, still produces a consistent result.</p>

    <p>Neither standard is legally binding on a court by itself. What they function as, in practice, is the evidentiary backbone of a 901(b)(9) argument. If you can show your process follows a recognized, externally audited standard and reliably produces accurate results, you've built the "evidence about a process or system" that subsection asks for. A custody log that just says "file was processed on our platform" doesn't do that. A custody log that shows collection, examination, analysis, and reporting each occurred as distinct logged steps, each with an integrity check, starts to look like exactly what 901(b)(9) contemplates.</p>

    <h2>What a hash actually proves, and what it doesn't</h2>

    <p>Cryptographic hashing gets mentioned in almost every article on this topic as the thing that "proves a file wasn't altered," which is close but not quite right, and the imprecision matters. A hash function like SHA-256 takes an input of any size and produces a fixed 256-bit output, always displayed as 64 hexadecimal characters, deterministically, meaning the same input always produces the exact same output. Change a single bit anywhere in the source file and the output hash changes completely and unpredictably, a property researchers call the avalanche effect. What a hash actually proves is narrower than "the file wasn't altered." It proves that the file you're holding right now has, or doesn't have, the identical bit-for-bit content as the file that was hashed at some earlier point. It says nothing about who altered it, when, or why, if the hashes don't match. It's a detection mechanism, not an attribution mechanism. Attribution still requires the log entries around the hash, who had access, at what timestamp, doing what.</p>

    <p>This is why a hash by itself is not a chain of custody. It's one field in a chain of custody record. The custody record still needs the actor, the timestamp, the action taken, and the system or person that can attest to it, exactly the elements 901(b)(1) or 901(b)(9) actually asks for. A file with a perfectly matching hash and zero log entries about who accessed it between two points in time still has a gap, it just happens to be a gap where you can prove the content didn't change even though you can't prove who was looking at it or what they did with it during that window.</p>

    <h2>The custody fields a document pipeline actually needs to log</h2>

    <p>Bringing this together into something usable, a custody log for a document that might eventually need to clear FRE 901 has to capture, at minimum, per event: the specific action (upload, extraction, re-extraction, human review, export, deletion), the timestamp to the second, the actor (a named user, an API key, or a specific automated process, not "the system" as a generic label), the resulting file hash after the action, and the hash immediately before it, so any change is both detectable and attributable to a specific step rather than a blur across an unknown interval. Weeks-long gaps between events are fine, that mirrors the physical evidence-locker model just as well in digital form, provided the hash before and after the gap matches and the access log for that window shows no unexplained reads.</p>

    <p>Where this tends to fail in practice is reprocessing. A lender updates an OCR template, and every document in a portfolio gets automatically re-extracted against the new template. That's a legitimate operational event, but if it's not logged with the same rigor as the original extraction, actor, timestamp, before-and-after hash, you've created exactly the kind of gap that turns a routine software update into an unexplained custody break two years later when that same document shows up in a dispute. The document didn't need to have been tampered with for this to matter. It only needs to look, on paper, like nobody can account for what happened to it during that window, which is precisely the posture the state was in in <em>Griffin</em>.</p>

    <h2>Weight versus exclusion: how judges actually decide</h2>

    <p>Not every gap is fatal, and conflating "imperfect" with "excluded" leads to either complacency or unnecessary panic, both wrong. Courts generally draw a distinction: minor, explainable gaps or possible mishandling typically go to the weight a jury gives the evidence, not to whether the jury sees it at all, and get tested through cross-examination rather than a pretrial exclusion ruling. A genuinely missing link, no witness, no system record, no hash, covering a period where the evidence could plausibly have been altered, is what gets evidence excluded before the jury ever hears about it. The practical distinction is whether the gap is explainable and bounded or whether it's a total blackout with no account of what happened during it. A log with an odd timestamp format is a weight problem. A log with a two-week hole and no hash on either side of it is an exclusion problem.</p>

    <p>That distinction is exactly why the fields above matter more than the existence of a log itself. A pipeline that logs every action but stores timestamps inconsistently gives opposing counsel something to argue about, which is normal and survivable. A pipeline that has no record at all of what happened to a file between extraction and export gives a judge a genuine reason to keep the evidence out entirely, independent of whether anything actually went wrong. The related mechanics of how firms handle the litigation-hold side of this problem, tracking when a document became subject to a preservation obligation in the first place under <a href="/resources/blogs/litigation-hold-software">FRCP 37(e)</a>, sit alongside this same custody discipline and are covered in our broader guide on <a href="/resources/blogs/legal-document-automation-the-complete-guide-for-modern-law-firms">legal document automation</a>. The extraction accuracy question that determines whether custody logging even has clean data to work with is covered separately in our piece on <a href="/resources/blogs/contract-ocr">contract OCR</a>.</p>

    <h2>What to check in your own document pipeline</h2>

    <p>Start by asking whether your platform logs actions or only stores end states. A system that shows you the current version of a document but can't show you the sequence of actions that produced it has an end-state record, not a custody record, and end-state records don't satisfy 901(b)(9) because they don't describe the process, only the outcome. Then check whether every automated event, not just human-initiated ones, gets the same logging rigor. Reprocessing jobs, batch re-extractions, and scheduled backups are exactly the events that get skipped because nobody manually triggered them, and they're exactly the events most likely to create an unexplained gap two years later. Finally, confirm hashes get computed and stored at every material step, not only at initial ingestion, since a hash that only exists at the beginning of a document's life proves nothing about the middle or the end of it.</p>

    <p>The rule itself sets a low bar, evidence sufficient to support a finding, not proof beyond doubt. Most document custody problems aren't failures to meet a high standard. They're failures to produce any record at all covering a specific window, the digital equivalent of the investigator in <em>Griffin</em> describing a page instead of anyone establishing who actually put it there. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guide: <a href="/resources/blogs/ocr-for-legal-documents">OCR for legal documents</a>.</p>
  `,
  image: "/images/ocr-bank-statement-technology.png",
  featuredImage: "/images/ocr-bank-statement-technology.png",
  category: "Legal",
  date: "September 5, 2026",
  datePublished: "2026-09-05T00:00:00.000Z",
  dateModified: "2026-09-21T00:00:00.000Z",
  last_updated: "September 21, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "chain of custody documentation",
  secondary_keywords: [
    "fre 901 authentication",
    "digital evidence chain of custody",
    "evidence authentication standard",
    "spoliation exclusion of evidence",
    "nist sp 800-86 digital forensics",
    "iso 27037 digital evidence",
  ],
  tags: ["legal", "chain of custody", "evidence authentication", "digital forensics", "legal document ocr"],
  cluster: "legal",
  faq: [
    {
      question: "What does FRE 901 actually require to authenticate evidence?",
      answer:
        "FRE 901(a) sets a low threshold: the proponent must produce evidence sufficient to support a finding that the item is what it's claimed to be. It's not proof beyond doubt, it's enough that a reasonable juror could conclude the item is genuine, which then lets the question go to the jury at all.",
    },
    {
      question: "What is the difference between FRE 901(b)(1) and 901(b)(9)?",
      answer:
        "901(b)(1) authenticates through testimony of a witness with knowledge, the traditional model for physical evidence custody. 901(b)(9) authenticates by describing a process or system and showing it produces an accurate result, the path most digital evidence and automated document systems rely on instead.",
    },
    {
      question: "What actually happened in Griffin v. State?",
      answer:
        "Maryland's Court of Appeals excluded MySpace printouts in a 2011 case because the state authenticated them through an investigator's testimony about the page's contents rather than establishing a documented link between the account and the person who actually posted the content. The conviction was reversed and remanded.",
    },
    {
      question: "Does a cryptographic hash prove a document wasn't tampered with?",
      answer:
        "A hash like SHA-256 proves whether a file's content is bit-for-bit identical to an earlier hashed state. It doesn't identify who accessed the file or what happened during any gap between hash checks. It's a detection mechanism for the file itself, not an attribution record for the people or systems that touched it.",
    },
    {
      question: "Why doesn't a physical chain of custody log work well for digital evidence?",
      answer:
        "Physical custody logs are built around discrete, person-signed handoffs spaced weeks apart. Digital files pass through continuous, often automated events, uploads, extractions, reprocessing, exports, that a handoff-based log format doesn't capture, leaving unlogged windows that look identical to genuine custody gaps.",
    },
    {
      question: "When does a chain of custody gap get evidence excluded versus just weakened?",
      answer:
        "Minor, explainable gaps typically affect how much weight a jury gives the evidence and get tested through cross-examination. A genuinely missing link, no witness, system record, or hash covering a window where the evidence could have been altered, is what leads a judge to exclude the evidence before trial.",
    },
  ],
}
