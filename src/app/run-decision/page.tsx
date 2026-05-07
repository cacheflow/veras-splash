'use client';
import { useMemo, useState } from "react";

const scenarios = {
  normal: {
    label: "👤 Normal User",
    request: {
      actor: "user_123",
      action: "refund.create",
      resource: "order_90210",
      context: {
        account_age_days: 420,
        chargebacks: 0,
        refund_attempts: 1,
        autonomous_agent: false,
        daily_spend: 45,
      },
    },
  },
  risky: {
    label: "⚠️ Risky User",
    request: {
      actor: "user_456",
      action: "refund.create",
      resource: "order_70013",
      context: {
        account_age_days: 12,
        chargebacks: 3,
        refund_attempts: 6,
        autonomous_agent: false,
        daily_spend: 300,
      },
    },
  },
  agent: {
    label: "🤖 Agent",
    request: {
      actor: "agent_789",
      action: "domain.purchase",
      resource: "domain:veras.dev",
      context: {
        account_age_days: 3,
        chargebacks: 0,
        refund_attempts: 0,
        autonomous_agent: true,
        daily_spend: 900,
      },
    },
  },
};

function evaluateDecision(request: any) {
  const ctx = request.context;
  const escalate = ctx.autonomous_agent && ctx.daily_spend > 500;
  const refundRisk = ctx.chargebacks > 2 || ctx.refund_attempts > 5;
  
  if (escalate) {
    return {
      decision: "require_review",
      reason: "autonomous_agent_high_value_action",
      action: "pause_and_escalate",
      controls: {
        human_approval_required: true,
        rate_limit: "3/day",
        mfa_required: true,
      },
      policy_id: "agent_guardrail_v1",
    };
  }

  if (refundRisk) {
    return {
      decision: "deny",
      reason: "excessive_refund_risk",
      action: "block_action",
      controls: {
        rate_limit: "0/day",
        review_required: true,
      },
      policy_id: "refund_abuse_v2",
    };
  }

  return {
    decision: "allow",
    reason: "low_risk_action",
    action: "continue",
    controls: {
      rate_limit: "standard",
      review_required: false,
    },
    policy_id: "default_allow_v1",
  };
}

const Scenarios = ({scenarios, setSelected, selected}: any) => {
    return Object.entries(scenarios).map(([key, scenario]) => (
      <button
          key={key}
          onClick={() => setSelected(key as keyof typeof scenarios)}
          className={`w-full rounded-2xl px-4 py-3 text-left text-sm ${
          selected === key
              ? "bg-white text-black"
              : "bg-white/5 text-white/70 hover:bg-white/10"
          }`}
      >
          {scenario.label}
      </button>
      ))
}

export default function RunDecisionPage() {
  const [selected, setSelected] = useState<keyof typeof scenarios>("agent");
  const request = scenarios[selected].request;

  const decisionResponse = useMemo(() => evaluateDecision(request), [request]);
  const response = JSON.stringify(decisionResponse, null, 2);

  return (
   <main className="min-h-screen bg-[#070A12] text-white">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <nav className="flex items-center justify-between">
          <a href='/' className="logo-link text-lg font-semibold tracking-tight text-white/70">Veras</a>
          <button className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/10">
            Get API Access
          </button>
        </nav>

        <div className="py-16">
          <p className="mb-4 text-sm text-cyan-300">
            Decision API for high-risk systems
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Control who can do what, before risk becomes loss.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Veras evaluates users, agents, actions, and context to return an
            enforceable decision in real time.
          </p>
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="mb-4 text-sm font-medium text-white/50">
              Scenarios
            </h2>

            <div className="space-y-3">
              <Scenarios scenarios={scenarios} setSelected={setSelected} selected={selected} />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0B0F1A] p-5">
            <h2 className="mb-4 text-sm font-medium text-white/50">
              Request Payload
            </h2>

            <pre className="overflow-x-auto rounded-2xl bg-black/30 p-5 text-sm leading-7 text-slate-100">
              {JSON.stringify(request, null, 2)}
            </pre>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-[#0B0F1A] p-5 shadow-2xl">
            <h2 className="mb-4 text-sm font-medium text-cyan-300">
              Decision Response
            </h2>

            <pre className="overflow-x-auto rounded-2xl bg-black/30 p-5 text-sm leading-7 text-slate-100">
              {response}
            </pre>
          </div>
        </section>
      </section>
    </main>
  );
}