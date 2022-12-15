import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  styles: {
    global: (props: Record<string, any>) => ({
      body: {
        bg: mode("white", "black")(props),
        color: mode("black", "white")(props),
      },
    }),
  },
});
