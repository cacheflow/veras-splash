"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Check, 
  Shield, 
  Key, 
  Lock, 
  ArrowDown, 
  ExternalLink, 
  Terminal, 
  ArrowRight, 
  Activity, 
  Cpu, 
  Users, 
  RefreshCw 
} from "lucide-react";

// Section 1 Simulated Scenarios
const SIMULATED_SCENARIOS = [
  {
    vertical: "Online Pharmacy",
    agent: "ClinicalBot-4",
    action: "Order 50x Ozempic Vials",
    target: "dispense_rx_9011",
    policy: "Controlled medications require clinical supervisor verification",
    decision: "THROTTLE",
    colorClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    glowClass: "veras-glow-cyan",
    explanation: "Action paused. Transaction queued for manual pharmacist prescription sign-off."
  },
  {
    vertical: "Marketplace",
    agent: "EscrowAgent",
    action: "Refund $5,200 to Buyer",
    target: "usr_buyer_8910",
    policy: "Single-agent transactions capped at $1,000 threshold",
    decision: "REVIEW",
    colorClass: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    glowClass: "veras-glow-amber",
    explanation: "Action held. Incident escalated to internal trust & safety platform for review."
  },
  {
    vertical: "Gaming Platform",
    agent: "VaultTrader",
    action: "Transfer 500k Gold Coins",
    target: "acc_gold_9912",
    policy: "Detect automated high-frequency asset trading anomalies",
    decision: "DENY",
    colorClass: "text-rose-400 bg-rose-500/10 border-rose-500/30",
    glowClass: "veras-glow-rose",
    explanation: "Action blocked. Automated transaction sequence violated bot prevention guidelines."
  },
  {
    vertical: "Creator Platform",
    agent: "SupportAI",
    action: "Update Creator Payout Routing",
    target: "creator_payout_7712",
    policy: "Direct account modification allowed for authenticated service roles",
    decision: "ALLOW",
    colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    glowClass: "veras-glow-emerald",
    explanation: "Action permitted. Cryptographic agent signature validated and routing changed."
  }
];

// Section 3 Interactive Rules & JSON payloads
const POLICY_EXAMPLES = [
  {
    id: "refund-50",
    label: "Refund $50",
    action: "issue_refund",
    params: { amount_usd: 50, order_id: "ord_rx_4021" },
    decision: "ALLOW",
    policy: "Self-service support agents can authorize refunds under $100.",
    remediation: "Processed automatically."
  },
  {
    id: "send-message",
    label: "Send message",
    action: "send_message",
    params: { text: "Your prescription renewal is approved.", recipient: "+15005550009" },
    decision: "ALLOW",
    policy: "Transactional notifications matching verified compliance templates are permitted.",
    remediation: "Delivered."
  },
  {
    id: "issue-credit",
    label: "Issue credit",
    action: "issue_store_credit",
    params: { credit_usd: 150, user_id: "usr_9918" },
    decision: "REVIEW",
    policy: "Adjustments between $100 and $500 require internal risk review.",
    remediation: "Queued for Risk Team validation."
  },
  {
    id: "create-listing",
    label: "Create listing",
    action: "publish_listing",
    params: { category: "pharma", product: "Sildenafil (Prescription)" },
    decision: "DENY",
    policy: "Automated listing of controlled substances prohibited on open marketplace.",
    remediation: "Rejected. Account flagged for compliance review."
  }
];

