import FlexBox from "@/views/FlexBox";
import LoversCollation from "@/components/LoversCollation";
import Table from "@/components/Table";

export default function Home() {
  return (
    <FlexBox flow="flex flex-col" gap="gap-[300px] lg:gap-[200px]">
      <LoversCollation />
      <Table />
    </FlexBox>
  );
}
