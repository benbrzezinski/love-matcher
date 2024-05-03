import Image from "next/image";

interface ProgressBarProps {
  INTERVAL_DELAY: 50;
  similarity: number;
  similarityStartedUpdating: boolean;
}

export default function ProgressBar({
  INTERVAL_DELAY,
  similarity,
  similarityStartedUpdating,
}: ProgressBarProps) {
  return (
    <div className="relative h-[30px] w-full max-w-[1000px] rounded-primary border border-white bg-linear-progress-bar">
      <div
        className="absolute right-0 h-full rounded-[4px] bg-white transition-[width] ease-linear"
        style={{
          width: similarityStartedUpdating ? `${100 - similarity}%` : "100%",
          transitionDuration: `${INTERVAL_DELAY * similarity}ms`,
        }}
      ></div>
      <div
        className="absolute top-[50%] min-w-[80px] translate-x-[-50%] translate-y-[-50%] transition-[left] ease-linear"
        style={{
          left: similarityStartedUpdating ? `${similarity}%` : "0%",
          transitionDuration: `${INTERVAL_DELAY * similarity}ms`,
        }}
      >
        <Image
          src="/svgs/progress-bar-heart.svg"
          width={80}
          height={80}
          alt="progress bar heart with result"
          loading="eager"
          priority
        />
      </div>
    </div>
  );
}
