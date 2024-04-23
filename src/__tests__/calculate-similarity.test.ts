import { describe, expect, it } from "vitest";
import calculateSimilarity from "@/utils/calculate-similarity";

describe("#calculateSimilarity", () => {
  it("returns 0", () => {
    expect(
      calculateSimilarity({
        male: { name: "", age: 0, zodiacSign: "Gemini" },
        female: { name: "anita", age: 10, zodiacSign: "Taurus" },
      }),
    ).toBe(0);
  });

  it("returns 53", () => {
    expect(
      calculateSimilarity({
        male: { name: "olek", age: 15, zodiacSign: "Cancer" },
        female: { name: "ola", age: 30, zodiacSign: "Virgo" },
      }),
    ).toBe(53);
  });

  it("returns 100", () => {
    expect(
      calculateSimilarity({
        male: { name: "Anita", age: 10, zodiacSign: "Gemini" },
        female: { name: "anita", age: 10, zodiacSign: "Pisces" },
      }),
    ).toBe(100);
  });
});
