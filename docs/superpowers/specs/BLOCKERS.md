# Open Blockers — Ask Before Publishing

Items shipped with placeholder values. **Search-and-replace before deploy.**

Each entry below has a unique grep-safe marker so you can find every occurrence in one pass.

---

## 1. Nupura Ughade's LinkedIn URL

- **Placeholder shipped:** `https://www.linkedin.com/in/nupura-ughade`
- **Grep marker:** `# TODO(BLOCKER-LINKEDIN)`
- **Files touched:** `data/authors.ts`, `data/blogs.ts` (existing 3 author objects), `components/json-ld/PersonJsonLd.tsx` consumers
- **Replace command (once confirmed):**
  ```bash
  grep -rl "linkedin.com/in/nupura-ughade" --include="*.ts" --include="*.tsx" . | xargs sed -i '' 's|https://www.linkedin.com/in/nupura-ughade|<REAL_URL>|g'
  ```

## 2. Nupura Ughade's Twitter/X URL

- **Placeholder shipped:** `https://twitter.com/nupura_ughade`
- **Grep marker:** `# TODO(BLOCKER-TWITTER)`
- **Files touched:** `data/authors.ts`, `data/blogs.ts` (existing 3 author objects)
- **Alternative:** remove the `twitter` field entirely from `data/authors.ts` if Nupura has no public X account
- **Replace command:**
  ```bash
  grep -rl "twitter.com/nupura_ughade" --include="*.ts" --include="*.tsx" . | xargs sed -i '' 's|https://twitter.com/nupura_ughade|<REAL_URL>|g'
  ```

---

## Resolved

- ✅ **Production domain:** `https://docsapi.com` — confirmed 2026-06-17 by Murali
- ✅ **Author identity:** Nupura Ughade as sole author — confirmed during brainstorm
- ✅ **Topic mix:** Balanced (8 OCR / 5 AI / 4 compliance / 3 comparison) — confirmed

---

## How I'll prompt you at the end

When the build is verified and everything is committed, I'll print:

```
3 blockers from BLOCKERS.md still open:
  1. Nupura's real LinkedIn URL  (currently placeholder)
  2. Nupura's real Twitter URL   (currently placeholder, or skip)
  3. Google Search Console verification code  (optional, not added)

Reply with the values (or 'skip Twitter' / 'no GSC code') and I'll patch + recommit.
```
