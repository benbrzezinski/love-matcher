import type { Metadata } from "next";
import ResultDetailsContent from "@/components/ResultDetailsContent";

export const metadata: Metadata = {
  title: "Love Matcher - Result",
};

interface ResultDetailsProps {
  params: { id: string };
}

export default function ResultDetails({ params }: ResultDetailsProps) {
  return (
    <div className="grid min-h-[calc(100dvh-100px)] place-items-center gap-[40px] px-[25px]">
      <ResultDetailsContent paramsID={params.id} isModal={false} />
    </div>
  );
}
