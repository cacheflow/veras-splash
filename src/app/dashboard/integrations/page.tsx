import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  PlugZap,
  RefreshCw,
  Search,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { vendors } from "@/lib/veras-dashboard-data";
import { SectionTitle, StatusDot } from "@/components/veras-dashboard/ui";
import fingerprintLogo from "@/app/images/fingerprint-logo.jpeg";
import personaLogo from "@/app/images/persona-logo.jpeg";
import siftLogo from "@/app/images/sift-science-logo.png";
import stripeLogo from "@/app/images/stripe-logo.png";

const vendorLogos: Partial<Record<string, StaticImageData>> = {
  Fingerprint: fingerprintLogo,
  Persona: personaLogo,
  "Stripe Radar": stripeLogo,
  Sift: siftLogo,
};

const vendorDetails = {
  Fingerprint: {
    coverage: "98.7%",
    signals: ["Device ID", "Bot detection", "IP risk"],
    lastEvent: "12 sec ago",
  },
  Persona: {
    coverage: "94.2%",
    signals: ["Government ID", "Selfie match", "KYC status"],
    lastEvent: "38 sec ago",
  },
  "Stripe Radar": {
    coverage: "99.1%",
    signals: ["Payment risk", "Card network", "Dispute history"],
    lastEvent: "8 sec ago",
  },
  Sift: {
    coverage: "91.8%",
    signals: ["Fraud score", "Account links", "Content abuse"],
    lastEvent: "21 sec ago",
  },
  "Internal ML": {
    coverage: "100%",
    signals: ["Behavior anomaly", "Entity risk", "Velocity"],
    lastEvent: "2 sec ago",
  },
} as const;

export default function IntegrationsPage() {
  return (
    <div>
      <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          {/* <p className="eyebrow mb-2">Signal sources</p> */}
          <h1 className="text-[28px] font-semibold tracking-[-.035em]">
            Integrations
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-[#8b94a1]">
            Monitor the vendors and internal models that contribute evidence to
            every trust decision.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-md bg-[#6c8cff] px-3 py-2.5 text-[13px] font-semibold text-[#080a0d]">
          <PlugZap size={15} />
          Add integration
        </button>
      </div>

      <section className="mb-6 grid gap-px overflow-hidden rounded-lg border border-[#20252e] bg-[#20252e] sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Connected sources", "5", "All configured"],
          ["Events today", "46.3k", "+7.4% vs yesterday"],
          ["Median latency", "168ms", "Across all sources"],
          ["Signal coverage", "96.8%", "Of evaluated decisions"],
        ].map(([label, value, detail]) => (
          <div key={label} className="bg-[#0d1015] p-4">
            <p className="text-[13px] font-medium text-[#8b94a1]">{label}</p>
            <p className="mt-3 text-[23px] font-semibold tracking-[-.04em]">
              {value}
            </p>
            <p className="mt-1 font-mono text-[12px] text-[#697381]">
              {detail}
            </p>
          </div>
        ))}
      </section>

      <div className="panel mb-5 flex flex-col gap-3 rounded-lg p-3 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-md border border-[#272d36] bg-[#090c10] px-3 py-2.5 text-[13px] text-[#78828f]">
          <Search size={14} />
          Search integrations
        </div>
        <button className="flex items-center gap-2 rounded-md border border-[#272d36] px-3 py-2.5 text-[13px] text-[#9aa2ad]">
          <RefreshCw size={13} />
          Refresh health
        </button>
      </div>

      <section>
        <SectionTitle
          eyebrow="Connected stack"
          title="Integrations"
          detail="Live delivery, latency, and signal coverage across production decisions"
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {vendors.map((vendor) => {
            const details =
              vendorDetails[vendor.name as keyof typeof vendorDetails];
            const logo = vendorLogos[vendor.name];
            const isDegraded = vendor.status === "Degraded";
            const isWarning = vendor.status === "Warning";
            return (
              <article
                key={vendor.name}
                className="panel group rounded-lg p-5 transition hover:-translate-y-0.5 hover:border-[#3b4659]"
              >
                <div className="flex items-start gap-4">
                  <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-md border border-[#28303d] bg-[#141923] text-[#8398fb]">
                    {logo ? (
                      <Image
                        src={logo}
                        alt={`${vendor.name} logo`}
                        className="size-full object-cover"
                        sizes="36px"
                      />
                    ) : isDegraded ? (
                      <TriangleAlert size={18} />
                    ) : (
                      <ShieldCheck size={18} />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="text-[15px] font-semibold">
                          {vendor.name}
                        </h2>
                        <p className="mt-1 text-[13px] text-[#7f8996]">
                          {vendor.type}
                        </p>
                      </div>
                      <StatusDot status={vendor.status} />
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-3">
                      <div>
                        <p className="eyebrow">Latency</p>
                        <p
                          className={`mt-2 font-mono text-[13px] ${isDegraded ? "text-rose-300" : isWarning ? "text-amber-300" : "text-[#cbd1d9]"}`}
                        >
                          {vendor.latency}
                        </p>
                      </div>
                      <div>
                        <p className="eyebrow">Events</p>
                        <p className="mt-2 font-mono text-[13px] text-[#cbd1d9]">
                          {vendor.events}
                        </p>
                      </div>
                      <div>
                        <p className="eyebrow">Coverage</p>
                        <p className="mt-2 font-mono text-[13px] text-[#cbd1d9]">
                          {details.coverage}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {details.signals.map((signal) => (
                        <span
                          key={signal}
                          className="rounded border border-[#29313c] bg-[#11161d] px-2 py-1 text-[12px] text-[#929ba8]"
                        >
                          {signal}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-[#252b34] pt-4">
                      <span className="flex items-center gap-2 text-[12px] text-[#737d8a]">
                        <Clock3 size={13} />
                        Last event {details.lastEvent}
                      </span>
                      <button className="flex items-center gap-1.5 text-[13px] text-[#9aabff]">
                        View signals
                        <ArrowUpRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          <article className="panel group flex min-h-64 items-center justify-center rounded-lg p-5 text-center transition hover:-translate-y-0.5 hover:border-[#3b4659]">
            <div>
              <span className="mx-auto grid size-9 place-items-center rounded-md border border-dashed border-[#394252] bg-[#141923] text-[#8398fb]">
                <Activity size={17} />
              </span>
              <h2 className="mt-4 text-[15px] font-semibold">
                Connect another signal source
              </h2>
              <p className="mx-auto mt-2 max-w-xs text-[13px] leading-5 text-[#78828f]">
                Add a vendor or internal model without changing the decision
                interface.
              </p>
              <button className="mt-4 inline-flex items-center gap-2 text-[13px] text-[#9aabff]">
                Browse connectors
                <ArrowUpRight size={13} />
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
