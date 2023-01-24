import PropTypes from "prop-types";
import BalanceCardsList from "./balance-cards-list";

export default function BalanceCards({ accountBalance }) {
  const { income, balance, expense } = accountBalance;

  return <BalanceCardsList accountBalance={[income, balance, expense]} />;
}

BalanceCards.propTypes = {
  accountBalance: PropTypes.object.isRequired,
};
