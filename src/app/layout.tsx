import type { Metadata } from "next";
import "@/index.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Lighthouse Labs — Engineering What's Next",
  description: "Lighthouse Labs is a full-service software agency building scalable web apps, mobile products, and AI-powered tools for ambitious teams.",
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
      </body>
    </html>
  );
}
