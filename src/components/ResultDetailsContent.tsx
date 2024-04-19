"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import useResultsStore from "@/store";

interface ResultDetailsContentProps {
  paramsID: string;
}

export default function ResultDetailsContent({
  paramsID,
}: ResultDetailsContentProps) {
  const { results } = useResultsStore();
  const router = useRouter();
  const result = results.find(result => result.id === paramsID);

  return (
    <>
      {result && <p>Similarity: {result.similarity}</p>}
      <Button content="Go back" onClick={() => router.back()} />
    </>
  );
}
