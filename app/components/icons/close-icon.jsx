import { Link } from "@remix-run/react";

export default function CloseIcon() {
  return (
    <Link to="/overview">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 18L18 2M2 2L18 18"
          stroke="#111827"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
