"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiltersState } from "@/types";
import { SortBy } from "@/enums";
import FlexBox from "@/views/FlexBox";
import Filters from "./Filters";
import AccentText from "./AccentText";
import Button from "./Button";
import useResultsStore from "@/store";
import emptyHistory from "@/lotties/empty-history.json";

export default function Table() {
  const [filters, setFilters] = useState<FiltersState>({
    searchName: "",
    sortBy: "",
  });
  const { results, removeResult } = useResultsStore();
  const router = useRouter();

  const getFilteredResults = () => {
    const filteredByName = results.filter(
      ({ names }) =>
        names.male.includes(filters.searchName.toLocaleLowerCase().trim()) ||
        names.female.includes(filters.searchName.toLocaleLowerCase().trim()),
    );

    if (filters.sortBy === SortBy.ResultAsc) {
      return filteredByName.sort((a, b) => a.similarity - b.similarity);
    }

    if (filters.sortBy === SortBy.ResultDesc) {
      return filteredByName.sort((a, b) => b.similarity - a.similarity);
    }

    if (filters.sortBy === SortBy.DateAsc) {
      return filteredByName.reverse();
    }

    return filteredByName;
  };

  const filteredResults = getFilteredResults();

  return (
    <FlexBox flow="flex flex-col" gap="gap-[10px]">
      <h2 className="text-biggest font-black">History</h2>
      {results.length > 0 ? (
        <>
          <Filters filters={filters} setFilters={setFilters} />
          {filteredResults.length === 0 && (
            <p className="text-center text-[18px] leading-relaxed">
              No results found
            </p>
          )}
          <div className="max-h-[450px] overflow-y-auto overscroll-none rounded-primary shadow-[0_3px_10px_var(--bg-primary)]">
            <table className="w-full whitespace-nowrap text-center text-small">
              <thead className="bg-secondary font-black uppercase">
                <tr>
                  <th className="px-6 py-3">
                    <AccentText plain="Lov" accent="ers" />
                  </th>
                  <th className="px-6 py-3">
                    <AccentText plain="Res" accent="ult" />
                  </th>
                  <th className="px-6 py-3">
                    <AccentText plain="Da" accent="te" />
                  </th>
                  <th className="px-6 py-3">
                    <AccentText plain="Act" accent="ion" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredResults.map(({ id, names, similarity, date }) => (
                  <tr
                    className="odd:bg-secondary-accent-lighter even:bg-secondary-accent-darker"
                    key={id}
                  >
                    <td className="px-6 py-3 capitalize">
                      <p>{names.male}</p>
                      <p>{names.female}</p>
                    </td>
                    <td className="px-6 py-3">{`${similarity}%`}</td>
                    <td className="px-6 py-3">{date}</td>
                    <td className="px-6 py-3">
                      <FlexBox
                        justify="justify-center"
                        wrap="flex-wrap"
                        gap="gap-[15px]"
                      >
                        <Button
                          title="See details"
                          style={{ padding: 3 }}
                          onClick={() => {
                            router.push(`/home/results/${id}`, {
                              scroll: false,
                            });
                            toast.info("Delving into details...", {
                              toastId: "info_details",
                              autoClose: false,
                            });
                          }}
                        >
                          <Image
                            src="/svgs/arrow-square-right.svg"
                            width={30}
                            height={30}
                            alt="arrow right in square"
                          />
                        </Button>
                        <Button
                          title="Remove result"
                          style={{ padding: 3 }}
                          onClick={() => {
                            removeResult(id);
                            toast.success("Removed from history", {
                              toastId: "success_remove",
                              autoClose: 3000,
                            });
                          }}
                        >
                          <Image
                            src="/svgs/trashcan.svg"
                            width={30}
                            height={30}
                            alt="bin"
                          />
                        </Button>
                      </FlexBox>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="grid w-full place-items-center rounded-t-primary bg-gradient-to-b from-[var(--bg-secondary-accent-lighter)] px-3 pt-10 text-center">
          <p className="text-big font-black leading-relaxed">
            Love&rsquo;s Empty Past!
          </p>
          <p className="font-bold">
            Begin your journey to find your soulmate and start creating
            memories.
          </p>
          <Lottie
            animationData={emptyHistory}
            className="max-h-[300px] max-w-[300px]"
          />
        </div>
      )}
    </FlexBox>
  );
}
