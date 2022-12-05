import { Box, Flex, Image, Link, SlideFade, Text } from "@chakra-ui/react";
import { email, linkedin, number, whatsappLink } from "../constants/contact";
import { InView } from "react-intersection-observer";
import { animations } from "../constants/animations";

export const Contact = () => (
  <InView triggerOnce={true}>
    {({ inView, ref }) => (
      <SlideFade in={inView} transition={{ enter: { duration: animations } }}>
        <Box p={{ base: "1.87rem 1.25rem", xl: "5rem 6.25rem" }} ref={ref}>
          <Text
            fontSize={{ base: "2em", md: "3rem" }}
            fontWeight="bold"
            id="contacts"
          >
            Contatos
          </Text>
          <Flex
            flexDir={{ base: "column-reverse", xl: "row" }}
            justify="space-between"
            align="center"
          >
            <Flex
              fontSize={{ base: "1rem", md: "1.12rem" }}
              mt={{ base: "4rem", xl: "2rem" }}
              maxW={{ base: "unset", xl: "34.37rem" }}
              w={{ base: "100%", xl: "unset" }}
              flexDir="column"
              gap="1rem"
            >
              <Flex gap="2rem" justify="space-between">
                <Text>Telefone (whatsapp):</Text>
                <Link href={whatsappLink} fontWeight="bold">
                  {number}
                </Link>
              </Flex>
              <Flex gap="2rem" justify="space-between">
                <Text>Linkedin:</Text>
                <Link href={linkedin} fontWeight="bold">
                  Clique aqui
                </Link>
              </Flex>
              <Flex gap="2rem" justify="space-between">
                <Text>Email:</Text>
                <Link href={`mailto:${email}`} fontWeight="bold">
                  {email}
                </Link>
              </Flex>
            </Flex>
            <Box
              w={{ base: "18rem", md: "24.56rem" }}
              h={{ base: "18rem", md: "24.56rem" }}
            >
              <Image src="/contacts.webp" alt="my memoji" boxSize="100%" />
            </Box>
          </Flex>
        </Box>
      </SlideFade>
    )}
  </InView>
);
