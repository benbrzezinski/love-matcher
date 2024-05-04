"use client";

import { Dispatch, SetStateAction, useState, useEffect } from "react";
import Image from "next/image";
import { FiltersState } from "@/types";
import { SortBy } from "@/enums";
import FlexBox from "@/views/FlexBox";

interface FiltersProps {
  filters: FiltersState;
  setFilters: Dispatch<SetStateAction<FiltersState>>;
}

export default function Filters({ filters, setFilters }: FiltersProps) {
  const TIMEOUT_DELAY = 1000;
  const [searchName, setSearchName] = useState(filters.searchName);

  const styles = {
    label: "pl-[5px]",
    input:
      "min-h-[36px] w-[240px] rounded-primary px-[12px] py-[6px] text-accent transition-shadow duration-primary hover:shadow-[0_0_4px_white] focus-visible:shadow-[0_0_4px_white]",
  };

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setFilters(f => ({ ...f, searchName }));
    }, TIMEOUT_DELAY);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [searchName, setFilters]);

  return (
    <FlexBox
      wrap="flex-wrap"
      gap="gap-[15px]"
      style={{ paddingLeft: 10, marginBottom: 10 }}
    >
      <input
        type="text"
        name="search-name"
        id="search-name"
        className={styles.input}
        placeholder="Search by name"
        autoComplete="off"
        value={searchName}
        onChange={e => {
          const value = e.target.value;

          if (/^[\p{L}\s]+$/u.test(value)) {
            setSearchName(value);
            return;
          }

          if (!value) setSearchName("");
        }}
      />
      <div className="relative">
        <select
          name="sort-by"
          id="sort-by"
          className={styles.input}
          value={filters.sortBy}
          onChange={e => {
            setFilters(f => ({
              ...f,
              sortBy: e.target.value as SortBy,
            }));
          }}
        >
          <option value="" disabled>
            Sort by
          </option>
          <option value={SortBy.ResultAsc}>Result &uarr; - ascending</option>
          <option value={SortBy.ResultDesc}>Result &darr; - descending</option>
          <option value={SortBy.DateAsc}>Date &uarr; - ascending</option>
          <option value={SortBy.DateDesc}>Date &darr; - descending</option>
        </select>
        <Image
          src="/svgs/arrow-up-down.svg"
          width={20}
          height={20}
          alt="arrow up and down"
          loading="lazy"
          className="pointer-events-none absolute right-[12px] top-[50%] translate-y-[-50%] cursor-pointer"
        />
      </div>
    </FlexBox>
  );
}
