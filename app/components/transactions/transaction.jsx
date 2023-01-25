import PropTypes from "prop-types";

import TransactionAmount from "./transaction-amount";
import TransactionDate from "./transaction-date";
import TransactionIcon from "./transaction-icon";

export default function Transaction({ transaction }) {
  return (
    <div>
      <span>
        <TransactionIcon transactionCategory={transaction.category} />
      </span>
      <span>{transaction.note}</span>
      <span>
        <TransactionDate transactionDate={transaction.createdAt} />
      </span>
      <span>
        <TransactionAmount transactionAmount={transaction.amount} />
      </span>
    </div>
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
