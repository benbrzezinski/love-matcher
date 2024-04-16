import { describe, expect, it } from "vitest";
import compareZodiacSign from "@/utils/compare-zodiac-sign";

describe("#compareZodiacSign", () => {
  it("returns 0", () => {
    expect(compareZodiacSign("Gemini", "Taurus")).toBe(0);
  });

  it("returns 50", () => {
    expect(compareZodiacSign("Leo", "Capricorn")).toBe(50);
  });

  it("returns 100", () => {
    expect(compareZodiacSign("Scorpio", "Libra")).toBe(100);
  });
});
