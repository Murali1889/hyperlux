# Open Blockers — ALL RESOLVED

All open blockers from the original implementation have been resolved as of 2026-06-17.

| Item | Final value | Resolved by |
|---|---|---|
| Nupura Ughade's LinkedIn URL | `https://www.linkedin.com/in/nupura-ughade/` | Murali, 2026-06-17 |
| Nupura Ughade's Twitter/X | Removed (no public profile) | Murali, 2026-06-17 |
| Production domain | `https://docsapi.co` (NOT .com) | Murali, 2026-06-17 |
| Organization contact email | `contact@hyperverge.co` | Murali, 2026-06-17 |
| Google Search Console verification | (not added) | Optional; add when GSC is set up |

## How the values flow through the code

- **Domain + email + sameAs** live in `lib/seo.ts` as constants
  (`SITE_URL`, `ORG_CONTACT_EMAIL`, `ORG_SAME_AS`). All canonical URLs,
  JSON-LD, sitemap, and OG tags derive from these.
- **Author profile** lives in `data/authors.ts` as the `nupuraUghade` object.
  Used everywhere via import — no inline duplicates.
- **AI search manifests** (`public/llms.txt`, `public/llms-full.txt`) and
  `public/robots.txt` are static text files; updated by find-replace.

To change any of these values in the future, edit the source-of-truth file
above and rebuild — every consumer reads from the constant.
