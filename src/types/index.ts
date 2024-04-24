import { SortBy } from "@/enums";

export type ZodiacSign =
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius"
  | "Capricorn"
  | "Aquarius"
  | "Pisces";

export interface FormState {
  name: string;
  birthday: string;
  age: number | null;
  zodiacSign: "" | ZodiacSign;
}

export interface FiltersState {
  searchName: string;
  sortBy: "" | SortBy;
}

export interface Result {
  id: string;
  names: {
    male: string;
    female: string;
  };
  similarity: number;
  description: string;
  date: string;
}
