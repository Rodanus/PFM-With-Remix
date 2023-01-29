// https://stackoverflow.com/a/60988355/12993793

export const formatMoneyAmount = (amount) => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  return formatter.format(amount);
};
