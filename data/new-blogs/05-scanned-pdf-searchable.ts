import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../authors"

export const blog05: BlogPost = {
  id: "new-05",
  title: "How to Make a Scanned PDF Searchable on Mac, Windows, Linux",
  slug: "scanned-pdf-searchable",
  excerpt:
    "Three machines, three operating systems, a court doc due Monday, here are the exact steps to make a scanned PDF searchable on Mac, Windows, and Linux.",
  description:
    "Step-by-step guide to making a scanned PDF searchable on Mac, Windows, and Linux, free options, paid options, and what to do when nothing works.",
  metaTag: "Make Scanned PDF Searchable: Mac, Windows, Linux Guide",
  content: `
    <p>It was a Saturday in February. I had three machines, three operating systems, and a 200-page court document I needed searchable by Monday morning. The lawyer needed to find every mention of one shell company across what looked like a phone book of evidence. My Mac was at home. My work Windows laptop was in the office. My personal Linux server was running in the basement.</p>
    <p>This guide is what I figured out that weekend. By the end, you will know exactly how to make a scanned PDF searchable on any of the three big operating systems, free or paid, with or without internet.</p>

    <h2>What "Make a Scanned PDF Searchable" Actually Means</h2>
    <p>When you scan a paper document, the scanner saves it as a picture. The picture looks like a page of text, but to your computer it is just colored shapes. Ctrl+F finds nothing because there is no text to search.</p>
    <p>"Making it searchable" means running the picture through an <strong>OCR engine</strong>. OCR (Optical Character Recognition) reads the picture and writes down all the words it sees. The words get tucked into an invisible layer behind the original picture. The PDF still looks the same. But now Ctrl+F works, you can copy text out, and screen readers can read the page aloud.</p>
    <p>The exact steps for OCR depend on what operating system you are on. If you want the simple cross-platform answer, our <a href="/resources/blogs/make-pdf-searchable">make a PDF searchable guide</a> covers the universal 30-second method. This article goes deeper on Mac, Windows, and Linux specifically, for folks who want native tools, free options, and offline-capable workflows.</p>

    <h2>On a Mac: Three Ways That Work</h2>

    <h3>Mac Way 1: Preview's Hidden OCR (macOS 15.2 and later)</h3>
    <p>Apple quietly added OCR to Preview in macOS Sequoia. Most people do not know. Open the scanned PDF in Preview, then File → Export → and check "Add searchable text" before saving. That's it.</p>
    <p>It only works for documents under a few hundred pages. It is not the best OCR engine. But it is built in, free, and works offline.</p>

    <h3>Mac Way 2: ocrmypdf via Homebrew (Best Free Option)</h3>
    <p>This is what I use day-to-day. Install once, use forever. Open Terminal and run:</p>
    <pre><code>brew install tesseract ocrmypdf
ocrmypdf scanned.pdf searchable.pdf</code></pre>
    <p>Two commands. The first installs the tool. The second runs OCR on your file. The output PDF looks identical to the input but is fully searchable.</p>
    <p>Real timings from my Mac (M2, 16GB):</p>
    <ul>
      <li>10 pages: under 10 seconds</li>
      <li>100 pages: about 90 seconds</li>
      <li>1,000 pages: about 18 minutes</li>
    </ul>
    <p>Add <code>--deskew</code> and <code>--rotate-pages</code> flags if your scan has tilted or sideways pages. Both are cheap and recover real accuracy. (<a href="/resources/blogs/document-detection-before-ocr">More on this in our document detection piece</a>.)</p>

    <h3>Mac Way 3: DocsAPI Dashboard (Fastest, Cloud-Based)</h3>
    <p>If your document is not sensitive and you want speed, drag-and-drop into the <a href="/products">DocsAPI dashboard</a>. Upload, wait 30 seconds, download. Works in any browser. No install. The layout stays perfect, signatures, stamps, tables, all in the same spots.</p>
    <p>This is what I use for client work where I need it done before my coffee gets cold.</p>

    <h2>On Windows: Three Ways That Work</h2>

    <h3>Windows Way 1: PowerToys "Text Extractor" + Manual Re-PDF</h3>
    <p>Windows 11's PowerToys has a Text Extractor module that does OCR on screenshots. It is not a PDF tool per se, but you can screen-capture each page, OCR it, and stitch results into a text document. Tedious but free and offline. Good for one or two pages, terrible for anything longer.</p>

    <h3>Windows Way 2: ocrmypdf via Chocolatey or WSL</h3>
    <p>Same engine as the Mac approach, just installed differently. Two options on Windows:</p>
    <ul>
      <li><strong>Chocolatey:</strong> <code>choco install ocrmypdf</code> then <code>ocrmypdf scanned.pdf searchable.pdf</code></li>
      <li><strong>WSL (Windows Subsystem for Linux):</strong> Open Ubuntu in WSL, run <code>sudo apt install ocrmypdf</code>, then use it like on Linux</li>
    </ul>
    <p>WSL is my preferred path on Windows. It feels native to anyone who has used Linux and behaves identically. Same flags, same speed, same accuracy.</p>

    <h3>Windows Way 3: DocsAPI Dashboard or API</h3>
    <p>Identical to the Mac path. Drag-and-drop the dashboard for one-off documents, or call the API from PowerShell or a script for automation. The API curl example:</p>
    <pre><code>curl.exe -X POST https://docsapi.co/v1/ocr/searchable ^
  -H "Authorization: Bearer YOUR_KEY" ^
  -F "file=@scanned.pdf" ^
  -o searchable.pdf</code></pre>
    <p>The carets are Windows' way of escaping line breaks in the cmd prompt. PowerShell uses backticks.</p>

    <h2>On Linux: The Power-User Path</h2>

    <h3>Linux Way 1: ocrmypdf via apt or dnf</h3>
    <p>Linux is where ocrmypdf shines. Install in one command:</p>
    <pre><code>sudo apt install ocrmypdf       # Ubuntu, Debian
sudo dnf install ocrmypdf       # Fedora, RHEL
sudo pacman -S ocrmypdf         # Arch</code></pre>
    <p>Then run it the same way as on Mac. Pipe it through a directory of PDFs with a for-loop and you have a batch processor:</p>
    <pre><code>for f in *.pdf; do
  ocrmypdf "$f" "ocr-$f"
done</code></pre>
    <p>I have a folder on my home server where I drop scanned PDFs. A cron job runs ocrmypdf on them every five minutes. The output lands in another folder. No human in the loop.</p>

    <h3>Linux Way 2: PaddleOCR for Specific Document Types</h3>
    <p>If you need better table support or multi-language documents, PaddleOCR is a strong free alternative. Install via pip and call from Python. The setup is more work but the layout-awareness is better than vanilla Tesseract. (We compare directly in <a href="/resources/blogs/paddleocr-vs-tesseract-vs-docsapi">PaddleOCR vs Tesseract vs DocsAPI</a>.)</p>

    <h3>Linux Way 3: DocsAPI for Cloud-Scale</h3>
    <p>Same as on Mac and Windows. Linux power users often prefer the API path because you can pipe it through shell scripts and existing automation. The endpoint accepts multipart uploads from curl, httpie, or anything that speaks HTTP.</p>

    <h2>What Operating System Should You Pick? (You Probably Cannot Choose)</h2>
    <p>For most people, the OS choice is decided by their work. But if you have flexibility and OCR is core to your workflow:</p>
    <table>
      <thead><tr><th>You want</th><th>Best OS</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td>Easiest setup</td><td>Mac</td><td>One brew command, plus built-in Preview OCR</td></tr>
        <tr><td>Batch processing on a server</td><td>Linux</td><td>Cron jobs, shell loops, native packages</td></tr>
        <tr><td>Office use, IT controls everything</td><td>Windows</td><td>Most workplaces lock down the alternatives</td></tr>
        <tr><td>No setup, just upload</td><td>Any</td><td>Use a cloud API, OS doesn't matter</td></tr>
      </tbody>
    </table>

    <h2>The Cross-Platform Cheat Sheet</h2>
    <p>If you do not care which OS and just want the universal answer:</p>
    <ol>
      <li><strong>One PDF, one-off, simple:</strong> Drag-and-drop into the <a href="/products">DocsAPI dashboard</a>. 30 seconds. Done.</li>
      <li><strong>Many PDFs, regular workflow:</strong> Install <code>ocrmypdf</code> via your package manager. Pipe a directory through it with a for-loop or cron.</li>
      <li><strong>Sensitive content, must stay local:</strong> ocrmypdf with no internet, fully air-gapped.</li>
      <li><strong>Tables, forms, mixed languages:</strong> Use a layout-aware engine. AWS Textract, Google Document AI, or DocsAPI. ocrmypdf alone will struggle. (See our <a href="/resources/blogs/ocr-pdf-honest-guide">honest guide</a>.)</li>
    </ol>

    <h2>The Tiny Pre-Processing Steps That Make a Huge Difference</h2>
    <p>Whatever OS and tool you pick, these five steps before OCR will recover the most accuracy. Skipping them is the single biggest reason people get bad OCR results:</p>
    <ol>
      <li><strong>Deskew.</strong> Straighten tilted pages. Most tools do this with a single flag.</li>
      <li><strong>Auto-rotate.</strong> Detect and fix sideways pages.</li>
      <li><strong>Upscale low-resolution scans.</strong> If pages are below 200 DPI, bump them up before OCR.</li>
      <li><strong>Strip existing text layer if it's broken.</strong> Use <code>--force-ocr</code> in ocrmypdf to replace garbage text layers.</li>
      <li><strong>Pass language hints.</strong> If you know the document is in two languages, pass both.</li>
    </ol>

    <h2>The Way to Explain This to a Kid</h2>
    <p>Imagine your computer wears glasses. Different operating systems are different brands of glasses, same purpose, different shape.</p>
    <p>A scanned PDF is a stack of photos. Your computer needs glasses to read what's in the photos. Mac, Windows, and Linux all come with a pair of glasses. They each call them by a different name. The glasses brand does not matter much; what matters is that you remember to put them on before trying to read.</p>
    <p>OCR is the act of putting the glasses on. After OCR, your computer can read every word on every page, no matter which operating system it is wearing.</p>

    <h2>What I'd Do Today</h2>
    <p>If you only need to do this once or twice: drag-and-drop the DocsAPI dashboard. No install. Done before your coffee cools.</p>
    <p>If you do this regularly: install <code>ocrmypdf</code> on whatever OS you're stuck with. Pipe directories through it. Five lines of script and you have a one-click pipeline.</p>
    <p>If you do this at production scale: use an API. The math comparing API costs vs engineer hours always favors the API. (<a href="/author/nupura-ughade">I have made this case in numbers many times</a>.)</p>
  `,
  image: "/images/ocr-process.png",
  featuredImage: "/images/ocr-process.png",
  category: "OCR How-To",
  date: "June 17, 2026",
  datePublished: "2026-06-17T00:00:00.000Z",
  dateModified: "2026-06-17T00:00:00.000Z",
  last_updated: "June 17, 2026",
  readTime: "9 min read",
  author: nupuraUghade,
  primary_keyword: "how do i make a searchable pdf document",
  secondary_keywords: [
    "make scanned pdf searchable",
    "ocr scanned pdf",
    "searchable pdf mac",
    "searchable pdf windows",
    "searchable pdf linux",
    "ocrmypdf",
    "pdf ocr command line",
  ],
  tags: ["scanned PDF", "OCR", "Mac", "Windows", "Linux"],
  cluster: "ocr",
  faq: [
    {
      question: "Can I make a scanned PDF searchable for free on any OS?",
      answer:
        "Yes. Use ocrmypdf on Mac (Homebrew), Windows (Chocolatey or WSL), or Linux (apt/dnf/pacman). It is free, runs offline, and wraps Tesseract with sensible defaults.",
    },
    {
      question: "Does macOS have built-in OCR for PDFs?",
      answer:
        "Sequoia and later: yes. Open the PDF in Preview, File → Export, check 'Add searchable text'. Earlier versions: no, use a third-party tool.",
    },
    {
      question: "Does Windows have built-in OCR for PDFs?",
      answer:
        "Not natively for PDFs. Windows has OCR in PowerToys Text Extractor and as a Windows API, but no built-in 'make this PDF searchable' feature. Use ocrmypdf via WSL for the simplest experience.",
    },
    {
      question: "What is the best OCR for Linux?",
      answer:
        "ocrmypdf (wrapping Tesseract) for general use. PaddleOCR if you need stronger multi-language or table support. Both are free and well-maintained.",
    },
    {
      question: "Will the searchable PDF look identical to the original?",
      answer:
        "Yes, with ocrmypdf or any modern API. OCR text sits invisibly behind the original pixels. Layout, signatures, stamps, and images stay in the same spots.",
    },
    {
      question: "Can I batch-process many scanned PDFs at once?",
      answer:
        "Yes. On Linux and macOS, use a shell for-loop. On Windows, use PowerShell or WSL. For cloud-scale, most OCR APIs (including DocsAPI) have batch endpoints accepting many files per call.",
    },
  ],
}
