import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Love Matcher - Home",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
