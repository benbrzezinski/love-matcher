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
      <div className="h-[calc(100dvh-100px)] w-[90%] max-w-[1250px] rounded-primary bg-linear-main xl:w-full">
        <ResultDetailsContent paramsID={params.id} isModal />
      </div>
    </Modal>
  );
}
