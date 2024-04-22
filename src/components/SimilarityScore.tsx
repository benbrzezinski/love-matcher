import FlexBox from "@/views/FlexBox";

interface SimilarityScoreProps {
  displayedSimilarity: number;
  description: string;
  finalSimilarityIsDisplayed: boolean;
}

export default function SimilarityScore({
  displayedSimilarity,
  description,
  finalSimilarityIsDisplayed,
}: SimilarityScoreProps) {
  return (
    <FlexBox flow="flex flex-col" items="items-center" gap="gap-[40px]">
      <div className="relative grid size-[150px] place-items-center rounded-full bg-secondary-accent-lighter shadow-[0_15px_10px_var(--bg-primary)] md:size-[200px]">
        <p className="text-biggest font-black">{displayedSimilarity}%</p>
      </div>
      {finalSimilarityIsDisplayed ? (
        <p className="max-w-[650px] text-center text-small">{description}</p>
      ) : (
        <p className="pointer-events-none select-none text-small font-black">
          Shaping your love profile...
        </p>
      )}
    </FlexBox>
  );
}
