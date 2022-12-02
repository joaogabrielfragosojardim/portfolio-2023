import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { whatsappLink } from "../constants/contact";

export const Start = () => (
  <Flex p="80px 100px" justify="space-between" align="center">
    <Box>
      <Text fontSize="48px" fontWeight="bold">
        João Fragoso
      </Text>
      <Text
        fontSize="24px"
        maxW="720px"
        lineHeight="45px"
        mt="22px"
        textAlign="justify"
      >
        Desenvolvedor <b>React & Node</b> com{" "}
        <b>mais de um ano de experiência</b> no mercado de desenvolvimento web /
        mobile.
      </Text>
      <Link href={whatsappLink} target="_blank">
        <Button
          fontSize="24px"
          fontWeight="normal"
          bg="transparent"
          _hover={{ bg: "transparent" }}
          mt="82px"
          border="solid 1px"
          borderColor="black"
          p="32px 56px"
          borderRadius="70px"
        >
          Vamos conversar!
        </Button>
      </Link>
    </Box>
    <Box w="393px" h="393px">
      <Image src="/start.webp" alt="my memoji" boxSize="100%" />
    </Box>
  </Flex>
);
