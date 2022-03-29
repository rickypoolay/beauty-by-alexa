import PageLoadState from "../context/PageLoadState";
import "../styles/globals.css";
import { Client, Environment } from "square";

function MyApp({ Component, pageProps }) {
  const client = new Client({
    environment: Environment.Sandbox,
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
  });

  return (
    <PageLoadState>
      <Component {...pageProps} />
    </PageLoadState>
  );
}

export default MyApp;
