export const validateInput = (value, validationArray) => {
  for (let validationRule of validationArray) {
    const validationResult = validationRule(value);

    if (typeof validationResult === "string") {
      return validationResult;
    }
  }

  return null;
};
