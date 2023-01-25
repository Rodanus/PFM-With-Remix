import PropTypes from "prop-types";

export default function TransactionAmount({ transactionAmount }) {
  return <div>{transactionAmount}</div>;
}

TransactionAmount.propTypes = {
  transactionAmount: PropTypes.number.isRequired,
};
