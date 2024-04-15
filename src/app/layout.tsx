import type { Metadata, Viewport } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const font = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Love Matcher",
};

export const viewport: Viewport = {
  themeColor: "hsl(329, 46%, 24%)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-linearMainBg container mx-auto text-base leading-primary text-primary`}
      >
        <main className="relative min-h-dvh px-[15px] py-[50px]">
          {children}
        </main>
      </body>
    </html>
  );
}
