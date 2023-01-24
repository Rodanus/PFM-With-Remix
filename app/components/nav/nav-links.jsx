import PropTypes from "prop-types";
import NavLinkItem from "./nav-link-item";

export default function NavLinks({ navLinks }) {
  return (
    <ul className="nav-links-container">
      {navLinks.length > 0
        ? navLinks.map((link) => <NavLinkItem key={link.url} navLink={link} />)
        : "No links here..."}
    </ul>
  );
}

NavLinks.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
