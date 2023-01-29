import PropTypes from "prop-types";
import { formatMoneyAmount } from "~/utils/format-money-amount";

export default function TransactionAmount({
  transactionAmount,
  transactionType,
}) {
  const formattedAmount = formatMoneyAmount(transactionAmount),
    transactionTypeLowercase = transactionType.toLowerCase(),
    isTransactionTypeIncome = transactionTypeLowercase === "income" ? "+" : "-",
    formattedAmountWithSymbols = `${isTransactionTypeIncome}$${formattedAmount}`;

  return (
    <span
      className={`transaction-amount transaction-amount-${transactionTypeLowercase}`}
    >
      {formattedAmountWithSymbols}
    </span>
  );
}

TransactionAmount.propTypes = {
  transactionAmount: PropTypes.number.isRequired,
  transactionType: PropTypes.string.isRequired,
};
