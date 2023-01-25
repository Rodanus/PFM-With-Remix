import PropTypes from "prop-types";

export default function TransactionDate({ transactionDate }) {
  const date = new Date(transactionDate).getFullYear();
  return <span>{date}</span>;
}

TransactionDate.propTypes = {
  transactionDate: PropTypes.string.isRequired,
};
