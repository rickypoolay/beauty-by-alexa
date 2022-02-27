import PageLoadState from "../context/PageLoadState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PageLoadState>
      <Component {...pageProps} />
    </PageLoadState>
  );
}

export default MyApp;
