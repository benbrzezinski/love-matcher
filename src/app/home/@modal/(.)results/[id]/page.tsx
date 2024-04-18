"use client";

import { useRouter } from "next/navigation";
import FlexBox from "@/views/FlexBox";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import useResultsStore from "@/store";

interface ResultDetailsModalProps {
  params: { id: string };
}

export default function ResultDetailsModal({
  params,
}: ResultDetailsModalProps) {
  const { results } = useResultsStore();
  const router = useRouter();
  const result = results.find(result => result.id === params.id);

  return (
    <Modal>
      <div className="h-[calc(100dvh-100px)] w-[90%] max-w-[1250px] rounded-primary bg-secondary-accent-lighter p-6 xl:w-full">
        <FlexBox
          flow="flex flex-col"
          justify="justify-center"
          items="items-center"
          gap="gap-[30px]"
          style={{ height: "100%", overflowY: "auto" }}
        >
          {result && <p>Similarity: {result.similarity}</p>}
          <Button content="Go back" onClick={() => router.back()} />
        </FlexBox>
      </div>
    </Modal>
  );
}
