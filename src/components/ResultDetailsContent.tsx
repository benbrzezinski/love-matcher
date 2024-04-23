"use client";

import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "./ProgressBar";
import SimilarityScore from "./SimilarityScore";
import Button from "./Button";
import useResultsStore from "@/store";
import getLottieBySimilarity from "@/utils/get-lottie-by-similarity";

interface ResultDetailsContentProps {
  paramsID: string;
  isModal: boolean;
}

export default function ResultDetailsContent({
  paramsID,
  isModal,
}: ResultDetailsContentProps) {
  const INTERVAL_DELAY = 50;
  const [displayedSimilarity, setDisplayedSimilarity] = useState(0);
  const [similarityStartedUpdating, setSimilarityStartedUpdating] =
    useState(false);
  const [finalSimilarityIsDisplayed, setFinalSimilarityIsDisplayed] =
    useState(false);
  const [lottieCompleted, setLottieCompleted] = useState(false);
  const { results } = useResultsStore();
  const router = useRouter();
  const result = results.find(result => result.id === paramsID);

  useEffect(() => {
    if (!result) return;

    const intervalID = setInterval(
      () => update(result.similarity),
      INTERVAL_DELAY,
    );

    function update(similarity: number) {
      setSimilarityStartedUpdating(true);

      if (similarity === displayedSimilarity) {
        clearInterval(intervalID);
        setFinalSimilarityIsDisplayed(true);
        return;
      }

      setDisplayedSimilarity(n => n + 1);
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [result, displayedSimilarity]);

  return (
    result && (
      <>
        <div
          className={
            isModal
              ? "grid h-full place-items-center gap-[40px] overflow-y-auto overscroll-contain px-[40px] pb-[30px] pt-[40px]"
              : "contents"
          }
        >
          <ProgressBar
            INTERVAL_DELAY={INTERVAL_DELAY}
            similarity={result.similarity}
            similarityStartedUpdating={similarityStartedUpdating}
          />
          <SimilarityScore
            displayedSimilarity={displayedSimilarity}
            description={result.description}
            finalSimilarityIsDisplayed={finalSimilarityIsDisplayed}
          />
          <Button content="Go back" onClick={() => router.back()} />
        </div>
        {finalSimilarityIsDisplayed && (
          <div
            className={`${lottieCompleted ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"} fixed inset-0 grid place-items-center bg-black bg-opacity-80 transition-opacity duration-primary`}
          >
            <Lottie
              animationData={getLottieBySimilarity(result.similarity)}
              className="max-w-[500px]"
              loop={false}
              onComplete={() => {
                setLottieCompleted(true);
              }}
            />
          </div>
        )}
      </>
    )
  );
}
