import PropTypes from "prop-types";
import { formatTransactionDate } from "~/utils/format-transaction-date";

export default function TransactionDate({ transactionDate }) {
  const formattedTransactionDate = formatTransactionDate(transactionDate);
  return (
    <span className="transaction-date capitalize">
      {formattedTransactionDate}
    </span>
  );
}

TransactionDate.propTypes = {
  transactionDate: PropTypes.string.isRequired,
};
