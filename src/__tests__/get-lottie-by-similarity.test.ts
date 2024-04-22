import { describe, expect, it } from "vitest";
import getLottieBySimilarity from "@/utils/get-lottie-by-similarity";
import poor from "@/lotties/poor.json";
import veryLow from "@/lotties/very-low.json";
import low from "@/lotties/low.json";
import moderate from "@/lotties/moderate.json";
import high from "@/lotties/high.json";
import veryHigh from "@/lotties/very-high.json";
import perfect from "@/lotties/perfect.json";

describe("#getLottieBySimilarity", () => {
  it("returns null", () => {
    expect(getLottieBySimilarity(120)).toBe(null);
  });

  it("returns poor.json", () => {
    expect(getLottieBySimilarity(0)).toBe(poor);
  });

  it("returns very-low.json", () => {
    expect(getLottieBySimilarity(7)).toBe(veryLow);
  });

  it("returns low.json", () => {
    expect(getLottieBySimilarity(30)).toBe(low);
  });

  it("returns moderate.json", () => {
    expect(getLottieBySimilarity(46)).toBe(moderate);
  });

  it("returns high.json", () => {
    expect(getLottieBySimilarity(67)).toBe(high);
  });

  it("returns very-high.json", () => {
    expect(getLottieBySimilarity(94)).toBe(veryHigh);
  });

  it("returns perfect.json", () => {
    expect(getLottieBySimilarity(100)).toBe(perfect);
  });
});
