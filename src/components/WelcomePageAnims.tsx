"use client";

import Lottie from "lottie-react";
import type { Dispatch, SetStateAction } from "react";
import profile from "@/lotties/profile.json";
import ballon from "@/lotties/ballon.json";

interface WelcomePageAnimsProps {
  setLottieLoading: Dispatch<
    SetStateAction<{ profile: boolean; ballon: boolean }>
  >;
}

export default function WelcomePageAnims({
  setLottieLoading,
}: WelcomePageAnimsProps) {
  return (
    <>
      <Lottie
        animationData={profile}
        className="hidden max-w-[480px] xl:absolute xl:bottom-[100px] xl:left-[10px] xl:block"
        onDOMLoaded={() => setLottieLoading(l => ({ ...l, profile: false }))}
      />
      <Lottie
        animationData={ballon}
        className="static max-w-[480px] xl:absolute xl:bottom-[30px] xl:right-[10px] xl:block"
        onDOMLoaded={() => setLottieLoading(l => ({ ...l, ballon: false }))}
      />
    </>
  );
}
