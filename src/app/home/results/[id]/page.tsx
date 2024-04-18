"use client";

import { useRouter } from "next/navigation";
import FlexBox from "@/views/FlexBox";
import Button from "@/components/Button";
import useResultsStore from "@/store";

interface ResultDetailsProps {
  params: { id: string };
}

export default function ResultDetails({ params }: ResultDetailsProps) {
  const { results } = useResultsStore();
  const router = useRouter();
  const result = results.find(result => result.id === params.id);

  return (
    <FlexBox
      flow="flex flex-col"
      justify="justify-center"
      items="items-center"
      gap="gap-[30px]"
      style={{ minHeight: "calc(100dvh - 100px)" }}
    >
      {result && <p>Similarity: {result.similarity}</p>}
      <Button content="Go back" onClick={() => router.back()} />
    </FlexBox>
  );
}
