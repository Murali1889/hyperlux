import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogMd03: BlogPost = {
  id: "md-03",
  title: "Medical Coding Automation: ICD-10-CM vs CPT Codes",
  slug: "medical-coding-automation",
  excerpt:
    "ICD-10-CM and CPT are built on completely different logic. Treating automated coding as extraction instead of classification is why accuracy stalls.",
  description:
    "The real structural difference between ICD-10-CM diagnosis codes and CPT procedure codes, and why automated medical coding is a classification task.",
  metaTag: "Medical Coding Automation: ICD-10-CM vs CPT Explained",
  content: `
    <p>ICD-10-CM and CPT get talked about as if they are two flavors of the same thing: medical codes sitting somewhere in a clinical document, waiting to be found and copied onto a claim. They are not the same kind of code, and the difference is not cosmetic. One is a diagnosis classification that can run up to seven characters and specify which side of the body, which stage of healing, and which visit number this is. The other is a five-digit procedure code maintained by a private medical association, with a structure that has nothing to do with anatomy and everything to do with what a clinician actually did with their hands. Treat both as text waiting to be located and copied, and you get an automation pipeline that plateaus well below the accuracy a billing department actually needs, then gets blamed on "the AI isn't good enough yet" when the real problem is the framing.</p>

    <p>This post covers the actual structural anatomy of both code sets, why assigning either one is fundamentally a classification exercise rather than an extraction exercise, and a real worked example, built from published CPT descriptors and Medicare's own coverage rules, of a coding decision that changes what a payer pays for the exact same clinical encounter. It sits alongside our broader guide to <a href="/documents/medical-docs">medical document processing</a> and the rest of this coding-automation series.</p>

    <h2>One HIPAA regulation, two very different code sets</h2>

    <p>The reason ICD-10-CM and CPT keep getting bundled into the same conversation is regulatory, not technical. 45 CFR 162.1002, the HIPAA medical data code set rule, designates ICD-10-CM as the standard for coding diagnoses, and a combination of CPT and HCPCS Level II as the standard for coding physician services and procedures, on every electronic health care transaction covered by the rule. That single regulation is why a claim form, an EHR export, and an explanation of benefits always show both code types sitting next to each other. It is a legal pairing, not a technical one. Nothing in 162.1002 says the two code sets share a design philosophy, because they don't. ICD-10-PCS, a third system named in the same section, handles hospital inpatient procedures and is structurally closer to ICD-10-CM than CPT is, which is its own frequent source of confusion, but it is out of scope for outpatient and physician billing, where CPT does that job instead.</p>

    <h2>How an ICD-10-CM code is actually built, character by character</h2>

    <p>ICD-10-CM codes run from three to seven characters. The first three form the category and are always required, the first character is always a letter and the rest of the category can be letters or numbers. Everything past the third character, which is where a decimal point is inserted purely for readability and is not itself a character in the code, adds progressively finer clinical detail: site, laterality, severity, and in specific chapters, a seventh character that captures episode of care.</p>

    <p>Take S82.51XA, a real, valid ICD-10-CM code for a displaced fracture of the medial malleolus of the right tibia, initial encounter. Character by character: S82 is the category, fracture of the lower leg. The fourth character, 5, narrows that to the medial malleolus specifically. The fifth character, 1, is laterality, and in most paired-site musculoskeletal codes that convention holds across the whole chapter, 1 means right, 2 means left, 3 means bilateral where the category allows it, and 0 or 9 mean unspecified. The sixth character here is X, a placeholder with no clinical meaning of its own, required only because the code needs a seventh character and the sixth position isn't otherwise used for this particular fracture site. The seventh character, A, is the episode-of-care extension, meaning this is an initial encounter while the patient is still receiving active treatment for the fracture. For fracture codes specifically, that same seventh-character slot can instead carry D for a subsequent encounter during routine healing, G or K or P for subsequent encounters complicated by delayed healing, nonunion, or malunion, or S for a sequela, meaning the current encounter is treating a lasting effect of a fracture that has already healed. Six of those are legitimate values for the identical first six characters, and choosing the wrong one doesn't just misdescribe the visit, it can trigger a payer edit expecting active-treatment documentation when the note actually describes a healed, resolved injury.</p>

    <p>Laterality doesn't require a seventh character to matter. M25.551, pain in the right hip, is a complete, billable six-character code on its own, no placeholder or extension needed, because that category doesn't define a seventh-character axis. The point isn't that every code needs seven characters, it's that the number of meaningful characters, and what each position encodes, changes category by category across roughly 98,186 total ICD-10-CM codes as of the FY 2026 update, of which about 74,719 are billable, specific codes rather than non-billable header categories that exist purely to organize the hierarchy above them.</p>

    <table>
      <thead>
        <tr><th>Position</th><th>What it encodes in S82.51XA</th><th>Value</th></tr>
      </thead>
      <tbody>
        <tr><td>1 to 3</td><td>Category: fracture of lower leg</td><td>S82</td></tr>
        <tr><td>4</td><td>Site: medial malleolus</td><td>5</td></tr>
        <tr><td>5</td><td>Laterality: right side</td><td>1</td></tr>
        <tr><td>6</td><td>Placeholder, no meaning of its own</td><td>X</td></tr>
        <tr><td>7</td><td>Episode of care: initial encounter</td><td>A</td></tr>
      </tbody>
    </table>

    <h2>How a CPT code is built, and why it's a flatter, entirely different system</h2>

    <p>CPT, Current Procedural Terminology, is copyrighted and maintained by the American Medical Association, not by a federal health agency, and it describes services and procedures rather than diagnoses. Every CPT code, across all three of its categories, is exactly five characters. Category I codes, numbered roughly 00100 through 99499, cover established, widely performed procedures and are the codes most physician billing actually runs on. Category II codes are four digits followed by the letter F and track performance and quality measures rather than billable services on their own. Category III codes are four digits followed by the letter T, temporary codes used to collect utilization data on emerging technology and procedures that haven't yet accumulated enough evidence to qualify for a permanent Category I code; each stays active for up to five years before the AMA either promotes it to Category I status or retires it. The AMA publishes updates annually for Category I and semiannually for Category III, and the full set runs to more than 11,000 codes across all three categories.</p>

    <p>Nothing in that structure encodes anatomy, laterality, or severity the way ICD-10-CM's later character positions do. A CPT code describes what was done: which procedure, on which general body area or approach, sometimes with a size or time threshold built into the descriptor itself. Laterality and severity, when they need to travel with a CPT code, get attached through modifiers, a separate two-character append like -RT, -LT, or -50 for bilateral, layered on top of the base code rather than built into its structure the way ICD-10-CM builds laterality into the code itself. This is a genuinely different design decision, not an oversight. ICD-10-CM was built to classify the near-infinite variety of human disease and injury into a fixed hierarchy, so its length and character-by-character specificity scale with that variety. CPT was built to catalog a comparatively bounded set of things a clinician does, so it stays flat at five characters and pushes situational detail out to modifiers instead of code length.</p>

    <table>
      <thead>
        <tr><th>Dimension</th><th>ICD-10-CM</th><th>CPT</th></tr>
      </thead>
      <tbody>
        <tr><td>What it codes</td><td>Diagnoses, injuries, and reasons for the encounter</td><td>Procedures and services performed</td></tr>
        <tr><td>Maintained by</td><td>NCHS and CMS, a federal process</td><td>American Medical Association, a private, copyrighted set</td></tr>
        <tr><td>Length</td><td>3 to 7 characters, variable by category</td><td>Exactly 5 characters, fixed across all categories</td></tr>
        <tr><td>Laterality and severity</td><td>Built directly into later character positions</td><td>Attached separately through two-character modifiers</td></tr>
        <tr><td>Approximate set size</td><td>98,186 total codes, about 74,719 billable (FY 2026)</td><td>More than 11,000 codes across Categories I, II, and III</td></tr>
        <tr><td>Update cadence</td><td>Annual, effective October 1</td><td>Annual for Category I, semiannual for Category III</td></tr>
        <tr><td>Governing HIPAA citation</td><td>45 CFR 162.1002, diagnosis code set</td><td>45 CFR 162.1002, combined with HCPCS for procedures</td></tr>
      </tbody>
    </table>

    <h2>Why automated coding is a classification problem, not an extraction problem</h2>

    <p>Extraction, in the sense that applies to invoices, IDs, or lab results, means locating a value that already exists in the document, in roughly the form it needs to end up in, and pulling it out. An account number sits on an invoice. A date of birth sits on a passport. Extraction is hard when the document is messy, but the target value is genuinely present on the page.</p>

    <p>Medical codes are not present on the page. A clinical note describing a wound debridement does not contain the string "11042" anywhere in it, and a note describing a hip fracture follow-up visit does not contain "S82.51XG." What the note contains is a clinician's free-text description of findings, reasoning, and actions, written for another clinician to read, not written against a coding manual. Turning that narrative into a specific code requires selecting the single best match from a fixed, large classification hierarchy, roughly 74,719 candidate diagnosis codes or several thousand relevant procedure codes depending on specialty, based on interpreting clinical language against a specific set of official coding rules that change what "correct" means depending on payer, encounter type, and documentation completeness. That is a classification task in the same sense a support ticket routed to the correct department is a classification task, not an extraction task in the sense a mailing address is an extraction task.</p>

    <p>This distinction has real consequences for how a pipeline should be built. An extraction system succeeds by reading accurately. A classification system succeeds by choosing correctly among close alternatives, which means it needs the official coding guidelines encoded as decision logic, not just a language model that has seen a lot of clinical text. ICD-10-CM's own official guidelines instruct coders to assign the most specific code the documentation actually supports and generally discourage defaulting to unspecified codes when the record contains enough detail to code more precisely, a rule with no equivalent in a pure text-extraction task, since there is no such thing as an "unspecified" version of an account number. CPT coding layers on its own decision rules: National Correct Coding Initiative Procedure-to-Procedure edits, published and maintained by CMS, define pairs of codes that generally cannot both be billed for the same patient on the same date because one procedure is considered incidental to or included in the other, and a system has to know those pairings exist and apply them, not just recognize that two procedures were both described in a note.</p>

    <h2>A worked example: the same wound, two documentation choices, two different codes</h2>

    <p>Wound debridement is one of the clearest places this plays out, because the underlying clinical scenario, a diabetic foot ulcer needing dead tissue removed, can legitimately map to two structurally different CPT code families depending entirely on what the documentation says was done, not on how severe the wound was.</p>

    <p>CPT 11042 through 11047 describe excisional debridement of subcutaneous tissue, tissue removed with a sharp instrument, cutting down to viable, bleeding tissue, billed by wound surface area starting with the first 20 square centimeters. CPT 97597 and 97598 describe selective, non-excisional debridement, tissue removed through methods like high-pressure irrigation, scraping with a curette, or mechanical techniques that clear slough and debris without cutting into viable tissue, also billed against the first 20 square centimeters. These are governed by CMS National Correct Coding Initiative edits as a bundled pair for the same wound on the same date, meaning a pipeline that lets both get billed together for one debridement session is generating a claim that payer logic is specifically built to catch and deny.</p>

    <p>Now look at two clinical notes describing what could plausibly be the same 15 square centimeter ulcer:</p>

    <p><strong>Note A:</strong> "Wound bed cleansed and debrided using curette and gauze, removing loose slough and surface debris. Irrigated with normal saline. Wound bed appears clean at close."</p>

    <p><strong>Note B:</strong> "Using a #15 blade, necrotic tissue was sharply excised down to viable, bleeding subcutaneous tissue across the wound bed, approximately 15 square centimeters."</p>

    <p>Note A supports 97597. Note B supports 11042. The two procedures are reimbursed at meaningfully different rates under Medicare's physician fee schedule, reflecting the greater skill, risk, and resource cost of a surgical excisional procedure compared to non-excisional wound care, and the codes are not interchangeable on a claim: billing 11042 against documentation that only describes curette debridement is upcoding, and billing 97597 against documentation that clearly describes sharp excision to bleeding tissue undercodes the actual service performed and underpays the practice for what was genuinely done. A classification system built to code this correctly has to weigh specific verbs, "excised" against "debrided," specific instruments, blade against curette, and a stated endpoint, cutting to bleeding tissue against clearing surface debris, none of which is a lookup, all of which is a judgment call the official CPT descriptors force a specific answer to once you know what to look for. An extraction-first system that scans for a code-shaped token in the text finds nothing in either note, because there isn't one there. A classification-first system reads the clinical description of the procedure and maps it against the two competing category definitions, which is the only approach that can get this right, and the only approach that can explain, on audit, why it picked one code over the other.</p>

    <h2>Why "find the code in the text" fails as an automation strategy</h2>

    <p>Beyond the debridement example, several structural features of clinical documentation make simple pattern extraction unworkable for coding specifically. Negation is one: "no evidence of diabetic retinopathy" and "diabetic retinopathy present" differ by three words but produce entirely different diagnosis codes, and a system extracting entities without parsing negation scope will code the negated condition as present. Laterality inference is another: a note may state "right knee" once in the history of present illness and never repeat it in the assessment, requiring the coding logic to carry that detail forward across the document rather than treating each sentence independently. Encounter-type determination is a third: whether a fracture visit gets the 7th-character A, D, or S depends on the clinical status described, active treatment, routine healing, or a residual effect of a healed injury, a judgment about the stage of care, not a value printed anywhere in the note. None of these are extraction failures. They are classification failures, cases where the system found text but applied the wrong rule to interpret what that text meant for code selection.</p>

    <h2>What an actual classification-based coding pipeline needs</h2>

    <p>A pipeline built around this reality treats document extraction as an input stage, not the output. Clinical entity recognition, tuned specifically for medical terminology rather than generic named-entity models, pulls out conditions, procedures, anatomical sites, laterality mentions, negation scope, and temporal context as structured features. A separate classification layer then ranks candidate codes from the full ICD-10-CM or CPT hierarchy against those features, constrained by the official coding guidelines for that code family, specificity requirements, sequencing rules for principal versus secondary diagnosis, and bundling logic like NCCI edits for procedure pairs. Low-confidence predictions, cases where two or three candidate codes score close together, the exact situation the debridement example illustrates, should route to a human coder for review rather than auto-submit, because a five to ten percent uncertainty on a code selection is not a rounding error, it is a real chance of a denied or improperly paid claim. This is also why coding automation vendors that only report an aggregate accuracy number are telling you less than it sounds like: the number that actually matters is how the system behaves on the ambiguous cases, not the easy ones where a single dominant condition and a single applicable procedure make the classification trivial.</p>

    <p>The same logic applies directly to risk-adjustment coding, where ICD-10-CM specificity determines which Hierarchical Condition Category a diagnosis maps to and therefore what a payer expects to be reimbursed for managing that patient; our separate piece on <a href="/resources/blogs/hcc-risk-adjustment-coding">HCC risk adjustment coding</a> covers that classification layer in more depth. It also connects directly to claims processing downstream: a coding decision that produces a code combination a payer's edits reject shows up later as a specific denial reason, which our guide to <a href="/resources/blogs/denial-code-extraction">denial code extraction</a> covers from the payer response side, and the codes themselves ultimately have to land in the correct boxes on the standard claim form, detailed in our <a href="/resources/blogs/cms-1500-form-processing">CMS-1500 form processing</a> post.</p>

    <h2>What to check before trusting a medical coding automation claim</h2>

    <p>Ask whether the system was evaluated separately on diagnosis coding and procedure coding, since ICD-10-CM and CPT are different structural problems with different failure modes, and a vendor quoting one blended accuracy number across both is obscuring which one is actually strong. Ask how the system handles negation and laterality carried across a document rather than stated once, since both are common sources of misclassification that have nothing to do with extraction quality. Ask whether NCCI Procedure-to-Procedure edits and specificity guidelines are applied as an explicit rules layer on top of the model's predictions, or whether the system relies entirely on a language model's implicit sense of what "sounds right," which is not the same as encoding CMS's actual published edit tables. And ask what the system does with a low-confidence prediction: auto-submits it, or routes it to a human coder with the competing candidates and the specific documentation language that made the decision close, the exact information a human needs to resolve an ambiguity like the debridement example above in minutes rather than researching it from scratch.</p>

    <p>ICD-10-CM and CPT will keep showing up together on every claim, every EHR export, and every coding automation pitch, because the regulation that governs healthcare transactions requires it. That pairing has convinced a lot of vendor content to talk about them as one undifferentiated problem, extract the codes, ship the claim. They are built on different logic, maintained by different organizations, and solved by different technical approaches once you get past the marketing framing, and a pipeline that doesn't reflect that difference is going to keep producing exactly the kind of close, expensive, avoidable coding error the debridement example walks through. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/passport-ocr-revolutionizing.png",
  featuredImage: "/images/passport-ocr-revolutionizing.png",
  category: "Healthcare",
  date: "September 2, 2026",
  datePublished: "2026-09-02T00:00:00.000Z",
  dateModified: "2026-09-02T00:00:00.000Z",
  last_updated: "September 2, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "medical coding automation",
  secondary_keywords: [
    "icd-10-cm vs cpt codes",
    "cpt code structure",
    "automated coding classification pipeline",
    "icd-10-cm 7th character",
    "clinical documentation coding accuracy",
    "ncci procedure to procedure edits",
  ],
  tags: ["healthcare", "medical coding", "ICD-10-CM", "CPT codes", "reimbursement"],
  cluster: "healthcare",
  faq: [
    {
      question: "What is the structural difference between ICD-10-CM and CPT codes?",
      answer:
        "ICD-10-CM codes diagnoses using 3 to 7 alphanumeric characters, with later positions encoding site, laterality, and a 7th-character episode-of-care extension. CPT codes procedures using exactly 5 characters across all categories, with laterality and severity attached separately through modifiers instead of built into the code itself. ICD-10-CM is maintained by NCHS and CMS; CPT is copyrighted and maintained by the American Medical Association.",
    },
    {
      question: "Why is automated medical coding a classification problem rather than an extraction problem?",
      answer:
        "A clinical note almost never contains a literal ICD-10-CM or CPT code string. It contains a free-text clinical description that must be matched against the single best-fit code out of roughly 74,719 billable ICD-10-CM codes or several thousand relevant CPT codes, under official coding guidelines. That is a classification decision among close alternatives, not a lookup of a value already present on the page.",
    },
    {
      question: "What does the 7th character in an ICD-10-CM code mean?",
      answer:
        "It captures episode of care for specific code families, commonly A for initial encounter, D for subsequent encounter during routine healing, and S for sequela, meaning treatment of a lasting effect after the original condition has resolved. Fracture codes add further subsequent-encounter values for delayed healing, nonunion, and malunion.",
    },
    {
      question: "Why do CPT codes 11042 and 97597 get confused, and why does it matter?",
      answer:
        "Both can apply to debriding the same wound, but 11042 describes excisional debridement, sharp removal of tissue down to viable, bleeding tissue, while 97597 describes selective, non-excisional debridement using methods like curette or irrigation. The correct code depends entirely on the documented technique, not the wound's severity, and CMS National Correct Coding Initiative edits generally prevent billing both for the same wound on the same date.",
    },
    {
      question: "Which HIPAA regulation designates ICD-10-CM and CPT as standard code sets?",
      answer:
        "45 CFR 162.1002 designates ICD-10-CM for diagnosis coding and a combination of CPT and HCPCS Level II for coding physician services and procedures on covered electronic health care transactions.",
    },
    {
      question: "How many ICD-10-CM and CPT codes exist?",
      answer:
        "The FY 2026 ICD-10-CM update contains 98,186 total codes, of which about 74,719 are billable. The CPT code set maintained by the AMA contains more than 11,000 codes across Category I, Category II, and Category III.",
    },
  ],
}
