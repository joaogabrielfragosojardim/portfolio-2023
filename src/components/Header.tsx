import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { email } from "../constants/contact";
import { headerMenu } from "../constants/headerMenu";

export const Header = () => (
  <Box p="80px 100px">
    <Flex justify="space-between" fontSize="18px">
      <Flex gap="32px">
        {headerMenu.map((menuItem, index) => (
          <Link key={index}>{menuItem.content}</Link>
        ))}
      </Flex>
      <Text>{email}</Text>
    </Flex>
  </Box>
);
