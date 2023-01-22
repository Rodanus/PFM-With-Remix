import { useLocation } from "@remix-run/react";

export default function PageTopBar() {
  const { pathname } = useLocation();
  const pageName = pathname.replace("/", "").split("-").join(" ");

  return <header className="capitalize page-header">{pageName}</header>;
}
