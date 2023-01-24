import PropTypes from "prop-types";
import BalanceCard from "./balance-card";

export default function BalanceCardsList({ accountBalance }) {
  return (
    <ul className="balance-cards-list">
      {accountBalance.map((balance, index) => (
        <BalanceCard key={balance.title + `${index}`} balance={balance} />
      ))}
    </ul>
  );
}

BalanceCardsList.propTypes = {
  accountBalance: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
