"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Lottie from "lottie-react";
import FlexBox from "@/views/FlexBox";
import AccentText from "@/components/AccentText";
import Button from "@/components/Button";
import profile from "@/anims/json/profile.json";
import ballon from "@/anims/json/ballon.json";

export default function WelcomePage() {
  const router = useRouter();
  const styles = {
    heading: "text-biggest font-black",
  };

  return (
    <FlexBox flow="flex flex-col" items="items-center" gap="gap-[20px]">
      <FlexBox flow="flex flex-col" items="items-center">
        <Image
          src="/svgs/chat-heart.svg"
          alt="chat heart"
          width={50}
          height={50}
          loading="lazy"
        />
        <h1 className="flex gap-[10px] text-bigger font-medium">
          <AccentText plain="Lo" accent="ve" />
          <AccentText plain="Mat" accent="cher" />
        </h1>
        <p className={styles.heading}>Effective.</p>
        <p className={styles.heading}>Impressive.</p>
        <p className={styles.heading}>Personalized.</p>
        <p className="w-[290px] text-center text-small font-medium">
          Welcome to Love Matcher, your ultimate companion in finding true love
          and lasting connections.
        </p>
        <div className="mt-5">
          <Button content="Let's start" onClick={() => router.push("/home")} />
        </div>
      </FlexBox>
      <Lottie
        animationData={profile}
        className="hidden max-w-[480px] xl:absolute xl:bottom-[100px] xl:left-[10px] xl:block"
      />
      <Lottie
        animationData={ballon}
        className="static max-w-[480px] xl:absolute xl:bottom-[30px] xl:right-[10px] xl:block"
      />
    </FlexBox>
  );
}
