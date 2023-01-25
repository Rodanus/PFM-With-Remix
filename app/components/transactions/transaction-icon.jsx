import PropTypes from "prop-types";

export default function TransactionIcon({ transactionCategory }) {
  return <div>{transactionCategory}</div>;
}

TransactionIcon.propTypes = {
  transactionCategory: PropTypes.string.isRequired,
};
