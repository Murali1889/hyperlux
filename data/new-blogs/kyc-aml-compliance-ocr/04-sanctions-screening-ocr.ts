import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogKa04: BlogPost = {
  id: "ka-04",
  title: "Sanctions Screening: Why One Threshold Is Always Wrong",
  slug: "sanctions-screening-ocr",
  excerpt:
    "Screening guides explain fuzzy matching with example thresholds. Almost none explain why one universal threshold is mathematically the wrong choice.",
  description:
    "Sanctions screening OCR: the transliteration explosion problem, why Levenshtein distance struggles with it, and why one universal threshold is always wrong.",
  metaTag: "Sanctions Screening: The Threshold Problem (2026)",
  content: `
    <p>Sanctions screening content is genuinely useful on the surface mechanics: exact matches score highest, minor spelling variations score somewhat lower, and a configurable similarity threshold decides what actually generates an alert for a human reviewer to look at. What that content consistently skips is why a name actually fails to exact-match in the first place beyond simple typos, and why applying one similarity threshold uniformly across every name in a screening population is a mathematically flawed approach, not just a tuning inconvenience.</p>

    <p>This is the actual, real transliteration problem underneath sanctions name matching, a core piece of <a href="/solutions/compliance-risk">compliance risk automation</a>, why the standard, widely used edit-distance algorithm handles it so poorly, and why a single threshold cannot be correct for every population a screening system actually processes. It sits alongside the broader AML document workflow covered in our <a href="/resources/blogs/aml-document-checks">AML document checks guide</a>.</p>

    <h2>Why sanctions screening cannot be exact-match by design</h2>

    <p>A sanctions list entry and a customer's submitted name frequently do not fail to match because of a simple typo, a common misconception worth correcting directly. They fail to match because the same underlying name, particularly a name originally written in a non-Latin script, has multiple, entirely legitimate, correct spellings once transliterated into Latin characters, and the specific variant appearing on a sanctions list is not guaranteed to be the same variant a customer's own documents happen to use.</p>

    <h2>The transliteration explosion, and why it is not a rounding error</h2>

    <p>A single Arabic name can produce over 3,000 distinct, individually defensible Latin transliterations depending on which specific romanization convention is applied, differences in how vowel sounds get rendered, how the definite article gets attached or separated, and how specific consonant sounds with no direct Latin equivalent get approximated. This is not a handful of edge-case spelling variants, it is a combinatorial explosion arising from the structural mismatch between the source script's phonetic system and Latin script's more limited character set. Screening a name only against its single, most common transliteration, or worse still, only exact-matching it, misses the overwhelming majority of the legitimately possible spellings of that exact same real name.</p>

    <h2>Why Levenshtein distance, the standard fuzzy-matching tool, handles this specific problem poorly</h2>

    <p>Edit-distance algorithms like Levenshtein distance measure how many character insertions, deletions, or substitutions separate two strings, and they treat every substitution as equally costly: changing a "c" to a "p" counts the same as changing a "c" to a "k," even though a "c" to "k" substitution is far more likely to represent the same underlying sound rendered through a different transliteration convention, while a "c" to "p" substitution more often signals an actual typo or a genuinely different name. This uniform weighting is a real, structural limitation, not a configuration mistake: Levenshtein distance was designed to measure general string similarity, not phonetic similarity specific to cross-script name transliteration, and applying it as the sole matching method treats a linguistically expected transliteration variant with exactly the same suspicion as a random data-entry error, without distinguishing the two at all.</p>

    <h2>A worked example: two spellings of the same name, one weak Levenshtein score</h2>

    <p>Take "MOHAMMED" and "MUHAMMAD," two extremely common, individually correct, entirely legitimate transliterations of the exact same underlying Arabic name, both encountered constantly in real screening populations. Both strings are eight characters long. Comparing position by position: the second character differs, O versus U, and the seventh character differs, E versus A, every other position matches exactly. That is a Levenshtein distance of exactly two, the minimum number of single-character substitutions needed to turn one string into the other. Normalized against the string length, that distance corresponds to roughly 75% similarity, a full ten percentage points below the illustrative 85% threshold often used as the alert-triggering cutoff in practice. Two spellings of the identical name, differing only in vowel transliteration convention, can score meaningfully below a threshold that sounds intuitively generous, precisely because raw edit distance has no concept of "these are both valid renderings of the same sound," only "these two characters differ."</p>

    <h2>Why name matching alone always needs a supplementary identifier as a tiebreaker</h2>

    <p>Even a well-tuned, genuinely phonetically-aware matching system cannot fully resolve ambiguity from name similarity alone, no matter how carefully calibrated, particularly against extremely common given and family names shared by large numbers of genuinely unrelated people. Date of birth, nationality, and any available government identification number all function together as the actual disambiguating signal in a mature screening program, narrowing a name-based fuzzy match down to a specific individual rather than treating every plausible name collision as equally uncertain. A name-only match against a common name, with no date of birth or nationality corroboration available at all, should carry meaningfully less weight in a review queue than the identical name-similarity score paired with a matching date of birth, since the second case has independently corroborating evidence the first entirely lacks.</p>

    <h2>Why the SDN list's own alias field is an admission of this exact problem</h2>

    <p>Sanctions list entries very commonly include multiple "also known as" aliases attached to a single designated individual, precisely because the maintaining authority recognizes that no single transliteration is sufficient to reliably match every real-world spelling a screened name might arrive in. A screening system that checks a submitted name only against a designated individual's single, primary listed name, ignoring the alias field entirely, is discarding exactly the data the list's own maintainers included to address this specific gap, an avoidable, self-inflicted coverage hole sitting inside data the system already has access to.</p>

    <h2>Why one universal similarity threshold is mathematically the wrong choice</h2>

    <p>A similarity threshold decides how close a fuzzy match needs to be before it actually generates an alert, commonly illustrated somewhere around 85% for what counts as a meaningful, genuinely actionable match worth a reviewer's time. That threshold implicitly assumes something about the underlying distribution of name similarity across the screened population: how similar two genuinely unrelated names are likely to be purely by chance. Populations with naming conventions that cluster more tightly together, common patronymic structures, a smaller effective pool of common given and family name combinations, produce meaningfully higher baseline similarity between unrelated individuals than populations with more naming diversity. Applying the identical threshold to both populations produces a materially different false-positive rate for each one, not because the matching logic is broken, but because the same numeric threshold means something different against two different underlying similarity distributions.</p>

    <table>
      <thead>
        <tr><th>Population naming pattern</th><th>Baseline similarity between unrelated names</th><th>Effect of a fixed 85% threshold</th></tr>
      </thead>
      <tbody>
        <tr><td>High naming diversity</td><td>Low, unrelated names rarely score close to 85%</td><td>Threshold performs close to as intended, few false positives</td></tr>
        <tr><td>Tightly clustered naming conventions</td><td>Higher, unrelated names can naturally score closer to the threshold</td><td>Same threshold produces a higher false-positive rate purely from population structure</td></tr>
      </tbody>
    </table>

    <h2>The list-refresh timing problem sitting alongside the matching problem</h2>

    <p>A genuinely well-tuned matching algorithm, however carefully built, is still only ever as good as the underlying list it actually screens against, and sanctions lists genuinely do change, additions, removals, and alias updates all happening on an ongoing, continuous basis rather than on any predictable, fixed schedule anyone could simply plan around. A screening system running against a stale, outdated, cached copy of a sanctions list will correctly apply excellent matching logic to entirely the wrong underlying data, entirely missing a recently added designation, regardless of how genuinely sophisticated the fuzzy-matching and threshold calibration underneath it actually is. This is a separate failure mode from the matching-algorithm problems described above, a data-freshness problem rather than an algorithmic one, but it produces an identical practical outcome: a genuine sanctioned individual passing screening undetected, this time because the list itself was out of date at the moment of the check rather than because the name comparison logic failed to recognize a valid match.</p>

    <h2>What actually works better: combining methods, not raising the threshold universally</h2>

    <p>Simply raising the threshold for populations with higher baseline similarity trades one problem for another, since a higher threshold applied broadly also raises the risk of missing a genuine match, a false negative, which is a materially worse outcome in sanctions screening than an extra false positive requiring manual review. A better approach combines edit-distance scoring with phonetic matching methods designed to weight substitutions by actual sound similarity rather than treating every character change identically, alongside population-aware threshold calibration that accounts for known baseline similarity differences rather than applying one number everywhere. None of this eliminates manual review entirely, but it shifts review volume toward genuinely ambiguous cases rather than distributing false positives unevenly across populations purely as an artifact of a single, uncalibrated threshold.</p>

    <h2>What I would check in your current sanctions screening pipeline</h2>

    <p>Ask whether your matching logic screens against every listed alias for a designated individual, not just the primary name, since the alias field exists specifically to cover the transliteration gap a primary-name-only check misses. Then ask whether your similarity threshold is a single fixed number applied universally, or whether it accounts for known differences in baseline name similarity across different naming-convention populations, since a uniform threshold produces measurably uneven false-positive rates by population even when the matching algorithm itself is working exactly as designed. Confirm your fuzzy-matching approach combines edit-distance with a phonetic or transliteration-aware method, rather than relying on Levenshtein distance alone, since edit-distance's uniform substitution weighting specifically mishandles the cross-script transliteration variants that account for a meaningful share of genuine near-misses. And check how frequently your underlying sanctions list data actually refreshes, since even ideal matching logic run against stale list data produces the same practical failure as a genuine matching miss, the same document-freshness discipline covered from a different mechanism in our <a href="/resources/blogs/kyb-verification">KYB verification piece</a>, where a similarly stale reference source undermined an otherwise well-designed check.</p>

    <h3>Frequently asked questions</h3>

    <p><strong>Why does a legitimate name fail to exact-match a sanctions list entry?</strong><br />
    Most commonly because the name was originally written in a non-Latin script and has multiple, equally valid Latin transliterations, not because of a typo. The specific variant on the sanctions list may differ from the variant on a customer's documents.</p>

    <p><strong>Why can a single Arabic name have thousands of valid transliterations?</strong><br />
    Because romanization conventions vary in how they render vowel sounds, the definite article, and consonants with no direct Latin equivalent, producing a combinatorial explosion of individually defensible spellings for the same underlying name.</p>

    <p><strong>Why does Levenshtein distance handle transliteration variants poorly?</strong><br />
    It weights every character substitution equally, treating a phonetically plausible transliteration substitution the same as an unrelated typo, since it was designed for general string similarity rather than cross-script phonetic similarity.</p>

    <p><strong>Why do sanctions list entries include multiple aliases per person?</strong><br />
    Because list maintainers recognize a single transliteration is not sufficient to reliably match every real-world spelling variant. A system that only checks the primary listed name discards this built-in coverage.</p>

    <p><strong>Why is a single universal similarity threshold mathematically wrong?</strong><br />
    Because different naming-convention populations have different baseline similarity between unrelated names. The same threshold produces a meaningfully different false-positive rate depending on the underlying population's name diversity.</p>

    <p><strong>Does raising the threshold for high-similarity populations solve the problem?</strong><br />
    Not cleanly. A higher threshold reduces false positives but increases the risk of missing genuine matches. A better approach combines phonetic matching with population-aware calibration rather than a single blunt threshold adjustment.</p>

    <p>A configurable similarity threshold and an illustrative example score are useful for explaining that fuzzy matching exists. They say nothing about why exact matching fails in the first place, or why the exact same threshold number means something different depending on which population it is being applied to, and that gap is exactly where a screening program's real false-positive and false-negative rates actually get decided. The "MOHAMMED" versus "MUHAMMAD" example above is not a contrived edge case built for this piece; it is close to the median case for a large share of the world's population, which is precisely why it deserves more attention than a single illustrative percentage on a vendor's pricing page ever gives it. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/idp-vs-ocr.png",
  featuredImage: "/images/idp-vs-ocr.png",
  category: "Compliance",
  date: "August 8, 2026",
  datePublished: "2026-08-08T00:00:00.000Z",
  dateModified: "2026-08-08T00:00:00.000Z",
  last_updated: "August 8, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "sanctions screening ocr",
  secondary_keywords: [
    "fuzzy name matching sanctions",
    "ofac transliteration matching",
    "levenshtein distance name screening",
    "sanctions list alias matching",
    "false positive sanctions screening",
    "sdn list name matching algorithm",
  ],
  tags: ["compliance", "AML", "sanctions screening", "KYC", "fraud detection"],
  cluster: "compliance",
  faq: [
    {
      question: "Why does a legitimate name fail to exact-match a sanctions list entry?",
      answer:
        "Most commonly because the name was originally written in a non-Latin script and has multiple, equally valid Latin transliterations, not because of a typo.",
    },
    {
      question: "Why can a single Arabic name have thousands of valid transliterations?",
      answer:
        "Romanization conventions vary in how they render vowel sounds, the definite article, and consonants with no direct Latin equivalent, producing a combinatorial explosion of valid spellings.",
    },
    {
      question: "Why does Levenshtein distance handle transliteration variants poorly?",
      answer:
        "It weights every character substitution equally, treating a phonetically plausible transliteration substitution the same as an unrelated typo, since it measures general string similarity, not phonetic similarity.",
    },
    {
      question: "Why do sanctions list entries include multiple aliases per person?",
      answer:
        "Because list maintainers recognize a single transliteration is not sufficient to reliably match every real-world spelling variant. Checking only the primary name discards this built-in coverage.",
    },
    {
      question: "Why is a single universal similarity threshold mathematically wrong?",
      answer:
        "Different naming-convention populations have different baseline similarity between unrelated names, so the same threshold produces a meaningfully different false-positive rate by population.",
    },
    {
      question: "Does raising the threshold for high-similarity populations solve the problem?",
      answer:
        "Not cleanly. A higher threshold reduces false positives but increases the risk of missing genuine matches. Combining phonetic matching with population-aware calibration works better.",
    },
  ],
}
