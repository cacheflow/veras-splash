import {
  ArrowUpRight,
  Boxes,
  CalendarClock,
  CircleDollarSign,
  FileCheck2,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  UserRound,
} from "lucide-react";
import { vendors } from "@/lib/veras-dashboard-data";
import { SectionTitle, StatusDot } from "@/components/veras-dashboard/ui";

const portfolio = {
  Fingerprint: ["Account Security", "Device intelligence", "$142k", "Oct 18, 2026", "Enterprise", "Login · Signup · Payment"],
  Persona: ["Identity & Access", "Identity verification", "$218k", "Dec 01, 2026", "Enterprise", "Signup · Seller onboarding"],
  "Stripe Radar": ["Payments Risk", "Payment risk", "Usage based", "Rolling", "Platform", "Card payment · Payout"],
  Sift: ["Fraud Operations", "Fraud intelligence", "$186k", "Sep 30, 2026", "Enterprise", "Login · Payment · Content"],
  "Internal ML": ["Risk Engineering", "First-party model", "$94k infra", "Internal", "Owned", "All decision types"],
} as const;

export default function VendorsPage() {
  return (
    <div>
      <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-2">Vendor portfolio</p>
          <h1 className="text-[28px] font-semibold tracking-[-.035em]">Vendors</h1>
          <p className="mt-2 max-w-2xl text-sm text-[#8b94a1]">
            Understand ownership, coverage, contracts, and operational dependency across the trust stack.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-md border border-[#2c3440] bg-[#11161d] px-3 py-2.5 text-[13px] font-medium text-[#d6dae0]">
          <Boxes size={15} /> Add vendor
        </button>
      </div>

      <section className="mb-6 grid gap-px overflow-hidden rounded-lg border border-[#20252e] bg-[#20252e] sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Active vendors", "4", "Plus 1 internal model"],
          ["Annual commitment", "$546k", "Excludes usage fees"],
          ["Categories covered", "5 / 6", "Messaging gap identified"],
          ["Upcoming renewal", "68 days", "Sift · Sep 30"],
        ].map(([label, value, detail]) => (
          <div key={label} className="bg-[#0d1015] p-4">
            <p className="text-[13px] font-medium text-[#8b94a1]">{label}</p>
            <p className="mt-3 text-[23px] font-semibold tracking-[-.04em]">{value}</p>
            <p className="mt-1 font-mono text-[12px] text-[#697381]">{detail}</p>
          </div>
        ))}
      </section>

      <div className="panel mb-5 flex flex-col gap-3 rounded-lg p-3 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-md border border-[#272d36] bg-[#090c10] px-3 py-2.5 text-[13px] text-[#78828f]">
          <Search size={14} /> Search vendor portfolio
        </div>
        <button className="flex items-center gap-2 rounded-md border border-[#272d36] px-3 py-2.5 text-[13px] text-[#9aa2ad]">
          <SlidersHorizontal size={13} /> All categories
        </button>
      </div>

      <section className="panel overflow-hidden rounded-lg">
        <div className="border-b border-[#20252e] p-5">
          <SectionTitle eyebrow="Portfolio overview" title="Trust vendor inventory" detail="Commercial and operational context for every connected source" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1040px] text-left">
            <thead><tr className="border-b border-[#20252e] bg-white/[.012] text-[12px] uppercase tracking-[.08em] text-[#737d8a]">
              {["Vendor", "Owner", "Coverage", "Health", "Contract", "Annual spend", "Renewal"].map(label => <th key={label} className="px-4 py-3 font-medium first:pl-5">{label}</th>)}<th />
            </tr></thead>
            <tbody>{vendors.map(vendor => {
              const [owner, category, spend, renewal, contract, coverage] = portfolio[vendor.name as keyof typeof portfolio];
              return <tr key={vendor.name} className="border-b border-[#1d222a] text-[13px] last:border-0 hover:bg-[#6c8cff]/[.035]">
                <td className="px-5 py-4"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-md border border-[#29313c] bg-[#151a22] text-[#8da0ff]"><ShieldCheck size={16}/></span><div><p className="font-medium text-[#e0e4e9]">{vendor.name}</p><p className="mt-1 text-[12px] text-[#737d8a]">{category}</p></div></div></td>
                <td className="px-4 text-[#aab1bb]"><span className="flex items-center gap-2"><UserRound size={13} className="text-[#687381]"/>{owner}</span></td>
                <td className="max-w-52 px-4 leading-5 text-[#9099a5]">{coverage}</td>
                <td className="px-4"><StatusDot status={vendor.status}/></td>
                <td className="px-4"><span className="flex items-center gap-2 text-[#aab1bb]"><FileCheck2 size={13} className="text-[#687381]"/>{contract}</span></td>
                <td className="px-4 font-mono text-[12px] text-[#aab1bb]">{spend}</td>
                <td className="px-4"><span className="flex items-center gap-2 text-[#9099a5]"><CalendarClock size={13} className="text-[#687381]"/>{renewal}</span></td>
                <td className="px-4"><button aria-label={`Open ${vendor.name}`} className="text-[#91a3ff]"><ArrowUpRight size={14}/></button></td>
              </tr>;
            })}</tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="panel rounded-lg p-5">
          <SectionTitle eyebrow="Coverage" title="Trust domain coverage" />
          <div className="space-y-3">{[
            ["Identity", "Persona", "Covered"], ["Device", "Fingerprint", "Covered"], ["Payments", "Stripe Radar · Sift", "Covered"], ["Behavior", "Internal ML", "Covered"], ["Messaging", "No primary vendor", "Gap"],
          ].map(([domain, source, state]) => <div key={domain} className="flex items-center gap-3 rounded-md border border-[#252b34] bg-[#0d1116] px-3 py-3">
            <span className={`size-1.5 rounded-full ${state === "Gap" ? "bg-amber-300" : "bg-emerald-400"}`}/><span className="w-24 text-[13px] font-medium text-[#cbd0d7]">{domain}</span><span className="text-[13px] text-[#7e8794]">{source}</span><span className={`ml-auto text-[12px] ${state === "Gap" ? "text-amber-300" : "text-emerald-300"}`}>{state}</span>
          </div>)}</div>
        </div>
        <div className="panel rounded-lg p-5">
          <SectionTitle eyebrow="Commercial" title="Portfolio attention" />
          <div className="space-y-4">
            <div className="rounded-md border border-amber-300/15 bg-amber-300/[.035] p-4"><div className="flex items-center gap-2 text-[13px] font-medium text-amber-200"><CalendarClock size={14}/>Sift renewal in 68 days</div><p className="mt-2 text-[13px] leading-5 text-[#929aa6]">Review overlap with internal behavior models before renewing the current event volume.</p></div>
            <div className="rounded-md border border-[#29313b] bg-[#0d1116] p-4"><div className="flex items-center gap-2 text-[13px] font-medium text-[#d1d6dc]"><CircleDollarSign size={14} className="text-[#8fa2ff]"/>Payment risk spend is usage based</div><p className="mt-2 text-[13px] leading-5 text-[#929aa6]">July volume is tracking 11% above forecast after the payout policy expansion.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
