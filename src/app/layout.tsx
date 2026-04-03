import type { Metadata } from "next";
import "@/index.css";
import Providers from "@/components/Providers";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Lighthouse Labs — Engineering What's Next",
  description: "Lighthouse Labs is a full-service software agency building scalable web apps, mobile products, and AI-powered tools for ambitious teams.",
  metadataBase: new URL('https://lighthouselabs.in'),
  openGraph: {
    title: "Lighthouse Labs — Engineering What's Next",
    description: "Lighthouse Labs is a full-service software agency building scalable web apps, mobile products, and AI-powered tools.",
    url: "https://lighthouselabs.in",
    siteName: "Lighthouse Labs",
    images: [{ url: "/logo_emblem.png", width: 800, height: 600, alt: "Lighthouse Labs Logo" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lighthouse Labs — Engineering What's Next",
    description: "Lighthouse Labs is a full-service software agency building scalable web apps.",
    creator: "@LighthouseLabs",
    images: ["/logo_emblem.png"],
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
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
