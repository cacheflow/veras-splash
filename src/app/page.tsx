"use client";

import { useState } from "react";
import {
  ArrowRight,
  Braces,
  Check,
  ChevronRight,
  CircleDot,
  Clock3,
  Code2,
  GitBranch,
  Layers3,
  Menu,
  MessageSquareWarning,
  Network,
  ShieldCheck,
  UserCheck,
  Webhook,
  X,
  Zap,
} from "lucide-react";

const inputs = [
  { source: "Hive", event: "content.flagged", tone: "amber" },
  { source: "Stream", event: "message.reported", tone: "blue" },
  { source: "Persona", event: "verification.failed", tone: "violet" },
  { source: "Stripe", event: "chargeback.created", tone: "indigo" },
  { source: "Sardine", event: "payout.changed", tone: "rose" },
  { source: "Zendesk", event: "support.escalated", tone: "emerald" },
  { source: "Internal API", event: "account.restricted", tone: "slate" },
];

const outputs = [
  { label: "Review case", icon: Layers3 },
  { label: "Account timeline", icon: Clock3 },
  { label: "Human review", icon: UserCheck },
  { label: "Hold payout", icon: CircleDot },
  { label: "Require verification", icon: ShieldCheck },
  { label: "Limit messaging", icon: MessageSquareWarning },
  { label: "Send webhook", icon: Webhook },
];

const productOutputs = [
  {
    number: "01",
    title: "Account timeline",
    description:
      "See moderation, identity, payment, support, and internal events in one chronological view.",
    icon: Clock3,
    detail: ["content.flagged", "verification.failed", "payout.changed"],
  },
  {
    number: "02",
    title: "Prepared review cases",
    description:
      "Collect the relevant account history before someone begins a review.",
    icon: Layers3,
    detail: ["Linked subject", "Related signals", "Audit context"],
  },
  {
    number: "03",
    title: "Workflow triggers",
    description:
      "Send accounts to the right queue, team, webhook, or internal service.",
    icon: GitBranch,
    detail: ["Route to queue", "Notify team", "Send webhook"],
  },
  {
    number: "04",
    title: "Account actions",
    description:
      "Ask your systems to hold payouts, require verification, limit messaging, or apply custom restrictions.",
    icon: Zap,
    detail: ["Hold", "Restrict", "Escalate"],
  },
];

const integrationGroups = [
  {
    title: "Moderation",
    items: ["Hive", "Stream", "ActiveFence", "Custom models"],
  },
  {
    title: "Identity and KYC",
    items: ["Persona", "Veriff", "Alloy", "Internal verification"],
  },
  {
    title: "Fraud and payments",
    items: ["Stripe", "Sardine", "Sift", "Internal ledgers"],
  },
  {
    title: "Support and internal",
    items: ["Zendesk", "Salesforce", "Admin tools", "Custom webhooks"],
  },
];

const exampleSteps = [
  { source: "Persona", text: "reports a failed verification", event: "verification.failed", time: "T+0.00s" },
  { source: "Stripe", text: "reports a payout change", event: "payout.changed", time: "T+0.08s" },
  { source: "Hive", text: "flags a new upload", event: "content.flagged", time: "T+0.15s" },
  { source: "Veras", text: "links all three events to creator_123", event: "events.linked", time: "T+0.22s" },
  { source: "Veras", text: "prepares a review case", event: "case.created", time: "T+0.24s" },
  { source: "Platform", text: "receives a webhook", event: "webhook.sent", time: "T+0.31s" },
  { source: "Reviewer", text: "chooses the next action", event: "human.review", time: "T+1.45s" },
];

const useCases = [
  "Creator platforms",
  "Adult platforms",
  "Gambling",
  "Marketplaces",
  "Dating",
  "Gaming",
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center transition-opacity" aria-label="Veras home">
      {compact ? (
        <img
          src="/images/logo/logo-icon.svg"
          alt="Veras Logo Icon"
          className="h-7 w-auto transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <img
          src="/images/logo/logo-dark.svg"
          alt="Veras Logo"
          className="h-6.5 w-auto transition-transform duration-300"
        />
      )}
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-indigo-400/80">
      <span className="h-px w-5 bg-indigo-500/20" />
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <div className={centered ? "flex justify-center" : undefined}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className="text-balance text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {body && (
        <p className="mt-4 text-sm leading-[1.6] text-neutral-400 sm:text-base">
          {body}
        </p>
      )}
    </div>
  );
}

