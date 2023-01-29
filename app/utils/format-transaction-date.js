export const formatTransactionDate = (createdAt) => {
  const transactionDate = new Date(createdAt),
    transactionDateFormatted = transactionDate.toLocaleDateString("en-GB"),
    today = new Date(),
    yesterday = new Date(today),
    currentDay = today.getDate(),
    currentMonth = today.getMonth() + 1,
    currentYear = today.getFullYear(),
    [transactionDay, transactionMonth, transactionYear] = transactionDate
      .toLocaleDateString("en-gb")
      .split("/");

  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayDay = yesterday.getDate();

  if (+transactionYear === currentYear && +transactionMonth === currentMonth) {
    if (+transactionDay === currentDay) {
      return "today";
    } else if (+transactionDay === yesterdayDay) {
      return "yesterday";
    }
  }
  return transactionDateFormatted;
};
