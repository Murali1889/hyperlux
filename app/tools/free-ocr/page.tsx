import type { Metadata } from "next"
import Link from "next/link"
import FreeOcr from "@/components/tools/free-ocr"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PageJsonLd } from "@/components/json-ld/PageJsonLd"
import { JsonLd } from "@/components/json-ld/JsonLd"
import { SITE_URL, SITE_OG_IMAGE } from "@/lib/seo"

const PATH = "/tools/free-ocr"
const TITLE = "Free OCR Online: Image and PDF to Text, No Signup"
const DESCRIPTION =
  "Free OCR online tool that turns images and PDFs into editable text in your browser. No signup, no watermark, and your file is never uploaded."

export const metadata: Metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

const FAQS = [
  {
    question: "Is this free OCR tool really free, and is there a limit?",
    answer:
      "Yes. It is free with no account, no watermark and no daily quota, because the reading happens on your own device. The limits are practical ones: files up to 25 MB, PDFs up to 20 pages, and one file at a time.",
  },
  {
    question: "Do I need to download software or sign up?",
    answer:
      "No. This is a free OCR tool with no signup and nothing to install. Open the page, choose a file and press Extract text. On your first run your browser downloads the OCR engine and language data (about 10 MB for English), then caches them.",
  },
  {
    question: "Is my file uploaded to a server?",
    answer:
      "No. The image or PDF is read inside your browser and is not sent to DocsAPI or any other server. Only the open source OCR engine and its language data are downloaded from a public CDN. Your own security policy still applies to sensitive documents.",
  },
  {
    question: "Can I OCR a PDF for free here?",
    answer:
      "Yes. It is a free OCR PDF tool as well as an image tool: you can OCR PDF free here with no signup, for files up to 20 pages and 25 MB, and every page is read in your browser with nothing uploaded. If you want to keep a scanned PDF as a searchable PDF rather than plain text, a free command-line tool such as OCRmyPDF adds a text layer to the file.",
  },
  {
    question: "Which file types and languages does it support?",
    answer:
      "Images (PNG, JPG, WebP, BMP, GIF) and PDFs. Languages include English, Spanish, French, German, Italian, Portuguese, Dutch, Turkish, Russian, Arabic, Hindi, Chinese (Simplified and Traditional), Japanese, Korean, Vietnamese and Indonesian. Pick the language of the text before you press Extract text.",
  },
  {
    question: "Can it read handwriting?",
    answer:
      "Only poorly. The engine is built for printed text. On handwritten forms of mixed neatness, Tesseract scored 61% in our benchmark, so expect many errors and check the output by hand. Neat block capitals read better than cursive.",
  },
  {
    question: "Does it keep tables and layout?",
    answer:
      "No. You get plain text. Columns and tables usually come out as lines of text in reading order, so a bank statement or invoice table will need cleanup. Extracting tables reliably needs a document AI tool, which reads structure as well as characters.",
  },
  {
    question: "Why is my text wrong or full of strange characters?",
    answer:
      "The usual causes are a low resolution image, a skewed or curved page, poor contrast, the wrong language selected, or a photo with glare. Crop to the text, straighten the page, use a sharp photo or a 300 DPI scan, and select the right language, then run it again.",
  },
  {
    question: "Can I OCR many files at once?",
    answer:
      "Not here, it handles one file at a time. For bulk work you can script the open source engine yourself or use an OCR API that processes documents in batches. Our guide to choosing a tool covers when each makes sense.",
  },
  {
    question: "How is this different from Google Drive OCR or Adobe?",
    answer:
      "Google Drive can OCR a PDF if you open it with Google Docs, and Adobe Acrobat has an online OCR tool, but both need your file uploaded to their servers and an account. This tool reads the file locally, needs no account and outputs plain text rather than a formatted document.",
  },
  {
    question: "When should I stop using a free OCR tool?",
    answer:
      "When you have volume, need tables or specific fields such as invoice totals, need the output validated, or need an audit trail. At that point a document AI API saves more time than it costs, and the free tool becomes a good way to test what your documents look like.",
  },
]

