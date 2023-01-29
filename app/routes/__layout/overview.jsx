import { Link, useLoaderData } from "@remix-run/react";
import BalanceCards from "~/components/balance-cards/balance-cards";
import RecentTransactionsList from "~/components/transactions/recent-transactions-list";
import {
  getExpensesSum,
  getIncomesSum,
  getCurrentMonthIncomes,
  getCurrentMonthExpenses,
  getRecentTransactions,
} from "~/models/transactions.server";
import { recentTransactionsTimeline } from "~/utils/recent-transactions-timeline";

export const loader = async () => {
  const currentMonthIncomes = await getCurrentMonthIncomes(),
    currentMonthExpenses = await getCurrentMonthExpenses(),
    incomeAmount = await getIncomesSum(),
    expenseAmount = await getExpensesSum(),
    balance = incomeAmount._sum.amount - expenseAmount._sum.amount;

  const getRecentTransactionsTimeline = recentTransactionsTimeline(),
    recentTransactionsSection = { results: [], title: "" };

  for (let transactionTimeline of getRecentTransactionsTimeline) {
    const recentTransactions = await getRecentTransactions(
      transactionTimeline.filter
    );

    if (recentTransactions.length > 0) {
      recentTransactionsSection.title = transactionTimeline.title;
      recentTransactionsSection.results = recentTransactions;
      break;
    }
  }

  if (recentTransactionsSection.results.length === 0) {
    recentTransactionsSection.title = "no recent activity...";
  }

  const data = {
    recentTransactionsSection,
    balance,
    currentMonthIncomes: currentMonthIncomes._sum.amount,
    currentMonthExpenses: currentMonthExpenses._sum.amount,
    incomeAmount,
    expenseAmount,
  };

  return data;
};

export default function Overview() {
  const {
    recentTransactionsSection,
    currentMonthIncomes,
    currentMonthExpenses,
    balance,
  } = useLoaderData();

  const { results: recentTransactionsResults, title } =
    recentTransactionsSection;

  const accountBalance = {
    balance: { title: "balance", amount: balance },
    income: { title: "income", amount: currentMonthIncomes },
    expense: { title: "expense", amount: currentMonthExpenses },
  };

  return (
    <main className="overview-main-content">
      <BalanceCards accountBalance={accountBalance} />

      <h2 className="recent-activity-title capitalize">{title}</h2>
      {recentTransactionsResults.length > 0 ? (
        <RecentTransactionsList
          recentTransactions={recentTransactionsResults}
        />
      ) : (
        <Link
          to="/transaction-history"
          prefetch="intent"
          className="check-transaction-history-cta capitalize"
        >
          check transaction history instead?
        </Link>
      )}
    </main>
  );
}
