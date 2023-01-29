import { Link } from "@remix-run/react";
import PropTypes from "prop-types";

export default function BalanceCard({ balance }) {
  return (
    <li className={`balance-card ${balance.title}`}>
      <div className={`balance-card-container ${balance.title}-container`}>
        <span
          className={`balance-card-title capitalize ${balance.title}-title`}
        >
          {balance.title}
        </span>
        <Link
          to="#"
          className={`balance-cards-details-link ${balance.title}-link`}
        >
          details
        </Link>
      </div>
      <span className="balance-card-amount">${balance.amount || 0}</span>
    </li>
  );
}

BalanceCard.propTypes = {
  balance: PropTypes.shape({
    title: PropTypes.string.isRequired,
    amount: PropTypes.number,
  }).isRequired,
};
