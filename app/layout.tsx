import type { Metadata } from "next";
import "@fontsource-variable/montserrat";

import "./globals.css";
import { ClientProviders } from "@/providers/ClientProviders";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Runeapes",
  description: "The decentralized launchpad for Bitcoin runes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProviders>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClientProviders>
  );
}
