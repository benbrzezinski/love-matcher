"use client";

import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import { FormState, Result } from "@/types";
import FlexBox from "@/views/FlexBox";
import Form from "./Form";
import Button from "./Button";
import Loader from "./Loader";
import useResultsStore from "@/store";
import maleAvatar from "@/lotties/male-avatar.json";
import arrows from "@/lotties/arrows.json";
import femaleAvatar from "@/lotties/female-avatar.json";
import calculateSimilarity from "@/utils/calculate-similarity";
import getDescriptionBySimilarity from "@/utils/get-description-by-similarity";

export default function LoversCollation() {
  const router = useRouter();
  const { addResult } = useResultsStore();

  const [lottieLoading, setLottieLoading] = useState({
    maleAvatar: true,
    femaleAvatar: true,
    arrows: true,
  });

  const [maleFormState, setMaleFormState] = useState<FormState>({
    fullName: "",
    birthday: "",
    age: null,
    zodiacSign: "",
  });

  const [femaleFormState, setFemaleFormState] = useState<FormState>({
    fullName: "",
    birthday: "",
    age: null,
    zodiacSign: "",
  });

  const notAllContentVisible =
    lottieLoading.maleAvatar ||
    lottieLoading.femaleAvatar ||
    lottieLoading.arrows;

  const resetState = () => {
    setMaleFormState({
      fullName: "",
      birthday: "",
      age: null,
      zodiacSign: "",
    });

    setFemaleFormState({
      fullName: "",
      birthday: "",
      age: null,
      zodiacSign: "",
    });
  };

  const handleMatching = () => {
    if (!maleFormState.fullName.trim() || !femaleFormState.fullName.trim()) {
      toast.warning("Please provide your names", { toastId: "fullName" });
      return;
    }

    if (!maleFormState.age || !femaleFormState.age) {
      toast.warning("Please provide your ages (must be greater than 0)", {
        toastId: "age",
      });
      return;
    }

    if (!maleFormState.zodiacSign || !femaleFormState.zodiacSign) {
      toast.warning("Please select your zodiac signs", {
        toastId: "zodiacSign",
      });
      return;
    }

    const similarity = calculateSimilarity({
      male: {
        fullName: maleFormState.fullName,
        age: maleFormState.age,
        zodiacSign: maleFormState.zodiacSign,
      },
      female: {
        fullName: femaleFormState.fullName,
        age: femaleFormState.age,
        zodiacSign: femaleFormState.zodiacSign,
      },
    });

    const description = getDescriptionBySimilarity(similarity);
    const date = new Date();

    const newResult: Result = {
      id: nanoid(),
      names: {
        male: maleFormState.fullName,
        female: femaleFormState.fullName,
      },
      similarity,
      description,
      date: `${date.toLocaleDateString()} / ${date.toLocaleTimeString()}`,
    };

    addResult(newResult);
    router.push(`/home/results/${newResult.id}`, { scroll: false });
    resetState();
  };

  return (
    <>
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-[30px] lg:flex-row">
        <FlexBox flow="flex flex-col" items="items-center">
          <Lottie
            animationData={maleAvatar}
            className="min-h-[220px] max-w-[400px]"
            onDOMLoaded={() =>
              setLottieLoading(l => ({ ...l, maleAvatar: false }))
            }
          />
          <Form name="male" state={maleFormState} setState={setMaleFormState} />
        </FlexBox>
        <Lottie
          animationData={arrows}
          className="hidden size-[200px] translate-y-[-50%] p-5 lg:block"
          onDOMLoaded={() => setLottieLoading(l => ({ ...l, arrows: false }))}
        />
        <FlexBox
          flow="flex flex-col"
          items="items-center"
          style={{ position: "relative" }}
        >
          <Lottie
            animationData={femaleAvatar}
            className="min-h-[220px] max-w-[400px]"
            onDOMLoaded={() =>
              setLottieLoading(l => ({ ...l, femaleAvatar: false }))
            }
          />
          <Form
            name="female"
            state={femaleFormState}
            setState={setFemaleFormState}
          />
          {!notAllContentVisible && (
            <>
              <Button
                content="Start Matching"
                classes="text-white bg-primary hover:bg-primary-hover focus-notAllContentVisible:bg-primary-hover top-[115%] left-[50%] lg:top-[75%] lg:left-[-32.5%]"
                style={{
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                }}
                onClick={handleMatching}
              />
              <Button
                content="Clear All"
                classes="text-[var(--cl-accent)] bg-white hover:bg-gray-200 focus-notAllContentVisible:bg-gray-200 top-[128%] left-[50%] lg:top-[86%] lg:left-[-32.5%]"
                style={{
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                }}
                onClick={resetState}
              />
            </>
          )}
        </FlexBox>
      </div>
      <Loader visible={notAllContentVisible} />
    </>
  );
}
