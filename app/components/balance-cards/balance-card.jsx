import PropTypes from "prop-types";

export default function BalanceCard({ balance }) {
  return (
    <li>
      <span>{balance.title}</span>
      <span>{balance.amount}</span>
    </li>
  );
}

BalanceCard.propTypes = {
  balance: PropTypes.shape({
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
