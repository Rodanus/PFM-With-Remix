import { useContext } from "react";
import BalanceCards from "~/components/balance-cards/balance-cards";
import RecentTransactionsList from "~/components/transactions/recent-transactions-list";
import { accountBalance } from "~/data/account-balance";
import { Account } from "~/root";

export default function Overview() {
  const [storedData, setStoredData] = useContext(Account);
  const { transactions } = storedData;

  return (
    <main className="overview-main-content">
      <BalanceCards accountBalance={accountBalance} />

      <RecentTransactionsList recentTransactions={transactions} />
    </main>
  );
}
