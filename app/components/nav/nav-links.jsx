import PropTypes from "prop-types";
import NavLink from "./nav-link";

export default function NavLinks({ navLinks }) {
  return (
    <ul className="nav-links-container">
      {/* TODO: Fix the eslint error. */}
      {navLinks.length > 0
        ? navLinks.map((link) => <NavLink key={link.url} navLink={link} />)
        : "No links here..."}
    </ul>
  );
}

NavLinks.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
