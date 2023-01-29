import { Link } from "@remix-run/react";
import PropTypes from "prop-types";

import TransactionAmount from "./transaction-amount";
import TransactionDate from "./transaction-date";
import TransactionIcon from "./transaction-icon";

export default function Transaction({ transaction }) {
  return (
    <li className="transaction">
      <Link to="#" className="transaction-container flex-space-between">
        <span className="transaction-category-note-container flex-space-between items-center">
          <TransactionIcon transactionCategory={transaction.category} />
          <span className="transaction-note">{transaction.note}</span>
        </span>
        <span className="flex-space-between items-center">
          <TransactionDate transactionDate={transaction.createdAt} />
          <TransactionAmount
            transactionAmount={transaction.amount}
            transactionType={transaction.type}
          />
        </span>
      </Link>
    </li>
  );
}

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
