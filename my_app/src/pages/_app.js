import { AuthProvider } from "components/context/state";
import "components/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}