import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

// Inter (variable, with optical sizing) is self-hosted so the page makes no
// requests to Google Fonts.
const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Taxy | Your tax preparation workspace",
  description:
    "Bring your freelance records together, check what was extracted, and prepare an organised, traceable tax report for Y/A 2025/26.",
};

export const viewport: Viewport = {
  themeColor: "#0a508f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
