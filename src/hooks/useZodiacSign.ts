import { ZodiacSign } from "@/types";

export default function useZodiacSign() {
  const zodiacSigns: ZodiacSign[] = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  const getZodiacName = (value: string): "" | ZodiacSign => {
    const date = new Date(value);
    const month = date.getMonth();
    const day = date.getDate();

    switch (month) {
      case 0:
        return day < 20 ? "Capricorn" : "Aquarius";

      case 1:
        return day < 19 ? "Aquarius" : "Pisces";

      case 2:
        return day < 21 ? "Pisces" : "Aries";

      case 3:
        return day < 20 ? "Aries" : "Taurus";

      case 4:
        return day < 21 ? "Taurus" : "Gemini";

      case 5:
        return day < 21 ? "Gemini" : "Cancer";

      case 6:
        return day < 23 ? "Cancer" : "Leo";

      case 7:
        return day < 23 ? "Leo" : "Virgo";

      case 8:
        return day < 23 ? "Virgo" : "Libra";

      case 9:
        return day < 23 ? "Libra" : "Scorpio";

      case 10:
        return day < 22 ? "Scorpio" : "Sagittarius";

      case 11:
        return day < 22 ? "Sagittarius" : "Capricorn";

      default:
        return "";
    }
  };

  return { zodiacSigns, getZodiacName };
}
