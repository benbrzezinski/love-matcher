import poor from "@/lotties/poor.json";
import veryLow from "@/lotties/very-low.json";
import low from "@/lotties/low.json";
import moderate from "@/lotties/moderate.json";
import high from "@/lotties/high.json";
import veryHigh from "@/lotties/very-high.json";
import perfect from "@/lotties/perfect.json";

const getLottieBySimilarity = (similarity: number) => {
  if (similarity === 0) {
    return poor;
  }

  if (similarity > 0 && similarity <= 20) {
    return veryLow;
  }

  if (similarity > 20 && similarity <= 40) {
    return low;
  }

  if (similarity > 40 && similarity <= 60) {
    return moderate;
  }

  if (similarity > 60 && similarity <= 80) {
    return high;
  }

  if (similarity > 80 && similarity <= 99) {
    return veryHigh;
  }

  if (similarity === 100) {
    return perfect;
  }

  return null;
};

export default getLottieBySimilarity;
