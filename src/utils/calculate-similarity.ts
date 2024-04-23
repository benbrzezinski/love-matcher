import { ZodiacSign } from "@/types";
import compareName from "./compare-name";
import compareAge from "./compare-age";
import compareZodiacSign from "./compare-zodiac-sign";

interface Data {
  male: {
    name: string;
    age: number;
    zodiacSign: ZodiacSign;
  };
  female: {
    name: string;
    age: number;
    zodiacSign: ZodiacSign;
  };
}

const calculateSimilarity = (data: Data) => {
  const { male, female } = data;

  const nameSimilarity = compareName(male.name, female.name);
  const ageSimilarity = compareAge(male.age, female.age);
  const zodiacSignSimilarity = compareZodiacSign(
    male.zodiacSign,
    female.zodiacSign,
  );

  const averageOfTotalSimilarity = Math.round(
    (nameSimilarity + ageSimilarity + zodiacSignSimilarity) / 3,
  );

  return averageOfTotalSimilarity;
};

export default calculateSimilarity;
