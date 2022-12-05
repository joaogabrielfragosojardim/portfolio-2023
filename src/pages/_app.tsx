import { ChakraProvider } from "@chakra-ui/react";
import { Roboto } from "@next/font/google";
import { AppProps } from "next/app";

const roboto = Roboto({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
