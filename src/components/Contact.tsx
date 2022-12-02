import { Box, Flex, Image, Link, List, ListItem, Text } from "@chakra-ui/react";
import { email, linkedin, number, whatsappLink } from "../constants/contact";

export const Contact = () => (
  <Box p="80px 100px">
    <Text fontSize="48px" fontWeight="bold">
      Contatos
    </Text>
    <Flex fontSize="18px" mt="32px" maxW="550px" flexDir="column" gap="16px">
      <Flex gap="32px" justify="space-between">
        <Text>Telefone (whatsapp):</Text>
        <Link href={whatsappLink} fontWeight="bold">
          {number}
        </Link>
      </Flex>
      <Flex gap="32px" justify="space-between">
        <Text>Linkedin:</Text>
        <Link href={linkedin} fontWeight="bold">
          Clique aqui
        </Link>
      </Flex>
      <Flex gap="32px" justify="space-between">
        <Text>Email:</Text>
        <Link href={`mailto:${email}`} fontWeight="bold">
          {email}
        </Link>
      </Flex>
    </Flex>
  </Box>
);
