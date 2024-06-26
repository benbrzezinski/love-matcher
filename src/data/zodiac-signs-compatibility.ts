import { ZodiacSign } from "@/types";

type ZodiacSignsCompatibility = {
  [key in ZodiacSign]: {
    [key in ZodiacSign]: 0 | 1 | 2;
  };
};

const zodiacSignsCompatibility: ZodiacSignsCompatibility = {
  Aries: {
    Aries: 0,
    Taurus: 1,
    Gemini: 0,
    Cancer: 0,
    Leo: 0,
    Virgo: 2,
    Libra: 1,
    Scorpio: 0,
    Sagittarius: 2,
    Capricorn: 0,
    Aquarius: 2,
    Pisces: 1,
  },
  Taurus: {
    Aries: 0,
    Taurus: 0,
    Gemini: 1,
    Cancer: 2,
    Leo: 0,
    Virgo: 0,
    Libra: 0,
    Scorpio: 0,
    Sagittarius: 1,
    Capricorn: 2,
    Aquarius: 2,
    Pisces: 0,
  },
  Gemini: {
    Aries: 0,
    Taurus: 0,
    Gemini: 0,
    Cancer: 1,
    Leo: 0,
    Virgo: 0,
    Libra: 2,
    Scorpio: 1,
    Sagittarius: 2,
    Capricorn: 0,
    Aquarius: 1,
    Pisces: 2,
  },
  Cancer: {
    Aries: 1,
    Taurus: 2,
    Gemini: 0,
    Cancer: 2,
    Leo: 1,
    Virgo: 1,
    Libra: 0,
    Scorpio: 2,
    Sagittarius: 0,
    Capricorn: 0,
    Aquarius: 0,
    Pisces: 0,
  },
  Leo: {
    Aries: 0,
    Taurus: 1,
    Gemini: 0,
    Cancer: 0,
    Leo: 2,
    Virgo: 0,
    Libra: 2,
    Scorpio: 0,
    Sagittarius: 2,
    Capricorn: 1,
    Aquarius: 0,
    Pisces: 1,
  },
  Virgo: {
    Aries: 2,
    Taurus: 0,
    Gemini: 1,
    Cancer: 0,
    Leo: 0,
    Virgo: 2,
    Libra: 1,
    Scorpio: 0,
    Sagittarius: 1,
    Capricorn: 2,
    Aquarius: 0,
    Pisces: 0,
  },
  Libra: {
    Aries: 0,
    Taurus: 0,
    Gemini: 2,
    Cancer: 1,
    Leo: 2,
    Virgo: 1,
    Libra: 0,
    Scorpio: 2,
    Sagittarius: 0,
    Capricorn: 1,
    Aquarius: 0,
    Pisces: 0,
  },
  Scorpio: {
    Aries: 1,
    Taurus: 0,
    Gemini: 0,
    Cancer: 2,
    Leo: 1,
    Virgo: 0,
    Libra: 2,
    Scorpio: 1,
    Sagittarius: 0,
    Capricorn: 0,
    Aquarius: 0,
    Pisces: 2,
  },
  Sagittarius: {
    Aries: 2,
    Taurus: 1,
    Gemini: 2,
    Cancer: 1,
    Leo: 2,
    Virgo: 0,
    Libra: 1,
    Scorpio: 0,
    Sagittarius: 0,
    Capricorn: 0,
    Aquarius: 0,
    Pisces: 0,
  },
  Capricorn: {
    Aries: 1,
    Taurus: 2,
    Gemini: 1,
    Cancer: 0,
    Leo: 1,
    Virgo: 2,
    Libra: 0,
    Scorpio: 1,
    Sagittarius: 1,
    Capricorn: 2,
    Aquarius: 1,
    Pisces: 0,
  },
  Aquarius: {
    Aries: 2,
    Taurus: 2,
    Gemini: 0,
    Cancer: 0,
    Leo: 0,
    Virgo: 1,
    Libra: 0,
    Scorpio: 0,
    Sagittarius: 0,
    Capricorn: 1,
    Aquarius: 2,
    Pisces: 1,
  },
  Pisces: {
    Aries: 0,
    Taurus: 1,
    Gemini: 2,
    Cancer: 0,
    Leo: 0,
    Virgo: 0,
    Libra: 1,
    Scorpio: 2,
    Sagittarius: 0,
    Capricorn: 0,
    Aquarius: 1,
    Pisces: 2,
  },
};

export default zodiacSignsCompatibility;
