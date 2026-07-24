import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  Filter,
  MoreHorizontal,
  Radio,
  RefreshCw,
} from "lucide-react";
import { decisions, metrics, vendors } from "@/lib/veras-dashboard-data";
import {
  DecisionBadge,
  MetricTrend,
  RiskScore,
  SectionTitle,
  StatusDot,
} from "@/components/veras-dashboard/ui";

export default function Dashboard() {
  return (
    <div>
      <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          {/* <p className="eyebrow mb-2">Trust operations</p> */}
          <h1 className="text-2xl font-semibold tracking-[-.035em] sm:text-[28px]">
            Decisions
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-[#7d8592]">
            A real-time view of every allow, review, and block—connected to the
            evidence that produced it.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2 rounded-md border border-[#242a33] bg-[#0d1015] px-3 py-2 text-[13px] text-[#9ba2ad]">
            <span className="size-1.5 rounded-full bg-emerald-400 pulse-dot" />
            Live · Production
          </span>
          <button className="grid size-8 place-items-center rounded-md border border-[#242a33] bg-[#0d1015] text-[#7d8694]">
            <RefreshCw size={14} />
          </button>
        </div>
      </div>

      <section className="mb-6 grid gap-px overflow-hidden rounded-lg border border-[#20252e] bg-[#20252e] sm:grid-cols-2 xl:grid-cols-5">
        {metrics.map((m) => (
          <div key={m.label} className="bg-[#0d1015] p-4">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-medium text-[#7f8794]">
                {m.label}
              </p>
              <MetricTrend tone={m.tone} />
            </div>
            <p className="mt-3 text-[23px] font-semibold tracking-[-.04em]">
              {m.value}
            </p>
            <p className="mt-1 font-mono text-[13px] text-[#646d79]">
              {m.detail}
            </p>
          </div>
        ))}
      </section>

      <section className="panel mb-6 overflow-hidden rounded-lg">
        <div className="flex flex-col justify-between gap-4 border-b border-[#20252e] p-4 sm:flex-row sm:items-center sm:px-5">
          <SectionTitle
            eyebrow="Live decision stream"
            title="Recent decisions"
            detail="Normalized across policies, vendors, and internal signals"
          />
          <div className="-mt-2 flex gap-2 sm:mt-0">
            <button className="flex items-center gap-1.5 rounded-md border border-[#272d36] px-2.5 py-1.5 text-[13px] text-[#9199a5]">
              <Filter size={12} />
              Filter
            </button>
            <Link
              href="/dashboard/decisions/dec_84291"
              className="flex items-center gap-1.5 rounded-md bg-[#6c8cff] px-3 py-1.5 text-[13px] font-semibold text-[#080a0d]"
            >
              Open decision
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#20252e] bg-white/[.012] text-[13px] uppercase tracking-[.08em] text-[#626b78]">
                <th className="px-5 py-3 font-medium">Entity</th>
                <th className="px-4 py-3 font-medium">Action</th>
                <th className="px-4 py-3 font-medium">Decision</th>
                <th className="px-4 py-3 font-medium">Confidence</th>
                <th className="px-4 py-3 font-medium">Risk</th>
                <th className="px-4 py-3 font-medium">Primary reason</th>
                <th className="px-4 py-3 font-medium">Time</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {decisions.map((d) => (
                <tr
                  key={d.id}
                  className="group border-b border-[#1c2129] text-[13px] transition last:border-0 hover:bg-[#6c8cff]/[.035]"
                >
                  <td className="px-5 py-4">
                    <Link
                      href={`/dashboard/decisions/${d.id}`}
                      className="flex items-center gap-2.5"
                    >
                      <span className="grid size-8 place-items-center rounded-full border border-[#2c3441] bg-[#171c25] text-[13px] font-semibold text-[#aeb8c9]">
                        {d.initials}
                      </span>
                      <span>
                        <span className="block text-[13px] font-medium text-[#e2e5e9]">
                          {d.user}
                        </span>
                        <span className="font-mono text-[13px] text-[#66707d]">
                          {d.id}
                        </span>
                      </span>
                    </Link>
                  </td>
                  <td className="px-4 text-[13px] text-[#b1b7c0]">
                    {d.action}
                  </td>
                  <td className="px-4">
                    <DecisionBadge value={d.decision} />
                  </td>
                  <td className="px-4 font-mono text-[13px] text-[#a8afb9]">
                    {d.confidence}%
                  </td>
                  <td className="px-4">
                    <RiskScore value={d.risk} />
                  </td>
                  <td className="max-w-[260px] px-4 text-[13px] leading-5 text-[#a5acb6]">
                    {d.reason}
                  </td>
                  <td className="px-4 font-mono text-[13px] text-[#7a8491]">
                    {d.time}
                  </td>
                  <td className="px-4">
                    <MoreHorizontal size={14} className="text-[#5d6672]" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.55fr_1fr]">
        <section className="panel rounded-lg p-5">
          <SectionTitle
            eyebrow="Decision anatomy"
            title="From signal to action"
            detail="Every outcome is traceable to source evidence"
          />
          <div className="mt-6 grid items-center gap-3 text-center sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <div className="rounded-md border border-[#262c35] bg-[#10141a] p-4">
              <Radio size={18} className="mx-auto mb-2 text-[#8196f8]" />
              <p className="text-[13px] font-medium">Signals</p>
              <p className="mt-1 text-[13px] text-[#69727f]">
                Identity · Device · Payment
              </p>
            </div>
            <ArrowRight
              size={14}
              className="mx-auto rotate-90 text-[#424956] sm:rotate-0"
            />
            <div className="relative rounded-md border border-[#5269c8]/50 bg-[#6c8cff]/10 p-4 shadow-[0_0_30px_rgba(108,140,255,.08)]">
              <CircleAlert size={18} className="mx-auto mb-2 text-amber-300" />
              <p className="text-[13px] font-medium">Decision</p>
              <p className="mt-1 text-[13px] text-[#8e9bd2]">
                Policy + context evaluation
              </p>
            </div>
            <ArrowRight
              size={14}
              className="mx-auto rotate-90 text-[#424956] sm:rotate-0"
            />
            <div className="rounded-md border border-[#262c35] bg-[#10141a] p-4">
              <CheckCircle2
                size={18}
                className="mx-auto mb-2 text-emerald-300"
              />
              <p className="text-[13px] font-medium">Action</p>
              <p className="mt-1 text-[13px] text-[#69727f]">
                Allow · Review · Block
              </p>
            </div>
          </div>
        </section>
        <section className="panel rounded-lg p-5">
          <SectionTitle
            eyebrow="Integrations"
            title="Vendor health"
            action="View signals"
          />
          <div className="space-y-1">
            {vendors.map((v) => (
              <div
                key={v.name}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 rounded-md px-2 py-2.5 hover:bg-white/[.02]"
              >
                <div>
                  <p className="text-[13px] font-medium text-[#d1d6dc]">
                    {v.name}
                  </p>
                  <p className="mt-0.5 text-[13px] text-[#646d79]">{v.type}</p>
                </div>
                <StatusDot status={v.status} />
                <p className="w-12 text-right font-mono text-[13px] text-[#626b78]">
                  {v.latency}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
