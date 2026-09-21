"use client"

import { useEffect, useRef, useState } from "react"

const TESSERACT_SRC = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js"
const PDFJS_SRC = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"
const PDFJS_WORKER = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"
const PDFJS_ASSETS = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/"

const MAX_BYTES = 25 * 1024 * 1024
const MAX_PDF_PAGES = 20

const LANGUAGES = [
  { code: "eng", label: "English" },
  { code: "spa", label: "Spanish" },
  { code: "fra", label: "French" },
  { code: "deu", label: "German" },
  { code: "ita", label: "Italian" },
  { code: "por", label: "Portuguese" },
  { code: "nld", label: "Dutch" },
  { code: "tur", label: "Turkish" },
  { code: "rus", label: "Russian" },
  { code: "ara", label: "Arabic" },
  { code: "hin", label: "Hindi" },
  { code: "chi_sim", label: "Chinese (Simplified)" },
  { code: "chi_tra", label: "Chinese (Traditional)" },
  { code: "jpn", label: "Japanese" },
  { code: "kor", label: "Korean" },
  { code: "vie", label: "Vietnamese" },
  { code: "ind", label: "Indonesian" },
]

const scriptCache: Record<string, Promise<void>> = {}
function loadScript(src: string): Promise<void> {
  if (!scriptCache[src]) {
    scriptCache[src] = new Promise((resolve, reject) => {
      const s = document.createElement("script")
      s.src = src
      s.async = true
      s.onload = () => resolve()
      s.onerror = () => {
        delete scriptCache[src]
        reject(new Error("Could not load " + src))
      }
      document.head.appendChild(s)
    })
  }
  return scriptCache[src]
}

