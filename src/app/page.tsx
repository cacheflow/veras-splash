"use client";

import { useState } from "react";
import Image from "next/image";
import { VendorEcosystem } from "@/components/marketing/vendor-ecosystem";
import {
  ArrowRight,
  ChevronRight,
  Store,
  Menu,
  MessageSquare,
  PencilLine,
  Upload,
  UserRoundCog,
  X,
} from "lucide-react";

const decisions = [
  ["Messaging · Stream", "Restrict", "verify"],
  ["Livestream · Mux", "Disable", "review"],
  ["Marketplace · Internal", "Suspend", "review"],
];
const signals = ["Moderation tools", "Messaging services", "Video infrastructure", "Identity providers", "Support systems", "Internal services"];
const useCases = [
  ["Content safety", "Coordinate content reviews, removals and publishing restrictions.", Upload],
  ["Account safety", "Manage account violations, suspensions and reinstatements.", UserRoundCog],
  ["Behavioral safety", "Respond to harassment, spam and unwanted interactions.", MessageSquare],
  ["Marketplace safety", "Enforce policies governing listings, promotions and commercial activity.", Store],
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
            <p className="text-sm font-semibold text-white">Policy violation #4829</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
              Illustrative enforcement workflow
            </p>
          </div>
          <span className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-emerald-300">
            <span className="size-1.5 rounded-full bg-emerald-400" /> Example
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
          <span>One policy · three services</span>
          <span>Proposed actions</span>
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
            <a href="#integrations" className="hover:text-white">Integrations</a>
            <a href="/dashboard" className="hover:text-white">
              Product preview
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
              <a href="#integrations" onClick={() => setMenuOpen(false)}>Integrations</a>
              <a href="/dashboard">Product preview</a>
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
          <Eyebrow>Trust & safety for high-risk platforms</Eyebrow>
          <h1 className="text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.8rem]">
            Harassment, harmful content and abuse. One coordinated response.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-400 sm:text-xl">
            Connect your existing safety tools to restrict messaging, remove content and manage account privileges across your platform.
          </p>
          <p className="mt-5 text-sm font-medium text-neutral-300">Less manual work. Faster response. Consistent enforcement.</p>
          <p className="mt-3 text-xs leading-5 text-neutral-500">Product preview. Workflows and integrations shown are illustrative; contact us to discuss availability.</p>
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
            title="One incident. Too many systems."
          />
          <div className="max-w-2xl lg:pt-8">
            <p className="text-lg leading-8 text-neutral-300">
              A harassment report comes in. Your team investigates, restricts messaging, takes down a livestream and suspends marketplace access—each in a different tool.
            </p>
            <p className="mt-5 text-lg leading-8 text-neutral-500">
              Veras connects those steps so your team can act consistently across your platform.
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
          title="From policy to coordinated enforcement."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] lg:grid-cols-3">
          <div className="bg-[#090a0d] p-6 sm:p-8">
            <span className="font-mono text-xs text-indigo-400">01</span>
            <h3 className="mt-5 text-xl font-semibold text-white">
              Connect your tools
            </h3>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Bring together the moderation tools and services your team already uses.
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
              Define your policies
            </h3>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Decide how your platform responds to abuse, violations and unwanted behavior.
            </p>
            <div className="mt-6 rounded-lg border border-white/[0.07] bg-[#060709] p-4">
              <div className="mb-3 flex items-center gap-2 text-xs text-neutral-500">
                <PencilLine className="size-3.5" /> Example platform policy
              </div>
              <p className="text-sm leading-6 text-neutral-300">
                When a harassment violation is confirmed, restrict messaging, disable the livestream and suspend marketplace privileges pending review.
              </p>
            </div>
          </div>
          <div className="bg-[#090a0d] p-6 sm:p-8">
            <span className="font-mono text-xs text-indigo-400">03</span>
            <h3 className="mt-5 text-xl font-semibold text-white">
              Coordinate enforcement
            </h3>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Apply restrictions and moderation decisions across your platform from one place.
            </p>
            <div className="mt-6 rounded-lg border border-white/[0.07] bg-[#060709] p-4 text-sm leading-7 text-neutral-300">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-neutral-500">Illustrative response</p>
              <p>Stream → Restrict messaging</p>
              <p>Mux → Disable livestream</p>
              <p>Internal service → Suspend marketplace access</p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {["review", "restrict", "remove", "suspend", "reinstate"].map(
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
            title="Safety across your platform."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {useCases.map(([title, body, Icon]) => (
              <article
                key={title}
                className="rounded-xl border border-white/[0.07] bg-[#0a0b0e] p-6"
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

      <VendorEcosystem />

      <section id="api" className="relative z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="For developers" title="Connect internal systems to your safety workflow." body="Explore how safety signals and enforcement actions could connect to your services. This example illustrates the proposed flow, not a published API contract." />
        <pre className="mt-8 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#060709] p-6 text-xs leading-6 text-neutral-300"><code>{`// Illustrative payload — not a live endpoint or SDK
{
  "signal": "harassment.confirmed",
  "account_id": "account_4829",
  "policy": "restrict_pending_review",
  "proposed_actions": [
    { "service": "messaging", "action": "restrict" },
    { "service": "video", "action": "disable_livestream" },
    { "service": "marketplace", "action": "suspend_access" }
  ]
}`}</code></pre>
        <a href="mailto:hello@onveras.com?subject=Veras%20integration%20documentation" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-400">Request integration documentation <ArrowRight className="size-4" /></a>
      </section>

      <section className="relative z-10 px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.12] via-[#0c0d12] to-emerald-500/[0.06] px-6 py-14 text-center sm:px-10 sm:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="flex justify-center">
              <Eyebrow>Start with one safety workflow</Eyebrow>
            </div>
            <h2 className="text-balance text-center text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Bring your safety operations together.
            </h2>
            <p className="mt-5 max-w-2xl text-center text-base leading-7 text-neutral-400 sm:text-lg">
              Tell us where enforcement breaks down. Explore how Veras could connect your tools and help your team respond consistently.
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
            Trust & safety infrastructure for high-risk platforms.
          </p>
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Veras
          </p>
        </div>
      </footer>
    </main>
  );
}
