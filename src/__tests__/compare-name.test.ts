import { describe, expect, it } from "vitest";
import compareName from "@/utils/compare-name";

describe("#compareName", () => {
  it("returns 0", () => {
    expect(compareName("", "")).toBe(0);
  });

  it("also returns 0", () => {
    expect(compareName("paul", "ben")).toBe(0);
  });

  it("returns 42", () => {
    expect(compareName("ania", "ola")).toBe(42);
  });

  it("returns 100", () => {
    expect(compareName("ben", "BEN")).toBe(100);
  });
});
