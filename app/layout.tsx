import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitonProvider from "@/components/TransitonProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Launceston Web Design Experts | Aurora Web",
  description:
    "Elevate your Launceston business with stunning web design by Aurora Web. Custom websites that attract customers and boost your online presence.",
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
