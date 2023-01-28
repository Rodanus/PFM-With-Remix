import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { createContext, useEffect } from "react";

import rootStyles from "~/styles/root.css";
import useLocalStorage from "./hooks/useLocalStorage";
import { accountData } from "./mocks/transactions";

export const Account = createContext([accountData, () => {}]);

/**
 * @returns {import("@remix-run/node").LinkDescriptor[]}
 */
export const links = () => [
  {
    rel: "stylesheet",
    href: rootStyles,
  },
];

/**
 * @returns {import("@remix-run/node").MetaFunction}
 */
export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const [storedData, setStoredData] = useLocalStorage(
    "accountStoredData",
    accountData
  );

  useEffect(() => {
    setStoredData(accountData);
  }, [setStoredData]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Account.Provider value={[storedData, setStoredData]}>
          <Outlet />
        </Account.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
