import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { roboto } from "../styles/fonts";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
