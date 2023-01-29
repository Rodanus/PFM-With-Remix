export const mockedTransactions = [
  {
    id: "123456789",
    note: "HyperCloud II Headset",
    category: "TECH",
    createdAt: "Wed Jan 25 2023 04:25:02 GMT+0300 (Arabian Standard Time)",
    type: "EXPENSE",
    amount: 75,
    currency: "USD",
  },
  {
    id: "987546321",
    note: "Salary after promotion",
    category: "SALARY",
    createdAt: "Wed Jan 25 2023 04:25:02 GMT+0300 (Arabian Standard Time)",
    type: "INCOME",
    amount: 2_000,
    currency: "USD",
  },
  {
    id: "987546321",
    note: "Borrowed from Muhammad",
    category: "SALARY",
    createdAt: "Wed Jan 25 2023 04:25:02 GMT+0300 (Arabian Standard Time)",
    type: "INCOME",
    amount: 100,
    currency: "USD",
  },
];

export const accountData = {
  transactions: {
    incomes: [
      {
        id: "987546321",
        note: "Salary after promotion",
        category: "SALARY",
        createdAt: "Wed Jan 25 2023 04:25:02 GMT+0300 (Arabian Standard Time)",
        type: "INCOME",
        amount: 2_000,
        currency: "USD",
      },
      {
        id: "21354512",
        note: "Borrowed from Muhammad",
        category: "SALARY",
        createdAt: "Wed Jan 25 2023 04:25:02 GMT+0300 (Arabian Standard Time)",
        type: "INCOME",
        amount: 100,
        currency: "USD",
      },
      {
        id: "234123421",
        note: "Borrowed from Muhammad",
        category: "SALARY",
        createdAt: "Wed Jan 25 2022 04:25:02 GMT+0300 (Arabian Standard Time)",
        type: "INCOME",
        amount: 1000,
        currency: "USD",
      },
    ],
    expenses: [
      {
        id: "123456789",
        note: "HyperCloud II Headset",
        category: "TECH",
        createdAt: "Wed Jan 25 2023 04:25:02 GMT+0300 (Arabian Standard Time)",
        type: "EXPENSE",
        amount: 75,
        currency: "USD",
      },
    ],
  },
};
