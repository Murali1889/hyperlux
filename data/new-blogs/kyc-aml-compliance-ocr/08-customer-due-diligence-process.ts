import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogKa08: BlogPost = {
  id: "ka-08",
  title: "CDD vs EDD: Why Weighted Averages Miss Real Risk",
  slug: "customer-due-diligence-process",
  excerpt:
    "Risk scoring guides explain weighted models clearly and mention overrides exist. Almost none show the math proving why a pure average buries a real risk.",
  description:
    "Customer due diligence process: the worked math showing how a weighted average can score a PEP customer as medium risk, and why overrides matter.",
  metaTag: "CDD vs EDD: The Weighted Average Problem (2026)",
  content: `
    <p>Risk-scoring content is genuinely clear on the mechanics: assign weights to risk factors, geography, product, customer type, source of funds, PEP status, sum them to a composite score, and map that score to a due diligence tier, simplified, standard, or enhanced. Most of that content also mentions, correctly, that certain high-risk factors should be able to override the aggregate score. What it rarely does is show the actual arithmetic proving why a pure weighted average, without that override, can score a genuinely high-risk customer as comfortably medium risk.</p>

    <p>This is that actual math, worked all the way through with real numbers, a core piece of <a href="/solutions/compliance-risk">compliance risk automation</a>, and why certain risk factors need to function as overrides rather than inputs to an average, building directly on the PEP category tiers covered in our <a href="/resources/blogs/pep-screening-kyc">PEP screening piece</a>.</p>

    <h2>What CDD and EDD actually require, briefly</h2>

    <p>Standard customer due diligence applies to the ordinary, everyday customer population: identity verification, a basic understanding of the customer relationship's actual purpose, and standard ongoing monitoring proportionate to the relationship itself. Enhanced due diligence applies specifically to customers a genuine risk assessment identifies as higher risk, requiring meaningfully deeper investigation, more frequent ongoing monitoring, and often explicit senior management approval before the relationship either begins in the first place or is permitted to continue further. The entire purpose of a risk-tiering model is correctly routing each customer to the right tier, and a model that misroutes a genuinely high-risk customer into standard due diligence has failed at its one job, regardless of how sophisticated its scoring math otherwise looks.</p>

    <h2>How a typical weighted scoring model gets built</h2>

    <p>A common, widely used structure assigns each individual risk factor, geography, product type, customer type, source of funds, PEP status, its own specific weight, with all weights summing exactly to 100%, then scores each factor on a numeric scale, commonly 1 to 10, and computes a weighted average across every factor to produce one composite score. That composite score then maps to a tier: a defined range for low risk, a range for medium, a range for high, with the high range typically triggering EDD.</p>

    <h2>The dilution problem, worked with real numbers</h2>

    <p>Consider a model with five factors: geography at 30% weight, product type at 20%, customer type at 20%, source of funds at 15%, and PEP status at 15%, each scored 1 to 10. A customer scores low, a 2, on every factor except PEP status, where they score the maximum, a 10, because they are a foreign politically exposed person. The weighted average: geography contributes 0.30 times 2, or 0.6; product contributes 0.20 times 2, or 0.4; customer type contributes 0.20 times 2, or 0.4; source of funds contributes 0.15 times 2, or 0.3; PEP status contributes 0.15 times 10, or 1.5. Summing all five: 0.6 plus 0.4 plus 0.4 plus 0.3 plus 1.5 equals 3.2 out of a possible 10.</p>

    <table>
      <thead>
        <tr><th>Factor</th><th>Weight</th><th>Score (1-10)</th><th>Contribution</th></tr>
      </thead>
      <tbody>
        <tr><td>Geography</td><td>30%</td><td>2</td><td>0.6</td></tr>
        <tr><td>Product type</td><td>20%</td><td>2</td><td>0.4</td></tr>
        <tr><td>Customer type</td><td>20%</td><td>2</td><td>0.4</td></tr>
        <tr><td>Source of funds</td><td>15%</td><td>2</td><td>0.3</td></tr>
        <tr><td>PEP status</td><td>15%</td><td>10</td><td>1.5</td></tr>
        <tr><td><strong>Composite</strong></td><td>100%</td><td>&nbsp;</td><td><strong>3.2</strong></td></tr>
      </tbody>
    </table>

    <p>A composite score of 3.2 out of 10 lands comfortably within a low or, at most, low-medium risk band under most reasonable tier definitions, the same band a customer with genuinely low risk across every factor, including no PEP status at all, would also land in. The single maximum-severity factor, being a PEP, a status that independently and unconditionally requires enhanced due diligence under FATF Recommendation 12 regardless of every other factor, gets mathematically diluted into an unremarkable composite score simply because it only carries 15% of the total weight.</p>

    <h2>Why certain factors need to function as overrides, not weighted inputs</h2>

    <p>PEP status is exactly, precisely the kind of factor that should never be averaged into a composite score alongside everything else at all; it should function as a binary override that routes a customer directly into enhanced due diligence the moment it is true, independent of what every other factor scores. Sanctions-adjacent proximity, a close family or business connection to a sanctioned individual short of an outright sanctions match, and operation in a jurisdiction on a FATF-identified high-risk list, function the same way in most well-built programs: severe enough on their own that diluting them into a weighted average defeats the entire purpose of flagging them as risk factors in the first place. The distinguishing question for any given risk factor is not how severe it can get, but whether a maximum severity value on that specific factor should, by itself, be sufficient to require enhanced treatment regardless of everything else. For PEP status, sanctions proximity, and high-risk jurisdiction designation, the answer is yes, and treating them as ordinary weighted inputs instead of overrides is the specific design choice that produces the diluted 3.2 score above.</p>

    <h2>The regulatory consequence of getting this backward</h2>

    <p>A risk model that allows a mandatory-EDD factor to be quietly averaged down to a low or medium composite score is not, under any real interpretation, a harmless technical quirk that can simply be waved away; it is the specific pattern regulators look for when examining whether a risk-scoring methodology was built to genuinely assess risk or to produce compliant-looking outputs that quietly minimize the number of customers requiring the more expensive, more intensive enhanced due diligence process. A weighting scheme that happens to route the institution's actual PEP and sanctions-adjacent customers into standard due diligence, however unintentionally, is exactly the kind of finding that turns an examination into an enforcement action.</p>

    <h2>How to structure a model that actually gets this right</h2>

    <p>The correct architecture runs override checks first, always, as a distinct, entirely separate, prior step ahead of anything else: is this customer a PEP, does this customer have a confirmed sanctions-adjacent connection, does this customer operate in a designated high-risk jurisdiction. Any single true answer among these three routes the customer directly to enhanced due diligence, full stop, no exceptions, before any weighted scoring calculation even runs at all. Only customers clearing every override check then proceed to the weighted average model described above, which remains a genuinely useful tool for differentiating risk levels within the large population of customers who do not trigger any absolute override, but was never designed to, and should never be asked to, correctly handle the small number of cases severe enough to bypass averaging entirely.</p>

    <h2>A second worked example: the same customer, now with override logic applied correctly</h2>

    <p>Take the identical customer from the worked example above, low scores across geography, product, customer type, and source of funds, and a maximum PEP status score. Under an override-first architecture, the PEP status check runs before any weighted average is even calculated, returns true, and routes the customer directly to enhanced due diligence. The weighted average of 3.2 either never gets computed at all, or gets computed only as a secondary, informational figure for internal risk-differentiation purposes among the broader EDD population, never as the number that actually determined which due diligence tier this customer received. The customer's actual, low scores on every non-PEP factor remain genuinely useful information, they help determine how intensive the enhanced due diligence process itself needs to be, a PEP with otherwise low risk indicators warranting a different EDD approach than a PEP who also scores high on multiple other factors, but that differentiation happens after the override has already correctly routed the customer to EDD in the first place, not instead of it.</p>

    <h2>Why this same dilution risk applies to combinations of moderate factors, not only single severe ones</h2>

    <p>The clearest illustration of the dilution problem uses one maximum-severity factor against several low ones, but the same underlying mathematical issue can arise from a different pattern: several moderately elevated factors combining to represent genuine risk that no single factor, on its own, would have triggered an override for. A customer scoring a 6 out of 10 on four separate factors, none individually severe enough to warrant a hardcoded override, produces a weighted average that may or may not land in the enhanced due diligence range depending on exactly how the tier boundaries are set, a genuinely harder design question than the single-severe-factor case, since there is no clean binary override rule to apply. This is precisely the scenario a weighted average model is actually well suited to handle, correctly differentiating a customer with several moderate risk signals from one with none, provided the tier boundaries themselves were set thoughtfully rather than simply inherited from a template without validation against the institution's own actual risk factor weights and realistic customer score distributions.</p>

    <h2>What I would check in your current CDD/EDD risk-tiering pipeline</h2>

    <p>Ask directly whether PEP status, sanctions-adjacent connections, and high-risk jurisdiction designation function as override triggers that bypass the weighted average entirely, or whether they are simply weighted inputs like every other factor, since the worked example above shows exactly how the second approach can produce a dangerously low composite score for a customer who unconditionally requires enhanced due diligence. Then ask whether anyone has actually run this kind of stress test against your own model's specific weights, computing what composite score a maximum-severity PEP factor produces when every other factor scores low, rather than assuming the weighting scheme handles this correctly without ever checking the arithmetic directly. Finally, confirm your tier boundaries themselves were validated against your institution's actual risk-factor weights and realistic customer score distributions, not simply inherited from a template vendor demo, the same document-level scrutiny covered from a compounding-probability angle in our <a href="/resources/blogs/bank-statement-ocr-pricing">bank statement OCR pricing piece</a>, where an unexamined default number similarly looked far more reassuring than it actually was once someone ran the real math against it.</p>
    <p>A weighted average is a genuinely useful tool for differentiating risk across a large, otherwise-similar customer population. It is the wrong tool entirely for a small number of factors specifically defined as severe enough to require enhanced treatment on their own, and the worked math above is the clearest way to see exactly why averaging the two together produces a number that looks precise while quietly getting the actual routing decision wrong, a number that would pass a casual review and only reveal the problem once someone actually sits down and recomputes it by hand against a real customer profile. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>
  `,
  image: "/images/ocr-bank-statement-technology.png",
  featuredImage: "/images/ocr-bank-statement-technology.png",
  category: "Compliance",
  date: "August 25, 2026",
  datePublished: "2026-08-25T00:00:00.000Z",
  dateModified: "2026-08-25T00:00:00.000Z",
  last_updated: "August 25, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "customer due diligence process",
  secondary_keywords: [
    "enhanced due diligence triggers",
    "aml risk scoring model",
    "weighted risk score dilution",
    "risk tiering override factors",
    "cdd edd risk based approach",
    "pep enhanced due diligence requirement",
  ],
  tags: ["compliance", "AML", "KYC", "risk scoring", "enhanced due diligence"],
  cluster: "compliance",
  noindex: true,
  faq: [
    {
      question: "What is the difference between CDD and EDD?",
      answer:
        "Standard customer due diligence applies to the ordinary customer population. Enhanced due diligence applies to higher-risk customers, requiring deeper investigation, more frequent monitoring, and often senior management approval.",
    },
    {
      question: "How can a weighted average risk score miss a genuinely high-risk customer?",
      answer:
        "If a severe risk factor carries only a modest weight, it can be mathematically diluted by several low-risk factors, producing a composite score in a low or medium tier despite that one factor independently requiring EDD.",
    },
    {
      question: "Why should PEP status function as an override rather than a weighted input?",
      answer:
        "FATF Recommendation 12 requires enhanced due diligence for PEP relationships unconditionally, regardless of any other factor. Averaging it with other scores defeats that unconditional requirement.",
    },
    {
      question: "What other risk factors typically function as overrides in a well-built model?",
      answer:
        "Sanctions-adjacent connections and operation in a FATF-identified high-risk jurisdiction, both severe enough on their own that diluting them into a weighted average undermines the point of flagging them.",
    },
    {
      question: "Why is a diluted risk score a regulatory concern, not just a technical flaw?",
      answer:
        "It is the pattern examiners look for when assessing whether a scoring methodology genuinely assesses risk or minimizes how many customers trigger expensive enhanced due diligence.",
    },
    {
      question: "How should a correctly structured risk model be architected?",
      answer:
        "Override checks run first as a distinct step; any true override routes directly to EDD. Only customers clearing every override proceed through the weighted average model for further differentiation.",
    },
  ],
}
