"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import FlexBox from "@/views/FlexBox";
import AccentText from "@/components/AccentText";
import Button from "@/components/Button";
import Loader from "@/components/Loader";

const WelcomePageAnims = dynamic(
  () => import("@/components/WelcomePageAnims"),
  {
    ssr: false,
  },
);

export default function WelcomePage() {
  const [lottieLoading, setLottieLoading] = useState({
    profile: true,
    ballon: true,
  });

  const router = useRouter();

  return (
    <>
      <FlexBox flow="flex flex-col" items="items-center" gap="gap-[20px]">
        <FlexBox flow="flex flex-col" items="items-center">
          <Image
            src="/svgs/chat-heart.svg"
            alt="chat icon with heart"
            width={50}
            height={50}
            priority
          />
          <h1 className="flex gap-[10px] text-bigger font-medium">
            <AccentText plain="Lo" accent="ve" />
            <AccentText plain="Mat" accent="cher" />
          </h1>
          <p className="text-biggest font-black">Effective.</p>
          <p className="text-biggest font-black">Impressive.</p>
          <p className="text-biggest font-black">Personalized.</p>
          <p className="w-[290px] text-center text-small font-medium">
            Welcome to Love Matcher, your ultimate companion in finding true
            love and lasting connections.
          </p>
          <div className="mt-5">
            <Button content="Let's play" onClick={() => router.push("/home")} />
          </div>
        </FlexBox>
        <WelcomePageAnims setLottieLoading={setLottieLoading} />
      </FlexBox>
      <Loader visible={lottieLoading.profile || lottieLoading.ballon} />
    </>
  );
}
