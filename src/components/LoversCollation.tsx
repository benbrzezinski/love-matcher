"use client";

import Lottie from "lottie-react";
import { useState } from "react";
import { FormState } from "@/types";
import FlexBox from "@/views/FlexBox";
import Form from "./Form";
import Button from "./Button";
import maleAvatar from "@/anims/json/male-avatar.json";
import arrows from "@/anims/json/arrows.json";
import femaleAvatar from "@/anims/json/female-avatar.json";

export default function LoversCollation() {
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

  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-[30px] lg:flex-row">
      <FlexBox flow="flex flex-col" items="items-center">
        <Lottie
          animationData={maleAvatar}
          className="min-h-[220px] max-w-[400px]"
        />
        <Form name="male" state={maleFormState} setState={setMaleFormState} />
      </FlexBox>
      <Lottie
        animationData={arrows}
        className="mr-[50px] hidden size-[125px] translate-y-[-80%] rounded-full bg-white lg:block"
      />
      <FlexBox
        flow="flex flex-col"
        items="items-center"
        style={{ position: "relative" }}
      >
        <Lottie
          animationData={femaleAvatar}
          className="min-h-[290px] max-w-[320px]"
        />
        <Form
          name="female"
          state={femaleFormState}
          setState={setFemaleFormState}
        />
        <Button
          content="Start Matching"
          classes="text-white bg-primary hover:bg-primary-hover focus-visible:bg-primary-hover top-[115%] left-[50%] lg:top-[75%] lg:left-[-43%]"
          style={{
            width: "max-content",
            position: "absolute",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Button
          content="Clear All"
          classes="text-[var(--cl-accent)] bg-white hover:bg-gray-100 focus-visible:bg-gray-100 top-[126%] left-[50%] lg:top-[86%] lg:left-[-43%]"
          style={{
            width: "max-content",
            position: "absolute",
            transform: "translate(-50%, -50%)",
          }}
          onClick={resetState}
        />
      </FlexBox>
    </div>
  );
}
