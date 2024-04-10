"use client";
import Lottie from "lottie-react";
import loader from "../anims/json/loader.json";

export default function Loading() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <Lottie
        animationData={loader}
        className="size-[200px] rounded-full shadow-[0_20px_50px_#5a213e]"
      />
    </div>
  );
}
