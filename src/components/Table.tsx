"use client";

import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import Image from "next/image";
import FlexBox from "@/views/FlexBox";
import AccentText from "./AccentText";
import Button from "./Button";
import useResultsStore from "@/store";
import emptyHistory from "@/lotties/empty-history.json";

export default function Table() {
  const { results, removeResult } = useResultsStore();
  const router = useRouter();

  const styles = {
    tableVisible:
      results.length > 0
        ? " max-h-[500px] shadow-[0_3px_10px_var(--bg-primary)]"
        : "",
    padding: "px-6 py-3",
  };

  return (
    <FlexBox flow="flex flex-col" gap="gap-[10px]">
      <h2 className="pl-[10px] text-biggest font-black">History</h2>
      <div className={`overflow-y-auto rounded-primary${styles.tableVisible}`}>
        {results.length > 0 ? (
          <table className="w-full whitespace-nowrap text-center text-small">
            <thead className="bg-secondary font-black uppercase">
              <tr>
                <th className={styles.padding}>
                  <AccentText plain="Lov" accent="ers" />
                </th>
                <th className={styles.padding}>
                  <AccentText plain="Res" accent="ult" />
                </th>
                <th className={styles.padding}>
                  <AccentText plain="Da" accent="te" />
                </th>
                <th className={styles.padding}>
                  <AccentText plain="Act" accent="ion" />
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map(({ id, names, similarity, date }) => (
                <tr
                  className="odd:bg-secondary-accent-lighter even:bg-secondary-accent-darker"
                  key={id}
                >
                  <td className={styles.padding}>
                    <p>{names.male}</p>
                    <p>{names.female}</p>
                  </td>
                  <td className={styles.padding}>{`${similarity}%`}</td>
                  <td className={styles.padding}>{date}</td>
                  <td className={styles.padding}>
                    <FlexBox
                      justify="justify-center"
                      wrap="flex-wrap"
                      gap="gap-[15px]"
                    >
                      <Button
                        title="See details"
                        style={{ padding: 3 }}
                        onClick={() =>
                          router.push(`/home/results/${id}`, { scroll: false })
                        }
                      >
                        <Image
                          src="/svgs/arrow-square-right.svg"
                          width={30}
                          height={30}
                          alt="arrow right in square"
                          loading="lazy"
                        />
                      </Button>
                      <Button
                        title="Remove test"
                        style={{ padding: 3 }}
                        onClick={() => removeResult(id)}
                      >
                        <Image
                          src="/svgs/trashcan.svg"
                          width={30}
                          height={30}
                          alt="bin"
                          loading="lazy"
                        />
                      </Button>
                    </FlexBox>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="grid w-full place-items-center bg-gradient-to-b from-[var(--bg-secondary-accent-lighter)] px-3 pt-10 text-center text-big font-bold">
            <p>Empty love history!</p>
            <p className="text-base">
              Begin your journey to find your soulmate and start creating
              memories.
            </p>
            <Lottie
              animationData={emptyHistory}
              className="max-h-[300px] max-w-[300px]"
            />
          </div>
        )}
      </div>
    </FlexBox>
  );
}
