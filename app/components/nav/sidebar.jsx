import { sidebarNavLinks } from "~/data/nav-links";
import NavLinks from "./nav-links";

export default function Sidebar() {
  return (
    <nav className="sidebar-nav">
      <NavLinks navLinks={sidebarNavLinks} />
    </nav>
  );
}