export default function FreeOcr() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [lang, setLang] = useState("eng")
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState("")
  const [progress, setProgress] = useState(0)
  const [text, setText] = useState("")
  const [confidence, setConfidence] = useState<number | null>(null)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)
  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  function pick(f: File | null | undefined) {
    setError("")
    setText("")
    setConfidence(null)
    setProgress(0)
    setStatus("")
    if (!f) return
    const isPdf = f.type === "application/pdf" || f.name.toLowerCase().endsWith(".pdf")
    const isImage = f.type.startsWith("image/")
    if (!isPdf && !isImage) {
      setError("Please choose an image (PNG, JPG, WebP, BMP, GIF) or a PDF file.")
      return
    }
    if (f.size > MAX_BYTES) {
      setError("That file is larger than 25 MB. Try a smaller file or fewer pages.")
      return
    }
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setPreviewUrl(isImage ? URL.createObjectURL(f) : null)
    setFile(f)
  }

  async function run() {
    if (!file || busy) return
    setBusy(true)
    setError("")
    setText("")
    setConfidence(null)
    setProgress(0)
    let worker: any = null
    try {
      setStatus("Loading the OCR engine. The first run downloads about 10 MB of language data, then it is cached.")
      await loadScript(TESSERACT_SRC)
      const T = (window as any).Tesseract
      let pageIndex = 0
      let pageTotal = 1
      worker = await T.createWorker(lang, 1, {
        logger: (m: any) => {
          if (m.status === "recognizing text") {
            setProgress(Math.min(0.99, (pageIndex + m.progress) / pageTotal))
          }
        },
      })

      const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")
      const confidences: number[] = []
      if (isPdf) {
        setStatus("Reading the PDF pages in your browser")
        await loadScript(PDFJS_SRC)
        const pdfjs = (window as any).pdfjsLib
        pdfjs.GlobalWorkerOptions.workerSrc = PDFJS_WORKER
        const data = new Uint8Array(await file.arrayBuffer())
        const pdf = await pdfjs.getDocument({
          data,
          standardFontDataUrl: PDFJS_ASSETS + "standard_fonts/",
          cMapUrl: PDFJS_ASSETS + "cmaps/",
          cMapPacked: true,
        }).promise
        pageTotal = Math.min(pdf.numPages, MAX_PDF_PAGES)
        const parts: string[] = []
        for (let i = 1; i <= pageTotal; i++) {
          pageIndex = i - 1
          setStatus(`Reading page ${i} of ${pageTotal}`)
          const page = await pdf.getPage(i)
          const viewport = page.getViewport({ scale: 2 })
          const canvas = document.createElement("canvas")
          canvas.width = viewport.width
          canvas.height = viewport.height
          // "print" intent avoids requestAnimationFrame, so it keeps working if the user switches tabs
          await page.render({ canvasContext: canvas.getContext("2d"), viewport, intent: "print" }).promise
          const res = await worker.recognize(canvas)
          parts.push(pageTotal > 1 ? `Page ${i}\n\n${res.data.text.trim()}` : res.data.text.trim())
          confidences.push(res.data.confidence)
        }
        setText(parts.join("\n\n\n"))
        if (pdf.numPages > MAX_PDF_PAGES) {
          setError(`Only the first ${MAX_PDF_PAGES} pages were read. Split larger PDFs or use an API for bulk work.`)
        }
      } else {
        setStatus("Reading the image")
        const res = await worker.recognize(file)
        setText(res.data.text.trim())
        confidences.push(res.data.confidence)
      }
      setConfidence(Math.round(confidences.reduce((a, b) => a + b, 0) / confidences.length))
      setProgress(1)
      setStatus("Done")
    } catch (e: any) {
      setError("Something went wrong while reading this file. " + (e?.message || "") + " Check your connection (the engine loads from a CDN) and try again.")
      setStatus("")
    } finally {
      if (worker) {
        try {
          await worker.terminate()
        } catch (e) {}
      }
      setBusy(false)
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (e) {
      setError("Copy failed. Select the text and copy it manually.")
    }
  }

  function download() {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = (file?.name.replace(/\.[^.]+$/, "") || "ocr-text") + ".txt"
    a.click()
    URL.revokeObjectURL(url)
  }

  const words = text.trim() ? text.trim().split(/\s+/).length : 0

  return (
    <section className="bg-slate-50 py-10" id="tool">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div
            onDragOver={(e) => {
              e.preventDefault()
              setDragging(true)
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault()
              setDragging(false)
              pick(e.dataTransfer.files?.[0])
            }}
            className={`rounded-xl border-2 border-dashed p-6 text-center transition-colors ${
              dragging ? "border-indigo-500 bg-indigo-50" : "border-slate-300 bg-slate-50"
            }`}
          >
            <input
              ref={inputRef}
              type="file"
              accept="image/*,application/pdf,.pdf"
              className="hidden"
              onChange={(e) => pick(e.target.files?.[0])}
              aria-label="Choose an image or PDF to extract text from"
            />
            {previewUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={previewUrl} alt="Preview of the selected file" className="mx-auto mb-4 max-h-48 rounded-lg border border-slate-200" />
            )}
            <p className="text-lg font-semibold text-slate-900">
              {file ? file.name : "Drop an image or PDF here"}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              PNG, JPG, WebP, BMP, GIF or PDF. Up to 25 MB, PDFs up to {MAX_PDF_PAGES} pages.
            </p>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="mt-4 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
            >
              {file ? "Choose a different file" : "Choose a file"}
            </button>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end">
            <label className="flex-1 text-sm font-medium text-slate-800">
              Language of the text
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                disabled={busy}
                className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900"
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              onClick={run}
              disabled={!file || busy}
              className="rounded-lg bg-indigo-600 px-6 py-2.5 font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {busy ? "Reading..." : "Extract text"}
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-600">
            Your file stays in your browser. It is not uploaded to DocsAPI or any server. The engine and language data
            download from a public CDN.
          </p>

          <div aria-live="polite" className="mt-4">
            {busy && (
              <div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full bg-indigo-600 transition-all" style={{ width: `${Math.round(progress * 100)}%` }} />
                </div>
                <p className="mt-2 text-sm text-slate-700">{status}</p>
              </div>
            )}
            {!busy && status === "Done" && (
              <p className="text-sm text-emerald-700">
                Done. {words} words read
                {confidence !== null ? `, average engine confidence ${confidence}%` : ""}. Confidence is the engine&apos;s
                own estimate, not a measured accuracy, so check anything important.
              </p>
            )}
            {error && <p className="mt-2 text-sm text-red-700">{error}</p>}
          </div>

          {(text || status === "Done") && (
            <div className="mt-5">
              <label htmlFor="ocr-output" className="text-sm font-medium text-slate-800">
                Extracted text (you can edit it)
              </label>
              <textarea
                id="ocr-output"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={12}
                className="mt-1 w-full rounded-lg border border-slate-300 p-3 font-mono text-sm text-slate-900"
              />
              <div className="mt-3 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={copy}
                  className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
                >
                  {copied ? "Copied" : "Copy text"}
                </button>
                <button
                  type="button"
                  onClick={download}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
                >
                  Download as .txt
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
