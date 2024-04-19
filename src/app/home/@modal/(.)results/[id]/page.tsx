import FlexBox from "@/views/FlexBox";
import Modal from "@/components/Modal";
import ResultDetailsContent from "@/components/ResultDetailsContent";

interface ResultDetailsModalProps {
  params: { id: string };
}

export default function ResultDetailsModal({
  params,
}: ResultDetailsModalProps) {
  return (
    <Modal>
      <div className="bg-linear-main h-[calc(100dvh-100px)] w-[90%] max-w-[1250px] rounded-primary p-6 xl:w-full">
        <FlexBox
          flow="flex flex-col"
          justify="justify-center"
          items="items-center"
          gap="gap-[30px]"
          style={{ height: "100%", overflowY: "auto" }}
        >
          <ResultDetailsContent paramsID={params.id} />
        </FlexBox>
      </div>
    </Modal>
  );
}
