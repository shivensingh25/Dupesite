import type { Metadata } from "next";
import "./globals-premium.css";

export const metadata: Metadata = {
  title: "ScentMatch - Discover Luxury Perfume Dupes",
  description: "Find affordable alternatives to designer perfumes. Compare fragrances and discover high-quality dupes that smell amazing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
