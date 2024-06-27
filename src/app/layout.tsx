import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Chic Sheep",
  description: "Buy cool NFT",
};

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="../../public/fonts/Feogra-Demo-BF64dc66c9ef4b4.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </Head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
