"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Bell,
  Bot,
  Boxes,
  ChevronDown,
  CircleHelp,
  FileSliders,
  LayoutDashboard,
  Menu,
  PlugZap,
  Search,
  Settings,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const nav = [
  { href: "/dashboard", label: "Decisions", icon: LayoutDashboard },
  { href: "/dashboard/policies", label: "Policies", icon: FileSliders },
  { href: "/dashboard/integrations", label: "Integrations", icon: PlugZap },
  { href: "/dashboard/copilot", label: "Trust Copilot", icon: Bot },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[232px_1fr]">
      {open && (
        <button
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/70 lg:hidden"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[232px] flex-col border-r border-[#20252e] bg-[#090b0f]/98 transition-transform lg:sticky lg:top-0 lg:h-screen ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex h-16 items-center justify-between border-b border-[#20252e] px-5">
          <Link
            href="/dashboard"
            className="dashboard-brand-link flex items-center gap-2.5"
          >
            <span className="grid size-7 place-items-center rounded-[7px] bg-[#6c8cff] text-[#080a0d]">
              <ShieldCheck size={16} strokeWidth={2.4} />
            </span>
            <span className="text-[17px] font-semibold tracking-[-.03em]">
              veras
            </span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="text-[#7f8999] lg:hidden"
          >
            <X size={18} />
          </button>
        </div>
        <nav className="flex-1 px-3 py-5">
          <p className="eyebrow mb-3 px-3">Trust operations</p>
          <div className="space-y-1">
            {nav.map((item) => {
              const active =
                item.href === "/dashboard"
                  ? pathname === "/dashboard" ||
                    pathname.startsWith("/dashboard/decisions")
                  : pathname.startsWith(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={active}
                  onClick={() => setOpen(false)}
                  className={`dashboard-nav-link group flex items-center gap-3 rounded-md px-3 py-2.5 text-[13px] font-medium transition ${active ? "bg-[#6c8cff]/12 shadow-[inset_2px_0_0_#6c8cff]" : "hover:bg-white/[.035]"}`}
                >
                  <Icon size={16} />
                  {item.label}
                  {item.label === "Trust Copilot" && (
                    <span className="ml-auto rounded bg-[#6c8cff]/15 px-1.5 py-0.5 font-mono text-[13px] text-[#91a4ff]">
                      BETA
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
          <p className="eyebrow mb-3 mt-8 px-3">Observe</p>
          <div className="space-y-1 text-[13px]">
            <span className="flex items-center gap-3 px-3 py-2.5 text-[#6f7784]">
              <Activity size={16} />
              Signal activity
            </span>
            <span className="flex items-center gap-3 px-3 py-2.5 text-[#6f7784]">
              <Users size={16} />
              Entities
            </span>
          </div>
        </nav>
        <div className="border-t border-[#20252e] p-3">
          <button className="flex w-full items-center gap-3 rounded-md p-2 text-left hover:bg-white/[.035]">
            <span className="grid size-8 place-items-center rounded-full bg-[#222938] text-[13px] font-semibold text-[#bdc8ef]">
              OP
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-medium">
                Orbit Payments
              </span>
              <span className="block text-[13px] text-[#717986]">
                Production
              </span>
            </span>
            <ChevronDown size={14} className="text-[#646d79]" />
          </button>
        </div>
      </aside>
      <div className="min-w-0">
        <header className="sticky top-0 z-20 flex h-16 items-center border-b border-[#20252e] bg-[#080a0d]/90 px-4 backdrop-blur-xl sm:px-6">
          <button
            onClick={() => setOpen(true)}
            className="mr-3 text-[#8b93a1] lg:hidden"
          >
            <Menu size={20} />
          </button>
          <div className="hidden items-center gap-2 text-[13px] text-[#7d8694] sm:flex">
            <span>Orbit Payments</span>
            <span className="text-[#3c424c]">/</span>
            <span className="text-[#bec4cc]">Trust Intelligence</span>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <button
              aria-label="Search"
              className="flex h-8 items-center gap-2 rounded-md border border-[#252b34] bg-[#0f1217] px-2.5 text-[13px] text-[#727b88] sm:w-48"
            >
              <Search size={14} />
              <span className="hidden sm:block">Search decisions…</span>
              <kbd className="ml-auto hidden font-mono text-[13px] sm:block">
                ⌘K
              </kbd>
            </button>
            <button
              aria-label="Help"
              className="grid size-8 place-items-center rounded-md text-[#777f8c] hover:bg-white/5"
            >
              <CircleHelp size={16} />
            </button>
            <button
              aria-label="Notifications"
              className="relative grid size-8 place-items-center rounded-md text-[#777f8c] hover:bg-white/5"
            >
              <Bell size={16} />
              <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-[#ff667d]" />
            </button>
            <button
              aria-label="Settings"
              className="grid size-8 place-items-center rounded-md text-[#777f8c] hover:bg-white/5"
            >
              <Settings size={16} />
            </button>
          </div>
        </header>
        <main className="mx-auto w-full max-w-[1500px] p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
