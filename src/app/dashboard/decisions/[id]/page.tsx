import Link from "next/link";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  CircleAlert,
  Clock3,
  Copy,
  ExternalLink,
  Fingerprint,
  Globe2,
  KeyRound,
  MapPin,
  ShieldAlert,
  Sparkles,
  UserCheck,
  WalletCards,
  X,
} from "lucide-react";
import { DecisionBadge, SectionTitle } from "@/components/veras-dashboard/ui";
import { decisionProfiles } from "@/lib/veras-dashboard-data";

export default async function DecisionDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const profile =
    decisionProfiles[id as keyof typeof decisionProfiles] ??
    decisionProfiles.dec_84291;
  const policyLogic = (
    {
      dec_84291: [
        ["withdrawal.amount", ">", "5000"],
        ["device.age_hours", "<", "24"],
        ["risk.score", ">", "80"],
        ["require_review"],
      ],
      dec_84290: [
        ["identity.verified", "=", "true"],
        ["device.confidence", ">", "90"],
        ["risk.score", "<", "20"],
        ["allow"],
      ],
      dec_84289: [
        ["identity.document_reuse", ">", "2"],
        ["payout.name_match", "=", "false"],
        ["risk.score", ">", "90"],
        ["block"],
      ],
      dec_84288: [
        ["seller.completed_sales", ">", "100"],
        ["listing.media_original", "=", "true"],
        ["risk.score", "<", "25"],
        ["allow"],
      ],
      dec_84287: [
        ["recovery.changed_minutes", "<", "10"],
        ["payment.linked_disputes", ">", "0"],
        ["risk.score", ">", "80"],
        ["require_review"],
      ],
    } as Record<string, string[][]>
  )[profile.id] ?? [
    ["risk.score", ">", "80"],
    ["signal.count", ">", "2"],
    ["policy.active", "=", "true"],
    ["require_review"],
  ];
  return (
    <div>
      <Link
        href="/dashboard"
        className="mb-5 inline-flex items-center gap-1.5 text-[13px] text-[#7d8693] hover:text-white"
      >
        <ArrowLeft size={13} />
        Back to decisions
      </Link>
      <div className="mb-7 flex flex-col justify-between gap-4 border-b border-[#20252e] pb-6 md:flex-row md:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <DecisionBadge value={profile.decision} />
            <span className="font-mono text-[13px] text-[#626b77]">
              {profile.id} · {profile.latency}
            </span>
          </div>
          <h1 className="text-2xl font-semibold tracking-[-.035em] sm:text-[28px]">
            {profile.user}
          </h1>
          <p className="mt-2 text-sm text-[#8b94a1]">
            {profile.action} ·{" "}
            <span className="font-medium text-[#d8dce2]">{profile.amount}</span>{" "}
            · {profile.destination}
          </p>
        </div>
        <div className="flex gap-6">
          <div>
            <p className="eyebrow">Confidence</p>
            <p className="mt-2 text-xl font-semibold">{profile.confidence}%</p>
          </div>
          <div>
            <p className="eyebrow">Risk score</p>
            <p
              className={`mt-2 text-xl font-semibold ${profile.risk >= 80 ? "text-rose-300" : "text-emerald-300"}`}
            >
              {profile.risk}
              <span className="text-[13px] text-[#666f7c]"> / 100</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(330px,.8fr)]">
        <div className="space-y-6">
          <section className="panel overflow-hidden rounded-lg">
            <div className="border-b border-[#20252e] p-5">
              <SectionTitle
                eyebrow="Decision explanation"
                title={profile.explanation}
                detail={profile.explanationDetail}
              />
            </div>
            <div className="grid md:grid-cols-2">
              <div className="border-b border-[#20252e] p-5 md:border-b-0 md:border-r">
                <p className="mb-4 flex items-center gap-2 text-[13px] font-semibold text-emerald-300">
                  <Check size={14} />
                  Positive signals
                </p>
                <div className="space-y-3">
                  {profile.positives.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-2.5 text-[13px] text-[#aeb5bf]"
                    >
                      <span className="size-1 rounded-full bg-emerald-400" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4 flex items-center gap-2 text-[13px] font-semibold text-rose-300">
                  <ShieldAlert size={14} />
                  Risk signals
                </p>
                <div className="space-y-3">
                  {profile.risks.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-2.5 text-[13px] text-[#c1c6ce]"
                    >
                      <span className="size-1 rounded-full bg-rose-400" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="signal-line" />
            <div className="flex flex-wrap items-center gap-3 bg-[#6c8cff]/[.035] px-5 py-4 text-[13px] text-[#818b9a]">
              <Sparkles size={13} className="text-[#8fa2ff]" />
              <span className="font-medium text-[#aab7ed]">
                Correlation insight
              </span>
              <span>{profile.insight}</span>
            </div>
          </section>

          <section className="panel rounded-lg p-5">
            <SectionTitle
              eyebrow="Policy evaluation"
              title={profile.policy}
              detail={`Version ${profile.version} · Published by ${profile.owner}`}
            />
            <div className="overflow-hidden rounded-md border border-[#252c36] bg-[#090c10] font-mono text-[13px]">
              <div className="flex items-center justify-between border-b border-[#20252e] px-4 py-2 text-[#616a78]">
                <span>policy.rule</span>
                <button aria-label="Copy rule">
                  <Copy size={12} />
                </button>
              </div>
              <div className="space-y-1.5 p-4 leading-5">
                {policyLogic.slice(0, 3).map((rule, index) => (
                  <p key={rule[0]}>
                    <span className="text-violet-300">
                      {index === 0 ? "IF" : "AND"}
                    </span>{" "}
                    <span className="text-[#bdc5d0]">{rule[0]}</span>{" "}
                    <span className="text-[#7084dd]">{rule[1]}</span>{" "}
                    <span className="text-amber-300">{rule[2]}</span>
                  </p>
                ))}
                <p className="pt-1">
                  <span className="text-violet-300">THEN</span>{" "}
                  <span className="text-emerald-300">{policyLogic[3][0]}</span>
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                ["$8,000", "amount", "met"],
                ["0.2 hrs", "device age", "met"],
                ["87", "risk score", "met"],
              ].map(([v, l]) => (
                <div
                  key={l}
                  className="rounded-md border border-emerald-400/10 bg-emerald-400/[.035] p-3"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">{v}</p>
                    <Check size={12} className="text-emerald-300" />
                  </div>
                  <p className="mt-1 text-[13px] text-[#68717e]">{l}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="panel rounded-lg p-5">
            <SectionTitle
              eyebrow="Events timeline"
              title="What happened before this decision"
              detail="Unified from first-party events and connected vendors"
            />
            <div className="mt-6">
              {profile.timeline.map((e, i) => (
                <div
                  key={e.title}
                  className="relative grid grid-cols-[24px_1fr_auto] gap-3 pb-6 last:pb-0"
                >
                  {i < profile.timeline.length - 1 && (
                    <span className="absolute left-[5px] top-3 h-full w-px bg-[#282e38]" />
                  )}
                  <span
                    className={`relative z-10 mt-1 size-[11px] rounded-full border-2 border-[#0d1015] ${e.state === "risk" ? "bg-rose-400" : e.state === "good" ? "bg-emerald-400" : e.state === "decision" ? "bg-amber-300 ring-4 ring-amber-300/10" : "bg-[#555e6b]"}`}
                  />
                  <div>
                    <p className="text-[13px] font-medium text-[#d2d6dc]">
                      {e.title}
                    </p>
                    <p className="mt-1 text-[13px] text-[#6e7784]">
                      {e.detail}
                    </p>
                  </div>
                  <time className="font-mono text-[13px] text-[#5e6774]">
                    {e.time}
                  </time>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="panel rounded-lg p-5">
            <SectionTitle
              eyebrow="Recommended action"
              title={profile.recommendation}
            />
            <p className="text-[13px] leading-5 text-[#858e9b]">
              {profile.recommendationDetail}
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <button
                className={`rounded-md border py-2 text-[13px] text-emerald-300 ${profile.decision === "ALLOW" ? "border-emerald-300/30 bg-emerald-300/10 font-semibold" : "border-[#2a3039] hover:bg-emerald-400/5"}`}
              >
                Allow
              </button>
              <button
                className={`rounded-md border py-2 text-[13px] text-amber-300 ${profile.decision === "REVIEW" ? "border-amber-300/30 bg-amber-300/10 font-semibold" : "border-[#2a3039]"}`}
              >
                Review
              </button>
              <button
                className={`rounded-md border py-2 text-[13px] text-rose-300 ${profile.decision === "BLOCK" ? "border-rose-300/30 bg-rose-300/10 font-semibold" : "border-[#2a3039] hover:bg-rose-400/5"}`}
              >
                Block
              </button>
            </div>
            <button className="mt-3 w-full rounded-md bg-[#6c8cff] py-2.5 text-[13px] font-semibold text-[#080a0d]">
              {profile.decision === "REVIEW"
                ? "Create review case"
                : "View action log"}
            </button>
          </section>
          <section className="panel rounded-lg p-5">
            <SectionTitle eyebrow="Vendor signals" title="Source evidence" />
            <div className="space-y-2">
              {[
                [
                  Fingerprint,
                  "Fingerprint",
                  "Device confidence",
                  "High risk",
                  "text-rose-300",
                ],
                [
                  UserCheck,
                  "Persona",
                  "Identity",
                  "Verified",
                  "text-emerald-300",
                ],
                [
                  WalletCards,
                  "Stripe Radar",
                  "Payment risk",
                  "Medium",
                  "text-amber-300",
                ],
                [
                  Sparkles,
                  "Internal model",
                  "Behavior anomaly",
                  "High",
                  "text-rose-300",
                ],
              ].map(([I, n, l, v, c]) => {
                const Icon = I as typeof Fingerprint;
                return (
                  <div
                    key={String(n)}
                    className="rounded-md border border-[#242a33] bg-[#0d1116] p-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="grid size-7 place-items-center rounded bg-[#191f29] text-[#8295ed]">
                        <Icon size={14} />
                      </span>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="text-[13px] font-medium">{String(n)}</p>
                          <ExternalLink size={11} className="text-[#555e6b]" />
                        </div>
                        <div className="mt-2 flex justify-between text-[13px]">
                          <span className="text-[#68717e]">{String(l)}</span>
                          <span className={String(c)}>{String(v)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="panel rounded-lg p-5">
            <SectionTitle eyebrow="Entity context" title={profile.user} />
            <div className="space-y-3 text-[13px]">
              {[
                [Clock3, "Account age", profile.entityAge],
                [MapPin, "Current location", profile.location],
                [Globe2, "Usual location", profile.usualLocation],
                [KeyRound, "Recent event", profile.recentEvent],
              ].map(([I, l, v]) => {
                const Icon = I as typeof Clock3;
                return (
                  <div key={String(l)} className="flex items-center gap-2.5">
                    <Icon size={13} className="text-[#697485]" />
                    <span className="text-[#737c89]">{String(l)}</span>
                    <span className="ml-auto text-[#b5bbc4]">{String(v)}</span>
                  </div>
                );
              })}
            </div>
            <Link
              href="#"
              className="mt-4 flex items-center justify-between border-t border-[#242a33] pt-4 text-[13px] text-[#8fa2ff]"
            >
              View entity profile
              <ChevronRight size={13} />
            </Link>
          </section>
        </aside>
      </div>
    </div>
  );
}
