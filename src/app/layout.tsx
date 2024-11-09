import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Update the metadata to match your project details
export const metadata: Metadata = {
  title: "Doblier - Decentralized Freelance Network",
  description: "Connecting freelancers and businesses in a decentralized network for efficient service exchange and professional growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add any additional meta tags or scripts you need here */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
