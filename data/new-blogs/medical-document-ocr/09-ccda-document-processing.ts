import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogMd09: BlogPost = {
  id: "md-09",
  title: "C-CDA Document Processing: Why Valid Files Read as Empty",
  slug: "ccda-document-processing",
  excerpt:
    "A C-CDA export can pass every ONC validator with zero errors and still hand your pipeline an empty medications list. Here is the structural reason why.",
  description:
    "How C-CDA files are structured, why a valid export can still be unreadable to software, and what real extraction from a compliant C-CDA document requires.",
  metaTag: "C-CDA Document Processing: Why Valid Files Are Empty",
  content: `
    <p>Run a C-CDA file through the official HL7 validator and it passes with zero errors. Every required section is present, every template ID is correct, the XML is well formed against the schema. Open the Medications section in that same file and the structured entry underneath it is empty, a placeholder with a null flavor attribute, while the human readable narrative two inches above it lists four active prescriptions in a paragraph of free text. Both things are true at once: the document is fully compliant, and a pipeline built to read the structured entries gets nothing. This is not a bug in one vendor's export. It is a predictable consequence of how the C-CDA standard is built, and it is the reason "C-CDA document processing" is a much harder problem than "parse this XML file" suggests.</p>

    <p>Processing <a href="/documents/medical-docs">medical documents</a> at scale eventually means ingesting C-CDA exports, because every certified EHR in the United States can produce them and referral networks, HIEs, and payer data pipelines all still lean on the format. This post is about what a C-CDA file actually is structurally, why the standard tolerates documents that are valid but practically unreadable, a term practitioners in this space often call CDA soup, and what the real extraction problem looks like once you get past the schema validation step.</p>

    <h2>What a C-CDA file actually is</h2>

    <p>C-CDA stands for Consolidated Clinical Document Architecture. It is an XML-based document standard maintained by HL7, built on top of the older base CDA standard, and constrained by an implementation guide that HL7 calls the Consolidated CDA Companion Guide. Under Meaningful Use and later the ONC's 2015 Edition certification rule, every EHR certified for use in the United States has to be able to generate C-CDA documents that meet this guide, specifically under the criterion at 45 CFR 170.315(g)(6), Consolidated CDA Creation. That single certification requirement is why C-CDA is nearly universal in US healthcare data exchange even though most engineers who work with it find it painful.</p>

    <p>Structurally, every C-CDA document has two top-level parts: a header and a body. The header carries document metadata, patient demographics, the author, the custodian organization, document type, and effective time. The body is where the clinical content lives, and it is organized into a fixed hierarchy of components, sections, and entries.</p>

    <ul>
      <li><strong>Document</strong>, the outermost container. C-CDA defines specific document types such as the Continuity of Care Document (CCD), Discharge Summary, Consultation Note, History and Physical, Progress Note, Operative Note, Transfer Summary, and, notably, Unstructured Document.</li>
      <li><strong>Section</strong>, a labeled subdivision of the body such as Problems, Medications, Allergies, or Results, each identified by a fixed LOINC code and template ID so software can locate it regardless of how the vendor labeled the visible heading.</li>
      <li><strong>Entry</strong>, the structured, coded data nested inside a section, built from templates that specify exactly which codes, value sets, and data types are allowed for that kind of clinical statement.</li>
    </ul>

    <p>C-CDA 1.1 required four sections in a Continuity of Care Document: Problems, Medications, Allergies, and Results. C-CDA 2.1, the version most current EHRs target, added Social History and Vital Signs to that required list. A compliant CCD has to contain all of these sections, populated or explicitly marked as having no known content, before it can be considered valid.</p>

    <table>
      <thead>
        <tr><th>Section</th><th>LOINC section code</th><th>Required since</th><th>Typical entry content</th></tr>
      </thead>
      <tbody>
        <tr><td>Problems</td><td>11450-4</td><td>C-CDA 1.1</td><td>SNOMED CT coded diagnoses, onset and resolution dates</td></tr>
        <tr><td>Medications</td><td>10160-0</td><td>C-CDA 1.1</td><td>RxNorm coded drug, dose, route, frequency, status</td></tr>
        <tr><td>Allergies</td><td>48765-2</td><td>C-CDA 1.1</td><td>SNOMED or NDF-RT allergen, reaction, severity</td></tr>
        <tr><td>Results</td><td>30954-2</td><td>C-CDA 1.1</td><td>LOINC coded lab test, numeric or coded result, reference range</td></tr>
        <tr><td>Social History</td><td>29762-2</td><td>C-CDA 2.1</td><td>Smoking status, occupation, pregnancy status</td></tr>
        <tr><td>Vital Signs</td><td>8716-3</td><td>C-CDA 2.1</td><td>Blood pressure, heart rate, temperature, height, weight</td></tr>
      </tbody>
    </table>

    <h2>The split that causes CDA soup: narrative text versus structured entries</h2>

    <p>Here is the design decision that most explainers about C-CDA skip past, and it is the single biggest reason C-CDA exports are so inconsistent to extract from. Every section in a CDA document contains two separate representations of the same clinical content: a narrative block and, optionally, one or more structured entries.</p>

    <p>The narrative block is the human readable version, rendered as HTML-like markup (tables, lists, paragraphs) meant to be displayed to a clinician reading the document. Per the CDA specification itself, the document's author is responsible for making sure the narrative block contains the complete, attested, human readable content of that section. Structured entries, by contrast, are explicitly described in the standard as existing to support computer processing, and the spec is direct about their status relative to the narrative: they are not a replacement for the attestable, human readable content of the narrative block. The narrative is the legally authoritative record. The entries are a computable shadow of it that the standard hopes matches, but does not require to match with any enforced consistency check.</p>

    <p>That single sentence in the specification is why so much C-CDA data is unusable by machines despite being fully valid XML. A vendor's EHR is required to produce a complete narrative, because that is what clinicians read and what makes the document legally sufficient. It is not required, in the same enforced way, to populate a matching structured entry for every narrative statement. When a busy engineering team at an EHR vendor is under deadline pressure to pass certification testing, the fastest path to a passing document is often a solid narrative renderer and a bare-minimum structured entry, sometimes a single entry with a nullFlavor attribute meaning "no information," attached to a section that otherwise reads as fully populated to a human.</p>

    <h2>CDA conformance levels, and why "Level 3" doesn't mean fully computable</h2>

    <p>The base CDA standard defines three levels of structuring, and C-CDA documents can, and often do, mix them within a single file.</p>

    <table>
      <thead>
        <tr><th>Level</th><th>What's structured</th><th>Practical machine readability</th></tr>
      </thead>
      <tbody>
        <tr><td>Level 1</td><td>Only the document type is coded; the body is essentially a formatted narrative document</td><td>Low, effectively a fancy PDF in XML clothing</td></tr>
        <tr><td>Level 2</td><td>Sections are coded and constrained by templates, so software can reliably locate the Medications or Allergies section</td><td>Medium, you can find the right part of the document, but the content inside may still be free text</td></tr>
        <tr><td>Level 3</td><td>Individual entries within sections are coded and templated, down to specific clinical statements</td><td>High, in theory fully computable, but only for the entries that are actually populated</td></tr>
      </tbody>
    </table>

    <p>A C-CDA document can claim Level 3 conformance for its Medications section and Level 1 behavior for its Social History section in the same file, because conformance is asserted per template, not certified for the document as a whole in a way that guarantees uniform computability. This is why "the file passed validation" and "the file is extractable" are different claims. Validation checks that the XML matches the required schema and template structure. It does not check that every clinically meaningful statement in the narrative has a corresponding structured entry, because the standard never required that equivalence to be enforced.</p>

    <h2>A worked example: one medication, two representations, one mismatch</h2>

    <p>Consider a simplified but realistic Medications section. The narrative block, rendered from the EHR's internal record, reads clearly to a human:</p>

    <pre><code>&lt;text&gt;
  &lt;table&gt;
    &lt;tr&gt;
      &lt;td&gt;Lisinopril 10mg tablet&lt;/td&gt;
      &lt;td&gt;1 tablet by mouth daily&lt;/td&gt;
      &lt;td&gt;Active&lt;/td&gt;
      &lt;td&gt;Started 2024-11-03&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Metformin 500mg tablet&lt;/td&gt;
      &lt;td&gt;1 tablet twice daily with meals&lt;/td&gt;
      &lt;td&gt;Active&lt;/td&gt;
      &lt;td&gt;Started 2023-06-15&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/table&gt;
&lt;/text&gt;</code></pre>

    <p>Underneath that narrative, the structured entry for the same section, in a real export from a system optimized for passing certification testing rather than downstream interoperability, can look like this:</p>

    <pre><code>&lt;entry&gt;
  &lt;substanceAdministration classCode="SBADM" moodCode="EVN"&gt;
    &lt;statusCode code="active"/&gt;
    &lt;consumable&gt;
      &lt;manufacturedProduct&gt;
        &lt;manufacturedMaterial&gt;
          &lt;code nullFlavor="UNK"/&gt;
        &lt;/manufacturedMaterial&gt;
      &lt;/manufacturedProduct&gt;
    &lt;/consumable&gt;
  &lt;/substanceAdministration&gt;
&lt;/entry&gt;</code></pre>

    <p>Only one entry element exists for what the narrative shows as two distinct medications, and the RxNorm code that should identify the drug is replaced with nullFlavor UNK, meaning "unknown," a value that is schema-valid and passes every automated conformance check. A pipeline reading only the structured entries sees one medication of unknown identity. A human reading the rendered document sees two named drugs, doses, and start dates. Both are the same C-CDA file. This is the actual extraction problem: not malformed XML, but well-formed, spec-compliant XML where the computable layer silently drops information the narrative layer preserved. Real-world C-CDA exports rarely look quite this stripped down, most vendors populate entries reasonably well for medications and problems specifically, since those are the sections most heavily tested during ONC certification, but the pattern shows up reliably in less-scrutinized sections and in older or smaller EHR platforms.</p>

    <h2>The Unstructured Document type: full compliance, zero structured content</h2>

    <p>C-CDA's document type list includes one entry that makes the narrative-versus-entry gap explicit rather than incidental: Unstructured Document. HL7 publishes an implementation guide specifically for it, intended for cases like scanned paper records, faxed documents, or word processor output where the underlying content was never structured in the first place. Rather than a body built from sections and entries, an Unstructured Document uses what the standard calls a nonXMLBody, where the entire clinical content is a base64-encoded attachment, commonly a PDF, embedded inside a text element of type ED (Encapsulated Data).</p>

    <p>A document like this is fully C-CDA compliant. It has a valid header, a valid document type code, and a body element that conforms exactly to what the Unstructured Document template requires. It is also, from a structured-data-extraction standpoint, completely opaque: there is no Problems section, no Medications section, nothing for an entry-level parser to read, just a wrapped file. This is the clearest illustration that "C-CDA compliant" and "computably structured" are not the same claim, they are two different bars, and the standard is explicit that a document can clear the first without coming anywhere near the second.</p>

    <h2>Why the standard got built this way</h2>

    <p>It is tempting to treat CDA soup as sloppy engineering, but the incentive structure explains most of it. C-CDA generation became a certification requirement, not a market-driven interoperability feature, tied to the 2015 Edition Common Clinical Data Set and the 170.315(g)(6) creation criterion. Certification testing checks that required sections and templates exist, that codes come from the correct value sets when they are present, and that the file validates against the schema. It does not, and structurally cannot easily, check that every fact stated in the narrative has a matching structured entry, because narrative text is unstructured by definition and testing that kind of completeness would require the same NLP extraction problem the certification exists to make unnecessary.</p>

    <p>The result is a standard that succeeded at its immediate regulatory goal, nearly universal EHR export capability, while leaving the actual computability of any given export dependent on how much effort a specific vendor put into populating entries beyond the minimum needed to pass testing. Some EHR platforms produce genuinely rich, well-populated C-CDA output. Others produce the legally sufficient minimum. A document processing pipeline built for C-CDA has to handle both without knowing in advance which one it's looking at.</p>

    <h2>What real C-CDA extraction requires</h2>

    <p>Given all of that, extracting clean structured data from a C-CDA export in practice means treating the structured entries as a starting point, not a guaranteed source of truth, and building a pipeline that can fall back intelligently when they are thin.</p>

    <ul>
      <li><strong>Parse entries first, but verify against the narrative.</strong> When a structured entry is present and populated with real codes, it is usually the fastest and most reliable source. But the pipeline needs a check for null flavors, empty entries, and entry counts that don't match the number of rows visible in the narrative table for the same section.</li>
      <li><strong>Fall back to narrative parsing when entries are thin.</strong> If a section shows a rich narrative table but sparse or missing entries, the narrative block itself, structured as an HTML-like table with predictable rendering, becomes the actual source and needs targeted extraction rather than a generic NLP pass meant for unstructured prose.</li>
      <li><strong>Handle document-level branching before section parsing.</strong> Since Unstructured Document files carry no sections at all, a pipeline needs to check the document type code in the header first and route base64-embedded PDFs to an OCR path rather than attempting to walk a body that was never populated with clinical sections.</li>
      <li><strong>Normalize across vendors, not just against the schema.</strong> Two schema-valid C-CDA files from two different EHR vendors can represent the same clinical fact, an active medication, with different template usage, different levels of entry granularity, and different degrees of narrative-entry agreement. Schema validity tells you the file is well formed. It tells you nothing about which of these patterns you're dealing with.</li>
      <li><strong>Track provenance per field.</strong> Whether a given data point came from a populated structured entry versus a narrative-parsed fallback matters for downstream confidence scoring, particularly in lending and eligibility workflows where a wrong medication or diagnosis read has real financial and compliance consequences.</li>
    </ul>

    <h2>C-CDA versus FHIR: two different answers to the same interoperability problem</h2>

    <p>It's worth being clear about how C-CDA relates to HL7 FHIR, since the two are often mentioned together and sometimes confused as competing versions of the same thing. Our <a href="/resources/blogs/hl7-fhir-document-processing">guide to HL7 FHIR document processing</a> covers the resource-based, API-first model in depth, but the structural contrast with C-CDA is worth stating directly here.</p>

    <table>
      <thead>
        <tr><th>Dimension</th><th>C-CDA</th><th>FHIR</th></tr>
      </thead>
      <tbody>
        <tr><td>Format</td><td>XML document, whole-record snapshot</td><td>JSON or XML resources, individually addressable</td></tr>
        <tr><td>Transport model</td><td>Document exchange, sent as a complete file</td><td>REST API, queried resource by resource</td></tr>
        <tr><td>Narrative requirement</td><td>Mandatory human readable narrative per section, entries optional and separate</td><td>Optional narrative per resource, structured fields are the primary representation</td></tr>
        <tr><td>Granularity</td><td>Whole document containing many sections</td><td>Individual resources (Condition, MedicationRequest, AllergyIntolerance) queried independently</td></tr>
        <tr><td>Regulatory driver</td><td>2015 Edition, 170.315(g)(6)</td><td>21st Century Cures Act, USCDI, 170.315(g)(10)</td></tr>
      </tbody>
    </table>

    <p>FHIR was built, in part, specifically to address the narrative-versus-entry gap that makes C-CDA hard to process: a FHIR MedicationRequest resource is a structured object first, with no separate narrative layer that can silently diverge from it in the way a CDA entry can diverge from its section's text block. That does not make C-CDA obsolete. The document-based model is still what most referral exchanges, discharge workflows, and legacy HIE connections run on, and a huge share of real-world clinical data volume in the US still moves as C-CDA files rather than FHIR API calls. Extraction pipelines that only handle FHIR miss most of the actual document traffic.</p>

    <h2>Where this connects to coded data extraction downstream</h2>

    <p>Once entries are reliably parsed, the codes inside them, RxNorm for medications, SNOMED CT for problems, LOINC for results, still need to be mapped into whatever coding system a downstream workflow requires. If your pipeline needs to reconcile C-CDA-sourced problem and result codes against billing or eligibility workflows, our posts on <a href="/resources/blogs/medical-coding-automation">medical coding automation</a> and <a href="/resources/blogs/loinc-code-extraction">LOINC code extraction</a> go deeper into that mapping layer specifically. C-CDA extraction and coded-data normalization are separate problems that tend to get bundled together in vendor pitches, but they fail independently: you can parse a C-CDA entry perfectly and still mis-map its code, or fail to extract the entry at all and never reach the mapping step.</p>

    <h2>The practical takeaway</h2>

    <p>A validator telling you a C-CDA file is compliant answers one narrow question: does this XML conform to the required schema and templates. It does not answer the question that actually matters for a document processing pipeline, which is whether the clinically meaningful content in that file is sitting in a structured entry you can read programmatically, or only in a narrative block that looks complete to a person and empty to a parser. Treating those as the same question is exactly how a pipeline ends up silently dropping medications, problems, or allergies that were, technically, right there in the file the whole time. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/intelligent-document-processing.png",
  featuredImage: "/images/intelligent-document-processing.png",
  category: "Healthcare",
  date: "September 7, 2026",
  datePublished: "2026-09-07T00:00:00.000Z",
  dateModified: "2026-09-07T00:00:00.000Z",
  last_updated: "September 7, 2026",
  noindex: true,
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "ccda document processing",
  secondary_keywords: [
    "C-CDA extraction",
    "Consolidated Clinical Document Architecture",
    "CDA soup",
    "C-CDA vs FHIR",
    "clinical document XML parsing",
    "C-CDA structured data",
  ],
  tags: ["healthcare", "C-CDA", "clinical documents", "HL7", "interoperability", "document processing"],
  cluster: "healthcare",
  faq: [
    {
      question: "What is a C-CDA document?",
      answer:
        "A C-CDA (Consolidated Clinical Document Architecture) document is an XML-based clinical document standard maintained by HL7. Every EHR certified for use in the United States must be able to generate C-CDA files under the ONC 2015 Edition certification criterion 170.315(g)(6). C-CDA documents include types like the Continuity of Care Document, Discharge Summary, and Progress Note, each organized into a header with metadata and a body divided into standardized sections such as Problems, Medications, and Allergies.",
    },
    {
      question: "What does CDA soup mean?",
      answer:
        "CDA soup is a term practitioners use for C-CDA documents that are technically schema-valid and fully compliant with the required templates, but practically difficult or impossible to extract clean structured data from. This happens because CDA requires a complete human readable narrative per section but does not enforce that the structured entries underneath it contain the same information with equal completeness, so a document can pass every validator while its computable entries are thin, empty, or mismatched against what the narrative describes.",
    },
    {
      question: "Why can a valid C-CDA file still be missing structured medication or problem data?",
      answer:
        "Because CDA's specification treats the narrative block, the human readable rendering, as the legally authoritative content of a section, while structured entries exist to support computer processing but are explicitly not required to fully replicate that narrative. An EHR vendor under deadline pressure can produce a complete, readable narrative table while populating only a minimal structured entry, sometimes using a nullFlavor code meaning unknown, and the resulting file still passes schema and template validation.",
    },
    {
      question: "What are CDA Levels 1, 2, and 3?",
      answer:
        "These are the three degrees of structuring the base CDA standard defines. Level 1 only codes the document type, leaving the body as essentially formatted narrative. Level 2 codes and templates the sections, so software can reliably find Problems or Medications, but content inside may still be free text. Level 3 templates the individual entries within sections down to specific coded clinical statements. A single C-CDA document can mix conformance levels across its different sections.",
    },
    {
      question: "What is the C-CDA Unstructured Document type?",
      answer:
        "Unstructured Document is a specific C-CDA document type intended for content that was never structured to begin with, such as scanned records or faxed documents. Instead of sections and entries, it uses a nonXMLBody where the entire clinical content is a base64-encoded attachment, commonly a PDF, embedded inside the document. It is fully C-CDA compliant while containing zero structured, entry-level clinical data, which makes it the clearest example of the gap between compliant and computable.",
    },
    {
      question: "How is C-CDA different from FHIR for document processing?",
      answer:
        "C-CDA exchanges a whole clinical document as an XML file with a mandatory narrative layer and optional structured entries that can diverge from that narrative. FHIR represents clinical facts as individually addressable, structured resources (like MedicationRequest or Condition) queried through a REST API, with no separate narrative layer that can silently drift from the structured data. FHIR was driven by the 21st Century Cures Act and USCDI requirements, but C-CDA still carries a large share of real-world US clinical document exchange, so extraction pipelines generally need to handle both.",
    },
  ],
}
