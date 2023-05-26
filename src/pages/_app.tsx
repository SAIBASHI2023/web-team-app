import "../styles/globals.css";

import type { AppProps } from "next/app";

/**
 *
 * @param root0
 * @param root0.Component
 * @param root0.pageProps
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
