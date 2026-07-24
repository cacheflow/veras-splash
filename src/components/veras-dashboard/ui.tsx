import {
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleAlert,
  Minus,
  ShieldAlert,
  X,
} from "lucide-react";
import type { DecisionType } from "@/lib/veras-dashboard-data";

export function DecisionBadge({ value }: { value: DecisionType }) {
  const styles = {
    ALLOW: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    REVIEW: "border-amber-400/20 bg-amber-400/10 text-amber-300",
    BLOCK: "border-rose-400/20 bg-rose-400/10 text-rose-300",
  };
  const icons = { ALLOW: Check, REVIEW: CircleAlert, BLOCK: X };
  const Icon = icons[value];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border px-2 py-1 font-mono text-[13px] font-semibold tracking-[.08em] ${styles[value]}`}
    >
      <Icon size={11} />
      {value}
    </span>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  detail,
  action,
}: {
  eyebrow?: string;
  title: string;
  detail?: string;
  action?: string;
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 className="text-[15px] font-semibold tracking-[-.01em]">{title}</h2>
        {detail && <p className="mt-1 text-[13px] text-[#747d8a]">{detail}</p>}
      </div>
      {action && (
        <button className="flex items-center gap-1 text-[13px] text-[#8fa2ff]">
          {action}
          <ChevronRight size={13} />
        </button>
      )}
    </div>
  );
}

export function StatusDot({ status }: { status: string }) {
  const color =
    status === "Healthy" || status === "Active"
      ? "bg-emerald-400"
      : status === "Warning" || status === "Monitor"
        ? "bg-amber-400"
        : "bg-rose-400";
  return (
    <span className="inline-flex items-center gap-2 text-[13px] text-[#c4c9d0]">
      <span
        className={`size-1.5 rounded-full ${color} ${status === "Healthy" ? "pulse-dot" : ""}`}
      />
      {status}
    </span>
  );
}

export function RiskScore({ value }: { value: number }) {
  const color =
    value >= 80
      ? "bg-rose-400"
      : value >= 50
        ? "bg-amber-400"
        : "bg-emerald-400";
  return (
    <div className="flex items-center gap-2">
      <div className="h-1 w-14 overflow-hidden rounded-full bg-[#252a32]">
        <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
      </div>
      <span className="font-mono text-[13px] text-[#8d95a1]">{value}</span>
    </div>
  );
}

export function MetricTrend({ tone }: { tone: string }) {
  const styles: Record<string, string> = {
    blue: "text-[#8ea1ff]",
    red: "text-rose-300",
    amber: "text-amber-300",
    violet: "text-violet-300",
    green: "text-emerald-300",
  };
  return <ArrowUpRight size={14} className={styles[tone]} />;
}

export const signalIcon = (risk: boolean) =>
  risk ? <ShieldAlert size={13} /> : <Check size={13} />;
export const dash = <Minus size={12} />;
