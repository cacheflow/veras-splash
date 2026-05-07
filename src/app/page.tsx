import Button from '@/components/ui/button/Button';
import { Suspense } from 'react';
import { ClipboardList, AudioLines, ListOrdered, ArrowRight, CircleIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_URL

export const metadata = {
  title: "Veras | Decision API for High-Risk Systems",
  description:
    "Veras is a unified decision API for permissions, entitlements, rate limits, and abuse control in high-risk systems.",

  openGraph: {
    title: "Veras | Decision API for High-Risk Systems",
    description:
      "Control who can do what, before risk becomes loss. Veras unifies permissions, entitlements, and abuse controls into a single decision layer.",
    url: baseUrl,
    siteName: "Veras",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Veras Decision API for High-Risk Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Veras | Decision API for High-Risk Systems",
    description:
      "A unified API for permissions, entitlements, rate limits, and abuse control in high-risk systems.",
    images: [`${baseUrl}/og-image.png`],
    creator: "@verasdev", 
  },
};

function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <CircleIcon className="h-6 w-6 text-custom-pink" />
          <span className="ml-2 text-xl font-semibold text-gray-900">CareSheet</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Suspense fallback={<div className="h-9" />}>
          </Suspense>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const mockResposne = {
    decision: "deny",
    reason: "excessive_refund_risk",
    action: "block_action",
    controls: {
      rate_limit: "0/day",
      review_required: true,
    },
    policy_id: "refund_abuse_v2",
  }

  return (
    <main className="min-h-screen min-w-0 bg-[#070A12] text-white">
      <section className="mx-auto flex min-h-screen max-w-full flex-col px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">Veras</div>
          <a
            href="mailto:hello@veras.dev"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
          >
            Get API Access
          </a>
        </nav>

        <div className="grid flex-1 items-center gap-14 py-20 md:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
              Decision API for high-risk commerce
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
              Control who can do what, before risk becomes loss.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              Veras is a unified decision API for permissions, entitlements,
              rate limits, and abuse controls in high-risk systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/run-decision"
                className="rounded-full border text-bold border-white/15 px-5 py-3 text-sm text-white/80 bg-white/90"
              >
                Run your first decision
              </a>
            </div>
          </div>

        <section className="w-full md:w-lg min-w-0 overflow-hidden grid gap-4">
          <div className="min-w-0 overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#0B0F1A] p-5 shadow-2xl">
            <h2 className="mb-4 text-sm font-medium text-cyan-300">
              API Response
            </h2>

            <pre className="overflow-x-auto rounded-2xl bg-black/30 p-5 text-sm leading-7 text-slate-100">
              {JSON.stringify(mockResposne, null, 2)}
            </pre>
          </div>
        </section>
        </div>

        <section className="grid gap-4 pb-12 md:grid-cols-3">
          {[
            {
              title: "Permissions",
              body: "Decide what users, merchants, or accounts can do in real time.",
            },
            {
              title: "Entitlements",
              body: "Enforce access, limits, and product rules without scattering logic everywhere.",
            },
            {
              title: "Abuse Controls",
              body: "Throttle risky behavior before it becomes fraud, chargebacks, or operational drag.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h2 className="text-lg font-medium">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/60">
                {item.body}
              </p>
            </div>
          ))}
        </section>
      </section>
    </main>
  )
}