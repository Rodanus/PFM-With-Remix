import { NavLink } from "@remix-run/react";
import PropTypes from "prop-types";

export default function NavLinkItem({ navLink }) {
  return (
    <li className="nav-link-item">
      <NavLink
        to={navLink.url}
        className={({ isActive }) =>
          isActive ? "nav-link nav-link-active" : "nav-link"
        }
      >
        {navLink.name}
      </NavLink>
    </li>
  );
}

NavLinkItem.propTypes = {
  navLink: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
