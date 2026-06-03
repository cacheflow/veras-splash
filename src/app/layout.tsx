import { Outfit } from 'next/font/google';
import './globals.css';
import { PrimeReactProvider } from 'primereact/api';
import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';

const outfit = Outfit({
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_URL

export const metadata = {
  title: "Veras | The Permissions Layer for AI Agents",
  description:
    "Veras helps high-risk platforms define, enforce, and monitor AI agent permissions before actions become losses.",

  openGraph: {
    title: "Veras | The Permissions Layer for AI Agents",
    description:
      "Veras helps high-risk platforms define, enforce, and monitor AI agent permissions before actions become losses.",
    url: baseUrl,
    siteName: "Veras",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Veras permissions layer for AI agents",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Veras | The Permissions Layer for AI Agents",
    description:
      "Veras helps high-risk platforms define, enforce, and monitor AI agent permissions before actions become losses.",
    images: [`${baseUrl}/og-image.png`],
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
      <body className={`${outfit.className} bg-[#07080a] text-[#f3f4f6] antialiased overflow-x-hidden`}>
        <PrimeReactProvider>
          <ThemeProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </ThemeProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
