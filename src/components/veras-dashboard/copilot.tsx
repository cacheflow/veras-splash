"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CircleAlert,
  Clock3,
  CornerDownLeft,
  Search,
  Send,
  Sparkles,
  User,
} from "lucide-react";

const questions = [
  "Why did this account become risky?",
  "Find similar cases",
  "What changed since yesterday?",
  "Should we allow this action?",
];
const answers: Record<
  string,
  { intro: string; bullets: string[]; insight: string; recommendation: string }
> = {
  "Why did this account become risky?": {
    intro:
      "Marcus was previously low risk. His score moved from 18 to 87 on July 18 after three correlated events:",
    bullets: [
      "A new device fingerprint was detected.",
      "The device matched a previously banned account.",
      "The $8,000 withdrawal was 6.4× his normal transaction size.",
    ],
    insight:
      "This pattern appeared in 14 prior cases; 11 were confirmed account takeovers.",
    recommendation:
      "Require device ownership verification before releasing the withdrawal.",
  },
  "Find similar cases": {
    intro:
      "I found 14 decisions with the same device-change → password-reset → withdrawal sequence.",
    bullets: [
      "11 were confirmed account takeovers.",
      "2 passed step-up verification.",
      "1 remains under review.",
    ],
    insight:
      "Shared device linkage is the strongest discriminator across these cases.",
    recommendation: "Open the linked case set and compare device identifiers.",
  },
  "What changed since yesterday?": {
    intro:
      "Two material changes affected the decision environment since yesterday:",
    bullets: [
      "High Value Withdrawal moved from v3.3 to v3.4.",
      "Internal model latency increased from 118ms to 480ms.",
    ],
    insight:
      "The policy update raised device-linkage weight by 15%, affecting 38 decisions today.",
    recommendation:
      "Keep v3.4 active; monitor false-positive rate for 24 hours.",
  },
  "Should we allow this action?": {
    intro:
      "No—not without additional verification. Evidence is mixed, but the downside of immediate release is high.",
    bullets: [
      "Identity history is strong.",
      "The current device is new and linked to a blocked entity.",
      "The withdrawal followed a recovery event by four minutes.",
    ],
    insight:
      "The current review decision is consistent with policy v3.4 and 91% confidence.",
    recommendation:
      "Hold the action and trigger device ownership verification.",
  },
};

export function Copilot() {
  const [selected, setSelected] = useState(questions[0]);
  const [draft, setDraft] = useState("");
  const a = answers[selected];
  return (
    <div className="grid min-h-[calc(100vh-128px)] gap-5 lg:grid-cols-[280px_1fr]">
      <aside className="panel rounded-lg p-4">
        <div className="mb-4 flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded bg-[#6c8cff]/15 text-[#91a4ff]">
            <Sparkles size={14} />
          </span>
          <div>
            <p className="text-[13px] font-semibold">Trust Copilot</p>
            <p className="font-mono text-[13px] text-[#68717e]">
              GROUNDED IN DECISION DATA
            </p>
          </div>
        </div>
        <button className="mb-5 flex w-full items-center gap-2 rounded-md border border-[#282e37] bg-[#0a0d11] px-3 py-2 text-[13px] text-[#6d7683]">
          <Search size={13} />
          Search conversations
        </button>
        <p className="eyebrow mb-3">Suggested questions</p>
        <div className="space-y-1">
          {questions.map((q) => (
            <button
              key={q}
              onClick={() => setSelected(q)}
              className={`w-full rounded-md px-3 py-2.5 text-left text-[13px] leading-4 transition ${selected === q ? "bg-[#6c8cff]/10 text-[#b5c0f6]" : "text-[#747d8a] hover:bg-white/[.025]"}`}
            >
              {q}
            </button>
          ))}
        </div>
        <div className="mt-7 border-t border-[#242a33] pt-4">
          <p className="eyebrow mb-3">Recent</p>
          <div className="flex items-start gap-2 text-[13px] leading-4 text-[#626b78]">
            <Clock3 size={12} className="mt-0.5 shrink-0" />
            <span>Review spike after policy change</span>
          </div>
        </div>
      </aside>
      <section className="panel flex min-h-[680px] flex-col overflow-hidden rounded-lg">
        <div className="flex items-center justify-between border-b border-[#20252e] px-5 py-4">
          <div>
            <p className="text-sm font-semibold">Decision analysis</p>
            <p className="mt-1 font-mono text-[13px] text-[#65707d]">
              CONTEXT: MARCUS THOMPSON · DEC_84291
            </p>
          </div>
          <span className="rounded border border-emerald-400/15 bg-emerald-400/[.06] px-2 py-1 text-[13px] text-emerald-300">
            4 sources connected
          </span>
        </div>
        <div className="scrollbar-none flex-1 overflow-y-auto p-5 sm:p-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-7 flex justify-end">
              <div className="max-w-[85%] rounded-xl rounded-tr-sm bg-[#20283a] px-4 py-3 text-[13px] leading-5 text-[#d7dce5]">
                {selected}
              </div>
            </div>
            <div className="flex gap-3">
              <span className="grid size-8 shrink-0 place-items-center rounded-md bg-[#6c8cff] text-[#080a0d]">
                <Bot size={16} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="rounded-xl rounded-tl-sm border border-[#252b35] bg-[#10141a] p-5 text-[13px] leading-6 text-[#aeb6c1]">
                  <p>{a.intro}</p>
                  <ol className="my-4 space-y-2">
                    {a.bullets.map((b, i) => (
                      <li key={b} className="flex gap-3">
                        <span className="font-mono text-[#798bdb]">
                          {i + 1}.
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="rounded-md border border-[#6c8cff]/15 bg-[#6c8cff]/[.045] p-3">
                    <p className="eyebrow mb-2 text-[#8295ed]">
                      Pattern evidence
                    </p>
                    <p className="text-[13px] leading-5 text-[#919cb0]">
                      {a.insight}
                    </p>
                  </div>
                  <div className="mt-4 border-t border-[#282e37] pt-4">
                    <p className="font-semibold text-[#d7dce3]">
                      Recommendation
                    </p>
                    <p className="mt-1">{a.recommendation}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 text-[13px] text-[#596371]">
                  <span>Analyzed 7 events</span>
                  <span>·</span>
                  <span>4 vendors</span>
                  <span>·</span>
                  <Link
                    href="/dashboard/decisions/dec_84291"
                    className="flex items-center gap-1 text-[#7f91e4]"
                  >
                    View decision
                    <ArrowRight size={10} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#20252e] p-4">
          <div className="mx-auto flex max-w-2xl items-end gap-2 rounded-lg border border-[#303743] bg-[#0a0d11] p-2 focus-within:border-[#586da8]">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ask about this decision…"
              rows={1}
              className="max-h-24 min-h-8 flex-1 resize-none bg-transparent px-2 py-1.5 text-[13px] text-[#d4d8de] outline-none placeholder:text-[#545d69]"
            />
            <button
              onClick={() => {
                if (questions.includes(draft)) {
                  setSelected(draft);
                  setDraft("");
                }
              }}
              className="grid size-8 place-items-center rounded-md bg-[#6c8cff] text-[#080a0d]"
            >
              <Send size={13} />
            </button>
          </div>
          <p className="mt-2 text-center text-[13px] text-[#505966]">
            Responses cite only connected Veras events, policies, and vendor
            evidence.
          </p>
        </div>
      </section>
    </div>
  );
}
