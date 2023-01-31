export const noteValidation = [
  (value) => (value && value.length > 0) || "note is required.",
  (value) =>
    (value && value.length <= 350) || "note must be under 350 characters.",
];

export const categoryValidation = [
  (value) => (value && value.length > 0) || "category is required.",
  (value) =>
    (
      value && [
        "SALARY",
        "LOAN",
        "GIFT",
        "TECH",
        "FOOD",
        "BILLS",
        "SPORTS",
        "HEALTH",
        "CLOTHS",
      ]
    ).includes(value) || "category is not valid.",
];

export const amountValidation = [
  (value) => (value && value >= 1) || "amount must be at least 1.",
];

export const typeValidation = [
  (value) => (value && value.length > 0) || "type is required.",
  (value) =>
    (value && ["INCOME", "EXPENSE"]).includes(value) || "type is not valid.",
];
