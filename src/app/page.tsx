"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Lottie from "lottie-react";
import Button from "@/components/Button";
import profile from "../anims/json/profile.json";
import ballon from "../anims/json/ballon.json";

export default function WelcomePage() {
  const router = useRouter();
  const styles = {
    heading: "text-[40px] font-black",
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col items-center">
        <Image
          src="/svgs/chat-heart.svg"
          alt="chat heart"
          width={50}
          height={50}
          loading="lazy"
        />
        <h1 className="text-[30px] font-medium">
          Lo
          <span className="text-accent">ve </span>
          Mat
          <span className="text-accent">cher</span>
        </h1>
        <p className={styles.heading}>Effective.</p>
        <p className={styles.heading}>Impressive.</p>
        <p className={styles.heading}>Personalized.</p>
        <p className="w-[290px] text-center text-[14px] font-medium">
          Welcome to Love Matcher, your ultimate companion in finding true love
          and lasting connections.
        </p>
        <div className="mt-5">
          <Button text="Let's start" onClick={() => router.push("home")} />
        </div>
      </div>
      <Lottie
        animationData={profile}
        className="hidden max-w-[480px] xl:absolute xl:bottom-[100px] xl:left-[10px] xl:block"
      />
      <Lottie
        animationData={ballon}
        className="static max-w-[480px] xl:absolute xl:bottom-[30px] xl:right-[10px] xl:block"
      />
    </div>
  );
}
