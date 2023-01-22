import { useLocation } from "@remix-run/react";
import { pageTitle } from "~/utils/page-title";

export default function PageTopBar() {
  const { pathname } = useLocation();
  const pageName = pageTitle(pathname);

  return <header className="capitalize page-header">{pageName}</header>;
}
