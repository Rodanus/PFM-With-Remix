import { Link } from "@remix-run/react";

export default function AddTransactionButton() {
  return (
    <Link to="add-transaction" className="add-transaction-btn capitalize">
      add transaction
    </Link>
  );
}
