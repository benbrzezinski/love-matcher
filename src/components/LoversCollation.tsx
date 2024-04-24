"use client";

import Lottie from "lottie-react";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
  const pathname = usePathname();
  const { addResult } = useResultsStore();

  const [lottieLoading, setLottieLoading] = useState({
    maleAvatar: true,
    femaleAvatar: true,
    arrows: true,
  });

  const [maleFormState, setMaleFormState] = useState<FormState>({
    name: "",
    birthday: "",
    age: null,
    zodiacSign: "",
  });

  const [femaleFormState, setFemaleFormState] = useState<FormState>({
    name: "",
    birthday: "",
    age: null,
    zodiacSign: "",
  });

  const lottieFilesLoading =
    lottieLoading.maleAvatar ||
    lottieLoading.femaleAvatar ||
    lottieLoading.arrows;

  useEffect(() => {
    if (pathname.includes("results")) {
      toast.dismiss();
    }
  }, [pathname]);

  const resetState = (toastVisible = true) => {
    setMaleFormState({
      name: "",
      birthday: "",
      age: null,
      zodiacSign: "",
    });

    setFemaleFormState({
      name: "",
      birthday: "",
      age: null,
      zodiacSign: "",
    });

    if (toastVisible) {
      toast.success("All fields cleared", {
        toastId: "reset",
        autoClose: 3000,
      });
    }
  };

  const handleMatching = () => {
    if (!maleFormState.name.trim() || !femaleFormState.name.trim()) {
      toast.warning("Please provide your names", { toastId: "name" });
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

    toast.info("Matching in progress...", {
      toastId: "matching",
      autoClose: false,
    });

    const similarity = calculateSimilarity({
      male: {
        name: maleFormState.name,
        age: maleFormState.age,
        zodiacSign: maleFormState.zodiacSign,
      },
      female: {
        name: femaleFormState.name,
        age: femaleFormState.age,
        zodiacSign: femaleFormState.zodiacSign,
      },
    });

    const description = getDescriptionBySimilarity(similarity);
    const date = new Date();

    const newResult: Result = {
      id: nanoid(),
      names: {
        male: maleFormState.name.toLocaleLowerCase().trim(),
        female: femaleFormState.name.toLocaleLowerCase().trim(),
      },
      similarity,
      description,
      date: `${date.toLocaleDateString()} / ${date.toLocaleTimeString()}`,
    };

    addResult(newResult);
    router.push(`/home/results/${newResult.id}`, { scroll: false });
    resetState(false);
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
          {!lottieFilesLoading && (
            <>
              <Button
                content="Start Matching"
                classes="text-white bg-primary hover:bg-primary-hover focus-visible:bg-primary-hover top-[115%] left-[50%] lg:top-[75%] lg:left-[-32.5%]"
                style={{
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                }}
                onClick={handleMatching}
              />
              <Button
                content="Clear All"
                classes="text-[var(--cl-accent)] bg-white hover:bg-gray-200 focus-visible:bg-gray-200 top-[128%] left-[50%] lg:top-[86%] lg:left-[-32.5%]"
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
      <Loader visible={lottieFilesLoading} />
    </>
  );
}
