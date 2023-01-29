import PropTypes from "prop-types";
import Transaction from "./transaction";

export default function RecentTransactionsList({ recentTransactions }) {
  return (
    <ul className="recent-transactions-list">
      {recentTransactions.map((transaction, index) => (
        <Transaction
          key={`${transaction.id} ${index}`}
          transaction={transaction}
        />
      ))}
    </ul>
  );
}

RecentTransactionsList.propTypes = {
  recentTransactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      note: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
