const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

function getTransactions() {
  return [
    {
      note: "HyperCloud II Headset",
      category: "TECH",
      type: "INCOME",
      amount: 100,
      currency: "USD",
      createdAt: new Date("2022-12-01T13:19:54.000Z").toISOString(),
    },
    {
      note: "HyperCloud II Headset",
      category: "TECH",
      type: "EXPENSE",
      amount: 75,
      currency: "USD",
      createdAt: new Date("2022-12-01T13:19:54.000Z").toISOString(),
    },
    // {
    //   note: "HyperCloud II Headset",
    //   category: "TECH",
    //   type: "EXPENSE",
    //   amount: 75,
    //   currency: "USD",
    // },
    // {
    //   note: "HyperCloud II Headset",
    //   category: "TECH",
    //   type: "EXPENSE",
    //   amount: 75,
    //   currency: "USD",
    // },
    {
      note: "Salary after promotion",
      category: "SALARY",
      type: "INCOME",
      amount: 2_000,
      currency: "USD",
    },
    {
      note: "Borrowed from Muhammad",
      category: "SALARY",
      type: "INCOME",
      amount: 100,
      currency: "USD",
    },
    {
      note: "HyperCloud II Headset",
      category: "TECH",
      type: "EXPENSE",
      amount: 75,
      currency: "USD",
      createdAt: new Date("2022-12-31").toISOString(),
    },
  ];
}

async function seed() {
  await Promise.all(
    getTransactions().map((transaction) =>
      db.transaction.create({ data: transaction })
    )
  );
}

seed();
