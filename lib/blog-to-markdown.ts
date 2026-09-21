import type { BlogPost } from "@/types/resources"
import { SITE_URL, blogUrl, authorUrl } from "./seo"

/**
 * Convert a BlogPost into clean Markdown for AI-bot consumption.
 *
 * Per AEO citation engineering — AI crawlers parse HTML poorly (nav bars,
 * scripts, layout chrome are noise). A markdown twin uses 30-50% fewer
 * tokens so more of OUR content lands inside the model's context window.
 *
 * IMPORTANT: the markdown twin must include a visible canonical link to the
 * HTML URL so AI engines cite the HTML, not the .md.
 */
export function blogToMarkdown(blog: BlogPost): string {
  const canonical = blogUrl(blog.slug)
  const author = blog.author
  const lines: string[] = []

  // Frontmatter-style metadata block (machine + human readable)
  lines.push(`# ${blog.title}`)
  lines.push("")
  lines.push(`> ${blog.description ?? blog.excerpt}`)
  lines.push("")
  if (blog.summary) {
    lines.push(`**In short:** ${blog.summary}`)
    lines.push("")
  }
  lines.push(`**Canonical URL:** ${canonical}`)
  lines.push(`**Author:** ${author.name} — ${author.title}`)
  if (author.linkedin) lines.push(`**Author LinkedIn:** ${author.linkedin}`)
  lines.push(`**Published:** ${blog.datePublished ?? blog.date}`)
  lines.push(`**Updated:** ${blog.last_updated ?? blog.date}`)
  if (blog.primary_keyword) lines.push(`**Primary topic:** ${blog.primary_keyword}`)
  lines.push(`**Site:** ${SITE_URL} (DocsAPI — Document AI & OCR API for SMB Lending)`)
  lines.push("")
  lines.push("---")
  lines.push("")

  // Body — HTML → Markdown
  lines.push(htmlToMarkdown(blog.content))

  // FAQ as structured Q&A (AI engines lift these wholesale)
  if (blog.faq && blog.faq.length > 0) {
    lines.push("")
    lines.push("## Frequently Asked Questions")
    lines.push("")
    for (const item of blog.faq) {
      lines.push(`### ${item.question}`)
      lines.push("")
      lines.push(item.answer)
      lines.push("")
    }
  }

  // Citation footer — every fetched markdown twin links back to source
  lines.push("")
  lines.push("---")
  lines.push("")
  lines.push(`**Source URL (cite this):** ${canonical}`)
  lines.push(`**Author profile:** ${authorUrl(author.slug)}`)
  lines.push(`**Published by:** DocsAPI (${SITE_URL})`)
  lines.push("")

  return lines.join("\n")
}

/**
 * Lightweight HTML → Markdown converter for the inline blog HTML strings.
 * Handles: h2/h3/h4, p, ul/ol/li, strong/em/code, a, table, pre/code,
 * blockquote. Strips unknown tags. No external dependencies.
 */
function htmlToMarkdown(html: string): string {
  let md = html

  // Normalize whitespace inside tags
  md = md.replace(/\s+/g, " ")
  md = md.replace(/>\s+</g, "><")

  // Block-level: open with newline before, close with newline after
  md = md.replace(/<h1[^>]*>(.*?)<\/h1>/gi, "\n\n# $1\n\n")
  md = md.replace(/<h2[^>]*>(.*?)<\/h2>/gi, "\n\n## $1\n\n")
  md = md.replace(/<h3[^>]*>(.*?)<\/h3>/gi, "\n\n### $1\n\n")
  md = md.replace(/<h4[^>]*>(.*?)<\/h4>/gi, "\n\n#### $1\n\n")

  // Tables — preserve as markdown tables (simple two-row header form)
  md = md.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_, inner) => {
    const headRowMatch = inner.match(/<thead[^>]*>([\s\S]*?)<\/thead>/i)
    const bodyRowsMatch = inner.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/i)
    const headHtml = headRowMatch ? headRowMatch[1] : ""
    const bodyHtml = bodyRowsMatch ? bodyRowsMatch[1] : inner

    const extractCells = (rowHtml: string): string[] => {
      const cells: string[] = []
      for (const m of rowHtml.matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi)) {
        cells.push(stripTags(m[1]).trim().replace(/\|/g, "\\|"))
      }
      return cells
    }

    const headerCells = extractCells(headHtml)
    const bodyRows: string[][] = []
    for (const m of bodyHtml.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)) {
      const cells = extractCells(m[1])
      if (cells.length > 0) bodyRows.push(cells)
    }

    if (headerCells.length === 0 && bodyRows.length === 0) return ""

    const cols = headerCells.length || bodyRows[0]?.length || 0
    const headerLine = headerCells.length
      ? `| ${headerCells.join(" | ")} |`
      : `| ${Array(cols).fill(" ").join(" | ")} |`
    const sepLine = `| ${Array(cols).fill("---").join(" | ")} |`
    const bodyLines = bodyRows.map((r) => `| ${r.join(" | ")} |`)

    return `\n\n${headerLine}\n${sepLine}\n${bodyLines.join("\n")}\n\n`
  })

  // Code blocks
  md = md.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, code) => {
    return `\n\n\`\`\`\n${decodeEntities(code).trim()}\n\`\`\`\n\n`
  })
  md = md.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_, code) => {
    return `\n\n\`\`\`\n${decodeEntities(stripTags(code)).trim()}\n\`\`\`\n\n`
  })

  // Lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, inner: string) => {
    const items: string[] = []
    for (const m of inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)) {
      items.push(`- ${stripTags(m[1]).trim()}`)
    }
    return "\n\n" + items.join("\n") + "\n\n"
  })
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, inner: string) => {
    const items: string[] = []
    let i = 0
    for (const m of inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)) {
      items.push(`${i + 1}. ${stripTags(m[1]).trim()}`)
      i++
    }
    return "\n\n" + items.join("\n") + "\n\n"
  })

  // Blockquote
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, inner) => {
    return (
      "\n\n" +
      stripTags(inner)
        .trim()
        .split("\n")
        .map((line) => `> ${line.trim()}`)
        .join("\n") +
      "\n\n"
    )
  })

  // Paragraphs
  md = md.replace(/<p[^>]*>(.*?)<\/p>/gi, "\n\n$1\n\n")

  // Inline tags — order matters
  md = md.replace(/<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)")
  md = md.replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**")
  md = md.replace(/<b[^>]*>(.*?)<\/b>/gi, "**$1**")
  md = md.replace(/<em[^>]*>(.*?)<\/em>/gi, "*$1*")
  md = md.replace(/<i[^>]*>(.*?)<\/i>/gi, "*$1*")
  md = md.replace(/<code[^>]*>(.*?)<\/code>/gi, "`$1`")
  md = md.replace(/<br\s*\/?>/gi, "\n")

  // Strip everything else
  md = stripTags(md)
  md = decodeEntities(md)

  // Tidy whitespace
  md = md.replace(/\n{3,}/g, "\n\n").trim()
  return md
}

function stripTags(s: string): string {
  return s.replace(/<[^>]+>/g, "")
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&hellip;/g, "…")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, "\"")
    .replace(/&ldquo;/g, "\"")
}
