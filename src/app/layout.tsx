import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Chic Sheeps",
  description:
    "Welcome to the enchanting world of NFT Chic Sheeps, where the extraordinary meets the woolly, and creativity is spun into a digital masterpiece.",
  // icons: {
  //   icon: ["/favicons/favicon.ico"],
  //   apple: ["/favicons/apple-touch-icon.png"],
  //   shortcut: ["/favicons/apple-touch-icon.png"],
  // },
  openGraph: {
    title: "Chic Sheeps",
    description:
      "Explore the extraordinary world of NFT Chic Sheeps, join a community shaping the future of digital ownership with these woolly wonders.",
    url: "chic-sheep.vercel.app",
    siteName: "Chic Sheeps",
    // images: ["/openGraph/sheep.png"],
    locale: "en-EN",
    type: "website",
  },
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
