import { useLocation } from "@remix-run/react";
import { pageTitle } from "~/utils/page-title";

export default function PageTopBar() {
  const { pathname } = useLocation();
  const pageName = pageTitle(pathname);

  return (
    <header className="page-header">
      <span className="page-header-title capitalize font-500">{pageName}</span>
    </header>
  );
}
