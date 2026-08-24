import { Outfit } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";

const outfit = Outfit({
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_URL;

export const metadata = {
  metadataBase: new URL(baseUrl || "https://onveras.com"),
  title: "Veras | AI-Powered Action Control API",
  description:
    "Use AI and one API to control messaging, content, purchases, payouts, and sensitive account actions.",

  openGraph: {
    title: "Veras | AI-Powered Action Control API",
    description:
      "Use AI and one API to control messaging, content, purchases, payouts, and sensitive account actions.",
    url: baseUrl,
    siteName: "Veras",
    images: [
      {
        url: "/images/og-trust-signals.png",
        width: 1200,
        height: 630,
        alt: "Veras uses AI and one API to control sensitive user actions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Veras | AI-Powered Action Control API",
    description:
      "Use AI and one API to control messaging, content, purchases, payouts, and sensitive account actions.",
    images: ["/images/og-trust-signals.png"],
    creator: "@verasdev", // change if needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body
        className={`${outfit.className} bg-[#07080a] text-[#f3f4f6] antialiased overflow-x-hidden`}
      >
        <PrimeReactProvider>
          <ThemeProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </ThemeProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
