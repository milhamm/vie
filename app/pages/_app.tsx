import "@fontsource/nunito/400.css";
import "@fontsource/nunito/900.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AuthenticationProvider } from "context/authentication";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthenticationProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthenticationProvider>
  );
}

export default MyApp;
