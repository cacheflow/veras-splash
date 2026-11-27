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
  title: "Veras | Trust & Safety for High-Risk Platforms",
  description:
    "Connect your existing safety tools, coordinate enforcement, and respond consistently to content, platform and account violations.",

  openGraph: {
    title: "Veras | Trust & Safety for High-Risk Platforms",
    description:
      "Connect your existing safety tools, coordinate enforcement, and respond consistently to content, platform and account violations.",
    url: baseUrl,
    siteName: "Veras",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Veras — coordinated trust and safety enforcement",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Veras | Trust & Safety for High-Risk Platforms",
    description:
      "Connect your existing safety tools, coordinate enforcement, and respond consistently to content, account and platform violations.",
    images: ["/opengraph-image"],
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
