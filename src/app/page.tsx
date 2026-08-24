"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  CircleDollarSign,
  Menu,
  MessageSquare,
  PencilLine,
  Settings2,
  ShieldCheck,
  Upload,
  UserRoundCog,
  X,
} from "lucide-react";

const decisions = [
  ["Message", "Allow", "allow"],
  ["Upload", "Allow", "allow"],
  ["Purchase", "Allow", "allow"],
  ["Payout · $18,000", "Verify", "verify"],
  ["Bank change", "Review", "review"],
];
const signals = [
  "Identity verification",
  "Payment activity",
  "Moderation results",
  "Fraud signals",
  "Account history",
  "Internal events",
];
const useCases = [
  [
    "Message",
    "Control suspicious outreach, links, bulk messaging, and restricted conversations.",
    MessageSquare,
  ],
  [
    "Upload",
    "Approve, review, or block uploads using verification and moderation results.",
    Upload,
  ],
  [
    "Buy",
    "Control purchases, refunds, credits, and other high-risk transactions.",
    CircleDollarSign,
  ],
  [
    "Get paid",
    "Approve, hold, limit, or verify withdrawals and payouts.",
    ShieldCheck,
  ],
  [
    "Change account details",
    "Protect payout destinations, account recovery, and other sensitive changes.",
    UserRoundCog,
  ],
  [
    "Scalable",
    "Use the same pattern for selling, publishing, unlocking features, or any action unique to your platform.",
    Settings2,
  ],
] as const;

