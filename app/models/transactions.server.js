import prisma from "~/utils/db.server";

export const getAllTransactions = () => {
  return prisma.transaction.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

// https://www.prisma.io/docs/concepts/components/prisma-client/aggregation-grouping-summarizing#aggregate
export const getIncomesSum = () => {
  return prisma.transaction.aggregate({
    where: {
      type: "INCOME",
    },
    _sum: {
      amount: true,
    },
  });
};

export const getExpensesSum = () => {
  return prisma.transaction.aggregate({
    where: {
      type: "EXPENSE",
    },
    _sum: {
      amount: true,
    },
  });
};

export const getCurrentMonthIncomes = () => {
  const currentDate = new Date();
  const startDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth()
  ).toISOString();
  const endDate = new Date().toISOString();

  return prisma.transaction.aggregate({
    where: {
      type: "INCOME",
      createdAt: {
        gt: startDate,
        lte: endDate,
      },
    },
    _sum: {
      amount: true,
    },
  });
};

export const getCurrentMonthExpenses = () => {
  const currentDate = new Date();
  const startDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth()
  ).toISOString();
  const endDate = new Date().toISOString();

  return prisma.transaction.aggregate({
    where: {
      type: "EXPENSE",
      createdAt: {
        gt: startDate,
        lte: endDate,
      },
    },
    _sum: {
      amount: true,
    },
  });
};
