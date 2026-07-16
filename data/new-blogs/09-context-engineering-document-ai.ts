import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog09: BlogPost = {
  id: "new-09",
  title: "Context Engineering for Document AI (Beyond RAG, 2026)",
  slug: "context-engineering-document-ai",
  excerpt:
    "My first RAG demo for invoice Q&A failed in front of the CFO. The fix was not better embeddings, it was better context engineering. Here is what I learned.",
  description:
    "Context engineering for document AI, why RAG alone falls short, the four-layer context stack that works, and the patterns that scale.",
  metaTag: "Context Engineering for Document AI: Beyond Plain RAG",
  content: `
    <p>My first RAG demo for invoice Q&A failed in front of the CFO. We had embeddings, we had retrieval, we had a great LLM. The CFO asked "what did we spend on AWS in March?" The system returned a paragraph from an unrelated vendor contract. The CFO laughed politely. The deal did not happen.</p>
    <p>The fix turned out not to be better embeddings or a smarter model. It was better <strong>context engineering</strong>. This guide is what I have learned since, written so a kid could follow along but with enough depth for anyone building document AI in 2026.</p>

    <h2>What "Context Engineering" Actually Means</h2>
    <p>Context engineering is the practice of carefully choosing what information to put in front of an AI model so it can answer correctly. Sounds simple. It is not.</p>
    <p>When you ask a question to an AI assistant about a document, the model sees a few pages of context, your question, some relevant text chunks, maybe a system prompt. Everything else from the document is invisible. The model only knows what you put in front of it. If you put the wrong context, the model gives the wrong answer. If you put no context, the model hallucinates.</p>
    <p>RAG (Retrieval-Augmented Generation) is one approach. The idea: take a question, search a database of document chunks for relevant ones, paste them in front of the model, and let the model answer using those chunks. RAG is great for "what does the FAQ say about returns?" It is bad for "what did we spend on AWS in March?", because the answer requires understanding multiple line items across multiple invoices, not retrieving one paragraph.</p>
    <p>Context engineering is the broader discipline that includes RAG plus everything else you put in front of the model.</p>
    <p>If you are brand new to OCR and document AI, our <a href="/resources/blogs/optical-character-reader-2026">optical character reader 2026 piece</a> is the simpler starting point.</p>

    <h2>Why RAG Alone Falls Short</h2>
    <p>RAG works beautifully when these three things are true:</p>
    <ol>
      <li>The answer to the question lives in one chunk of one document.</li>
      <li>That chunk contains everything needed to answer.</li>
      <li>The right chunk can be reliably found via similarity search.</li>
    </ol>
    <p>For document AI, those three are usually <em>not</em> all true. Here is when RAG breaks:</p>

    <h3>1. Cross-Document Questions</h3>
    <p>"What did we spend on AWS in March?" requires summing line items across many invoices. No single chunk contains the answer. RAG retrieves one or two AWS invoices, the model sums them, and reports a confidently wrong number that excludes the other 12.</p>

    <h3>2. Structured Data Questions</h3>
    <p>"List all our vendors over $10K this quarter." The answer is a table, not a paragraph. RAG retrieves paragraphs. The model fabricates a table that may or may not reflect reality.</p>

    <h3>3. Temporal Questions</h3>
    <p>"How has our AWS spending changed since January?" Requires structured data over time, not chunks of text. RAG fails because chunks have no inherent time structure.</p>

    <h3>4. Schema-Sensitive Questions</h3>
    <p>"What is the late fee on this contract?" There may be a section labeled "Late Fee" or buried in a Payment Terms paragraph. RAG retrieves the most semantically similar chunk, which may or may not be the right one.</p>

    <p>The shared problem: RAG assumes the answer is a paragraph. Real document AI questions usually require structure, not paragraphs.</p>

    <h2>The Four-Layer Context Stack That Works</h2>
    <p>After rebuilding our invoice Q&A three times, here is the stack we ship today. Use it as a template.</p>

    <h3>Layer 1: Extracted Structured Data</h3>
    <p>For every document in your system, you extract structured data at ingestion time, vendor, amounts, dates, line items, as JSON. This is the unsexy work that nobody wants to do, and it is what makes everything else possible. (See our <a href="/resources/blogs/data-normalization-extracted-documents">data normalization piece</a>.)</p>
    <p>When a question comes in, you query the structured data first. "AWS spending in March" → SQL-like query against your vendor and date columns. Returns an exact number. No hallucination possible.</p>

    <h3>Layer 2: Document Metadata</h3>
    <p>Title, date, vendor, document type, page count, classification. All extracted at ingestion. The model can use metadata to filter relevant documents before retrieval.</p>
    <p>"What did we agree to with Acme in 2025?", filter to documents tagged vendor=Acme, year=2025, type=contract. Then retrieve within that subset. Massive reduction in noise.</p>

    <h3>Layer 3: Document Chunks With Position</h3>
    <p>Classic RAG, but with position info preserved. Not just "this chunk is similar to the query" but "this chunk is from page 7, section 3.2, of the Acme contract". Position lets the model cite sources accurately and lets you verify.</p>

    <h3>Layer 4: System Context</h3>
    <p>What kind of question is this? Is it asking for a number, a list, a paragraph? Is it asking about one document or many? Route different question types through different context stacks.</p>
    <p>"What is the late fee?" → fetch the contract, run structured extraction for fee fields, return as JSON.</p>
    <p>"Summarize the Acme contract" → fetch the contract, run RAG over its chunks, return a synthesis.</p>
    <p>"Total AWS spending in March" → run structured query against the database, skip RAG entirely.</p>

    <h2>The Pattern That Killed Our First RAG</h2>
    <p>The first version of our system used one context stack for all questions. Every question went through RAG. Numeric questions got paragraph answers. List questions got prose. Cross-document questions got cherry-picked single chunks.</p>
    <p>The fix was routing. We added a classifier upstream that identified the question type and routed it through the right context stack. Numeric questions go to structured data. Definitional questions go to RAG. Cross-document questions go to a hybrid that queries structured data first and uses RAG for any narrative explanation needed.</p>
    <p>Our accuracy on a 200-question benchmark went from 47% to 89% in two weeks. The model did not change. The retrieval did not change. The context stack changed.</p>

    <h2>The Three Mistakes I See Teams Make Constantly</h2>

    <h3>Mistake 1: Trusting Embeddings Too Much</h3>
    <p>Embeddings are great at "semantically similar". They are bad at "exactly this number" or "this specific clause". If your question requires precision, do not rely on similarity search.</p>

    <h3>Mistake 2: Skipping Structured Extraction</h3>
    <p>Teams often skip the structured-extraction step because "RAG will figure it out". RAG will not figure it out for structured questions. Pay the upfront cost to extract structured data; you will recover it many times over in answer accuracy.</p>

    <h3>Mistake 3: One Context Stack for Everything</h3>
    <p>Different questions need different context. Route by question type. The classifier can be small, a 1B-parameter model or even a simple rule-based router. The accuracy lift is enormous.</p>

    <h2>The "Context of Context" Problem</h2>
    <p>This is the meta-problem nobody warns you about. As your document set grows, the context you can fit in front of the model stays roughly constant (current LLMs handle 200K-2M tokens, but practical context is much smaller). The ratio of available context to total knowledge keeps shrinking. The model sees less and less of the picture.</p>
    <p>Solutions:</p>
    <ul>
      <li><strong>Better metadata.</strong> Filter aggressively before retrieval. Most documents in your system are irrelevant to any given question.</li>
      <li><strong>Hierarchical retrieval.</strong> First retrieve relevant documents, then retrieve relevant sections within them, then retrieve relevant chunks within sections.</li>
      <li><strong>Pre-computed summaries.</strong> Index document summaries alongside chunks. Use summaries for first-pass retrieval, then drill into chunks.</li>
      <li><strong>Structured data as ground truth.</strong> The structured layer scales with database size, not context window. Use it whenever possible.</li>
    </ul>

    <h2>The Way I Explain Context Engineering to Non-Engineers</h2>
    <p>Imagine you have a brilliant assistant who can read very fast but can only hold a few pages at a time. You give her a stack of files and a question. The question is "what did we spend on AWS in March?".</p>
    <p>Bad context: you hand her the top three files and hope. Sometimes the right file is on top. Often it isn't. She gives you a confident answer based on whatever is in front of her.</p>
    <p>Good context: you have already gone through every file and made a spreadsheet of vendor, date, amount. You hand her the spreadsheet first. She filters by vendor=AWS, sums by month, gives you the right number.</p>
    <p>Context engineering is the work of preparing what the assistant sees. The smarter your preparation, the better the answer. The model is the easy part. The context is the hard part.</p>

    <h2>What I'd Do Today</h2>
    <p>If you are starting a document AI project: do structured extraction first. Build the JSON index of your documents before you build the chat interface. The chat interface is glamorous; the JSON index is what actually answers questions correctly.</p>
    <p>If you already have a RAG system that disappoints: add a question router. Classify questions by type, route to different context stacks. The accuracy lift is dramatic and the engineering is small.</p>
    <p>If you are evaluating vendors: ask them what their context stack looks like for cross-document questions. If the answer is "we use RAG", expect failures on anything beyond definitional questions. The good vendors have hybrid stacks. (<a href="/author/nupura-ughade">I write about these patterns a lot</a>.)</p>

    <h2>Frequently Asked Questions</h2>

    <h3>What is context engineering in AI?</h3>
    <p>Context engineering is the practice of carefully choosing what information to put in front of an AI model so it can answer correctly. It includes RAG (Retrieval-Augmented Generation) but extends to structured data, metadata, system prompts, and routing logic.</p>

    <h3>Why does RAG fail for some document questions?</h3>
    <p>RAG works when the answer fits in one paragraph that is semantically similar to the question. It fails for cross-document questions, structured questions (lists, tables), temporal questions, and schema-sensitive questions. The fix is hybrid context stacks that route different question types through different retrieval strategies.</p>

    <h3>What is the difference between RAG and context engineering?</h3>
    <p>RAG is one technique within context engineering. Context engineering is the broader discipline that includes RAG, structured extraction, metadata filtering, question routing, and system context design. Most production document AI uses many context techniques, not just RAG.</p>

    <h3>How do I improve a RAG system that gives wrong answers?</h3>
    <p>Three steps. First, add structured extraction so numeric and list questions can query a database instead of chunks. Second, add a question router that classifies questions and uses different context stacks per type. Third, improve metadata so retrieval can filter relevant documents before similarity search.</p>

    <h3>Do I need an LLM with a million-token context window?</h3>
    <p>Usually no. Large context windows help with single-document analysis. They do not solve cross-document or structured-data questions, which are the harder failure modes. Smarter context engineering beats more context.</p>

    <h3>What does "context of context" mean?</h3>
    <p>As your document set grows, the model sees a shrinking percentage of available knowledge. The "context of context" problem is recognizing that what the model sees has its own context, and you need to manage that meta-context with metadata, summaries, and hierarchical retrieval.</p>
  `,
  image: "/images/intelligent-document-processing.png",
  featuredImage: "/images/intelligent-document-processing.png",
  category: "AI Document Intelligence",
  date: "June 17, 2026",
  datePublished: "2026-06-17T00:00:00.000Z",
  dateModified: "2026-06-17T00:00:00.000Z",
  last_updated: "June 17, 2026",
  readTime: "10 min read",
  author: nupuraUghade,
  primary_keyword: "context engineering",
  secondary_keywords: [
    "context of context",
    "context engineering ai",
    "rag failures",
    "document ai context",
    "llm context",
    "prompt engineering",
    "retrieval augmented generation",
  ],
  tags: ["context engineering", "RAG", "document AI", "LLM"],
  cluster: "ai-doc",
  faq: [
    {
      question: "What is context engineering in AI?",
      answer:
        "Context engineering is the practice of carefully choosing what information to put in front of an AI model so it can answer correctly. It includes RAG but extends to structured data, metadata, system prompts, and routing logic.",
    },
    {
      question: "Why does RAG fail for some document questions?",
      answer:
        "RAG works when the answer fits in one paragraph semantically similar to the question. It fails for cross-document, structured, temporal, and schema-sensitive questions. Fix: hybrid context stacks that route question types through different strategies.",
    },
    {
      question: "What is the difference between RAG and context engineering?",
      answer:
        "RAG is one technique within context engineering. Context engineering is the broader discipline including RAG, structured extraction, metadata filtering, question routing, and system context design.",
    },
    {
      question: "How do I improve a RAG system that gives wrong answers?",
      answer:
        "Three steps. Add structured extraction so numeric/list questions query a database. Add a question router that classifies and uses different context stacks per type. Improve metadata so retrieval can filter relevant documents before similarity search.",
    },
    {
      question: "Do I need an LLM with a million-token context window?",
      answer:
        "Usually no. Large windows help single-document analysis but do not solve cross-document or structured-data questions, the harder failure modes. Smarter context engineering beats more context.",
    },
    {
      question: "What does 'context of context' mean?",
      answer:
        "As your document set grows, the model sees a shrinking percentage of available knowledge. The 'context of context' problem is recognizing that what the model sees has its own context, manage it with metadata, summaries, and hierarchical retrieval.",
    },
  ],
}
