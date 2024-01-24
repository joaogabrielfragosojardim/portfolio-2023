import { Box, Flex, Image, SlideFade, Text } from "@chakra-ui/react";
import { InView } from "react-intersection-observer";
import { animations } from "../constants/animations";

export const About = () => (
  <InView triggerOnce={true}>
    {({ inView, ref }) => (
      <SlideFade in={inView} transition={{ enter: { duration: animations } }}>
        <Flex
          ref={ref}
          p={{ base: "1.87rem 1.25rem", xl: "5rem 6.25rem" }}
          justify="space-between"
          align="center"
          flexDir={{ base: "column", xl: "row" }}
          gap="4rem"
        >
          <Box
            w={{ base: "18rem", md: "24.56rem" }}
            h={{ base: "18rem", md: "24.56rem" }}
          >
            <Image src="/about.webp" alt="my memoji" boxSize="100%" />
          </Box>
          <Box>
            <Text
              fontSize={{ base: "2em", md: "3rem" }}
              fontWeight="bold"
              mt={{ base: "2rem", xl: "unset" }}
              id="about"
            >
              About
            </Text>
            <Text
              fontSize={{ base: "1.12rem", md: "1.5rem" }}
              maxW="45rem"
              lineHeight="2.81rem"
              mt="1.37rem"
              textAlign="justify"
            >
              Hello! My name is <b>João Gabriel Fragoso Jardim</b>, I&apos;m
              Brazilian, 20 years old, currently studying Computer Science, and
              I&apos;ve been working as a <b>Fullstack Developer</b> for more
              than two years, using <b>React and Node</b>.
            </Text>
          </Box>
        </Flex>
      </SlideFade>
    )}
  </InView>
);
