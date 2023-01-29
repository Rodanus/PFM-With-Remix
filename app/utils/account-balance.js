export const calculateAccountBalance = (transactions) => {
  const { incomes, expenses } = transactions;

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  let balance = 0,
    incomesOfThisMonth = 0,
    expensesOfThisMonth = 0;

  incomes.forEach((income) => {
    const [, month, year] = new Date(income.createdAt)
      .toLocaleDateString("en-gb")
      .split("/");
    balance += income.amount;

    if (currentMonth === +month && currentYear == year) {
      incomesOfThisMonth += income.amount;
    }
  });

  expenses.forEach((expense) => {
    const [, month, year] = new Date(expense.createdAt)
      .toLocaleDateString("en-gb")
      .split("/");

    if (balance - expense.amount >= 0) {
      balance -= expense.amount;
    }

    if (currentMonth === +month && currentYear == year) {
      expensesOfThisMonth += expense.amount;
    }
  });

  return [balance, incomesOfThisMonth, expensesOfThisMonth];
};
