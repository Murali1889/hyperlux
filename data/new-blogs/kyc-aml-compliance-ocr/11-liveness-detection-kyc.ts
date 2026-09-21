import type { BlogPost } from "@/types/resources"
import { nupuraUghade } from "../../authors"

export const blogKa11: BlogPost = {
  id: "ka-11",
  title: "Liveness Detection: Why Passive Checks Miss Injection",
  slug: "liveness-detection-kyc",
  excerpt:
    "Liveness content explains presentation attacks well, a photo held to the camera. Almost none explain injection attacks, where the camera is never involved.",
  description:
    "Liveness detection in KYC: why passive checks miss injection attacks, and the transport-layer defense that content analysis alone cannot provide.",
  metaTag: "Liveness Detection: Passive vs Injection Attacks",
  content: `
    <p>Liveness detection content is genuinely competent at explaining presentation attacks: someone holds a printed photo, a phone playing a video, or a silicone mask up to a camera lens, and the system has to tell that this is not a live human being physically present. What that content consistently fails to explain is the attack that has actually come to dominate fraud rings in 2026: the injection attack, where nothing is ever held up to any camera at all, because the attacker bypasses the camera entirely and feeds synthetic video directly into the verification pipeline as if it were genuine camera output.</p>

    <p>This distinction is not a minor technical footnote. It is the difference between a threat model your <a href="/use-cases/id-proofing">identity verification</a> pipeline is actually built to catch and one it structurally cannot see, extending the document-versus-person verification gap covered in our <a href="/resources/blogs/mrz-passport-verification">MRZ passport verification piece</a> into the biometric layer that sits alongside document checks.</p>

    <h2>Presentation attacks versus injection attacks: two entirely different threat models</h2>

    <p>A presentation attack happens in front of the camera. The attacker holds a printed photo, plays a deepfake video on a second screen, or wears a realistic mask, and physically presents that fake to the real camera lens, hoping the sensor and the software behind it cannot tell the difference between a real face and a convincing substitute. An injection attack happens nowhere near a camera. The attacker uses virtual camera software, a modified mobile app, an emulator, or direct manipulation of the API call itself to feed a synthetic video stream, one that was never captured by any physical camera, directly into the point in the software pipeline where a genuine camera feed would normally arrive.</p>

    <h2>Why this distinction determines which defenses even apply</h2>

    <p>Every defense built to catch a presentation attack, texture analysis looking for the telltale sheen of a screen or the flatness of a printed photo, depth sensing looking for a genuinely three-dimensional face rather than a flat image, reflection analysis looking for how light behaves on skin versus glass, operates on the assumption that a real camera captured the frames being analyzed and that the only question is whether what the camera saw was a real face or a spoof held in front of it. An injection attack breaks that assumption at its root. There is no screen sheen to detect and no glass to reflect light strangely, because there was never a physical screen or a physical mask in front of any physical camera. The synthetic video was generated directly as data and inserted at the software layer, so every defense built around analyzing physical-world artifacts in the captured image has nothing to analyze, because the image was never physical to begin with.</p>

    <h2>The numbers behind why this shift matters now, not eventually</h2>

    <p>Group-IB's January 2026 threat intelligence report documented 8,065 separate attempts to bypass a single financial institution's liveness checks using AI-generated deepfake images, all within an eight-month window from January to August 2025. That is one institution, one attack type, in under a year. iProov's 2025 threat intelligence report found that injection attacks specifically targeting iOS devices rose 741% year on year, a scale of increase that is not consistent with a niche, marginal technique. Both figures point the same direction: injection has moved from a theoretical vulnerability discussed at security conferences to the dominant practical attack vector fraud rings actually use against production liveness systems.</p>

    <h2>Why passive liveness, the low-friction default, is specifically exposed</h2>

    <p>Passive liveness detection asks a user to hold still for a single selfie or a short automatic clip, with no specific action required, and analyzes that footage for signs of life, subtle involuntary motion, texture, and depth cues, without ever telling the user what to do. It is the default in most consumer-facing KYC flows because it adds essentially no friction to onboarding. It is also, structurally, the easiest liveness mode for an injection attack to satisfy, because a pre-rendered synthetic clip only has to convincingly mimic a few seconds of a still, passive face, a task well within reach of current deepfake generation tools, and it never has to respond to anything unpredictable in real time, because passive liveness never asks it to.</p>

    <h2>Why active, challenge-response liveness is harder to defeat, though not injection-proof</h2>

    <p>Active liveness detection issues a real-time, often randomized challenge, blink twice, turn your head to the left, follow a moving dot on screen, and only accepts the check as passed if the captured footage responds correctly and promptly to that specific, unpredictable instruction. This raises the bar for injection specifically because a pre-rendered clip cannot know the challenge in advance, and generating a convincing, correctly-timed response to an unpredictable instruction in real time is a meaningfully harder generation problem than mimicking a few seconds of a passive, static face. It is not a complete defense on its own. A sufficiently sophisticated injection setup can intercept the challenge instruction at the software layer and generate a synthetic response to it on the fly, which is exactly why active liveness raises the cost and complexity of a successful attack without making injection structurally impossible the way transport-layer verification does.</p>

    <h2>The actual defense mechanism: verifying where the video came from, not just what it shows</h2>

    <p>Content-layer liveness detection, whether passive or active, answers one question: does the footage look like a real, live human being. Injection attacks succeed precisely because that question, on its own, is answerable in the attacker's favor by sufficiently good synthetic video, regardless of how sophisticated the content analysis behind the question is. The defense that actually closes this gap does not ask a better version of the same question. It asks a categorically different one: did this footage genuinely originate from a physical camera on this device, in this session, right now, rather than from a virtual camera driver, an emulator, or a manipulated API call. That is a transport-layer and device-integrity question, not a content-analysis question, and it requires an entirely separate verification mechanism running alongside, not instead of, the liveness content check.</p>

    <table>
      <thead>
        <tr><th>Verification layer</th><th>Question it answers</th><th>Catches presentation attacks?</th><th>Catches injection attacks?</th></tr>
      </thead>
      <tbody>
        <tr><td>Passive liveness (content analysis)</td><td>Does this footage show a live human face?</td><td>Yes, reliably</td><td>No, routinely defeated</td></tr>
        <tr><td>Active liveness (content analysis, challenge-response)</td><td>Does this footage respond correctly to an unpredictable real-time instruction?</td><td>Yes, reliably</td><td>Partially, raises attack cost but not structurally immune</td></tr>
        <tr><td>Transport and device integrity verification</td><td>Did this footage genuinely originate from this device's physical camera, in this session?</td><td>Not its job, content analysis already handles this</td><td>Yes, this is the layer specifically built to catch it</td></tr>
      </tbody>
    </table>

    <h2>What transport and device integrity verification actually checks for</h2>

    <p>This layer runs independently of whatever the video content shows and instead inspects the capture pipeline itself. It confirms the camera feed is coming from a genuine, attested hardware camera API rather than a virtual camera driver or software-emulated video source, a distinction that virtual camera tools deliberately try to obscure but that device-level attestation signals can still surface. It checks for signs of an emulator or a rooted or jailbroken device, environments where injection tooling runs far more easily than on an unmodified physical phone. It monitors for anomalies in how the client SDK itself communicates with the verification API, since some injection techniques operate not through a virtual camera at all but through direct manipulation of the API calls the client app makes, bypassing the camera question entirely by feeding synthetic frames straight into the request payload.</p>

    <h2>A worked example: the same synthetic clip, two different verdicts</h2>

    <p>Consider a fraud ring that has generated a convincing deepfake video clip of a real person blinking and turning their head correctly in response to a standard active liveness challenge. Fed through a content-only liveness pipeline, this clip can plausibly pass, since the content itself does respond correctly to the challenge instruction and shows textures and motion consistent with a live face, exactly the properties content-layer analysis is built to check for. Fed through a pipeline that also runs transport and device integrity verification, the same clip fails at a completely different point in the process, because the verification system detects that the frames are arriving through a virtual camera driver rather than the device's genuine physical camera hardware API, a fact entirely invisible to content analysis, which only ever sees the frames themselves and has no way to know how they arrived.</p>

    <h2>What I would check in your current liveness detection pipeline</h2>

    <p>Ask whether your liveness provider runs transport and device integrity checks, confirming the camera feed originates from genuine physical hardware, as a distinct step alongside content-based liveness analysis, or whether content analysis is the only line of defense your pipeline actually has. Then ask specifically whether that transport-layer check runs on every verification session or only on sessions already flagged as suspicious by some other signal, since injection attacks are specifically designed to look unremarkable to every check except the one built to catch them. Confirm whether your flow defaults to passive or active liveness, and if it is passive, weigh the onboarding-friction savings against the fact that passive liveness is the mode Group-IB and iProov's data show being defeated at the highest rate. Finally, confirm your vendor's device-integrity signals are being retrained against current virtual camera and emulator tooling on a real cadence, the same detection-freshness discipline that matters for the fraud-pattern layer covered in our <a href="/resources/blogs/bank-statement-fraud-detection">bank statement fraud detection piece</a>, since virtual camera software evolves specifically to evade whatever the current generation of detection checks for.</p>
    <p>A printed photo held up to a camera is a good, visual illustration of what liveness detection catches. It is not, on its own, a picture of what liveness detection in 2026 actually has to defend against, since the more consequential attack now never touches a camera at all. That gap, transport and device integrity verification running as a distinct layer alongside content analysis rather than a better version of content analysis alone, is exactly where a liveness program's real resilience against injection gets decided.</p>

    <p>None of this is a reason to distrust liveness detection as a category. Content-based checks still reliably catch the presentation attacks that remain common, and dropping liveness entirely in favor of manual review is not more accurate, just slower and more expensive at any real volume. It is a reason to confirm what specific layer of your pipeline is actually doing the injection-detection work, before assuming a low fraud rate reflects genuine resilience rather than an attack type your content analysis was never built to see in the first place. Written by <a href="/author/nupura-ughade">Nupura Ughade</a>.</p>

    <p>Related guides: <a href="/resources/blogs/ocr-for-kyc-verification">OCR for KYC verification</a> and <a href="/resources/blogs/ocr-for-passports-id-cards-and-drivers-licenses">OCR for passports, ID cards and driver's licenses</a>.</p>
  `,
  image: "/images/ocr-accuracy.png",
  featuredImage: "/images/ocr-accuracy.png",
  category: "Compliance",
  date: "August 26, 2026",
  datePublished: "2026-08-26T00:00:00.000Z",
  dateModified: "2026-09-21T00:00:00.000Z",
  last_updated: "September 21, 2026",
  readTime: "11 min read",
  author: nupuraUghade,
  primary_keyword: "liveness detection kyc",
  secondary_keywords: [
    "injection attack liveness detection",
    "presentation attack vs injection attack",
    "passive vs active liveness detection",
    "deepfake liveness bypass",
    "virtual camera injection attack",
    "device integrity verification kyc",
  ],
  tags: ["compliance", "KYC", "liveness detection", "biometric verification", "fraud prevention"],
  cluster: "compliance",
  faq: [
    {
      question: "What is the difference between a presentation attack and an injection attack in liveness detection?",
      answer:
        "A presentation attack physically shows a fake to a real camera lens. An injection attack bypasses the camera entirely, feeding synthetic video directly into the verification pipeline through virtual camera software or manipulated API calls.",
    },
    {
      question: "Why can't content-based liveness detection catch injection attacks?",
      answer:
        "Content-based detection analyzes texture, depth, and motion in captured footage. Injection attacks insert synthetic footage directly into the pipeline, so there is no physical artifact for content analysis to detect.",
    },
    {
      question: "Is active liveness detection immune to injection attacks?",
      answer:
        "No. Active liveness raises the difficulty of a successful attack by requiring a real-time response to an unpredictable challenge, but a sophisticated setup can still intercept and respond, so it reduces rather than eliminates the risk.",
    },
    {
      question: "What does transport and device integrity verification actually check?",
      answer:
        "Whether the video feed genuinely originates from the device's physical camera hardware, whether the device shows signs of emulation or rooting, and whether the client SDK's API communication shows signs of manipulation.",
    },
    {
      question: "How fast are injection attacks growing?",
      answer:
        "iProov's 2025 report found injection attacks targeting iOS devices rose 741% year on year. Group-IB documented 8,065 attempts against a single financial institution's liveness checks in an eight-month window in 2025.",
    },
    {
      question: "Should KYC flows default to passive or active liveness detection?",
      answer:
        "Passive liveness adds less friction but is more exposed to injection, since a pre-rendered clip only needs to mimic a still face. Active liveness raises attack cost, though transport-layer verification is what actually closes the injection gap.",
    },
  ],
}
