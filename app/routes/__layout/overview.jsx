import { useLoaderData } from "@remix-run/react";
import BalanceCards from "~/components/balance-cards/balance-cards";
import RecentTransactionsList from "~/components/transactions/recent-transactions-list";
import {
  getExpensesSum,
  getIncomesSum,
  getAllTransactions,
  getCurrentMonthIncomes,
  getCurrentMonthExpenses,
} from "~/models/transactions.server";

export const loader = async () => {
  const transactions = await getAllTransactions(),
    currentMonthIncomes = await getCurrentMonthIncomes(),
    currentMonthExpenses = await getCurrentMonthExpenses(),
    incomeAmount = await getIncomesSum(),
    expenseAmount = await getExpensesSum(),
    balance = incomeAmount._sum.amount - expenseAmount._sum.amount;

  const data = {
    transactions,
    balance,
    currentMonthIncomes: currentMonthIncomes._sum.amount,
    currentMonthExpenses: currentMonthExpenses._sum.amount,
    incomeAmount,
    expenseAmount,
  };

  return data;
};

export default function Overview() {
  const { transactions, currentMonthIncomes, currentMonthExpenses, balance } =
    useLoaderData();

  const accountBalance = {
    balance: { title: "balance", amount: balance },
    income: { title: "income", amount: currentMonthIncomes },
    expense: { title: "expense", amount: currentMonthExpenses },
  };

  return (
    <main className="overview-main-content">
      <BalanceCards accountBalance={accountBalance} />

      <RecentTransactionsList recentTransactions={transactions} />
    </main>
  );
}
