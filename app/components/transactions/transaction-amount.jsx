import PropTypes from "prop-types";

export default function TransactionAmount({ transactionAmount }) {
  // TODO: Format amount and display
  return (
    <span className="transaction-amount transaction-amount-income">
      +${10}K
    </span>
  );
}

TransactionAmount.propTypes = {
  transactionAmount: PropTypes.number.isRequired,
};
