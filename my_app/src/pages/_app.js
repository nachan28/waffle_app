import { AuthProvider } from "components/context/state";
import "components/styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import { UserSFProvider } from "components/context/state";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
       <UserSFProvider>
       <ChakraProvider>
          <Component {...pageProps} />
      </ChakraProvider>
      </UserSFProvider>
    </AuthProvider>
  );
}