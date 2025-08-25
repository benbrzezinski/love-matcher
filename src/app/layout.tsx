import type { Metadata, Viewport } from "next";
import { Comfortaa } from "next/font/google";
import { ToastContainer, Slide } from "react-toastify";
import "./globals.css";

const font = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Love Matcher",
  description: "Love Matching Game",
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
        className={`${font.className} container mx-auto bg-linear-main text-base leading-primary text-primary`}
      >
        <main className="relative min-h-dvh px-[15px] py-[50px]">
          {children}
        </main>
        <ToastContainer position="top-center" transition={Slide} closeOnClick />
      </body>
    </html>
  );
}
