import { Outlet } from "@remix-run/react";
import Sidebar from "~/components/nav/sidebar";
import PageTopBar from "~/components/page-topbar";

export default function layout() {
  return (
    <div className="page-layout">
      <Sidebar />
      <div className="layout-main-content-container">
        <PageTopBar />
        <Outlet />
      </div>
    </div>
  );
}
