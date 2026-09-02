import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogMd01: BlogPost = {
  id: "md-01",
  title: "HL7 FHIR Document Processing: What Compliant Actually Means",
  slug: "hl7-fhir-document-processing",
  excerpt:
    "A FHIR-compliant EHR export and a FHIR-compliant fax classifier are not the same claim. Here is the real technical gap between them.",
  description:
    "HL7 FHIR document processing: what FHIR resources are, why scanned clinical documents lack native structure, and what vendor FHIR compliance claims really mean.",
  metaTag: "HL7 FHIR Document Processing: The Real Compliance Gap",
  content: `
    <p>A vendor tells you their document AI platform is "FHIR compliant." A different vendor, selling you an actual EHR integration, tells you the same thing. These are not the same claim, and treating them as interchangeable is how a lending or health-plan operations team ends up with a pile of indexed PDFs they were told was structured clinical data. The first vendor usually means they can wrap a scanned document in a FHIR resource that points at the file. The second means they can populate discrete, coded, queryable clinical facts that a downstream system can compute on without ever opening the file at all. Both statements are technically true. Only one of them gets you interoperability.</p>

    <p>This distinction matters more now that FHIR R4 is the baseline data format required under the CMS interoperability rules and the ONC Cures Act final rule, and more healthcare document workflows, from <a href="/documents/medical-docs">medical document OCR</a> pipelines to referral intake to prior authorization, are being asked to produce "FHIR-compliant" output as a condition of doing business with a payer or health system. Knowing which kind of FHIR compliance you are actually buying is the difference between an integration that works and one that quietly doesn't.</p>

    <h2>What a FHIR resource actually is</h2>

    <p>FHIR, Fast Healthcare Interoperability Resources, is HL7's standard for representing healthcare information as small, self-contained data objects called resources. Each resource type has a fixed, published structure: a defined set of fields, defined data types for each field, and in most cases a required coding system for anything clinical. A Patient resource has fields like name, birthDate, gender, and identifier. An Observation resource, the type used for lab results, vital signs, and most clinical measurements, has a required status field, a required code field (almost always populated with a LOINC code identifying exactly what was measured), a subject reference to the patient, and a value field holding the actual result.</p>

    <p>Here is a real Observation resource for a blood pressure reading, structured the way the FHIR specification actually requires it:</p>

    <pre><code>{
  "resourceType": "Observation",
  "status": "final",
  "category": [{
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/observation-category",
      "code": "vital-signs"
    }]
  }],
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "85354-9",
      "display": "Blood pressure panel"
    }]
  },
  "subject": { "reference": "Patient/example" },
  "effectiveDateTime": "2026-01-15T10:30:00Z",
  "component": [
    {
      "code": { "coding": [{ "system": "http://loinc.org", "code": "8480-6", "display": "Systolic blood pressure" }] },
      "valueQuantity": { "value": 120, "unit": "mmHg" }
    },
    {
      "code": { "coding": [{ "system": "http://loinc.org", "code": "8462-4", "display": "Diastolic blood pressure" }] },
      "valueQuantity": { "value": 80, "unit": "mmHg" }
    }
  ]
}</code></pre>

    <p>Every field in that resource is discrete and computable. A rules engine can read valueQuantity directly and flag a systolic reading over 140 without any text parsing, because the number lives in a defined field, tagged with a defined LOINC code (8480-6 is the permanent, universal identifier for systolic blood pressure, the same code every FHIR-conformant system in the world uses for that exact measurement), not buried in a sentence somewhere on page three of a note.</p>

    <h2>DocumentReference is the resource everyone glosses over</h2>

    <p>This is where most vendor FHIR claims live, and where the technical gap actually is. FHIR has a resource type called DocumentReference, whose official purpose, per the HL7 specification, is to index and manage documents of any kind, described as "a reference to a document of any kind for any purpose... encompasses any serialized object with a mime-type." A DocumentReference has fields like status, type, subject, author, and a required content field. That content field holds an Attachment, a data type with a URL or inline base64-encoded blob, a MIME type, a content hash, and a file size. It does not have a code field for a lab value. It does not have a component array. It cannot hold a discrete diagnosis or a discrete medication dose, because that is not what it is for.</p>

    <p>A DocumentReference wrapping a scanned fax looks roughly like this:</p>

    <pre><code>{
  "resourceType": "DocumentReference",
  "status": "current",
  "type": {
    "coding": [{ "system": "http://loinc.org", "code": "34117-2", "display": "History and physical note" }]
  },
  "subject": { "reference": "Patient/example" },
  "content": [{
    "attachment": {
      "contentType": "application/pdf",
      "url": "Binary/f001",
      "hash": "2jmj7l5rSw0yVb/vlWAYkK/YBwk="
    }
  }]
}</code></pre>

    <p>This is a genuine, valid, spec-conformant FHIR resource. It is also, structurally, a filing cabinet entry. The clinical content, whatever diagnosis, medication, or lab value actually appears inside that PDF, is still locked inside an opaque binary blob at the end of a URL. A system consuming this resource knows a document exists, what kind it claims to be, and where to fetch it. It cannot query, alert on, or compute anything about what is inside it without opening the file and running its own extraction on top, which defeats the entire premise of interoperable data exchange.</p>

    <h2>The real gap: FHIR-native export versus a scanned document with no structure at all</h2>

    <p>A FHIR-native EHR export starts life as structured data. A clinician enters a diagnosis into a coded field in the EHR, the EHR's own database stores that as a discrete row tied to a SNOMED or ICD-10 code, and the FHIR API layer serializes that existing structured record into a Condition resource on request. Nothing about that process involves guessing what the text means. The structure was never lost because it was never text in the first place.</p>

    <p>A scanned or faxed clinical document is the opposite case from the first byte. A referral letter faxed from a specialist's office, a handwritten progress note scanned at intake, a discharge summary printed from one EHR and faxed to a different practice that cannot read the sending system's native format, all of these exist as pixels on a page with zero underlying data structure. There is no hidden Condition resource sitting underneath the pixels waiting to be found. Getting from that scanned page to a genuinely discrete FHIR resource requires OCR to turn pixels into text, then clinical NLP to identify which spans of that text are diagnoses, medications, or lab values, then terminology mapping to attach the correct SNOMED, RxNorm, or LOINC code to each one, then resource construction to place each mapped value into the correct FHIR field. Every one of those four steps introduces error that a native EHR export never has to survive, because a native export never had to be interpreted in the first place.</p>

    <table>
      <thead>
        <tr><th>Dimension</th><th>FHIR-native EHR export</th><th>Scanned or faxed document run through OCR</th></tr>
      </thead>
      <tbody>
        <tr><td>Starting state</td><td>Already discrete, coded data in the source system's database</td><td>Pixels with no inherent structure or coding</td></tr>
        <tr><td>Path to a FHIR resource</td><td>Direct serialization from existing structured fields</td><td>OCR, then clinical NLP entity extraction, then terminology mapping, then resource construction</td></tr>
        <tr><td>Error sources</td><td>Minimal; mapping between the source schema and FHIR fields</td><td>Layout misreads, handwriting, negation and context errors, wrong or missing terminology codes</td></tr>
        <tr><td>What a "FHIR compliant" claim usually means</td><td>Genuine discrete resources (Observation, Condition, MedicationRequest) with real codes</td><td>Often a DocumentReference wrapping the original file, sometimes with a text extract attached as unstructured narrative</td></tr>
        <tr><td>What a downstream system can do with it</td><td>Query, alert, and compute directly on the fields</td><td>Fetch and re-parse the document itself before anything is computable</td></tr>
      </tbody>
    </table>

    <h2>Why "FHIR compliant" vendor claims are often narrower than they sound</h2>

    <p>In practice, document AI vendors selling into healthcare tend to sit at one of three distinct levels, and the marketing language rarely tells you which one you are buying.</p>

    <p>The first level is document wrapping only: OCR the file, classify it into a FHIR document type code, attach the original as a Binary resource inside a DocumentReference, and call the output FHIR compliant because every field in that resource does conform to the spec. It does. But nothing clinical inside the document became computable in the process, it just got a standardized label and a pointer.</p>

    <p>The second level is partial discrete extraction: clinical NLP pulls out a defined set of high-value fields, typically things like medication name, diagnosis, and a handful of lab values, maps them to terminology codes, and populates a smaller set of genuinely discrete resources (MedicationStatement, Condition, a few Observations) alongside a DocumentReference for the source file. This is real interoperability, but partial. It covers what the extraction model was built to look for, and if the source document reports something outside that scope, a lab value or a med not on the target list, it silently stays undiscretized text.</p>

    <p>The third level is what most people mean when they hear "FHIR compliant" without qualification: comprehensive discrete extraction across the clinically significant content of a document, with a defensible mapping to terminology codes and a documented accuracy rate on that extraction. This is the level that actually delivers on interoperability. It is also meaningfully harder to build than the first two, which is exactly why fewer vendors do it and why claims at this level tend to be paired with actual accuracy numbers rather than a bare assertion of compliance.</p>

    <h2>A worked comparison, same source document, three outcomes</h2>

    <p>Take a single faxed referral letter containing a diagnosis of type 2 diabetes, a current metformin prescription, and a most-recent A1C result of 7.8%. Run it through each of the three levels above and the FHIR output differs sharply even though every vendor at every level can honestly describe their output as FHIR resources.</p>

    <p>At level one, the output is a single DocumentReference with type code set to something like "Referral note," subject linked to the patient, and a content.attachment pointing at the scanned PDF. A downstream diabetes care management system querying for this patient's Observation resources by LOINC code for A1C (4548-4) finds nothing, because the 7.8% value never left the PDF.</p>

    <p>At level two, the same document might produce a Condition resource coded to the correct ICD-10 or SNOMED entry for type 2 diabetes, plus a DocumentReference for the file itself, but the A1C result and the metformin prescription stay embedded in text because the extraction model in use was tuned for diagnosis codes specifically and was never built or validated against lab values or medication dosing fields.</p>

    <p>At level three, the same document produces a Condition resource for the diagnosis, a MedicationRequest resource for metformin with an RxNorm code and dose, and an Observation resource for the A1C result coded to LOINC 4548-4 with a valueQuantity of 7.8 and a unit of percent. That last version is the one where a diabetes registry query, a care gap alert for an overdue A1C, or a population health dashboard actually finds and uses the data without a human ever opening the fax.</p>

    <h2>Why the FHIR document Bundle model complicates this further</h2>

    <p>FHIR also defines an actual document format, distinct from a bare DocumentReference: a Bundle of type "document," which must start with a Composition resource, a structured table of contents that organizes the document's sections and can reference other resources within the same bundle. This is the format HL7's Clinical Document work explicitly designed as a FHIR-based successor to C-CDA, and it is closer in spirit to the narrative-document tradition than to discrete Observation-style resources, since a Composition is fundamentally a structured wrapper around human-readable sections, not a set of computable clinical facts on its own. A vendor producing a genuinely well-formed FHIR document Bundle from a source document that had none to begin with is doing real, nontrivial standardization work, converting an unstructured fax into an organized, sectioned, referenceable document. But even a perfectly formed Composition-based Bundle does not by itself make the clinical content inside those sections discrete and queryable unless the individual entries the Composition references are themselves resources like Observation and Condition, not just narrative text. This is a second, separate place the same "FHIR compliant" phrase gets used to describe two meaningfully different levels of structure, and it is worth asking directly whether a vendor's document Bundle output references genuinely discrete clinical resources or narrative sections dressed in FHIR's document format.</p>

    <h2>The questions that actually separate the three levels</h2>

    <p>Ask any vendor claiming FHIR compliance for scanned or faxed document processing three specific questions, and the answers will place them on the scale above quickly. First, which FHIR resource types does the output actually populate beyond DocumentReference, by name, not as a general "structured data" claim. Second, for whichever clinical resource types they do populate (Observation, Condition, MedicationRequest), what terminology system codes each field, LOINC, SNOMED CT, RxNorm, and what is the measured accuracy of that coding on a real document sample, not a synthetic benchmark. Third, what happens to clinical content in the source document that falls outside their extraction model's scope, does it get silently dropped, does it stay as unstructured narrative attached somewhere, or does the document fail visibly so a human catches it. A vendor with a genuine level-three offering answers all three specifically and usually has accuracy numbers ready. A vendor at level one tends to answer the first question with something close to "we produce valid FHIR resources," which is true and tells you almost nothing about what you are actually getting.</p>

    <p>This same gap shows up across adjacent document types in healthcare document processing. Our <a href="/resources/blogs/ccda-document-processing">C-CDA document processing guide</a> covers the narrative-document predecessor to FHIR documents in more depth, and the coded-data side of this problem connects directly to <a href="/resources/blogs/loinc-code-extraction">LOINC code extraction</a>, since a correctly assigned LOINC code is what actually makes an Observation resource computable rather than just labeled. For the specific case of documents arriving with zero digital structure to begin with, most commonly by fax, our <a href="/resources/blogs/medical-fax-automation">medical fax automation guide</a> covers the front end of this pipeline, the OCR and classification layer that has to run before any FHIR resource, discrete or otherwise, can exist at all.</p>

    <h2>What this means for evaluating a document AI vendor</h2>

    <p>"FHIR compliant" as a bare claim should be treated the way "cloud based" was a decade ago, technically true of nearly everyone and informative about almost nothing on its own. The useful question is never whether output conforms to the FHIR specification, since a DocumentReference wrapping an unread PDF conforms to the spec just as validly as a fully coded Observation resource does. The useful question is which resource types the output actually populates with discrete, coded, computable data, and which parts of the source document remain locked in an attachment regardless of what the resource envelope around it is called. Getting a straight answer to that question, before signing a contract rather than after the first failed integration test, is the entire difference between buying real interoperability and buying a very standards-compliant filing system. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/ocr-in-finance.png",
  featuredImage: "/images/ocr-in-finance.png",
  category: "Healthcare",
  date: "September 2, 2026",
  datePublished: "2026-09-02T00:00:00.000Z",
  dateModified: "2026-09-02T00:00:00.000Z",
  last_updated: "September 2, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "hl7 fhir document processing",
  secondary_keywords: [
    "fhir resources explained",
    "fhir compliant document ai",
    "fhir documentreference vs observation",
    "clinical document interoperability",
    "fhir document bundle",
    "ehr fhir export vs scanned documents",
  ],
  tags: ["healthcare", "HL7 FHIR", "clinical document interoperability", "medical OCR", "EHR integration"],
  cluster: "healthcare",
  faq: [
    {
      question: "What is the difference between a FHIR resource and a FHIR document?",
      answer:
        "A FHIR resource is a single, discrete data object like Patient, Observation, or Condition, each with defined fields. A FHIR document is a Bundle of type document that starts with a Composition resource organizing sections, closer to a structured narrative than a standalone computable data point.",
    },
    {
      question: "What does DocumentReference actually store?",
      answer:
        "DocumentReference is a metadata wrapper. Its content.attachment field holds a URL or base64 blob, a MIME type, and a content hash, pointing at a document rather than containing discrete clinical data. Wrapping a scanned fax in a DocumentReference is valid FHIR but does not make the clinical content inside it computable.",
    },
    {
      question: "Why can't a scanned or faxed clinical document be FHIR structured directly?",
      answer:
        "A scanned document has no underlying data structure to begin with, it is pixels. Getting to discrete FHIR resources requires OCR, clinical NLP entity extraction, terminology code mapping, and resource construction, each step a native EHR export never needs because its data was already structured in a database.",
    },
    {
      question: "What does it mean when a document AI vendor claims to be FHIR compliant?",
      answer:
        "It can mean anything from wrapping a scanned file in a valid DocumentReference with no discrete clinical extraction, to populating a limited set of coded resources like Condition or MedicationRequest, to comprehensive discrete extraction across a document's clinically significant content. All three are technically FHIR compliant.",
    },
    {
      question: "What terminology systems does FHIR use for coded clinical data?",
      answer:
        "LOINC codes identify lab results and observations, such as 8480-6 for systolic blood pressure. SNOMED CT codes identify diagnoses and conditions. RxNorm codes identify medications. A resource's code and value fields are only genuinely computable if mapped to the correct terminology code, not just labeled with a document type.",
    },
    {
      question: "What questions should you ask a vendor to verify real FHIR interoperability?",
      answer:
        "Ask which resource types beyond DocumentReference the output populates by name, what terminology system and measured accuracy backs each coded field, and what happens to clinical content that falls outside the extraction model's scope, dropped silently, left as narrative text, or flagged for human review.",
    },
  ],
}
