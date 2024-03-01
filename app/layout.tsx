import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitonProvider from "@/components/TransitonProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Business Deserves a Stunning Website",
  description:
    "Aurora Web delivers custom-crafted websites tailored to your brand and goals. Attract new customers and boost your online presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitonProvider>{children}</TransitonProvider>
      </body>
    </html>
  );
}
