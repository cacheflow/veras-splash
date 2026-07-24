export type DecisionType = "ALLOW" | "REVIEW" | "BLOCK";

export const decisions = [
  {
    id: "dec_84291",
    user: "Marcus Thompson",
    initials: "MT",
    action: "Withdrawal · $8,000",
    decision: "REVIEW" as DecisionType,
    confidence: 91,
    reason: "Linked device + payment anomaly",
    time: "2m ago",
    risk: 87,
  },
  {
    id: "dec_84290",
    user: "Sarah Williams",
    initials: "SW",
    action: "Account creation",
    decision: "ALLOW" as DecisionType,
    confidence: 98,
    reason: "Verified identity",
    time: "6m ago",
    risk: 8,
  },
  {
    id: "dec_84289",
    user: "David Chen",
    initials: "DC",
    action: "Driver payout · $2,450",
    decision: "BLOCK" as DecisionType,
    confidence: 95,
    reason: "Synthetic identity indicators",
    time: "11m ago",
    risk: 96,
  },
  {
    id: "dec_84288",
    user: "Amina Yusuf",
    initials: "AY",
    action: "Seller listing",
    decision: "ALLOW" as DecisionType,
    confidence: 94,
    reason: "Established seller pattern",
    time: "17m ago",
    risk: 14,
  },
  {
    id: "dec_84287",
    user: "Ethan Brooks",
    initials: "EB",
    action: "Card change",
    decision: "REVIEW" as DecisionType,
    confidence: 88,
    reason: "ATO behavior sequence",
    time: "24m ago",
    risk: 82,
  },
];

export const metrics = [
  {
    label: "Decisions today",
    value: "24,817",
    detail: "+8.2% vs yesterday",
    tone: "blue",
  },
  {
    label: "High risk events",
    value: "1,284",
    detail: "5.2% of decisions",
    tone: "red",
  },
  {
    label: "Pending reviews",
    value: "38",
    detail: "12 nearing SLA",
    tone: "amber",
  },
  {
    label: "Policy changes",
    value: "4",
    detail: "Last 24 hours",
    tone: "violet",
  },
  {
    label: "Vendor health",
    value: "99.92%",
    detail: "5 sources online",
    tone: "green",
  },
];

export const vendors = [
  {
    name: "Fingerprint",
    type: "Device intelligence",
    status: "Healthy",
    latency: "82ms",
    events: "8.4k",
  },
  {
    name: "Persona",
    type: "Identity verification",
    status: "Healthy",
    latency: "146ms",
    events: "2.1k",
  },
  {
    name: "Stripe Radar",
    type: "Payment risk",
    status: "Warning",
    latency: "310ms",
    events: "6.8k",
  },
  {
    name: "Sift",
    type: "Fraud intelligence",
    status: "Healthy",
    latency: "121ms",
    events: "4.2k",
  },
  {
    name: "Internal ML",
    type: "Behavior model",
    status: "Degraded",
    latency: "480ms",
    events: "24.8k",
  },
];

export const policies = [
  {
    slug: "high-value-withdrawal",
    name: "High Value Withdrawal",
    description:
      "Escalates large withdrawals when device and behavioral risk are correlated.",
    owner: "Payments Risk",
    status: "Active",
    version: "v3.4",
    updated: "2 hours ago",
    rules: 6,
    decisions: "1,241",
    impact: "3.8%",
  },
  {
    slug: "account-takeover",
    name: "Account Takeover Prevention",
    description:
      "Detects credential, device, and location changes associated with takeover.",
    owner: "Identity & Access",
    status: "Active",
    version: "v5.1",
    updated: "Yesterday",
    rules: 11,
    decisions: "3,804",
    impact: "1.9%",
  },
  {
    slug: "new-seller-verification",
    name: "New Seller Verification",
    description:
      "Applies progressive identity checks to new and high-velocity sellers.",
    owner: "Marketplace Risk",
    status: "Active",
    version: "v2.8",
    updated: "Jul 16",
    rules: 8,
    decisions: "2,109",
    impact: "5.2%",
  },
  {
    slug: "suspicious-messaging",
    name: "Suspicious Messaging",
    description:
      "Routes coercion, off-platform payment, and abuse patterns to moderation.",
    owner: "Trust & Safety",
    status: "Monitor",
    version: "v1.9",
    updated: "Jul 12",
    rules: 14,
    decisions: "862",
    impact: "0.7%",
  },
];

