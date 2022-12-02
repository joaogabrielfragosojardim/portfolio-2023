import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const About = () => (
  <Flex p="80px 100px" justify="space-between" align="center">
    <Box w="393px" h="393px">
      <Image src="/about.webp" alt="my memoji" boxSize="100%" />
    </Box>
    <Box>
      <Text fontSize="48px" fontWeight="bold">
        Sobre
      </Text>
      <Text fontSize="24px" maxW="720px" lineHeight="45px" mt="22px" textAlign="justify">
        Olá! me chamo <b>João Gabriel Fragoso Jardim</b>, sou brasileiro, tenho
        19 anos, estudo Ciências da Computação e atuo como{" "}
        <b>Desenvolvedor Fullstack</b> <b>há mais de um ano</b> utilizando{" "}
        <b>React e Node.</b>
      </Text>
    </Box>
  </Flex>
);
