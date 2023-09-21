import "@styles/globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const font = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Decode Token",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="icon"
          href="data:image/png;base64,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"
        />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
