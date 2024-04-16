const compareName = (maleName: string, femaleName: string) => {
  const filteredMaleName = maleName.toLocaleLowerCase().replace(/\s+/g, "");
  const filteredFemaleName = femaleName.toLocaleLowerCase().replace(/\s+/g, "");

  if (!filteredMaleName || !filteredFemaleName) return 0;

  const sharedChars = filteredMaleName.split("").reduce((acc, char) => {
    if (filteredFemaleName.includes(char) && !acc.includes(char)) {
      acc.push(char);
    }

    return acc;
  }, [] as string[]);

  const sharedPartOfMaleName = filteredMaleName
    .split("")
    .reduce((acc, char) => {
      if (sharedChars.includes(char)) {
        acc++;
      }

      return acc;
    }, 0);

  const sharedPartOfFemaleName = filteredFemaleName
    .split("")
    .reduce((acc, char) => {
      if (sharedChars.includes(char)) {
        acc++;
      }

      return acc;
    }, 0);

  const maleNamePercentage = Math.round(
    (sharedPartOfMaleName / filteredMaleName.length) * 100,
  );
  const femaleNamePercentage = Math.round(
    (sharedPartOfFemaleName / filteredFemaleName.length) * 100,
  );

  return Math.round((maleNamePercentage + femaleNamePercentage) / 2);
};

export default compareName;
