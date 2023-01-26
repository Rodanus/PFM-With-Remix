import PropTypes from "prop-types";

export default function TransactionDate({ transactionDate }) {
  // TODO: Format date and display
  const date = new Date(transactionDate).getFullYear();
  return <span className="transaction-date">Today</span>;
}

TransactionDate.propTypes = {
  transactionDate: PropTypes.string.isRequired,
};
