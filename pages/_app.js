import "../styles/globals.css";
import Layout from "./Component/Layout";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
