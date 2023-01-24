import { sidebarNavLinks } from "~/data/nav-links";
import Logo from "../logo";
import NavLinks from "./nav-links";

export default function Sidebar() {
  return (
    <nav className="sidebar-nav">
      <Logo />

      <NavLinks navLinks={sidebarNavLinks} />
    </nav>
  );
}
