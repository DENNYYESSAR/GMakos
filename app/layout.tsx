import type { Metadata } from "next";
import { Pacifico, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import "./transitions.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "G.Makos Engineering & Metalworks",
  description: "Expert welding, metal fabrication, and repair services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.variable} ${firaCode.variable} ${pacifico.variable} antialiased`}
      >
        <div className="page-transition">{children}</div>
      </body>
    </html>
  );
}
