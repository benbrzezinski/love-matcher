import descriptionMessages from "@/data/description-messages";

const getDescriptionBySimilarity = (similarity: number) => {
  if (similarity === 0) {
    return descriptionMessages.poor;
  }

  if (similarity > 0 && similarity <= 20) {
    return descriptionMessages.veryLow;
  }

  if (similarity > 20 && similarity <= 40) {
    return descriptionMessages.low;
  }

  if (similarity > 40 && similarity <= 60) {
    return descriptionMessages.moderate;
  }

  if (similarity > 60 && similarity <= 80) {
    return descriptionMessages.high;
  }

  if (similarity > 80 && similarity <= 99) {
    return descriptionMessages.veryHigh;
  }

  if (similarity === 100) {
    return descriptionMessages.perfect;
  }

  return "";
};

export default getDescriptionBySimilarity;