export default function FreeOcrPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageJsonLd path={PATH} title={TITLE} description={DESCRIPTION} datePublished="2026-09-21" dateModified="2026-09-28" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "@id": `${SITE_URL}${PATH}#app`,
          name: "Free OCR Online",
          url: `${SITE_URL}${PATH}`,
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Web",
          description: DESCRIPTION,
          image: SITE_OG_IMAGE,
          isAccessibleForFree: true,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          provider: { "@id": `${SITE_URL}/#organization` },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />

      <section className="bg-white pb-4 pt-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-700">Free tool</p>
            <h1 className="mb-5 text-3xl font-bold text-slate-900 md:text-4xl">
              Free OCR Online: Image and PDF to Text, No Signup
            </h1>
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">In short</div>
              <p className="text-lg font-medium leading-snug text-slate-900">
                Drop an image or PDF and get editable text in seconds. It runs in your browser, so your file is never
                uploaded, and there is no signup, watermark or usage limit. It works best on clean printed text.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FreeOcr />

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <article className="prose prose-slate mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Is this really free OCR online with no download or signup?
            </h2>
            <p>
              Yes. It is a free OCR tool with no signup, no account, no watermark and nothing to install, which makes it
              an OCR online free no download option that works on any modern browser. OCR stands for optical character
              recognition: software that reads the letters in a picture and gives them back as text you can edit,
              search and copy.
            </p>
            <p>
              It works because the open source Tesseract engine runs inside your browser. That is also why there is no
              cost to us per file, and why we can offer it as a no cost OCR software option instead of a trial.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">How do I convert an image to text for free?</h2>
            <p>
              To extract text from an image for free, follow these four steps. The whole thing takes under a minute for a
              single page.
            </p>
            <ol>
              <li>Drop your image on the box above, or press Choose a file. Screenshots and phone photos both work.</li>
              <li>Select the language of the text. This matters: reading French with English selected gives poor results.</li>
              <li>Press Extract text and wait for the progress bar. The first run is slower because the engine downloads.</li>
              <li>Edit the result if needed, then copy it or download it as a .txt file.</li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Can I use free OCR for PDF files?</h2>
            <p>
              Yes. For a scanned PDF, the tool draws each page as an image and reads it, so a free OCR for PDF job works
              for up to 20 pages per file. The output is plain text, not a searchable PDF. If you need the original PDF
              to become searchable, read <Link href="/resources/blogs/make-pdf-searchable">how to make a PDF searchable</Link> or
              the cross-platform guide to <Link href="/resources/blogs/scanned-pdf-searchable">making a scanned PDF searchable</Link>.
              If you are not sure whether your PDF is scanned at all, the <Link href="/resources/blogs/readable-pdf-vs-image-pdf">two second test</Link> tells you.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">How accurate is this OCR scanner online free?</h2>
            <p>
              Accuracy depends far more on the document than on the tool. This is the same open source engine family we
              tested in our <Link href="/resources/blogs/ocr-accuracy-benchmark-2026">1,900-document OCR accuracy benchmark</Link>,
              where Tesseract 5.x scored as follows. Expect results in the same range, not identical numbers, because your
              documents are different from ours.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Document type</th>
                  <th>Tesseract accuracy in our benchmark</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Clean typed English</td><td>97-99%</td></tr>
                <tr><td>Multilingual (English plus Mandarin or Spanish)</td><td>71%</td></tr>
                <tr><td>Scanned multi-page bank statements (tables)</td><td>64%</td></tr>
                <tr><td>Handwritten forms of mixed neatness</td><td>61%</td></tr>
                <tr><td>Phone-photographed receipts (low quality)</td><td>58%</td></tr>
              </tbody>
            </table>
            <p>
              So a clear screenshot or a clean scan of a printed page will come out well. A crumpled receipt photographed
              in poor light will not. That is a limit of the engine, not something a setting can fix.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">What does a free tool not do well?</h2>
            <ul>
              <li><strong>Tables and forms.</strong> You get lines of text, not rows and columns, so line items and statements need cleanup.</li>
              <li><strong>Handwriting.</strong> Printed text only, in practice.</li>
              <li><strong>Many files.</strong> One file at a time, up to 25 MB.</li>
              <li><strong>Checking the result.</strong> The tool shows the engine&apos;s own confidence, which is not the same as being right.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">How do I get better results?</h2>
            <ol>
              <li>Use a sharp image. For scans, 300 DPI is a good target; a tiny screenshot of small text will fail.</li>
              <li>Crop to the text. Borders, shadows and page edges create false characters.</li>
              <li>Straighten the page. A page rotated even a few degrees hurts accuracy.</li>
              <li>Improve contrast. Dark text on a light background reads best.</li>
              <li>Pick the correct language, and use one language per run.</li>
              <li>Avoid glare and shadows when photographing paper. Lay it flat in even light.</li>
            </ol>

            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">What is the best free online OCR?</h2>
            <p>
              The best free online OCR depends on what you need. Choose this tool if you want no signup and want the file
              to stay on your device. Choose Google Drive (upload a PDF, then open it with Google Docs) if you want a quick
              editable document and are comfortable uploading. We tested 11 free tools on one 12-page document, and only 3
              were worth using; the full results and the traps to avoid are in our <Link href="/resources/blogs/free-online-ocr-tools">free online OCR tools review</Link>.
              If you are choosing software for regular or business use, see <Link href="/resources/blogs/best-ocr-software-2026">the best OCR software in 2026 by use case</Link>,
              or answer six questions in the <Link href="/tools/which-ocr">Which OCR should I use selector</Link>.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">When is free not enough?</h2>
            <p>
              A free tool is right for a page here and there. It stops being right when you process documents every day,
              need specific fields (an invoice total, an account number, a date), need tables kept intact, or need proof of
              what was read. Those jobs are what a document AI API is for. DocsAPI is our product, so weigh that when you
              read this: it reads documents such as{" "}
              <Link href="/documents/financial-docs">invoices, bank statements and purchase orders</Link> into structured
              fields, and you can see how it compares in the <Link href="/resources/blogs/aws-textract-vs-docsapi">AWS Textract comparison</Link> and
              on the <Link href="/products">products page</Link>. If your text keeps coming out wrong, the guide to{" "}
              <Link href="/resources/blogs/ocr-pdf-honest-guide">OCR from 4 million pages a month</Link> explains why and what to try.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Frequently asked questions</h2>
            {FAQS.map((f) => (
              <div key={f.question}>
                <h3 className="text-lg font-semibold text-slate-900">{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}

            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">How this tool works and where the pieces come from</h2>
            <p>
              Text recognition uses <a href="https://github.com/tesseract-ocr/tesseract">Tesseract</a>, the open source OCR engine,
              through its browser build <a href="https://github.com/naptha/tesseract.js">tesseract.js</a>. PDF pages are drawn
              with Mozilla&apos;s <a href="https://mozilla.github.io/pdf.js/">PDF.js</a>. The engine and language data are loaded
              from public CDNs the first time you use the tool. Nothing you choose is uploaded. The accuracy figures come from
              our <Link href="/resources/blogs/ocr-accuracy-benchmark-2026">published benchmark</Link>.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
