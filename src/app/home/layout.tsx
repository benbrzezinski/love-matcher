import FlexBox from "@/views/FlexBox";
import Table from "@/components/Table";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FlexBox flow="flex flex-col" gap="gap-[300px] lg:gap-[200px]">
      {children}
      <Table />
    </FlexBox>
  );
}
