import PropTypes from "prop-types";
import EducationIcon from "../transaction-category-icons/education-icon";
import SalaryIcon from "../transaction-category-icons/salary-icon";
import TechIcon from "../transaction-category-icons/tech-icon";

export default function TransactionIcon({ transactionCategory }) {
  // TODO: Add more category icons

  const chooseIcon = () => {
    switch (transactionCategory) {
      case "TECH":
        return <TechIcon />;
      case "SALARY":
        return <SalaryIcon />;
      case "EDUCATION":
        return <EducationIcon />;
    }
  };

  const iconToRender = chooseIcon();

  return <div className="transaction-icon-container">{iconToRender}</div>;
}

TransactionIcon.propTypes = {
  transactionCategory: PropTypes.string.isRequired,
};
