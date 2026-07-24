import Link from "next/link";
import {
  ArrowRight,
  FileSliders,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { policies } from "@/lib/veras-dashboard-data";
import { StatusDot } from "@/components/veras-dashboard/ui";

export default function Policies() {
  return (
    <div>
      <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          {/* <p className="eyebrow mb-2">Policy engine</p> */}
          <h1 className="text-[28px] font-semibold tracking-[-.035em]">
            {" "}
            Policies
          </h1>
          <p className="mt-2 text-sm text-[#7d8592]">
            Versioned rules that turn normalized risk signals into consistent
            actions.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-md bg-[#6c8cff] px-3 py-2 text-[13px] font-semibold text-[#080a0d]">
          <Plus size={14} />
          New policy
        </button>
      </div>
      <div className="panel mb-5 flex flex-col gap-3 rounded-lg p-3 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-md border border-[#272d36] bg-[#090c10] px-3 py-2 text-[13px] text-[#6d7683]">
          <Search size={14} />
          Search policies
        </div>
        <button className="flex items-center gap-2 rounded-md border border-[#272d36] px-3 py-2 text-[13px] text-[#8b94a0]">
          <SlidersHorizontal size={13} />
          All owners
        </button>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {policies.map((p) => (
          <Link
            key={p.slug}
            href={`/dashboard/policies/${p.slug}`}
            className="panel group rounded-lg p-5 transition hover:-translate-y-0.5 hover:border-[#3b4659]"
          >
            <div className="flex items-start gap-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-md border border-[#28303d] bg-[#141923] text-[#8398fb]">
                <FileSliders size={17} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-[16px] font-semibold tracking-[-.02em]">
                    {p.name}
                  </h2>
                  <StatusDot status={p.status} />
                </div>
                <p className="mt-2 max-w-lg text-[13px] leading-5 text-[#747d8a]">
                  {p.description}
                </p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-4 gap-3 border-y border-[#222831] py-4">
              <div>
                <p className="eyebrow">Version</p>
                <p className="mt-2 text-[13px] font-semibold text-[#f0f2f5]">{p.version}</p>
              </div>
              <div>
                <p className="eyebrow">Rules</p>
                <p className="mt-2 text-[13px] font-semibold text-[#f0f2f5]">{p.rules}</p>
              </div>
              <div>
                <p className="eyebrow">Decisions</p>
                <p className="mt-2 text-[13px] font-semibold text-[#f0f2f5]">{p.decisions}</p>
              </div>
              <div>
                <p className="eyebrow">Impact</p>
                <p className="mt-2 text-[13px] font-semibold text-[#f0f2f5]">{p.impact}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-[13px]">
              <div>
                <span className="text-[#626b78]">Owner </span>
                <span className="text-[#aeb5bf]">{p.owner}</span>
                <span className="mx-2 text-[#353b44]">·</span>
                <span className="text-[#626b78]">Updated {p.updated}</span>
              </div>
              <ArrowRight
                size={14}
                className="text-[#596474] transition group-hover:translate-x-1 group-hover:text-[#8fa2ff]"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
