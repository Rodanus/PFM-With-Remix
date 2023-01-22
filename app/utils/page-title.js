/**
 * Remove the '/' and '-' symbols from pathname.
 * @param {string} pathname the current pathname returned via useLocation(), @example: "/transaction-history"
 * @returns {string} Page title without extra symbols, @example "transaction history"
 */
export const pageTitle = (pathname) =>
  pathname.replace("/", "").split("-").join(" ");