export const timeline = [
  {
    title: "Account created",
    detail: "San Francisco, US · Web",
    time: "Feb 22 · 10:14",
    state: "neutral",
  },
  {
    title: "Identity verified",
    detail: "Persona · Government ID + selfie",
    time: "Feb 22 · 10:18",
    state: "good",
  },
  {
    title: "Payment successful",
    detail: "$425.00 · Visa •••• 4821",
    time: "Jul 12 · 16:42",
    state: "good",
  },
  {
    title: "New device added",
    detail: "Chrome 126 · Windows · confidence 12%",
    time: "Jul 18 · 09:02",
    state: "risk",
  },
  {
    title: "Password changed",
    detail: "Recovery flow · same new device",
    time: "Jul 18 · 09:07",
    state: "risk",
  },
  {
    title: "Withdrawal attempted",
    detail: "$8,000.00 · Bank account •••• 9014",
    time: "Jul 18 · 09:11",
    state: "risk",
  },
  {
    title: "Risk decision generated",
    detail: "Review · 91% confidence · 184ms",
    time: "Jul 18 · 09:11",
    state: "decision",
  },
];

export const decisionProfiles = {
  dec_84291: {
    id: "dec_84291",
    user: "Marcus Thompson",
    action: "Withdrawal",
    amount: "$8,000.00",
    destination: "bank account •••• 9014",
    decision: "REVIEW" as DecisionType,
    confidence: 91,
    risk: 87,
    latency: "184ms",
    explanation: "Risk increased due to multiple correlated signals.",
    explanationDetail:
      "No single signal caused this review. The combination crossed the policy threshold.",
    positives: [
      "Account age: 147 days",
      "Identity verified",
      "Successful payment history",
    ],
    risks: [
      "New device detected",
      "Device linked to a banned account",
      "Large withdrawal after password reset",
      "Unusual login location",
    ],
    insight:
      "The new device was first seen 9 minutes before this withdrawal and shares an identifier with 3 blocked entities.",
    policy: "High Value Withdrawal Protection",
    version: "v3.4",
    owner: "Payments Risk",
    recommendation: "Require step-up verification",
    recommendationDetail:
      "Hold the withdrawal and verify ownership of the newly added device. Release only if the challenge is completed.",
    entityAge: "147 days",
    location: "Bucharest, RO",
    usualLocation: "San Francisco, US",
    recentEvent: "9 min before action",
    timeline,
  },
  dec_84290: {
    id: "dec_84290",
    user: "Sarah Williams",
    action: "Account creation",
    amount: "New rider account",
    destination: "iOS · United States",
    decision: "ALLOW" as DecisionType,
    confidence: 98,
    risk: 8,
    latency: "132ms",
    explanation:
      "Identity, device, and payment signals are mutually consistent.",
    explanationDetail:
      "The account passed every active onboarding policy with strong source agreement.",
    positives: [
      "Government ID verified",
      "Selfie match: 99.1%",
      "Device first-party history: 3.2 years",
      "Payment name match",
    ],
    risks: ["Residential proxy detected — low confidence"],
    insight:
      "Persona, device intelligence, and the cardholder record independently resolved to the same identity.",
    policy: "New Account Verification",
    version: "v2.8",
    owner: "Identity & Access",
    recommendation: "Allow account creation",
    recommendationDetail:
      "No additional friction is warranted. Continue standard post-onboarding monitoring.",
    entityAge: "New account",
    location: "Austin, US",
    usualLocation: "Austin, US",
    recentEvent: "ID verified 1 min ago",
    timeline: [
      {
        title: "Signup started",
        detail: "iPhone 15 Pro · iOS 18",
        time: "10:02",
        state: "neutral",
      },
      {
        title: "Phone verified",
        detail: "Carrier tenure · 4.1 years",
        time: "10:03",
        state: "good",
      },
      {
        title: "Identity verified",
        detail: "Persona · ID + selfie",
        time: "10:04",
        state: "good",
      },
      {
        title: "Payment method added",
        detail: "Name and billing match",
        time: "10:05",
        state: "good",
      },
      {
        title: "Trust decision generated",
        detail: "Allow · 98% confidence · 132ms",
        time: "10:05",
        state: "decision",
      },
    ],
  },
  dec_84289: {
    id: "dec_84289",
    user: "David Chen",
    action: "Driver payout",
    amount: "$2,450.00",
    destination: "debit card •••• 1138",
    decision: "BLOCK" as DecisionType,
    confidence: 95,
    risk: 96,
    latency: "211ms",
    explanation:
      "The payout identity conflicts with the established driver profile.",
    explanationDetail:
      "Multiple synthetic-identity indicators and a mismatched destination make the action unsafe.",
    positives: ["Account age: 32 days", "18 completed trips"],
    risks: [
      "ID document reused across 4 accounts",
      "Payout name mismatch",
      "VoIP phone + recent SIM activation",
      "Face match below threshold",
    ],
    insight:
      "The identity document hash appeared on three previously blocked driver applications in the last 30 days.",
    policy: "Synthetic Identity Payout Block",
    version: "v4.2",
    owner: "Driver Risk",
    recommendation: "Block payout",
    recommendationDetail:
      "Prevent funds movement, lock payout changes, and escalate the identity cluster for investigation.",
    entityAge: "32 days",
    location: "Phoenix, US",
    usualLocation: "Los Angeles, US",
    recentEvent: "Payout card changed 4 min ago",
    timeline: [
      {
        title: "Driver application approved",
        detail: "Provisional verification",
        time: "Jun 16",
        state: "neutral",
      },
      {
        title: "Payout method changed",
        detail: "New debit card · name mismatch",
        time: "11:18",
        state: "risk",
      },
      {
        title: "Identity cluster matched",
        detail: "4 linked applications",
        time: "11:19",
        state: "risk",
      },
      {
        title: "Payout requested",
        detail: "$2,450 instant payout",
        time: "11:21",
        state: "risk",
      },
      {
        title: "Trust decision generated",
        detail: "Block · 95% confidence · 211ms",
        time: "11:21",
        state: "decision",
      },
    ],
  },
  dec_84288: {
    id: "dec_84288",
    user: "Amina Yusuf",
    action: "Seller listing",
    amount: "Vintage camera · $640",
    destination: "Marketplace listing",
    decision: "ALLOW" as DecisionType,
    confidence: 94,
    risk: 14,
    latency: "96ms",
    explanation: "The listing matches a long-running, low-risk seller pattern.",
    explanationDetail:
      "Content, pricing, device, and seller-history signals all support a legitimate action.",
    positives: [
      "Seller tenure: 3.4 years",
      "412 successful sales",
      "Listing photos are original",
      "Price within market range",
    ],
    risks: ["Shipping origin changed recently"],
    insight:
      "The new shipping origin is 8 miles from the seller’s usual location and matches prior fulfilled orders.",
    policy: "Established Seller Fast Path",
    version: "v2.1",
    owner: "Marketplace Risk",
    recommendation: "Allow listing",
    recommendationDetail:
      "Publish immediately and apply standard transaction monitoring.",
    entityAge: "3.4 years",
    location: "Brooklyn, US",
    usualLocation: "New York, US",
    recentEvent: "Photo provenance passed",
    timeline: [
      {
        title: "Listing drafted",
        detail: "Vintage rangefinder camera",
        time: "14:32",
        state: "neutral",
      },
      {
        title: "Media analyzed",
        detail: "Original images · no catalog match",
        time: "14:33",
        state: "good",
      },
      {
        title: "Price evaluated",
        detail: "Within 6% of market median",
        time: "14:33",
        state: "good",
      },
      {
        title: "Seller history joined",
        detail: "412 sales · 0.3% dispute rate",
        time: "14:33",
        state: "good",
      },
      {
        title: "Trust decision generated",
        detail: "Allow · 94% confidence · 96ms",
        time: "14:33",
        state: "decision",
      },
    ],
  },
  dec_84287: {
    id: "dec_84287",
    user: "Ethan Brooks",
    action: "Card change",
    amount: "Payment method update",
    destination: "Visa •••• 7742",
    decision: "REVIEW" as DecisionType,
    confidence: 88,
    risk: 82,
    latency: "167ms",
    explanation: "The card change follows a classic account-takeover sequence.",
    explanationDetail:
      "A new session changed recovery credentials before adding a high-risk payment instrument.",
    positives: [
      "Account age: 2.1 years",
      "No prior chargebacks",
      "Email address unchanged",
    ],
    risks: [
      "Impossible travel in 46 minutes",
      "Recovery phone changed",
      "New device + new IP",
      "Card linked to disputed accounts",
    ],
    insight:
      "The sequence matches 23 historical takeover cases; the linked card is the strongest risk contributor.",
    policy: "Account Takeover Prevention",
    version: "v5.1",
    owner: "Identity & Access",
    recommendation: "Challenge current session",
    recommendationDetail:
      "Revoke the session, restore the previous recovery phone, and require trusted-device verification.",
    entityAge: "2.1 years",
    location: "Warsaw, PL",
    usualLocation: "Chicago, US",
    recentEvent: "Recovery phone changed 3 min ago",
    timeline: [
      {
        title: "Login succeeded",
        detail: "New Windows device · Warsaw",
        time: "15:41",
        state: "risk",
      },
      {
        title: "Recovery phone changed",
        detail: "Trusted number removed",
        time: "15:43",
        state: "risk",
      },
      {
        title: "New card added",
        detail: "Linked to 2 disputed accounts",
        time: "15:45",
        state: "risk",
      },
      {
        title: "Card change requested",
        detail: "Set as default payment method",
        time: "15:46",
        state: "risk",
      },
      {
        title: "Trust decision generated",
        detail: "Review · 88% confidence · 167ms",
        time: "15:46",
        state: "decision",
      },
    ],
  },
} satisfies Record<
  string,
  {
    id: string;
    user: string;
    action: string;
    amount: string;
    destination: string;
    decision: DecisionType;
    confidence: number;
    risk: number;
    latency: string;
    explanation: string;
    explanationDetail: string;
    positives: string[];
    risks: string[];
    insight: string;
    policy: string;
    version: string;
    owner: string;
    recommendation: string;
    recommendationDetail: string;
    entityAge: string;
    location: string;
    usualLocation: string;
    recentEvent: string;
    timeline: typeof timeline;
  }
>;
