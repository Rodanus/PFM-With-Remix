import { Link } from "@remix-run/react";
import PropTypes from "prop-types";

export default function NavLink({ navLink }) {
  return (
    <li className="nav-link-item">
      <Link to={navLink.url} className="nav-link">
        {navLink.name}
      </Link>
    </li>
  );
}

NavLink.propTypes = {
  navLink: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