function EventCard({ source, event, tone }: (typeof inputs)[number]) {
  const toneClasses: Record<string, string> = {
    amber: "border-amber-500/10 bg-amber-500/[0.02] text-amber-400/80",
    blue: "border-blue-500/10 bg-blue-500/[0.02] text-blue-400/80",
    violet: "border-violet-500/10 bg-violet-500/[0.02] text-violet-400/80",
    indigo: "border-indigo-500/10 bg-indigo-500/[0.02] text-indigo-400/80",
    rose: "border-rose-500/10 bg-rose-500/[0.02] text-rose-400/80",
    emerald: "border-emerald-500/10 bg-emerald-500/[0.02] text-emerald-400/80",
    slate: "border-slate-500/10 bg-slate-500/[0.02] text-slate-400/80",
  };

  return (
    <div className="flex h-11 items-center justify-between gap-3 rounded-lg border border-white/[0.03] bg-[#08090b]/40 px-3 py-2 transition-all hover:border-white/[0.08] hover:bg-[#0c0d12]/60">
      <span className="flex min-w-0 items-center gap-2 text-[12.5px] font-medium text-neutral-200">
        <span className="size-1.5 shrink-0 rounded-full bg-neutral-700" />
        {source}
      </span>
      <code className={`mt-1 block truncate font-mono text-[9px] text-neutral-500 sm:mt-0 bg-[#090a0c] border border-white/[0.02] px-1.5 py-0.5 rounded`}>
        {event}
      </code>
    </div>
  );
}

