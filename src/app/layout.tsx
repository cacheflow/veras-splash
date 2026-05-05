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
  title: "Veras | Decision API for High-Risk Systems",
  description:
    "Veras is a unified decision API for permissions, entitlements, rate limits, and abuse control in high-risk systems.",

  openGraph: {
    title: "Veras | Decision API for High-Risk Systems",
    description:
      "Control who can do what, before risk becomes loss. Veras unifies permissions, entitlements, and abuse controls into a single decision layer.",
    url: baseUrl,
    siteName: "Veras",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Veras Decision API for High-Risk Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Veras | Decision API for High-Risk Systems",
    description:
      "A unified API for permissions, entitlements, rate limits, and abuse control in high-risk systems.",
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
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <PrimeReactProvider>
          <ThemeProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </ThemeProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
