import { describe, expect, it } from "vitest";
import calculateSimilarity from "@/utils/calculate-similarity";

describe("#calculateSimilarity", () => {
  it("returns 0", () => {
    expect(
      calculateSimilarity({
        male: { fullName: "", age: 0, zodiacSign: "Gemini" },
        female: { fullName: "anita", age: 10, zodiacSign: "Taurus" },
      }),
    ).toBe(0);
  });

  it("returns 53", () => {
    expect(
      calculateSimilarity({
        male: { fullName: "olek", age: 15, zodiacSign: "Cancer" },
        female: { fullName: "ola", age: 30, zodiacSign: "Virgo" },
      }),
    ).toBe(53);
  });

  it("returns 100", () => {
    expect(
      calculateSimilarity({
        male: { fullName: "Anita", age: 10, zodiacSign: "Gemini" },
        female: { fullName: "anita", age: 10, zodiacSign: "Pisces" },
      }),
    ).toBe(100);
  });
});