function Logo() {
  return (
    <a href="#top" aria-label="Veras home" className="flex items-center gap-2 text-sm font-semibold text-white">
      <Image
        src="/images/veras-logo.png"
        alt="Veras"
        width={97}
        height={24}
        className="h-6 w-auto rounded"
      />
      Veras
    </a>
  );
}
const CompanyLogo = ({ companyName }: { companyName: string }) => {
  const logoObj = {
    persona: "/images/persona-logo.jpeg",
    stripe: "/images/stripe-logo.png",
    hive: "/images/hive.jpeg",
    veras: "/images/veras-logo.png",
  };
  const imgSrc = logoObj[companyName.toLowerCase() as keyof typeof logoObj];
  return (
    <Image
      src={imgSrc}
      alt={companyName}
      width={97}
      height={24}
      className="h-7 w-auto rounded object-contain"
    />
  );
};
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-400">
      <span className="h-px w-5 bg-indigo-400/50" />
      {children}
    </p>
  );
}
function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {body && (
        <p className="mt-5 text-base leading-7 text-neutral-400 sm:text-lg">
          {body}
        </p>
      )}
    </div>
  );
}
function ProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute -inset-12 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c10]/95 shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-6">
          <div>
            <p className="text-sm font-semibold text-white">Creator #4829</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
              Sensitive action agent
            </p>
          </div>
          <span className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-emerald-300">
            <span className="size-1.5 rounded-full bg-emerald-400" /> Live
          </span>
        </div>
        <div className="divide-y divide-white/[0.055] px-3 py-2 sm:px-4">
          {decisions.map(([action, decision, tone]) => (
            <div
              key={action}
              className="flex items-center justify-between px-2 py-3.5 sm:px-3"
            >
              <span className="text-sm text-neutral-300">{action}</span>
              <span
                className={`min-w-20 rounded-md border px-2.5 py-1 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.12em] ${tone === "allow" ? "border-emerald-400/15 bg-emerald-400/[0.06] text-emerald-300" : tone === "verify" ? "border-indigo-400/20 bg-indigo-400/[0.08] text-indigo-300" : "border-amber-400/20 bg-amber-400/[0.07] text-amber-300"}`}
              >
                {decision}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between border-t border-white/[0.07] bg-white/[0.015] px-5 py-3.5 font-mono text-[10px] text-neutral-500 sm:px-6">
          <span>5 actions evaluated</span>
          <span>24ms</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main
      id="top"
      className="veras-light relative min-h-screen overflow-hidden text-stone-900"
    >
      <div className="veras-grid-bg pointer-events-none absolute inset-0 opacity-35" />
      <header className="relative z-20 border-b border-white/[0.06] bg-[#07080a]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm text-neutral-400 md:flex">
            <a href="#how-it-works" className="hover:text-white">
              How it works
            </a>
            <a href="#use-cases" className="hover:text-white">
              Use cases
            </a>
            <a href="/dashboard" className="hover:text-white">
              Product
            </a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#api"
              className="px-3 py-2 text-sm text-neutral-400 hover:text-white"
            >
              View docs
            </a>
            <a
              href="mailto:hello@onveras.com?subject=Veras%20demo"
              className="rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black hover:bg-neutral-200"
            >
              Book a demo
            </a>
          </div>
          <button
            className="rounded-lg border border-white/10 p-2 text-neutral-300 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/[0.06] bg-[#090a0d] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-neutral-300">
              <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
                How it works
              </a>
              <a href="#use-cases" onClick={() => setMenuOpen(false)}>
                Use cases
              </a>
              <a href="/dashboard">Product</a>
              <a href="#api" onClick={() => setMenuOpen(false)}>
                View docs
              </a>
              <a
                href="mailto:hello@onveras.com?subject=Veras%20demo"
                className="rounded-lg bg-white px-4 py-2.5 text-center font-semibold text-black"
              >
                Book a demo
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-20 sm:px-8 sm:pt-28 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:px-10 lg:pb-32 lg:pt-36">
        <div className="max-w-3xl">
          <Eyebrow>AI-powered controls for high-risk platforms</Eyebrow>
          <h1 className="text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.8rem]">
            <span className="sr-only">
              Use AI to control who can message, upload, buy, and get paid.
            </span>
            <span aria-hidden="true">Use AI to control who can </span>
          </h1>
          <h1 className="text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.8rem]">
            <span className="veras-action-rotator">
              <span className="veras-action-word">message</span>
              <span className="veras-action-word">upload</span>
              <span className="veras-action-word">buy</span>
              <span className="veras-action-word">get paid</span>
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-400 sm:text-xl">
            Veras gives high-risk platforms one API to enforce rules across
            content, payments, and accounts.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@onveras.com?subject=Veras%20demo"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-neutral-200"
            >
              Book a demo{" "}
              <ArrowRight className="size-4 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#api"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
            >
              View docs <ChevronRight className="size-4" />
            </a>
          </div>
        </div>
        <ProductVisual />
      </section>

      <section className="relative z-10 border-y border-white/[0.06] bg-white/[0.012]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.75fr_1.25fr] lg:px-10">
          <SectionHeading
            eyebrow="One place"
            title="Turn scattered rules into agents."
          />
          <div className="max-w-2xl lg:pt-8">
            <p className="text-lg leading-8 text-neutral-300">
              Your rules already exist. They’re just scattered across messaging,
              content, payments, identity, fraud, moderation, and account
              access.
            </p>
            <p className="mt-5 text-lg leading-8 text-neutral-500">
              Veras turns them into agents your team can review, deploy, and
              improve—so every sensitive action follows the same rules before it
              goes through.
            </p>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
      >
        <SectionHeading
          eyebrow="How it works"
          title="Describe the rule. Deploy the agent."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] lg:grid-cols-3">
          <div className="bg-[#090a0d] p-6 sm:p-8">
            <span className="font-mono text-xs text-indigo-400">01</span>
            <h3 className="mt-5 text-xl font-semibold text-white">
              Connect your signals
            </h3>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Bring in the facts your platform already uses.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {signals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2.5 py-2 text-xs text-neutral-400"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[#090a0d] p-6 sm:p-8">
            <span className="font-mono text-xs text-indigo-400">02</span>
            <h3 className="mt-5 text-xl font-semibold text-white">
              Tell your agent
            </h3>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Tell Veras what should happen in plain language. The agent turns
              it into a rule your team can review.
            </p>
            <div className="mt-6 rounded-lg border border-white/[0.07] bg-[#060709] p-4">
              <div className="mb-3 flex items-center gap-2 text-xs text-neutral-500">
                <PencilLine className="size-3.5" /> Prompt your agent
              </div>
              <p className="text-sm leading-6 text-neutral-300">
                If a creator changes their payout account and requests more than{" "}
                <span className="text-white">$10,000 within 24 hours</span>,
                require verification.
              </p>
            </div>
          </div>
          <div id="api" className="bg-[#090a0d] p-6 sm:p-8">
            <span className="font-mono text-xs text-indigo-400">03</span>
            <h3 className="mt-5 text-xl font-semibold text-white">
              Verify user actions
            </h3>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Check every sensitive action in real time before it goes through.
            </p>
            <pre className="mt-6 overflow-x-auto rounded-lg border border-white/[0.07] bg-[#060709] p-4 font-mono text-[11px] leading-6 text-neutral-400">
              <code>
                <span className="text-violet-300">const</span> result ={" "}
                <span className="text-violet-300">await</span> veras.check(
                {`{\n`} user:{" "}
                <span className="text-emerald-300">
                  &quot;creator_4829&quot;
                </span>
                ,{`\n`} action:{" "}
                <span className="text-emerald-300">
                  &quot;request_payout&quot;
                </span>
                ,{`\n`} context: {`{ amount: 18000 }\n`}
                {`})\n\n`}
                <span className="text-neutral-600">{"// →"}</span> {`{ `}
                <span className="text-indigo-300">
                  decision: &quot;verify&quot;
                </span>
                {` }`}
              </code>
            </pre>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {["allow", "deny", "verify", "review", "limit", "hold"].map(
            (word) => (
              <span
                key={word}
                className="rounded-full border border-white/[0.07] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-neutral-500"
              >
                {word}
              </span>
            ),
          )}
        </div>
      </section>

      <section
        id="use-cases"
        className="relative z-10 border-y border-white/[0.06] bg-white/[0.012]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
          <SectionHeading
            eyebrow="Use cases"
            title="Control the risky parts of your platform."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 d-flex justify-content-center">
            {useCases.map(([title, body, Icon], index) => (
              <article
                key={title}
                className={`rounded-xl border border-white/[0.07] bg-[#0a0b0e] p-6 ${index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="grid size-9 place-items-center rounded-lg border border-indigo-400/15 bg-indigo-400/[0.06] text-indigo-300">
                  <Icon className="size-4" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Works with your stack"
            title="Keep the tools you already use."
            body="Veras consumes the signals from your existing tools rather than replacing them."
          />
          <div className="rounded-2xl border border-white/[0.07] bg-[#0a0b0e] p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Persona", "verifies"],
                ["Hive", "moderates"],
                ["Stripe", "moves money"],
                ["Veras", "decides what happens"],
              ].map(([name, job]) => (
                <div
                  key={name}
                  className="flex min-h-32 flex-col items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-5 text-center"
                >
                  <div className="flex min-h-14 flex-col items-center justify-center gap-2">
                    <CompanyLogo companyName={name} />
                    <p className="text-sm font-semibold text-white">{name}</p>
                  </div>
                  <p className="mt-3 text-sm text-neutral-500">{job}.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.12] via-[#0c0d12] to-emerald-500/[0.06] px-6 py-14 text-center sm:px-10 sm:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="flex justify-center">
              <Eyebrow>Start with one action</Eyebrow>
            </div>
            <h2 className="text-balance text-center text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Deploy your first agent.
            </h2>
            <p className="mt-5 max-w-2xl text-center text-base leading-7 text-neutral-400 sm:text-lg">
              Start with one sensitive action. Describe the rule, review what
              Veras creates, and enforce it everywhere.
            </p>
            <a
              href="mailto:hello@onveras.com?subject=Veras%20demo"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-neutral-200"
            >
              Book a demo{" "}
              <ArrowRight className="size-4 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8 lg:px-10">
          <Logo />
          <p className="text-xs text-neutral-600">
            AI agents for sensitive actions.
          </p>
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Veras
          </p>
        </div>
      </footer>
    </main>
  );
}