export default function Home() {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [activePolicyId, setActivePolicyId] = useState("refund-50");

  // Hero simulator cycle logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScenarioIndex((prev) => (prev + 1) % SIMULATED_SCENARIOS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentScenario = SIMULATED_SCENARIOS[activeScenarioIndex];
  const activePolicy = POLICY_EXAMPLES.find(p => p.id === activePolicyId) || POLICY_EXAMPLES[0];

  return (
    <main className="min-h-screen veras-dark text-[#f3f4f6] relative font-outfit select-none">
      
      {/* Ambient background grids */}
      <div className="absolute inset-0 veras-grid-bg pointer-events-none z-0" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full filter blur-[150px] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex flex-col min-h-screen justify-between">
        
        {/* Navigation */}
        <header className="py-6 flex items-center justify-between border-b border-white/5">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center overflow-hidden">
              <Shield className="w-4.5 h-4.5 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Veras
            </span>
            <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 font-semibold uppercase text-indigo-300 tracking-wider">
              AI Guardrail
            </span>
          </Link>
          
          <nav className="flex items-center gap-4">
            <a 
              href="#platform" 
              className="text-sm font-medium text-neutral-400 hover:text-white transition"
            >
              View API
            </a>
            <div className="shrink-0">
                <a
                  href="mailto:hello@onveras.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition duration-205 shadow-lg"
                >
                  Let's talk
                  <ArrowRight className="w-4 h-4 text-black" />
                </a>
              </div>
          </nav>
        </header>

        {/* SECTION 1: HERO */}
        <section className="py-16 md:py-24 lg:py-28 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Permissions Layer for AI Agents
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white">
              Every <span className="veras-gradient-text">AI agent</span> needs permissions
            </h1>
            
            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
              Veras defines what AI agents are allowed to do before they touch money, customers, or critical workflows.
            </p>

            {/* Checkmark Action Examples */}
            <div className="grid grid-cols-2 gap-3 max-w-md pt-2">
              {[
                "Issue refund",
                "Approve payout",
                "Create account",
                "Message customer",
                "Access content",
                "Place order"
              ].map((example) => (
                <div 
                  key={example} 
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-neutral-200 text-sm"
                >
                  <div className="w-5 h-5 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xs shrink-0">
                    ✓
                  </div>
                  <span>{example}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:hello@onveras.com"
                className="px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition duration-200 shadow-lg"
              >
                Book Demo
              </a>
              <a
                href="#platform"
                className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition duration-200"
              >
                View API
              </a>
            </div>
          </div>

          {/* Right Column: Visual Simulator */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
            
            {/* Vercel/Stripe meets clerk aesthetic device block */}
            <div className="rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-md p-6 relative overflow-hidden veras-glow-violet veras-pulse-slow">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
              
              {/* Device Window Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                </div>
                <div className="text-xs text-neutral-500 font-mono tracking-wider">
                  VERAS_PIPELINE.LOG
                </div>
                <div className="flex items-center gap-1 text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 font-mono">
                  <RefreshCw className="w-2.5 h-2.5 animate-spin" />
                  LIVE
                </div>
              </div>

              {/* Simulation Stage */}
              <div className="py-6 flex flex-col gap-5 items-center relative">
                
                {/* 1. AI Agent Stage */}
                <div className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-600/15 border border-indigo-500/20 flex items-center justify-center">
                      <Cpu className="w-4.5 h-4.5 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500 font-mono">AGENT RUNNER</div>
                      <div className="text-sm font-semibold text-white">{currentScenario.agent}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-neutral-500 font-mono">VERTICAL</div>
                    <div className="text-xs font-semibold px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-indigo-300">
                      {currentScenario.vertical}
                    </div>
                  </div>
                </div>

                {/* Vertical Pipeline Connection 1 */}
                <div className="w-[2px] h-6 bg-gradient-to-b from-indigo-500/50 to-purple-500/50 relative">
                  <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_#818cf8] animate-bounce" style={{ top: "30%" }} />
                </div>

                {/* 2. Veras Core Engine */}
                <div className="w-full max-w-sm rounded-xl border border-indigo-500/30 bg-[#0c0d12] p-4 relative overflow-hidden veras-glow-violet">
                  <div className="veras-scan-line" />
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4.5 h-4.5 text-indigo-400" />
                      <span className="text-xs font-bold tracking-wider font-mono text-white">VERAS COMPLIANCE CORE</span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400">auth_gate: v2.4</span>
                  </div>
                  
                  <div className="font-mono text-xs text-neutral-300 space-y-1.5 bg-black/45 p-2.5 rounded border border-white/5">
                    <div>
                      <span className="text-neutral-500">REQUEST_ACTION:</span>{" "}
                      <span className="text-purple-400 font-semibold">{currentScenario.action}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500">TARGET_RESOURCE:</span>{" "}
                      <span className="text-indigo-400">{currentScenario.target}</span>
                    </div>
                    <div className="pt-1 border-t border-white/5">
                      <span className="text-neutral-500">ACTIVE_POLICY:</span>{" "}
                      <span className="text-neutral-400 text-[11px] block italic mt-0.5 leading-snug">
                        "{currentScenario.policy}"
                      </span>
                    </div>
                  </div>
                </div>

                {/* Vertical Pipeline Connection 2 */}
                <div className="w-[2px] h-6 bg-gradient-to-b from-purple-500/50 to-neutral-800 relative">
                  <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc] animate-bounce" style={{ top: "60%" }} />
                </div>

                {/* 3. Decision Outputs */}
                <div className="w-full grid grid-cols-4 gap-2">
                  {["ALLOW", "DENY", "REVIEW", "THROTTLE"].map((outcome) => {
                    const isCurrent = currentScenario.decision === outcome;
                    return (
                      <div
                        key={outcome}
                        className={`text-center font-mono font-bold py-2.5 px-1 rounded-lg text-xs tracking-wider border duration-300 transition-all ${
                          isCurrent 
                            ? currentScenario.colorClass + " " + currentScenario.glowClass + " scale-105"
                            : "bg-white/[0.01] border-white/5 text-neutral-600 opacity-20"
                        }`}
                      >
                        {outcome}
                      </div>
                    );
                  })}
                </div>

                {/* 4. Verdict Detail Card */}
                <div className="w-full rounded-xl bg-black/35 border border-white/5 p-4 text-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-neutral-500 font-mono">DECISION VERDICT</span>
                    <span className={`font-mono font-bold ${
                      currentScenario.decision === "ALLOW" ? "text-emerald-400" :
                      currentScenario.decision === "DENY" ? "text-rose-400" :
                      currentScenario.decision === "REVIEW" ? "text-amber-400" : "text-cyan-400"
                    }`}>
                      {currentScenario.decision}
                    </span>
                  </div>
                  <p className="text-neutral-300 font-sans italic leading-relaxed">
                    {currentScenario.explanation}
                  </p>
                </div>

              </div>

            </div>
          </div>

        </section>

         <section id="platform" className="py-20 md:py-24 border-t border-white/5">
          
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
            
            {/* Left Column: API copy and Interactive Selector */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-indigo-400">
                <Terminal className="w-3.5 h-3.5" />
                VERAS AUTHORIZATION API
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                One API for AI permissions.
              </h2>
              
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                Centralize authorization logic for AI-powered workflows, agents, and commerce systems. Click any policy capability to inspect the gateway response.
              </p>

              {/* Clickable Policy List */}
              <div className="space-y-2 max-w-sm pt-2">
                {POLICY_EXAMPLES.map((item) => {
                  const isActive = activePolicyId === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActivePolicyId(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg border transition font-mono text-xs flex items-center justify-between ${
                        isActive 
                          ? "bg-indigo-600/10 border-indigo-500/40 text-white font-bold"
                          : "bg-white/[0.01] border-white/5 text-neutral-400 hover:bg-white/5"
                      }`}
                    >
                      <span>{item.label}</span>
                      <div className="flex items-center gap-2">
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />}
                        <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? 'translate-x-1 text-indigo-400' : 'text-neutral-600'}`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Code Sandbox */}
            <div className="rounded-xl border border-white/10 bg-[#08090d] overflow-hidden shadow-2xl relative">
              
              {/* Terminal Window Header */}
              <div className="bg-[#0b0c12] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/70" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
                    <span className="text-white border-b border-indigo-400 pb-3 mt-1.5 font-bold">veras.authorize()</span>
                    <span>veras.yaml</span>
                  </div>
                </div>
                <div className="text-[10px] text-neutral-500 font-mono">POST /v1/authorize</div>
              </div>

              {/* Code Playground Grid */}
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5 font-mono text-[11px] sm:text-xs">
                
                {/* Code Panel: API Request */}
                <div className="p-5 space-y-4">
                  <div className="text-neutral-500 uppercase tracking-widest text-[9px] font-bold">API REQUEST (CLIENT)</div>
                  
                  <pre className="text-neutral-300 leading-relaxed overflow-x-auto whitespace-pre">
                    <code>{`// Initialize authorization
const decision = await veras.authorize({
  agent_id: "agent_runner_prod",
  action: "${activePolicy.action}",
  params: ${JSON.stringify(activePolicy.params, null, 2)}
});`}</code>
                  </pre>
                </div>

                {/* Code Panel: JSON API Response */}
                <div className="p-5 space-y-4 bg-black/10">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500 uppercase tracking-widest text-[9px] font-bold">VERAS GATEWAY RESPONSE</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      activePolicy.decision === "ALLOW" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                      activePolicy.decision === "DENY" ? "bg-rose-500/10 text-rose-400 border border-rose-500/20" :
                      activePolicy.decision === "REVIEW" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                      "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    }`}>
                      {activePolicy.decision}
                    </span>
                  </div>

                  <pre className="text-neutral-300 leading-relaxed overflow-x-auto whitespace-pre">
                    <code>{`{
  "decision": "${activePolicy.decision}",
  "evaluated_at": "${new Date().toISOString().split('T')[0]}T06:01:00Z",
  "policy_triggered": {
    "scope": "${activePolicy.action}",
    "description": "${activePolicy.policy}"
  },
  "remediation": "${activePolicy.remediation}"
}`}</code>
                  </pre>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* SECTION 2: THE PROBLEM */}
        <section className="py-20 md:py-24 border-t border-white/5 relative">
          
          <div className="absolute inset-0 veras-dot-bg opacity-30 pointer-events-none" />

          {/* Heading block */}
          <div className="max-w-3xl mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              AI agents can take actions. <br />
              <span className="veras-gradient-text">But which ones?</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
              As AI agents gain access to payments, messaging, customer accounts, and commerce systems, platforms need a new control layer.
            </p>
          </div>

          {/* Card grid */}
          <div className="grid gap-6 md:grid-cols-3">
            
            {/* Card 1: Authentication */}
            <div className="rounded-xl border border-white/5 bg-white/[0.01] hover:border-white/10 p-6 space-y-5 transition duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Sleek Visual */}
                <div className="h-32 rounded-lg bg-black/45 border border-white/5 relative overflow-hidden flex flex-col justify-between p-3 font-mono text-[10px]">
                  <div className="absolute inset-0 veras-grid-bg opacity-20 pointer-events-none" />
                  <div className="flex items-center justify-between text-neutral-500 pb-1.5 border-b border-white/5">
                    <span>AGENT_SIGNATURE</span>
                    <span className="text-emerald-400 font-bold">VERIFIED</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-1 py-2 text-neutral-300">
                    <div className="flex items-center gap-1.5">
                      <span className="text-neutral-500">ID:</span>
                      <span className="text-white">agent_sha_99b2</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-neutral-500">SIGN:</span>
                      <span className="text-indigo-400 font-semibold truncate select-all">secp256k1:0x7a8...e421</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-neutral-500">RUNNER:</span>
                      <span className="text-neutral-400 font-sans">AWS Nitro Enclave</span>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-indigo-500 origin-left" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-indigo-300 tracking-wider">WHO IS THE AGENT?</div>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Cryptographically sign and verify AI agent identities. Guarantee the requests originate from verified model loops and unmodified sandbox runtimes.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Authorization */}
            <div className="rounded-xl border border-white/5 bg-white/[0.01] hover:border-white/10 p-6 space-y-5 transition duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Sleek Visual */}
                <div className="h-32 rounded-lg bg-black/45 border border-white/5 relative overflow-hidden flex flex-col justify-between p-3 font-mono text-[10px]">
                  <div className="absolute inset-0 veras-grid-bg opacity-20 pointer-events-none" />
                  <div className="flex items-center justify-between text-neutral-500 pb-1.5 border-b border-white/5">
                    <span>CAPABILITY_SCOPES</span>
                    <span className="text-purple-400 font-bold">3 ACTIVE</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-1.5 py-2">
                    <div className="flex items-center justify-between text-neutral-300">
                      <span className="text-neutral-400">write:customer_message</span>
                      <span className="text-emerald-400 font-semibold">✓ ALLOW</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-300">
                      <span className="text-neutral-400">post:refund_limit</span>
                      <span className="text-indigo-300 font-semibold">MAX $1,000</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-300">
                      <span className="text-neutral-400">delete:credit_ledger</span>
                      <span className="text-rose-400 font-semibold">✗ DENY</span>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-purple-500 origin-left" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-purple-300 tracking-wider">WHAT CAN IT DO?</div>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Establish fine-grained capability scopes and session budgets. Enforce limitations on transactional values and external interactions dynamically.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Veras */}
            <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/10 p-6 space-y-5 relative overflow-hidden veras-glow-violet transition duration-300 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full filter blur-xl pointer-events-none" />
              
              <div className="space-y-4">
                {/* Sleek Visual */}
                <div className="h-32 rounded-lg bg-black/60 border border-indigo-500/25 relative overflow-hidden flex flex-col justify-between p-3 font-mono text-[10px] veras-glow-violet">
                  <div className="absolute inset-0 veras-grid-bg opacity-30 pointer-events-none" />
                  <div className="veras-scan-line" />
                  
                  <div className="flex items-center justify-between text-neutral-400 pb-1.5 border-b border-indigo-500/10">
                    <span className="text-white flex items-center gap-1"><Shield className="w-3 h-3 text-indigo-400" /> VERAS_CORE</span>
                    <span className="text-amber-400 font-bold animate-pulse">EVALUATING</span>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-between px-2">
                    <div className="flex flex-col items-center">
                      <div className="text-[9px] text-neutral-500">ACTION</div>
                      <div className="text-[11px] font-bold text-indigo-300">refund: $5.2k</div>
                    </div>
                    <div className="w-8 h-0.5 border-t border-dashed border-indigo-500/40 relative">
                      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
                    </div>
                    <div className="flex flex-col items-center px-2 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-400 font-bold tracking-wider scale-90">
                      HELD FOR REVIEW
                    </div>
                  </div>
                  
                  <div className="h-1 w-full bg-indigo-950 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-indigo-400 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-indigo-300 tracking-wider">ENFORCE EVERY DECISION.</div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    The unified real-time guardrail. Intervene at the API boundary to ALLOW, DENY, REVIEW, or THROTTLE actions dynamically before they result in losses.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Focus High-Risk Verticals Section (Design Direction) */}
          <div className="mt-20">
            <h4 className="text-xs font-bold font-mono tracking-widest text-neutral-500 uppercase mb-8">
              Supported Industries
            </h4>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { 
                  name: "Online Pharmacies", 
                  rule: "Verify prescription validity, dose limits, and dispensaries.",
                  icon: "💊",
                  themeClasses: "border-cyan-500/20 bg-cyan-950/5 text-cyan-400 shadow-[0_0_15px_-3px_rgba(6,182,212,0.15)] hover:border-cyan-500/40 hover:bg-cyan-950/15 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                },
                { 
                  name: "Marketplaces", 
                  rule: "Gate escrow releases, high-value listings, and payouts.",
                  icon: "🛍️",
                  themeClasses: "border-amber-500/20 bg-amber-950/5 text-amber-400 shadow-[0_0_15px_-3px_rgba(245,158,11,0.15)] hover:border-amber-500/40 hover:bg-amber-950/15 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                },
                { 
                  name: "Gaming & Assets", 
                  rule: "Detect automated item farming and asset trade spikes.",
                  icon: "🎮",
                  themeClasses: "border-rose-500/20 bg-rose-950/5 text-rose-400 shadow-[0_0_15px_-3px_rgba(244,63,94,0.15)] hover:border-rose-500/40 hover:bg-rose-950/15 hover:shadow-[0_0_20px_rgba(244,63,94,0.25)]"
                },
                { 
                  name: "Creator Platforms", 
                  rule: "Throttle instant payout spikes and enforce compliance checks.",
                  icon: "🎨",
                  themeClasses: "border-emerald-500/20 bg-emerald-950/5 text-emerald-400 shadow-[0_0_15px_-3px_rgba(16,185,129,0.15)] hover:border-emerald-500/40 hover:bg-emerald-950/15 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                },
                { 
                  name: "Adult Platforms", 
                  rule: "Control payout structures, age-gate checks, and uploads.",
                  icon: "🔞",
                  themeClasses: "border-purple-500/20 bg-purple-950/5 text-purple-400 shadow-[0_0_15px_-3px_rgba(168,85,247,0.15)] hover:border-purple-500/40 hover:bg-purple-950/15 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                }
              ].map((v) => (
                <div 
                  key={v.name} 
                  className={`rounded-2xl border p-5 flex flex-col justify-between gap-3 text-center transition-all duration-300 ${v.themeClasses}`}
                >
                  <div className="mx-auto flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-sm">
                    {v.icon}
                  </div>
                  <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                    <div className="text-xs font-bold font-mono tracking-wider uppercase text-white">{v.name}</div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed font-sans mt-auto">
                      {v.rule}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* SECTION 3: PLATFORM & INTERACTIVE API */}
       

        {/* FOOTER CTA & FOOTER */}
        <footer className="border-t border-white/5 py-12 md:py-16 mt-12">
          
          {/* Sleek CTA Card matching visual aesthetic */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 relative overflow-hidden p-8 md:p-12 mb-16 veras-glow-violet">
            <div className="absolute inset-0 veras-grid-bg opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full filter blur-2xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Building AI-powered commerce?
                </h1>
                <p className="text-neutral-400 text-sm max-w-lg leading-relaxed font-sans">
                  Secure your transactional workflows, prevent automated revenue leakages, and protect platform compliance with Veras.
                </p>
              </div>
              
              <div className="shrink-0">
                <a
                  href="mailto:hello@veras.dev"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition duration-205 shadow-lg"
                >
                  Let's talk
                  <ArrowRight className="w-4 h-4 text-black" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs text-neutral-500 font-mono">
            <div>
              &copy; {new Date().getFullYear()} Veras Technologies, Inc. All rights reserved.
            </div>
            <div className="flex gap-6">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                SOC2 Type II Certified
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                HIPAA Compliant Runtime
              </span>
            </div>
          </div>

        </footer>

      </div>
    </main>
  );
}
