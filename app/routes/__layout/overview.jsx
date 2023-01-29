import { useContext } from "react";
import BalanceCards from "~/components/balance-cards/balance-cards";
import RecentTransactionsList from "~/components/transactions/recent-transactions-list";
import { Account } from "~/root";
import { calculateAccountBalance } from "~/utils/account-balance";

export default function Overview() {
  const [storedData] = useContext(Account);
  const { incomes, expenses } = storedData.transactions;
  const allTransactions = [...incomes, ...expenses];
  const [balance, income, expense] = calculateAccountBalance(
    storedData.transactions
  );
  const accountBalance = {
    balance: { title: "balance", amount: balance },
    income: { title: "income", amount: income },
    expense: { title: "expense", amount: expense },
  };

  return (
    <main className="overview-main-content">
      <BalanceCards accountBalance={accountBalance} />

      <RecentTransactionsList recentTransactions={allTransactions} />
    </main>
  );
}
