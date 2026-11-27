import Image from "next/image";
import { ArrowDownUp, ArrowLeft, ArrowLeftRight, ArrowRight, ShieldCheck } from "lucide-react";

const vendors = [
  { name: "Hive", role: "Content moderation", logo: "/images/vendors/hive.svg" },
  { name: "Persona", role: "Identity verification", logo: "/images/vendors/persona.svg" },
  { name: "SEON", role: "Account intelligence", logo: "/images/vendors/seon.svg" },
  { name: "Cinder", role: "Trust & safety operations", logo: "/images/vendors/cinder.svg" },
  { name: "Stream", role: "Messaging", logo: "/images/vendors/stream.webp" },
  { name: "Mux", role: "Video infrastructure", logo: "/images/vendors/mux.svg" },
  { name: "Auth0", role: "Account access", logo: "/images/vendors/auth0.svg" },
  { name: "Zendesk", role: "Customer support", logo: "/images/vendors/zendesk.svg" },
];

function VendorGroup({ items }: { items: typeof vendors }) {
  return (
    <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
      {items.map(({ name, role, logo }) => (
        <li key={name} className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-[#0a0b0e] p-4">
          <div className="flex h-10 w-12 shrink-0 items-center justify-center rounded-md bg-white p-1.5">
            <Image src={logo} alt="" width={48} height={32} className="max-h-8 w-auto object-contain" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">{name}</p>
            <p className="mt-1 text-xs leading-5 text-neutral-400">{role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function VendorEcosystem() {
  return (
    <section id="integrations" aria-labelledby="ecosystem-heading" className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-400">Your safety ecosystem</p>
      <h2 id="ecosystem-heading" className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">Keep the tools you trust. Make them work together.</h2>
      <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-400 sm:text-lg">Veras connects moderation tools, messaging services, video infrastructure, identity providers and internal systems, helping your team coordinate safety decisions and enforcement without replacing its existing tools.</p>
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.025] p-4 sm:p-8">
        <p className="mb-8 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">Illustrative ecosystem · not an integration availability list</p>
        <div className="grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <VendorGroup items={vendors.slice(0, 4)} />
          <div aria-hidden="true" className="flex justify-center text-indigo-400"><ArrowLeftRight className="hidden size-6 lg:block" /><ArrowDownUp className="size-6 lg:hidden" /></div>
          <div className="rounded-2xl border border-emerald-800/20 bg-emerald-800/[0.04] px-5 py-8 text-center">
            <ShieldCheck aria-hidden="true" className="mx-auto size-8 text-indigo-400" />
            <p className="mt-4 text-xl font-semibold text-white">Veras</p>
            <p className="mt-2 text-sm leading-6 text-neutral-400">Your policies.<br />Coordinated enforcement.</p>
            <div className="mt-6 space-y-3 border-t border-white/10 pt-4 text-xs text-neutral-400">
              <p className="flex items-center justify-center gap-2"><ArrowRight aria-hidden="true" className="size-3" /> Safety signals in</p>
              <p className="flex items-center justify-center gap-2"><ArrowLeft aria-hidden="true" className="size-3" /> Enforcement actions out</p>
            </div>
          </div>
          <div aria-hidden="true" className="flex justify-center text-indigo-400"><ArrowLeftRight className="hidden size-6 lg:block" /><ArrowDownUp className="size-6 lg:hidden" /></div>
          <VendorGroup items={vendors.slice(4)} />
        </div>
        <div className="mt-6 rounded-lg border border-dashed border-emerald-800/25 px-4 py-3 text-center text-sm text-neutral-400">Your internal services · account permissions, publishing and marketplace access</div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-neutral-400">Safety signals flow into Veras; policy-driven actions flow back to connected services. The direction and actions depend on each integration.</p>
      </div>
      <p className="mt-5 max-w-3xl text-xs leading-6 text-neutral-500">All vendors shown are illustrative examples, not confirmed integrations, partners, endorsements or customers. Integration availability and scope must be confirmed with our team. Vendor names and logos belong to their respective owners.</p>
    </section>
  );
}
