import BalanceCards from "~/components/balance-cards/balance-cards";
import RecentTransactionsList from "~/components/transactions/recent-transactions-list";
import { accountBalance } from "~/data/account-balance";
import { mockedTransactions } from "~/mocks/transactions";

export default function Overview() {
  const transactions = mockedTransactions;

  return (
    <main className="overview-main-content">
      <BalanceCards accountBalance={accountBalance} />

      <RecentTransactionsList recentTransactions={transactions} />
    </main>
  );
}