function OutputCard({ label, icon: Icon }: (typeof outputs)[number]) {
  return (
    <div className="flex h-11 items-center gap-2.5 rounded-lg border border-white/[0.03] bg-[#08090b]/40 px-3 py-2 transition-all hover:border-white/[0.08] hover:bg-[#0c0d12]/60">
      <span className="grid size-6 shrink-0 place-items-center rounded bg-emerald-500/[0.04] text-emerald-400 border border-emerald-500/10">
        <Icon className="size-3.5" />
      </span>
      <span className="text-[12.5px] font-medium text-neutral-300">{label}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="top" className="veras-dark relative min-h-screen overflow-hidden font-outfit text-neutral-100 antialiased">
      <div className="veras-grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-[-300px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/[0.05] blur-[120px]" />

      <header className="sticky top-0 z-50 border-b border-white/[0.04] bg-[#030407]/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <div> Veras </div>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
            <a className="nav-link" href="#product">Product</a>
            <a className="nav-link" href="#integrations">Integrations</a>
            <a className="nav-link" href="#use-cases">Use cases</a>
            <a className="nav-link" href="#developers">Docs</a>
          </nav>
          <a className="button-primary hidden md:inline-flex" href="mailto:hello@onveras.com?subject=Veras%20demo">
            Book a demo
            <ArrowRight className="size-3.5" />
          </a>
          <button
            type="button"
            className="focus-ring grid size-9 place-items-center rounded-lg border border-white/5 text-neutral-400 md:hidden hover:bg-white/[0.02]"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" className="border-t border-white/[0.04] bg-[#040507] px-5 py-4 md:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col gap-0.5">
              {[
                ["Product", "#product"],
                ["Integrations", "#integrations"],
                ["Use cases", "#use-cases"],
                ["Docs", "#developers"],
              ].map(([label, href]) => (
                <a key={href} className="focus-ring rounded-md px-3 py-2.5 text-[13px] text-neutral-400 hover:bg-white/[0.02] hover:text-white" href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              ))}
              <a className="button-primary mt-3 justify-center" href="mailto:hello@onveras.com?subject=Veras%20demo">Book a demo</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:px-12 lg:pb-28 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Connect every <span className="veras-gradient-text">trust signal.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-[1.6] text-neutral-400 sm:text-base">
            Veras brings events from your moderation, identity, fraud, payments, support, and internal systems into one place, so you can review accounts, trigger workflows, and take action without writing custom glue code.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a className="button-primary w-full justify-center sm:w-auto" href="mailto:hello@onveras.com?subject=Veras%20demo">
              Book a demo
              <ArrowRight className="size-3.5" />
            </a>
            <a className="button-secondary w-full justify-center sm:w-auto" href="#developers">
              View docs
              <Code2 className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Event Flow Visual - Desktop */}
        <div className="relative mx-auto mt-16 hidden max-w-6xl overflow-hidden rounded-xl border border-white/[0.05] bg-[#050608]/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.6)] lg:block">
          <div className="veras-scan-line" />
          
          <div className="flex items-center justify-between border-b border-white/[0.04] pb-4 font-mono text-[9px] uppercase tracking-wider text-neutral-500">
            <div className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-neutral-800" />
              <span className="size-1.5 rounded-full bg-neutral-800" />
              <span className="size-1.5 rounded-full bg-neutral-800" />
            </div>
            <span>Live Pipeline Canvas</span>
            <span className="flex items-center gap-1.5 text-emerald-400/90">
              <span className="size-1.5 rounded-full bg-emerald-400 veras-pulse-dot" />
              Listening
            </span>
          </div>

          <div className="mt-8 grid grid-cols-[1fr_80px_300px_80px_1fr] items-center gap-2">
            {/* Inputs Column */}
            <div className="flex flex-col gap-2">
              <div className="flow-label">Ingested Signals</div>
              <div className="flex flex-col gap-2">
                {inputs.map((item) => (
                  <EventCard key={item.event} {...item} />
                ))}
              </div>
            </div>

            {/* Left Connectors */}
            <div className="h-[384px] w-20 relative">
              <svg className="absolute inset-0 h-full w-full" fill="none" viewBox="0 0 80 380">
                {[
                  { y1: 24, y2: 110, color: "stroke-amber-500/20" },
                  { y1: 80, y2: 110, color: "stroke-blue-500/20" },
                  { y1: 136, y2: 150, color: "stroke-violet-500/20" },
                  { y1: 192, y2: 190, color: "stroke-indigo-500/20" },
                  { y1: 248, y2: 190, color: "stroke-rose-500/20" },
                  { y1: 304, y2: 230, color: "stroke-emerald-500/20" },
                  { y1: 360, y2: 230, color: "stroke-slate-500/20" },
                ].map((line, idx) => (
                  <path
                    key={idx}
                    d={`M 0 ${line.y1} C 40 ${line.y1}, 40 ${line.y2}, 80 ${line.y2}`}
                    className={`${line.color} animate-flow-forward`}
                    strokeWidth="1.5"
                  />
                ))}
              </svg>
            </div>

            {/* Center Engine Column */}
            <div className="relative rounded-xl border border-indigo-500/20 bg-[#07080b] p-5 shadow-[0_0_40px_rgba(99,102,241,0.06)]">
              <div className="flex items-center justify-between border-b border-white/[0.04] pb-3.5">
                <span className="flex items-center gap-2 text-xs font-semibold text-neutral-100">
                  <Network className="size-3.5 text-indigo-400" />
                  Veras Hub
                </span>
                <span className="rounded border border-indigo-500/20 bg-indigo-500/[0.06] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-indigo-300 font-medium">
                  processing
                </span>
              </div>
              
              <div className="mt-4 flex flex-col gap-2">
                {[
                  { label: "Receive", step: "01" },
                  { label: "Link", step: "02" },
                  { label: "Group", step: "03" },
                  { label: "Route", step: "04" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded border border-white/[0.03] bg-white/[0.01] px-2.5 py-1.5 text-[11px] text-neutral-300">
                    <span>{item.label}</span>
                    <span className="font-mono text-[9px] text-indigo-400 font-semibold">{item.step}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 border-t border-white/[0.04] pt-3.5 font-mono text-[9px] text-neutral-400 space-y-1">
                <div className="flex justify-between">
                  <span className="text-neutral-500">subject:</span>
                  <span className="text-indigo-300 font-semibold">creator_123</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">context:</span>
                  <span>7 linked signals</span>
                </div>
              </div>
            </div>

            {/* Right Connectors */}
            <div className="h-[384px] w-20 relative">
              <svg className="absolute inset-0 h-full w-full" fill="none" viewBox="0 0 80 380">
                {[
                  { y1: 110, y2: 24 },
                  { y1: 110, y2: 80 },
                  { y1: 150, y2: 136 },
                  { y1: 190, y2: 192 },
                  { y1: 190, y2: 248 },
                  { y1: 230, y2: 304 },
                  { y1: 230, y2: 360 },
                ].map((line, idx) => (
                  <path
                    key={idx}
                    d={`M 0 ${line.y1} C 40 ${line.y1}, 40 ${line.y2}, 80 ${line.y2}`}
                    className="stroke-emerald-500/20 animate-flow-forward"
                    strokeWidth="1.5"
                  />
                ))}
              </svg>
            </div>

            {/* Outputs Column */}
            <div className="flex flex-col gap-2">
              <div className="flow-label">Triggered Actions</div>
              <div className="flex flex-col gap-2">
                {outputs.map((item) => (
                  <OutputCard key={item.label} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Event Flow Visual - Mobile & Tablet */}
        <div className="relative mx-auto mt-12 block max-w-md overflow-hidden rounded-xl border border-white/[0.05] bg-[#050608]/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] lg:hidden">
          <div className="veras-scan-line" />
          
          <div className="flex items-center justify-between border-b border-white/[0.04] pb-3 font-mono text-[9px] uppercase tracking-wider text-neutral-500">
            <span>Pipeline Canvas</span>
            <span className="flex items-center gap-1.5 text-emerald-400/90">
              <span className="size-1.5 rounded-full bg-emerald-400 veras-pulse-dot" />
              Active
            </span>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <div className="w-full">
              <div className="flow-label text-center">Ingested Signals</div>
              <div className="flex flex-col gap-2">
                {inputs.slice(0, 4).map((item) => (
                  <EventCard key={item.event} {...item} />
                ))}
                {inputs.length > 4 && (
                  <div className="text-center font-mono text-[9px] text-neutral-500 py-1">
                    + {inputs.length - 4} more signals
                  </div>
                )}
              </div>
            </div>

            <div className="h-10 w-4 relative">
              <svg className="absolute inset-0 h-full w-full" fill="none" viewBox="0 0 16 40">
                <line x1="8" y1="0" x2="8" y2="40" className="stroke-indigo-500/25 animate-flow-forward" strokeWidth="2" />
              </svg>
            </div>

            <div className="w-full max-w-xs rounded-xl border border-indigo-500/20 bg-[#07080b] p-4 shadow-[0_0_30px_rgba(99,102,241,0.05)]">
              <div className="flex items-center justify-between border-b border-white/[0.04] pb-2.5">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-100">
                  <Network className="size-3.5 text-indigo-400" />
                  Veras Hub
                </span>
                <span className="rounded border border-indigo-500/20 bg-indigo-500/[0.06] px-1 py-0.5 font-mono text-[8px] uppercase tracking-wider text-indigo-300 font-medium">
                  processing
                </span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-1.5 text-[11px] text-neutral-300">
                {["Receive", "Link", "Group", "Route"].map((label, index) => (
                  <div key={label} className="flex items-center gap-1.5 rounded border border-white/[0.03] bg-white/[0.01] px-2 py-1.5">
                    <span className="font-mono text-[9px] text-indigo-400 font-semibold">0{index + 1}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 border-t border-white/[0.04] pt-2.5 font-mono text-[9px] text-neutral-400 text-center">
                subject: <span className="text-indigo-300 font-semibold">creator_123</span>
              </div>
            </div>

            <div className="h-10 w-4 relative">
              <svg className="absolute inset-0 h-full w-full" fill="none" viewBox="0 0 16 40">
                <line x1="8" y1="0" x2="8" y2="40" className="stroke-emerald-500/25 animate-flow-forward" strokeWidth="2" />
              </svg>
            </div>

            <div className="w-full">
              <div className="flow-label text-center">Triggered Actions</div>
              <div className="flex flex-col gap-2">
                {outputs.slice(0, 4).map((item) => (
                  <OutputCard key={item.label} {...item} />
                ))}
                {outputs.length > 4 && (
                  <div className="text-center font-mono text-[9px] text-neutral-500 py-1">
                    + {outputs.length - 4} more actions
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative z-10 border-y border-white/[0.03] bg-white/[0.005]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
          <SectionHeading eyebrow="The problem" title="Your stack is fragmented" body="Critical events are scattered across dozens of services." />
          
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Hive", "knows about content.", "DISCONNECTED"],
                ["Persona", "knows about identity.", "DISCONNECTED"],
                ["Stripe", "knows about payments.", "DISCONNECTED"],
                ["Zendesk", "knows about support.", "DISCONNECTED"],
              ].map(([name, text, status]) => (
                <div key={name} className="flex flex-col justify-between rounded-lg border border-white/[0.03] bg-white/[0.01] p-4 transition-all hover:border-white/[0.06]">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/[0.03] pb-2 mb-2">
                      <span className="text-[13px] font-semibold text-white tracking-tight">{name}</span>
                      <span className="font-mono text-[8px] font-bold text-amber-500/80 tracking-wide">{status}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-neutral-400">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-3 rounded-lg border border-indigo-500/10 bg-indigo-500/[0.02] p-4 text-[13px] text-indigo-200">
              <Network className="size-4.5 shrink-0 text-indigo-400" />
              <p className="font-medium">Veras connects those events in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="relative z-10 mx-auto max-w-7xl scroll-mt-16 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <SectionHeading eyebrow="Product" title="One event stream. Useful outputs." body="Connect the systems you already use. Turn their fragmented events into context your team and products can use." />
        
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {productOutputs.map(({ number, title, description, icon: Icon, detail }) => (
            <article key={title} className="group rounded-xl border border-white/[0.03] bg-white/[0.01] p-6 transition-all hover:border-indigo-500/20 hover:bg-[#090a0e]/30">
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-9 place-items-center rounded-lg border border-indigo-500/15 bg-indigo-500/[0.04] text-indigo-400">
                  <Icon className="size-4.5" />
                </span>
                <span className="font-mono text-[9px] tracking-wider text-neutral-600 font-semibold">[{number}]</span>
              </div>
              <h3 className="mt-6 text-[17px] font-semibold tracking-tight text-white">{title}</h3>
              <p className="mt-2.5 max-w-lg text-[13px] leading-relaxed text-neutral-400">{description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {detail.map((item) => (
                  <span key={item} className="rounded border border-white/[0.03] bg-[#090a0c]/80 px-2 py-1 font-mono text-[9px] text-neutral-400">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 font-mono text-[10px] text-neutral-500">
          Actions are executed through your own systems. Your team keeps the final decision.
        </p>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="relative z-10 scroll-mt-16 border-y border-white/[0.03] bg-white/[0.005]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <SectionHeading eyebrow="Integrations" title="Connect events from across your stack." body="Use connectors and webhooks to bring vendor and internal events into the same account context." />
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/[0.04]">
            {integrationGroups.map((group, index) => (
              <article key={group.title} className="lg:px-6 first:pl-0 last:pr-0">
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-3">
                  <h3 className="text-[13px] font-semibold text-white tracking-tight">{group.title}</h3>
                  <span className="font-mono text-[9px] text-neutral-600">0{index + 1}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="group/item flex items-center gap-2 text-[13px] text-neutral-400 transition-colors hover:text-neutral-200">
                      <span className="size-1 rounded-full bg-neutral-700 group-hover/item:bg-indigo-400 transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          {/* <p className="mt-6 font-mono text-[10px] text-neutral-500">
            Vendors shown are examples of systems Veras is designed to connect with, not partnership claims.
          </p> */}
        </div>
      </section>

      {/* Concrete Example / Log Audit Timeline Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <SectionHeading centered eyebrow="A concrete example" title="Three signals. One creator. One review-ready case." />
        
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-white/[0.04] bg-[#050608] p-4 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
          <ol className="relative space-y-1.5 before:absolute before:bottom-7 before:left-[19px] before:top-7 before:w-px before:bg-neutral-800 sm:before:left-[23px]">
            {exampleSteps.map((step, index) => (
              <li key={step.event} className="relative flex items-center gap-4 rounded-lg border border-transparent p-2 transition-colors hover:border-white/[0.03] hover:bg-white/[0.01] sm:gap-5 sm:p-2.5">
                <span className={`relative z-10 grid size-6 shrink-0 place-items-center rounded-full border font-mono text-[9px] sm:size-7 ${index < 3 ? "border-violet-500/20 bg-violet-500/[0.05] text-violet-400" : index < 6 ? "border-indigo-500/20 bg-indigo-500/[0.05] text-indigo-400" : "border-emerald-500/20 bg-emerald-500/[0.05] text-emerald-400"}`}>
                  {index + 1}
                </span>
                
                <div className="min-w-0 flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-5">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[8px] text-neutral-500 shrink-0">{step.time}</span>
                    <p className="text-xs text-neutral-300">
                      <strong className="font-medium text-white">{step.source}</strong> {step.text}.
                    </p>
                  </div>
                  <code className="mt-1 block truncate font-mono text-[9px] text-neutral-500 sm:mt-0 bg-[#090a0c] border border-white/[0.02] px-1.5 py-0.5 rounded">
                    {step.event}
                  </code>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* For Developers Section */}
      <section id="developers" className="relative z-10 scroll-mt-16 border-y border-white/[0.03] bg-white/[0.005]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-12">
          <div>
            <SectionHeading eyebrow="For developers" title="One consistent interface for every event." body="Send different vendor events through the same small API. Attach them to the same subject, then build on the connected history." />
            
            <div className="mt-8 space-y-3">
              {[
                "Use your own subject IDs",
                "Keep the source payload",
                "Add new event types without changing the core model"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-xs text-neutral-400">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-neutral-800 text-emerald-400 border border-white/[0.05]">
                    <Check className="size-3" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Syntax-Colored Mock Code Window */}
          <div className="overflow-hidden rounded-xl border border-white/[0.05] bg-[#040507] shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
            <div className="flex items-center justify-between border-b border-white/[0.04] px-4 py-2.5 font-mono text-[9px] text-neutral-500 sm:px-5">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#f25f58]/30" />
                <span className="size-2 rounded-full bg-[#fbbe3c]/30" />
                <span className="size-2 rounded-full bg-[#3cf742]/30" />
              </div>
              <span className="flex items-center gap-2">
                <Braces className="size-3 text-indigo-400" />
                events.ts
              </span>
              <span>TypeScript</span>
            </div>
            
            <pre className="!m-0 overflow-x-auto !bg-transparent p-4 text-[11px] leading-6 sm:p-5 sm:text-[11.5px] font-mono select-none">
              <code>
                <div>
                  <span className="text-[#f47067]">await</span> <span className="text-[#a5d6ff]">veras</span>.<span className="text-[#d2a8ff]">events</span>.<span className="text-[#d2a8ff]">ingest</span>(&#123;
                </div>
                <div className="pl-4">
                  <span className="text-[#79c0ff]">type</span>: <span className="text-[#a5d6ff]">&quot;verification.failed&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#79c0ff]">subject</span>: &#123;
                </div>
                <div className="pl-8">
                  <span className="text-[#79c0ff]">type</span>: <span className="text-[#a5d6ff]">&quot;creator&quot;</span>,
                </div>
                <div className="pl-8">
                  <span className="text-[#79c0ff]">id</span>: <span className="text-[#a5d6ff]">&quot;creator_123&quot;</span>
                </div>
                <div className="pl-4">
                  &#125;,
                </div>
                <div className="pl-4">
                  <span className="text-[#79c0ff]">source</span>: <span className="text-[#a5d6ff]">&quot;persona&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#79c0ff]">occurredAt</span>: <span className="text-[#f47067]">new</span> <span className="text-[#d2a8ff]">Date</span>().<span className="text-[#d2a8ff]">toISOString</span>(),
                </div>
                <div className="pl-4">
                  <span className="text-[#79c0ff]">data</span>: &#123;
                </div>
                <div className="pl-8">
                  <span className="text-[#79c0ff]">inquiryId</span>: <span className="text-[#a5d6ff]">&quot;inq_456&quot;</span>
                </div>
                <div className="pl-4">
                  &#125;
                </div>
                <div>
                  &#125;);
                </div>
                
                <div className="mt-4">
                  <span className="text-[#f47067]">await</span> <span className="text-[#a5d6ff]">veras</span>.<span className="text-[#d2a8ff]">events</span>.<span className="text-[#d2a8ff]">ingest</span>(&#123;
                </div>
                <div className="pl-4">
                  <span className="text-[#79c0ff]">type</span>: <span className="text-[#a5d6ff]">&quot;content.flagged&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#79c0ff]">subject</span>: &#123;
                </div>
                <div className="pl-8">
                  <span className="text-[#79c0ff]">type</span>: <span className="text-[#a5d6ff]">&quot;creator&quot;</span>,
                </div>
                <div className="pl-8">
                  <span className="text-[#79c0ff]">id</span>: <span className="text-[#a5d6ff]">&quot;creator_123&quot;</span>
                </div>
                <div className="pl-4">
                  &#125;,
                </div>
                <div className="pl-4">
                  <span className="text-[#79c0ff]">source</span>: <span className="text-[#a5d6ff]">&quot;hive&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#79c0ff]">occurredAt</span>: <span className="text-[#f47067]">new</span> <span className="text-[#d2a8ff]">Date</span>().<span className="text-[#d2a8ff]">toISOString</span>(),
                </div>
                <div className="pl-4">
                  <span className="text-[#79c0ff]">data</span>: &#123;
                </div>
                <div className="pl-8">
                  <span className="text-[#79c0ff]">category</span>: <span className="text-[#a5d6ff]">&quot;suspected_deepfake&quot;</span>,
                </div>
                <div className="pl-8">
                  <span className="text-[#79c0ff]">confidence</span>: <span className="text-[#79c0ff]">0.94</span>
                </div>
                <div className="pl-4">
                  &#125;
                </div>
                <div>
                  &#125;);
                </div>
              </code>
            </pre>
          </div>
        </div>
      </section>

      
      <section id="use-cases" className="relative z-10 mx-auto max-w-7xl scroll-mt-16 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <SectionHeading centered eyebrow="Use cases" title="Built for platforms" />
        
        <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, index) => (
            <div key={item} className="group flex items-center justify-between rounded-lg border border-white/[0.03] bg-white/[0.01] p-4 text-[13px] font-medium text-neutral-300 transition-colors hover:border-white/[0.08] hover:bg-white/[0.02] hover:text-white">
              <span className="flex items-center gap-3">
                <span className="font-mono text-[9px] text-neutral-600">0{index + 1}</span>
                {item}
              </span>
              <ChevronRight className="size-3.5 text-neutral-600 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-400" />
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl border border-indigo-500/10 bg-[#06070a]/80 px-6 py-14 text-center sm:px-10 sm:py-18">
          <div className="veras-grid-bg pointer-events-none absolute inset-0 opacity-20" />
          <div className="pointer-events-none absolute left-1/2 top-[-200px] size-[400px] -translate-x-1/2 rounded-full bg-indigo-500/[0.03] blur-[100px]" />
          
          <div className="relative mx-auto max-w-2xl">
            <div className="flex justify-center">
              <Eyebrow>Build on Veras</Eyebrow>
            </div>
            <h2 className="text-balance text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl md:text-4xl">
              Stop stitching your trust stack together by hand.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
              Connect your existing tools and turn fragmented events into review-ready context and usable workflows.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a className="button-primary justify-center" href="mailto:hello@onveras.com?subject=Veras%20demo">
                Book a demo
                <ArrowRight className="size-3.5" />
              </a>
              <a className="button-secondary justify-center" href="#developers">
                View docs
                <Code2 className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 border-t border-white/[0.03] bg-[#030407]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div className="flex items-center gap-4">
            <div>
              <div className="text-[13px] font-semibold text-white">Veras</div>
              <div className="mt-0.5 text-[11px] text-neutral-500">Connect every trust signal.</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-500">
            <a className="hover:text-white transition-colors" href="#product">Product</a>
            <a className="hover:text-white transition-colors" href="#integrations">Integrations</a>
            <a className="hover:text-white transition-colors" href="#developers">Docs</a>
            <a className="hover:text-white transition-colors" href="mailto:hello@onveras.com">Contact</a>
          </div>
          
          <p className="font-mono text-[9px] uppercase tracking-wider text-neutral-600">
            © {new Date().getFullYear()} Veras
          </p>
        </div>
      </footer>
    </main>
  );
}
