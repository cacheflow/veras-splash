import type { Metadata } from "next";
import { AppShell } from "@/components/veras-dashboard/app-shell";
import "./dashboard.css";

export const metadata: Metadata = {
  title: "Veras | Trust Intelligence",
  description: "Explainable trust decisions across every risk signal.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="veras-dashboard">
      <AppShell>{children}</AppShell>
    </div>
  );
}
