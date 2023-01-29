import PropTypes from "prop-types";
import { formatMoneyAmount } from "~/utils/format-money-amount";

export default function TransactionAmount({
  transactionAmount,
  transactionType,
}) {
  const formattedAmount = formatMoneyAmount(transactionAmount),
    isTransactionTypeIncome = transactionType === "INCOME" ? "+" : "-",
    formattedAmountWithSymbols = `${isTransactionTypeIncome}$${formattedAmount}`;

  return (
    <span className="transaction-amount transaction-amount-income">
      {formattedAmountWithSymbols}
    </span>
  );
}

TransactionAmount.propTypes = {
  transactionAmount: PropTypes.number.isRequired,
  transactionType: PropTypes.string.isRequired,
};
