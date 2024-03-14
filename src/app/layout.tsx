import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chic Sheep",
  description: "Buy cool NFT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
