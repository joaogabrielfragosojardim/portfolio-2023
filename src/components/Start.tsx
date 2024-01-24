import { Box, Button, Flex, Image, SlideFade, Text } from "@chakra-ui/react";
import Link from "next/link";
import { whatsappLink } from "../constants/contact";
import { InView } from "react-intersection-observer";
import { animations } from "../constants/animations";

export const Start = () => (
  <InView triggerOnce={true}>
    {({ inView, ref }) => (
      <SlideFade in={inView} transition={{ enter: { duration: animations } }}>
        <Flex
          p={{ base: "1.87rem 1.25rem", xl: "5rem 6.25rem" }}
          justify="space-between"
          align="center"
          flexDir={{ base: "column-reverse", xl: "row" }}
          gap="4rem"
          ref={ref}
        >
          <Box>
            <Text
              fontSize={{ base: "2em", md: "3rem" }}
              fontWeight="bold"
              id="start"
            >
              João Jardim
            </Text>
            <Text
              fontSize={{ base: "1.12rem", md: "1.5rem" }}
              maxW="45rem"
              lineHeight="2.81rem"
              mt="1.37rem"
              textAlign="justify"
            >
              <b>React & Node Developer</b> with{" "}
              <b>more than two years of experience</b> in the web/mobile
              development market.
            </Text>
            <Link href={whatsappLink} target="_blank">
              <Button
                fontSize={{ base: "1.12rem", md: "1.5rem" }}
                fontWeight="normal"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                mt="5.12rem"
                border="solid 0.06rem"
                borderColor="primary"
                p="2rem 3.5rem"
                borderRadius="4.37rem"
              >
                {"Let's talk!"}
              </Button>
            </Link>
          </Box>
          <Box
            w={{ base: "18rem", md: "24.56rem" }}
            h={{ base: "18rem", md: "24.56rem" }}
          >
            <Image src="/start.webp" alt="my memoji" boxSize="100%" />
          </Box>
        </Flex>
      </SlideFade>
    )}
  </InView>
);
