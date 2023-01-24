// TODO: Simple homepage

import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="index-page">
      <h1>Hello</h1>
      <Link to="/overview">Overview</Link>
    </div>
  );
}
