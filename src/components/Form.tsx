"use client";

import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import dobToAge from "dob-to-age";
import { FormState, ZodiacSign } from "@/types";
import FlexBox from "@/views/FlexBox";
import useZodiacSign from "@/hooks/useZodiacSign";

interface FormProps {
  name: "male" | "female";
  state: FormState;
  setState: Dispatch<SetStateAction<FormState>>;
}

export default function Form({ name, state, setState }: FormProps) {
  const { zodiacSigns, getZodiacName } = useZodiacSign();

  const styles = {
    label: "pl-[5px]",
    input:
      "min-h-[36px] rounded-primary px-[12px] py-[6px] text-accent transition-shadow duration-primary hover:shadow-[0_0_4px_white] focus-visible:shadow-[0_0_4px_white]",
  };

  return (
    <form name={name} className="flex w-[290px] flex-col gap-[20px]">
      <FlexBox flow="flex flex-col" gap="gap-[5px]">
        <label htmlFor={`${name}-name`} className={styles.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id={`${name}-name`}
          className={styles.input}
          placeholder={name === "male" ? "James" : "Claire"}
          autoComplete="off"
          value={state.name}
          onChange={e => {
            const value = e.target.value;

            if (/^[\p{L}\s]+$/u.test(value)) {
              setState(s => ({ ...s, name: value }));
              return;
            }

            if (!value) setState(s => ({ ...s, name: "" }));
          }}
        />
      </FlexBox>
      <FlexBox
        flow="flex flex-col"
        gap="gap-[5px]"
        style={{ position: "relative" }}
      >
        <label htmlFor={`${name}-birthday`} className={styles.label}>
          Birthday
        </label>
        <input
          type="date"
          name="birthday"
          id={`${name}-birthday`}
          className={styles.input}
          style={{ paddingBlock: 5 }}
          value={state.birthday}
          onChange={e => {
            const value = e.target.value;

            setState(s => ({
              ...s,
              birthday: value,
              age: isNaN(dobToAge(value)) ? null : dobToAge(value),
              zodiacSign: getZodiacName(value),
            }));
          }}
        />
        <Image
          src="/svgs/calendar.svg"
          width={22}
          height={22}
          alt="arrow up and down"
          className="pointer-events-none absolute right-[12px] top-[56%] cursor-pointer"
        />
      </FlexBox>
      <FlexBox
        flow="flex flex-col"
        gap="gap-[5px]"
        style={{ position: "relative" }}
      >
        <label htmlFor={`${name}-zodiac-sign`} className={styles.label}>
          Zodiac Sign
        </label>
        <select
          name="zodiac-sign"
          id={`${name}-zodiac-sign`}
          className={styles.input}
          value={state.zodiacSign}
          onChange={e => {
            setState(s => ({
              ...s,
              zodiacSign: e.target.value as ZodiacSign,
            }));
          }}
        >
          <option value="" disabled>
            Select your zodiac sign
          </option>
          {zodiacSigns.map(z => (
            <option key={z} value={z}>
              {z}
            </option>
          ))}
        </select>
        <Image
          src="/svgs/arrow-up-down.svg"
          width={20}
          height={20}
          alt="arrow up and down"
          className="pointer-events-none absolute right-[12px] top-[57%] cursor-pointer"
        />
      </FlexBox>
    </form>
  );
}
