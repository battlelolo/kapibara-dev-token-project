// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kapibara Dev Token Faucet",
  description: "A Web3 Faucet to claim Kapibara Dev Tokens (KDT). This portfolio project is built with Next.js, wagmi, and Hardhat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* External Plausible script */}
        <script defer data-domain="kapibara-dev-token-project.vercel.app" src="https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"></script>
        
        {/* Inline Plausible script, corrected for ESLint and React */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible = window.plausible || function(...args) { (window.plausible.q = window.plausible.q || []).push(args) };
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}