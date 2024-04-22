import { describe, expect, it } from "vitest";
import getDescriptionBySimilarity from "@/utils/get-description-by-similarity";
import descriptionMessages from "@/data/description-messages";

describe("#getDescriptionBySimilarity", () => {
  it("returns empty string", () => {
    expect(getDescriptionBySimilarity(120)).toBe("");
  });

  it("returns poor message", () => {
    expect(getDescriptionBySimilarity(0)).toBe(descriptionMessages.poor);
  });

  it("returns veryLow message", () => {
    expect(getDescriptionBySimilarity(7)).toBe(descriptionMessages.veryLow);
  });

  it("returns low message", () => {
    expect(getDescriptionBySimilarity(30)).toBe(descriptionMessages.low);
  });

  it("returns moderate message", () => {
    expect(getDescriptionBySimilarity(46)).toBe(descriptionMessages.moderate);
  });

  it("returns high message", () => {
    expect(getDescriptionBySimilarity(67)).toBe(descriptionMessages.high);
  });

  it("returns veryHigh message", () => {
    expect(getDescriptionBySimilarity(94)).toBe(descriptionMessages.veryHigh);
  });

  it("returns perfect message", () => {
    expect(getDescriptionBySimilarity(100)).toBe(descriptionMessages.perfect);
  });
});
