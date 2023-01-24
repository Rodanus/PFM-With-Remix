import BalanceCards from "~/components/balance-cards/balance-cards";
import { accountBalance } from "~/data/account-balance";

export default function Overview() {
  return (
    <main className="overview-main-content">
      <BalanceCards accountBalance={accountBalance} />
    </main>
  );
}
