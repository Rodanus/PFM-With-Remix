import { Form } from "@remix-run/react";
import TransactionsHistoryFilters from "~/components/transactions/transactions-history-filters";

export const action = async ({ request }) => {
  const formData = await request.formData();

  return null;
};

export default function TransactionHistory() {
  return (
    <main className="transactions-history-container">
      <TransactionsHistoryFilters />
      Transactions go here....
    </main>
  );
}
