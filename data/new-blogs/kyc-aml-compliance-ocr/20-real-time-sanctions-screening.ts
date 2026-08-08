import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogKa20: BlogPost = {
  id: "ka-20",
  title: "Real-Time Sanctions Screening: Two Claims, Not One",
  slug: "real-time-sanctions-screening",
  excerpt:
    "Real-time screening content means fast list polling or instant transaction checks, often both words at once. They are two independent claims, not one.",
  description:
    "Real-time sanctions screening: why transaction-time synchronicity and list-freshness are two independent claims, and where propagation latency hides.",
  metaTag: "Real-Time Sanctions Screening: Two Claims (2026)",
  content: `
    <p>Real-time sanctions screening content uses "real time" to describe two genuinely different technical properties as though they were one and the same thing: screening every transaction synchronously, at the moment it happens, and keeping the underlying sanctions list data itself continuously current. A system can do either one without the other, and a vendor's marketing claim of "real-time screening" rarely specifies which claim, or both, it is actually making, a distinction that matters considerably more than the phrase's surface simplicity suggests.</p>

    <p>This extends the matching-mechanics focus of our <a href="/resources/blogs/sanctions-screening-ocr">sanctions screening piece</a> and the accumulation logic covered in our <a href="/resources/blogs/perpetual-kyc-monitoring">perpetual KYC monitoring piece</a> into the separate timing dimension neither piece fully covered, and matters directly for <a href="/solutions/compliance-risk">compliance risk automation</a> operating against sanctions data that changes on no fixed schedule.</p>

    <h2>The two independent axes real-time screening actually spans</h2>

    <p>Transaction-time synchronicity asks when a specific transaction actually gets checked against a sanctions list, instantly at the moment it occurs, versus in a nightly or periodic batch job examining a backlog of already-completed transactions after the fact. List freshness asks a completely separate question, how current the underlying sanctions list data actually is at the moment any given check runs, entirely regardless of whether that check itself happens synchronously or as part of a batch. A system can screen every transaction instantly against a sanctions list that has not been refreshed in eighteen hours, and a system can hold an extremely current, minutes-old sanctions list while still only checking transactions once overnight in a batch. Neither combination is really what most people actually mean when they hear "real-time sanctions screening" used without any further qualification.</p>

    <table>
      <thead>
        <tr><th>Transaction checking</th><th>List freshness</th><th>Practical outcome</th></tr>
      </thead>
      <tbody>
        <tr><td>Synchronous, instant</td><td>Continuously current</td><td>Genuine real-time screening, catches a new designation within minutes</td></tr>
        <tr><td>Synchronous, instant</td><td>Stale, infrequently refreshed</td><td>Fast decisions against outdated data, a newly designated party passes cleanly</td></tr>
        <tr><td>Batch, periodic</td><td>Continuously current</td><td>Current data sitting unused until the next batch run examines it</td></tr>
        <tr><td>Batch, periodic</td><td>Stale, infrequently refreshed</td><td>Both delays compound, the worst-case combination</td></tr>
      </tbody>
</table>

    <h2>Why "we screen every transaction instantly" says nothing about list freshness</h2>

    <p>A vendor demonstrating sub-second screening latency, a transaction submitted and a result returned within milliseconds, is making a genuine, verifiable claim about query performance against whatever list the system is currently holding. It says nothing whatsoever about how recently that list was last updated relative to the sanctioning authority's own most recent designation. A system can be architecturally excellent at synchronous, low-latency lookups while querying against an internal index that itself only refreshes once a day, and a fast query against stale data still produces a stale answer, just delivered quickly.</p>

    <h2>The actual propagation chain, and where latency hides at each step</h2>

    <p>A sanctions designation's journey from the issuing authority to an actual live screening decision passes through several distinct steps, each capable of adding delay independently of the others. The authority publishes the designation, OFAC's SDN List updates on no fixed schedule, sometimes multiple times within a single business day, through its own Recent Actions channel. A screening vendor's ingestion process then has to detect that publication, whether through active polling at some defined interval or a push notification the authority itself does not universally provide. The vendor's internal search index then has to actually incorporate the new or updated entry, a step that is not always instantaneous even once the raw data has been ingested. Only after all of these steps complete does a live transaction query against that index actually reflect the new designation. A vendor's headline "real-time" claim commonly describes only the last of these steps, the query itself, while remaining silent on how long the first three steps take in practice.</p>

    <h2>A worked example: a 19-hour gap with three shipping waves inside it</h2>

    <p>In April 2026, OFAC designated fourteen entities tied to a Russian metals network. Several enterprise sanctions screening tools running a daily batch refresh scheduled for 6 a.m. Eastern did not pick up the new designations until the following day's refresh, a 19-hour gap between the designation's publication and those systems actually reflecting it. That gap spanned three full shipping waves out of major ports during the window the new designations were not yet reflected in those systems' screening data. Institutions running screening closer to real time on both axes, fast list ingestion and synchronous transaction checking together, froze the relevant accounts within the hour of the designation's publication. Institutions relying on overnight batch refreshes processed transactions against those newly designated parties during the entire gap, not because their matching logic failed, but because the list itself was not yet current at the moment those transactions were checked.</p>

    <h2>Why in-memory versus live-query architecture changes where latency actually sits</h2>

    <p>Once a designation has been ingested, a screening system still has to choose how that data actually gets served to a live transaction check, and that architectural choice determines where the remaining latency accumulates. A system holding its sanctions list in memory, rebuilding an in-memory index whenever new data arrives, serves individual queries extremely fast but introduces a rebuild step whose duration depends on list size and can itself become a meaningful bottleneck if rebuilds are infrequent or slow relative to how often the source data changes. A system querying a live, continuously updated database on every transaction avoids the rebuild-latency problem entirely but shifts the bottleneck to query performance under load, since every single transaction now depends on a live lookup rather than an already-prepared in-memory structure. Neither approach is universally correct, and a vendor unable to explain which one it actually uses, and why, has not really answered the underlying latency question at all, only described a general design philosophy.</p>

    <h2>Why the legal clock starts at publication, not at your system's next refresh</h2>

    <p>A sanctions designation becomes legally effective at the moment the issuing authority publishes it, not at the moment any particular institution's screening system happens to next refresh its underlying list data. A transaction processed after a designation's publication time involving the newly designated party constitutes a violation regardless of whether the processing institution's compliance database had actually caught up to that designation yet. This is precisely why the gap between publication and a system's actual data refresh is not merely an operational inconvenience to be optimized for user experience, it is exposure accumulating in real time for every transaction processed during that specific window, independent of how sophisticated the underlying matching algorithm checking those transactions otherwise is.</p>

    <h2>Why polling cadence reasonably differs across sanctions lists</h2>

    <p>Not every sanctions list updates, or can practically be polled, at the same interval. OFAC and EU consolidated list sources are commonly polled on cadences in the range of five minutes given how frequently and unpredictably they can change within a single business day. UN sanctions list sources, updating far less frequently in practice, are commonly polled on a much longer cadence, sometimes as long as twenty-four hours, without meaningfully increasing exposure, since the practical update frequency of that specific source does not demand tighter polling to stay genuinely current. A screening architecture applying one uniform polling interval across every source it ingests is either wastefully over-polling low-change-frequency sources or, more consequentially, under-polling the sources that actually change often enough within a single day for a longer interval to create genuine exposure.</p>

    <h2>Why retroactive re-screening still matters even with fast forward-looking checks</h2>

    <p>Tight list-ingestion latency and synchronous transaction checking together minimize exposure for transactions processed after a designation takes effect, but they do nothing about transactions already processed before that designation existed at all. A customer or counterparty screened clean at onboarding, or on a transaction processed months earlier, can later appear on a sanctions list for reasons entirely unrelated to how fast any screening system was running at the time, since the designation itself simply did not exist yet when the original check ran. A genuinely complete program pairs fast forward-looking screening with periodic re-screening of the existing customer and transaction base against the current list, catching this retroactive case that no amount of forward-facing latency improvement can address on its own, since there was no delay to close, only a designation that had not yet been made.</p>

    <h2>What I would check in your current sanctions screening pipeline</h2>

    <p>Ask your vendor to separately quantify two distinct numbers, not one blended "real-time" claim: the typical latency of a single transaction query against the currently loaded list, and the typical lag between a source authority publishing a designation and that designation actually appearing in the queryable list index. A vendor able to answer only the first question has told you nothing about the second, and the worked example above shows the second number is where actual sanctions exposure accumulates. Then ask whether polling cadence is configured per source based on that source's genuine update frequency, OFAC and EU sources polled tightly, UN sources reasonably less so, rather than one uniform interval applied everywhere regardless of how often each specific source actually changes. Finally, confirm your own institution's internal escalation process, freezing an account, holding a transaction, actually triggers the moment a new designation reaches your system, rather than only during a scheduled internal review cycle that could itself quietly reintroduce the exact same batch-timing gap the underlying list-refresh work was originally meant to solve in the first place.</p>

    <h3>Frequently asked questions</h3>

    <p><strong>What are the two separate claims bundled inside "real-time sanctions screening"?</strong><br />
    Transaction-time synchronicity, whether each transaction is checked instantly versus in a batch, and list freshness, how current the underlying sanctions list data is. A system can have one without the other.</p>

    <p><strong>Can a system screen transactions instantly but still miss a new sanctions designation?</strong><br />
    Yes. Sub-second query performance describes how fast a lookup runs against the currently loaded list, not how recently that list was updated relative to the issuing authority's most recent designation.</p>

    <p><strong>What actually happened in the April 2026 OFAC Russian metals network designation?</strong><br />
    OFAC designated fourteen entities, but several screening tools running daily batch refreshes did not reflect the update for 19 hours, a gap spanning three shipping waves, while institutions with faster list ingestion froze relevant accounts within the hour.</p>

    <p><strong>When does a sanctions designation become legally effective?</strong><br />
    At the moment the issuing authority publishes it, not when a screening system's list data actually catches up. Transactions processed after publication involving the newly designated party constitute violations regardless of a system's refresh timing.</p>

    <p><strong>Should every sanctions list source be polled at the same interval?</strong><br />
    No. Sources like OFAC and EU consolidated lists that change frequently and unpredictably warrant tighter polling, often in the range of five minutes, while less frequently updated sources like UN lists can reasonably use a longer interval without materially increasing exposure.</p>

    <p><strong>What should a buyer ask a vendor claiming "real-time" sanctions screening?</strong><br />
    Two separate numbers: typical transaction query latency against the currently loaded list, and typical lag between a source publishing a designation and that designation appearing in the queryable index, since a vendor answering only the first has not addressed where exposure actually accumulates.</p>

    <p>"Real-time" is a genuinely accurate description of what a fast transaction query looks like, and it is also, separately, a genuinely accurate description of tight list-polling cadence. The problem is not that either claim is false when made on its own, it is that vendors and content routinely blend both into one phrase, leaving a buyer unable to tell which property, or whether both, is actually being promised, and the April 2026 worked example above shows exactly how much exposure sits inside that ambiguity.</p>

    <p>None of this argues against automated sanctions screening generally. A manual process cannot poll OFAC every five minutes any more reliably than a poorly architected automated one can, and both fail the same way under a genuinely fast-moving designation. It is a reason to demand the two numbers separately from any vendor or internal system claiming real-time capability, transaction latency and list-ingestion lag, rather than accepting one blended marketing term as evidence that both genuinely distinct problems have actually, independently, been solved. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/ocr-api.png",
  featuredImage: "/images/ocr-api.png",
  category: "Compliance",
  date: "August 8, 2026",
  datePublished: "2026-08-08T00:00:00.000Z",
  dateModified: "2026-08-08T00:00:00.000Z",
  last_updated: "August 8, 2026",
  readTime: "12 min read",
  author: nupuraUghade,
  primary_keyword: "real-time sanctions screening",
  secondary_keywords: [
    "sanctions list update latency",
    "ofac sdn list polling frequency",
    "sanctions designation propagation delay",
    "list freshness vs transaction latency",
    "sanctions screening batch vs real time",
    "ofac violation liability timing",
  ],
  tags: ["compliance", "AML", "sanctions screening", "real-time", "KYC"],
  cluster: "compliance",
  faq: [
    {
      question: "What are the two separate claims bundled inside \"real-time sanctions screening\"?",
      answer:
        "Transaction-time synchronicity, whether each transaction is checked instantly versus in a batch, and list freshness, how current the underlying sanctions list data is. A system can have one without the other.",
    },
    {
      question: "Can a system screen transactions instantly but still miss a new sanctions designation?",
      answer:
        "Yes. Sub-second query performance describes how fast a lookup runs against the currently loaded list, not how recently that list was updated relative to the issuing authority's most recent designation.",
    },
    {
      question: "What happened in the April 2026 OFAC Russian metals network designation?",
      answer:
        "OFAC designated fourteen entities, but several screening tools running daily batch refreshes did not reflect the update for 19 hours, a gap spanning three shipping waves, while faster institutions froze accounts within the hour.",
    },
    {
      question: "When does a sanctions designation become legally effective?",
      answer:
        "At the moment the issuing authority publishes it, not when a screening system's list data catches up. Transactions processed after publication involving the newly designated party constitute violations regardless of refresh timing.",
    },
    {
      question: "Should every sanctions list source be polled at the same interval?",
      answer:
        "No. Frequently changing sources like OFAC and EU lists warrant tighter polling, often around five minutes, while less frequently updated sources like UN lists can reasonably use a longer interval.",
    },
    {
      question: "What should a buyer ask a vendor claiming real-time sanctions screening?",
      answer:
        "Two separate numbers: typical transaction query latency, and typical lag between a source publishing a designation and that designation appearing in the queryable index.",
    },
  ],
}
