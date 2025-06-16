import type { Metadata } from "next";
import type React from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Fellor Test Assignment",
  description: "Fellor test assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
