import Link from "next/link";
import { ArrowLeft, Check, Copy, GitBranch, History } from "lucide-react";
import { policies } from "@/lib/veras-dashboard-data";
import { SectionTitle, StatusDot } from "@/components/veras-dashboard/ui";

export default async function PolicyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = policies.find((x) => x.slug === slug) ?? policies[0];
  return (
    <div>
      <Link
        href="/dashboard/policies"
        className="mb-5 inline-flex items-center gap-1.5 text-[13px] text-[#7d8693]"
      >
        <ArrowLeft size={13} />
        Back to policies
      </Link>
      <div className="mb-7 flex flex-col justify-between gap-4 border-b border-[#20252e] pb-6 md:flex-row md:items-end">
        <div>
          <div className="mb-3">
            <StatusDot status={p.status} />
          </div>
          <h1 className="text-[28px] font-semibold tracking-[-.035em]">
            {p.name}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-[#7d8592]">
            {p.description}
          </p>
        </div>
        <button className="rounded-md bg-[#6c8cff] px-4 py-2 text-[13px] font-semibold text-[#080a0d]">
          Edit policy
        </button>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <section className="panel rounded-lg p-5">
          <SectionTitle eyebrow="Rule builder" title="Evaluation logic" />
          <div className="rounded-md border border-[#252c36] bg-[#090c10] p-5 font-mono text-[13px] leading-7">
            <p>
              <span className="text-violet-300">WHEN</span>{" "}
              <span className="text-[#bdc5d0]">event.type</span>{" "}
              <span className="text-[#7084dd]">=</span>{" "}
              <span className="text-amber-300">
                &quot;withdrawal.attempted&quot;
              </span>
            </p>
            <p>
              <span className="text-violet-300">IF</span> amount &gt; 5000{" "}
              <span className="text-[#515b69]">AND</span> device.age_hours &lt;
              24
            </p>
            <p>
              <span className="text-violet-300">AND</span> aggregate.risk_score
              &gt; 80
            </p>
            <p>
              <span className="text-violet-300">THEN</span>{" "}
              <span className="text-emerald-300">require_review</span>
            </p>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {["Payment context", "Device context", "Aggregate risk"].map(
              (x, i) => (
                <div key={x} className="rounded-md border border-[#252b34] p-4">
                  <p className="text-[13px] font-medium">{x}</p>
                  <p className="mt-2 text-[13px] leading-4 text-[#69727f]">
                    {
                      [
                        "Amount and destination risk",
                        "Age and linked entity count",
                        "Weighted vendor consensus",
                      ][i]
                    }
                  </p>
                </div>
              ),
            )}
          </div>
        </section>
        <aside className="space-y-5">
          <section className="panel rounded-lg p-5">
            <SectionTitle eyebrow="Configuration" title="Policy metadata" />
            <div className="space-y-4 text-[13px]">
              {[
                ["Owner", p.owner],
                ["Version", p.version],
                ["Last updated", p.updated],
                ["Rules", String(p.rules)],
              ].map(([l, v]) => (
                <div key={l} className="flex justify-between">
                  <span className="text-[#6f7885]">{l}</span>
                  <span className="text-[#c1c6cd]">{v}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="panel rounded-lg p-5">
            <SectionTitle eyebrow="Deployment" title="Version history" />
            <div className="space-y-3">
              {[
                ["v3.4", "Current", "2 hours ago"],
                ["v3.3", "Replaced", "Jul 10"],
                ["v3.2", "Replaced", "Jun 28"],
              ].map(([v, s, t]) => (
                <div key={v} className="flex items-center gap-3 text-[13px]">
                  <GitBranch size={13} className="text-[#6e7bc0]" />
                  <span className="font-mono">{v}</span>
                  <span className="text-[#646d79]">{s}</span>
                  <span className="ml-auto text-[#555e6b]">{t}</span>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
