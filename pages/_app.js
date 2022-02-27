import { AnimatePresence } from "framer-motion";
import PageLoadState from "../context/PageLoadState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PageLoadState>
      <div>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
    </PageLoadState>
  );
}

export default MyApp;
