import { describe, expect, it } from "vitest";
import compareAge from "@/utils/compare-age";

describe("#compareAge", () => {
  it("returns 0", () => {
    expect(compareAge(0, 20)).toBe(0);
  });

  it("returns 95", () => {
    expect(compareAge(19, 20)).toBe(95);
  });

  it("returns 100", () => {
    expect(compareAge(36, 36)).toBe(100);
  });
});
