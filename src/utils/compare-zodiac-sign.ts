import { ZodiacSign } from "@/types";
import zodiacSignsCompatibility from "@/data/zodiacSignsCompatibility";

const compareZodiacSign = (
  maleZodiacSign: ZodiacSign,
  femaleZodiacSign: ZodiacSign,
) => {
  const compatibility =
    zodiacSignsCompatibility[maleZodiacSign][femaleZodiacSign];
  return (compatibility / 2) * 100;
};

export default compareZodiacSign;
