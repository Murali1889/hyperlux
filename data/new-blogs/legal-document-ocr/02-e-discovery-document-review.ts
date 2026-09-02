import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogLd02: BlogPost = {
  id: "ld-02",
  title: "TAR 1.0 vs TAR 2.0: What Actually Cuts Review Cost",
  slug: "e-discovery-document-review",
  excerpt:
    "TAR 1.0 trains a model, then reviews. TAR 2.0 reviews while training. That structural gap, not software quality, drives most of the review cost difference.",
  description:
    "How TAR 1.0 differs from continuous active learning, the EDRM stages vendor content skips, and how document quality quietly breaks e-discovery review accuracy.",
  metaTag: "TAR 1.0 vs TAR 2.0: The Real E-Discovery Cost Gap",
  content: `
    <p>A 500,000-document review population, an 80% recall target, and two different technology-assisted review protocols will produce two noticeably different bills, and the gap is not explained by which vendor's software is "smarter." Run the review under a TAR 1.0 protocol and a meaningful share of the earliest review hours go toward training and statistically validating a model before a single responsive document gets produced for the case. Run the same population under TAR 2.0, continuous active learning, and reviewers are surfacing responsive documents from the first review batch, because there was never a separate training phase sitting in front of the actual work. That structural difference, not raw algorithm quality, is most of why continuous active learning workflows tend to cost less per document reviewed. The rest of this piece works through why, with the mechanics most e-discovery vendor pages either skip or wave at without explaining.</p>

    <p>This matters most for teams processing high volumes of contracts, correspondence, and case files, particularly when a chunk of that population arrives as scanned or faxed images rather than clean native text, which is common in <a href="/documents/legal-docs">legal document review</a> pulled from years of paper files, old case management systems, or third-party productions. As you will see later in this piece, that detail is not a footnote. It is where a surprising share of TAR accuracy problems actually originate.</p>

    <h2>What "technology-assisted review" actually means</h2>

    <p>Technology-assisted review (TAR), also called predictive coding or computer-assisted review, is a process where a machine learning classifier is trained on human relevance decisions and then used to rank or categorize the remaining, much larger, document population by likelihood of relevance. It exists because exhaustive manual review, where a human reads every single document in a collection, does not scale to modern document volumes and is demonstrably less accurate than most people assume. A frequently cited 1985 study by David Blair and M.E. Maron found that human reviewers using keyword search believed they had found roughly 75% of relevant documents in a collection when their actual recall was closer to 20%. TAR exists to close that gap between perceived and actual recall, using statistics instead of confidence as the measure of whether a review was thorough enough.</p>

    <p>"TAR 1.0" and "TAR 2.0" are not version numbers assigned by a single vendor. They describe two different families of machine learning protocol, and the difference between them is structural, not cosmetic. Understanding which one you are actually running, and why, changes both the cost and the defensibility of the review.</p>

    <h2>TAR 1.0: train first, then review</h2>

    <p>TAR 1.0, sometimes called simple passive learning (SPL) or simple active learning (SAL) depending on how the training documents get selected, follows a sequence with a hard boundary between training and review. It works roughly like this:</p>

    <ol>
      <li><strong>Estimate richness.</strong> A subject matter expert, usually senior litigation counsel, reviews a statistically valid random sample of the full population to estimate prevalence, the percentage of documents in the collection that are actually relevant. For a 95% confidence level and a 2% margin of error, the standard sample-size formula (n = 1.96² × p(1-p) / e², using the conservative p = 0.5) works out to roughly 2,400 documents, a number that shows up constantly in TAR protocols and is worth knowing how to derive rather than just accept.</li>
      <li><strong>Build a control set.</strong> A second random sample, similar in size, is pulled aside and coded by the SME. This control set is never used for training. It exists purely to measure the classifier's performance objectively as training proceeds, because a classifier's accuracy on its own training data is not a trustworthy measure of how it performs on unseen documents.</li>
      <li><strong>Train iteratively.</strong> The SME codes a seed set, sometimes selected randomly, sometimes judgmentally (documents the SME already suspects are relevant, plus deliberately chosen negative examples), and a classifier, historically a support vector machine or logistic regression model, trains on those codings.</li>
      <li><strong>Test against the control set after each round.</strong> The model's predictions are scored against the control set. If performance is still improving meaningfully round over round, the SME codes another batch and the model retrains. If performance has stabilized, meaning additional training rounds are not measurably changing the model's rankings, training stops.</li>
      <li><strong>Apply the model and review.</strong> Once stabilized, the classifier scores or ranks the entire remaining population. The review team pulls the documents predicted as likely relevant into a single review batch and reviews them, typically once, in whatever order the workflow calls for.</li>
      <li><strong>Validate with an elusion test.</strong> A final random sample is drawn from the documents the model predicted as not relevant and were never reviewed. An SME reviews that sample to estimate how many truly relevant documents were missed. Combined with the richness estimate from step one, this produces a defensible recall number for the whole population.</li>
    </ol>

    <p>The defining feature of TAR 1.0 is the hard wall between step 4 and step 5. Training is a distinct, SME-intensive phase that happens before the bulk review team ever sees a document. Every hour spent stabilizing the model is an hour of expensive, credentialed attorney time that produces zero documents toward the actual production.</p>

    <h2>TAR 2.0 / continuous active learning: review and training are the same activity</h2>

    <p>TAR 2.0, now almost universally referred to as continuous active learning (CAL), eliminates the wall. There is no separate training phase with its own SME-only population, and no fixed point at which training "stops." The classifier updates after every reviewed document, for the entire life of the review, including documents reviewed by the regular contract review team, not just an SME.</p>

    <p>CAL protocols developed by researchers Maura Grossman and Gordon Cormack, including a variant called AutoTAR, can start from as little as a single known relevant document or a short text description of what the case is about, rather than a formally constructed seed set. From that minimal starting point, the workflow runs like this: the model scores the full unreviewed population by predicted relevance, the reviewer works through documents in ranked order starting with the highest score, and after every single coding decision the model immediately retrains and re-ranks everything still unreviewed. Every document a reviewer touches is simultaneously training data and substantive case review. Nothing is reviewed purely to teach the model; the training is a byproduct of the actual work.</p>

    <p>Because relevant documents cluster in feature space (similar language, similar custodians, similar topics), a well-tuned CAL queue surfaces a disproportionate share of relevant documents early. As review continues, the rate of newly-found relevant documents per batch, often visualized as a "yield curve" or "gain curve," declines as the pool of undiscovered relevant material shrinks. Review teams stop not at a fixed model-stabilization point but when that yield rate drops close to the background richness of the collection, meaning the ranked queue is no longer meaningfully outperforming random sampling. An elusion test on the unreviewed remainder, functionally the same statistical check used in TAR 1.0, then confirms the recall actually achieved before the review is certified complete.</p>

    <h2>TAR 1.0 vs TAR 2.0, side by side</h2>

    <table>
      <thead>
        <tr><th>Dimension</th><th>TAR 1.0 (SPL / SAL)</th><th>TAR 2.0 (CAL)</th></tr>
      </thead>
      <tbody>
        <tr><td>Training vs. review</td><td>Strictly separated; training completes before bulk review begins</td><td>Fused; every reviewed document retrains the model immediately</td></tr>
        <tr><td>Who trains the model</td><td>SME / senior counsel only, during the training phase</td><td>Whoever is reviewing, including contract reviewers</td></tr>
        <tr><td>Starting point</td><td>Formal seed set plus a separate control set, often 2,000 to 5,000+ documents before review starts</td><td>Can start from a single relevant document or short query</td></tr>
        <tr><td>When training stops</td><td>Explicit stabilization check against the control set</td><td>Never formally stops; review stops when yield flattens</td></tr>
        <tr><td>Sensitivity to a bad seed set</td><td>High; a poorly chosen or unrepresentative seed set can require re-training rounds</td><td>Low; ranking self-corrects continuously as more documents are coded</td></tr>
        <tr><td>Non-billable "training only" review</td><td>Yes, the seed and control sets are reviewed but not part of the case production analysis</td><td>Effectively none; nearly all reviewed documents count toward the actual review</td></tr>
        <tr><td>Best suited for</td><td>Rolling productions with a stable, well-understood relevance concept defined upfront</td><td>Most single-matter reviews, and reviews where relevance criteria may evolve</td></tr>
      </tbody>
    </table>

    <h2>A worked example: where the cost difference actually comes from</h2>

    <p>Assume, for illustration, a review population of 500,000 documents after deduplication and date-range culling, a richness of 8% (40,000 truly relevant documents), and a negotiated target recall of 80% (finding 32,000 of those 40,000 documents). These are illustrative inputs you can substitute your own numbers into; the structure of the math is what matters.</p>

    <table>
      <thead>
        <tr><th>Step</th><th>TAR 1.0 documents reviewed</th><th>TAR 2.0 / CAL documents reviewed</th></tr>
      </thead>
      <tbody>
        <tr><td>Richness sample</td><td>~2,400 (SME)</td><td>Not required as a separate step; folded into ongoing sampling</td></tr>
        <tr><td>Control set</td><td>~2,400 (SME)</td><td>Optional, often kept smaller and used for QC rather than training</td></tr>
        <tr><td>Seed / training rounds</td><td>2,000 to 4,000+ (SME), reviewed purely to stabilize the model</td><td>0 as a separate category; training happens inside normal review</td></tr>
        <tr><td>Predicted-relevant batch review</td><td>~32,000 to 40,000 documents reviewed once the model is stable</td><td>~32,000 to 40,000 documents reviewed, ranked highest-first from day one</td></tr>
        <tr><td>Elusion test</td><td>~2,400 (SME)</td><td>~2,400 (SME), same statistical requirement</td></tr>
        <tr><td>Total review volume</td><td>Roughly 41,000 to 51,000 documents, a meaningful share of it SME-only</td><td>Roughly 34,000 to 42,000 documents, nearly all of it counted toward the actual case review</td></tr>
      </tbody>
    </table>

    <p>The gap is not enormous in document count, typically in the range of a few thousand documents on a population this size, but the composition of that gap matters more than its size. In TAR 1.0, several thousand of those documents are reviewed exclusively by SME-level attorneys at the highest billing rate on the matter, purely to train and validate a model, and none of that review time produces work product toward the actual production. In TAR 2.0, that same review time is spent by the regular review team working through documents that are, by construction, disproportionately likely to be relevant, and every hour of it counts toward the deliverable. This is consistent with published research from Grossman and Cormack comparing TAR protocols directly: their large-scale comparisons of simple passive learning, simple active learning, and continuous active learning found CAL protocols reaching target recall with less overall review effort, and CAL-based review outperforming a competing SVM-based provider's process across recall, precision, and cost per relevant document found in a large eDiscovery matter comparison. That is the actual mechanism behind "CAL is cheaper," and it holds regardless of which specific vendor's software implements it.</p>

    <h2>Why courts accept this, and why the recall target is not arbitrary</h2>

    <p>TAR's legal standing rests on a 2012 ruling that is still the reference point cited in nearly every ESI protocol negotiation involving predictive coding: <em>Da Silva Moore v. Publicis Groupe</em>, 287 F.R.D. 182 (S.D.N.Y. 2012), where Magistrate Judge Andrew Peck became the first federal judge to formally approve predictive coding as an acceptable method for identifying responsive electronically stored information, provided the process is reasonably designed, tested through quality-control measures, and transparent to opposing counsel. That "reasonably designed and tested" standard is exactly why the elusion test and richness estimate matter procedurally, not just statistically. Without them, there is no defensible basis to claim the review was adequate under either protocol.</p>

    <p>The recall target itself, whether 75%, 80%, or another number negotiated between parties, is not pulled from thin air either. It sits under Federal Rule of Civil Procedure 26(b)(1), which frames discovery as bounded by proportionality: the scope of discovery must be "proportional to the needs of the case, considering the importance of the issues at stake in the action, the amount in controversy, the parties' relative access to relevant information, the parties' resources, the importance of the discovery in resolving the issues, and whether the burden or expense of the proposed discovery outweighs its likely benefit." A recall target is, functionally, where the parties agree that proportionality has been satisfied. That is also why review protocol choice is not purely a cost decision. A cheaper review that cannot credibly demonstrate it met the agreed recall target is not actually cheaper once you account for the risk of a motion to compel further review.</p>

    <h2>The EDRM stages most TAR content skips entirely</h2>

    <p>The Electronic Discovery Reference Model (EDRM), first published in 2005, defines nine stages that structure how ESI moves from raw data to courtroom-ready production: Information Governance, Identification, Preservation, Collection, Processing, Review, Analysis, Production, and Presentation. Vendor content about TAR overwhelmingly concentrates on two of these nine: Review, where the classifier and reviewer interact, and occasionally Analysis, where privilege logs and issue coding happen. Identification, Preservation, and Collection get token mentions as compliance checkboxes. Processing is barely mentioned at all, treated as an invisible step that happens somewhere between Collection and Review.</p>

    <table>
      <thead>
        <tr><th>EDRM stage</th><th>What it covers</th><th>Typical depth in TAR vendor content</th></tr>
      </thead>
      <tbody>
        <tr><td>Information Governance</td><td>Policies determining what data exists and how long it is retained before litigation even begins</td><td>Rarely discussed in TAR-specific content</td></tr>
        <tr><td>Identification</td><td>Locating potentially relevant ESI across custodians and systems</td><td>Mentioned briefly, treated as a solved input to TAR</td></tr>
        <tr><td>Preservation</td><td>Ensuring identified ESI is not altered or destroyed</td><td>Mentioned briefly, rarely connected to TAR quality</td></tr>
        <tr><td>Collection</td><td>Gathering ESI in a forensically sound, defensible manner</td><td>Mentioned briefly, treated as a solved input to TAR</td></tr>
        <tr><td>Processing</td><td>Extracting text, deduplicating, filtering, converting native and scanned files into reviewable, searchable form</td><td>Almost never explained, despite being the direct input to every TAR classifier</td></tr>
        <tr><td>Review</td><td>Human and machine relevance, privilege, and confidentiality determinations</td><td>The near-exclusive focus of TAR marketing content</td></tr>
        <tr><td>Analysis</td><td>Assessing content and context: patterns, key players, issue coding</td><td>Occasionally discussed alongside Review</td></tr>
        <tr><td>Production</td><td>Delivering ESI to the requesting party in an agreed format</td><td>Mentioned briefly as a downstream formality</td></tr>
        <tr><td>Presentation</td><td>Displaying ESI to persuade an audience at depositions, hearings, or trial</td><td>Rarely discussed in TAR content at all</td></tr>
      </tbody>
    </table>

    <p>Skipping Processing is the costliest omission, because Processing is where the raw material a TAR classifier actually sees gets created, and a classifier can only rank the text it is given.</p>

    <h2>Where document quality quietly breaks TAR before review even starts</h2>

    <p>TAR classifiers, whether TAR 1.0's support vector machines or TAR 2.0's continuously updated ranking models, do not read documents the way a person does. They operate on features extracted from document text, whether that is word-frequency vectors, TF-IDF weighting, or embeddings in newer systems. The model never sees the original document image. It sees whatever text the Processing stage extracted from it, and nothing else.</p>

    <p>This is the mechanism most e-discovery content leaves out entirely, and it matters more as review populations increasingly include scanned contracts, faxed exhibits, photographed pages, and old paper files digitized years after the fact rather than clean native email and Office documents. If Processing produces garbled, partial, or empty text for a document, whether from a low-resolution scan, a skewed fax, dense multi-column legal formatting that generic OCR reads out of order, or a signature page that is mostly handwriting, that document's feature vector is effectively noise to the classifier. A model cannot rank a document highly for relevance based on content it never actually extracted. The document does not get flagged as "hard to read." It gets scored as unremarkable, sits low in the CAL ranking queue, and in a TAR 1.0 workflow may fall entirely outside the predicted-relevant batch that gets reviewed.</p>

    <p>That failure mode is invisible in an elusion test built the standard way, because elusion testing samples the documents the model excluded and asks a human to check them, and a human reviewer looking at the same badly-scanned page has the same difficulty reading it that the classifier did extracting it from. The statistical safety net and the underlying extraction failure share the same blind spot. This is also, structurally, exactly the same problem that shows up in <a href="/use-cases/contract-abstraction">contract abstraction</a> and other legal extraction workflows: a classifier or extraction model is only as good as the text layer under it, and multi-column pleadings, exhibit stamps, and handwritten annotations are precisely where generic OCR degrades most. Our <a href="/resources/blogs/contract-ocr">contract OCR</a> coverage goes deeper on why legal-specific layouts break generic extraction in ways financial documents rarely do.</p>

    <h2>What this means practically for a review protocol</h2>

    <p>A defensible, cost-efficient TAR workflow in 2026 generally means treating these five points as sequence, not as independent decisions:</p>

    <ol>
      <li><strong>Audit extraction quality before review starts, not after.</strong> Pull a random sample of the scanned and low-quality portion of the collection specifically, not the whole population, and check whether extracted text is complete and in reading order. If a meaningful share is garbled, fix Processing before training or ranking begins, because no TAR protocol corrects for text the classifier never received.</li>
      <li><strong>Default to CAL unless there is a specific reason not to.</strong> For most single-matter reviews, continuous active learning reaches the recall target with less total review effort and less SME-only review time than a TAR 1.0 protocol, for the structural reasons covered above.</li>
      <li><strong>Keep an elusion test regardless of protocol.</strong> It is the one piece of statistical validation both protocols share, and it is what makes the recall claim defensible under the Da Silva Moore standard.</li>
      <li><strong>Negotiate the recall target and validation method in the ESI protocol before review starts</strong>, tied explicitly to Rule 26(b)(1) proportionality factors, so both sides agree in advance what "done" means.</li>
      <li><strong>Route scanned, faxed, and handwritten-annotated documents through layout-aware extraction</strong> rather than generic OCR before they enter the TAR population, since that is the specific document category where feature-vector quality, and therefore ranking accuracy, degrades most.</li>
    </ol>

    <p>The choice between TAR 1.0 and TAR 2.0 gets treated in a lot of vendor material as a preference, almost a matter of workflow taste. It is not. It is a structural decision about where SME time gets spent and whether training and review are the same activity or two separate ones, and it has a direct, computable effect on review cost. The EDRM stage vendor content skips most, Processing, has an equally direct effect on whether either protocol can find what it is actually supposed to find. Getting the protocol right and getting the text extraction right are two different problems, and a review plan that only solves one of them is not actually solved.</p>

    <p>Sources: TAR protocol comparisons and cost findings draw on Maura Grossman and Gordon Cormack's published research on simple passive learning, simple active learning, and continuous active learning, including their AutoTAR work on autonomous CAL protocols. The 1985 recall study is Blair and Maron, "An Evaluation of Retrieval Effectiveness for a Full-Text Document-Retrieval System." Case law reference is <em>Da Silva Moore v. Publicis Groupe</em>, 287 F.R.D. 182 (S.D.N.Y. 2012). Rule text is Federal Rule of Civil Procedure 26(b)(1). The nine-stage model is the Electronic Discovery Reference Model (EDRM), first published in 2005. For related extraction-quality context, see our <a href="/resources/blogs/contract-ocr">contract OCR</a> guide. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/intelligent-document-processing.png",
  featuredImage: "/images/intelligent-document-processing.png",
  category: "Legal",
  date: "September 2, 2026",
  datePublished: "2026-09-02T00:00:00.000Z",
  dateModified: "2026-09-02T00:00:00.000Z",
  last_updated: "September 2, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "e-discovery document review",
  secondary_keywords: [
    "technology assisted review",
    "TAR 1.0 vs TAR 2.0",
    "continuous active learning e-discovery",
    "predictive coding review",
    "EDRM stages explained",
    "e-discovery review cost",
  ],
  tags: ["legal", "e-discovery", "TAR", "document review", "litigation technology"],
  cluster: "legal",
  faq: [
    {
      question: "What is the difference between TAR 1.0 and TAR 2.0?",
      answer:
        "TAR 1.0 (simple passive or simple active learning) separates model training from document review: a subject matter expert trains and statistically validates a classifier first, then the review team reviews only the documents it predicts are relevant. TAR 2.0, also called continuous active learning (CAL), removes that separation. The model retrains after every single reviewed document, so training and review happen simultaneously for the life of the project instead of as two distinct phases.",
    },
    {
      question: "Does continuous active learning actually reduce document review cost?",
      answer:
        "Generally yes, and the mechanism is structural rather than about algorithm quality. TAR 1.0 requires several thousand documents to be reviewed exclusively by expensive subject matter experts purely to train and validate the model, none of which counts toward the case production. CAL eliminates that separate training population; nearly every document reviewed also counts as substantive case review, and published comparisons by researchers Grossman and Cormack found CAL protocols reaching target recall with less total review effort.",
    },
    {
      question: "What are the nine stages of the EDRM model?",
      answer:
        "The Electronic Discovery Reference Model defines nine stages: Information Governance, Identification, Preservation, Collection, Processing, Review, Analysis, Production, and Presentation. Most TAR-focused content concentrates almost entirely on Review and occasionally Analysis, while Processing, where document text actually gets extracted for the classifier to use, is rarely explained even though it directly determines what a TAR model can see.",
    },
    {
      question: "Is TAR or predictive coding legally accepted in court?",
      answer:
        "Yes. Da Silva Moore v. Publicis Groupe, 287 F.R.D. 182 (S.D.N.Y. 2012), was the first federal ruling to formally approve predictive coding, holding that computer-assisted review satisfies discovery obligations when the process is reasonably designed, tested through quality-control measures such as an elusion test, and transparent to opposing counsel. It remains the reference point cited in most TAR protocol negotiations.",
    },
    {
      question: "What is an elusion test in TAR?",
      answer:
        "An elusion test is a statistically valid random sample drawn from the documents a TAR model predicted were not relevant and that were never reviewed. A reviewer checks that sample to estimate how many actually-relevant documents were missed, which produces a defensible recall estimate for the review as a whole. Both TAR 1.0 and TAR 2.0 rely on the same elusion-testing logic for final validation.",
    },
    {
      question: "Why does document quality affect TAR accuracy?",
      answer:
        "TAR classifiers rank documents based on text features extracted during the Processing stage, not on the original document image. If a scanned, faxed, or handwritten-annotated document produces garbled or incomplete extracted text, the classifier effectively cannot see its true content and will rank it as low-relevance regardless of what it actually says. That failure is often invisible to standard elusion testing, since a human checking the same badly extracted document faces a similar reading difficulty.",
    },
  ],
}
