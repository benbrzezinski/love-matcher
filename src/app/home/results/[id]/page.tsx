import type { Metadata } from "next";
import FlexBox from "@/views/FlexBox";
import ResultDetailsContent from "@/components/ResultDetailsContent";

export const metadata: Metadata = {
  title: "Love Matcher - Result",
};

interface ResultDetailsProps {
  params: { id: string };
}

export default function ResultDetails({ params }: ResultDetailsProps) {
  return (
    <FlexBox
      flow="flex flex-col"
      justify="justify-center"
      items="items-center"
      gap="gap-[30px]"
      style={{ minHeight: "calc(100dvh - 100px)" }}
    >
      <ResultDetailsContent paramsID={params.id} />
    </FlexBox>
  );
}
