import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Epic Quest",
  description: "Craft your quest, follow your curiosity ",
};
// Prevent auto-zoom on IOS
export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center">
          <Header />
          <div className="mt-16 w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
