import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link as AnimateLink } from "react-scroll";
import { email } from "../constants/contact";
import { headerMenu } from "../constants/headerMenu";
import { Fade as Hamburger } from "hamburger-react";
import { useMemo, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { toggleColorMode, colorMode } = useColorMode();

  const toggleMenuByPrev = useMemo(() => {
    return () => {
      setToggleMenu((prev) => !prev);
    };
  }, []);

  return (
    <Box
      w="100%"
      pos="sticky"
      top="0rem"
      bg="radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0)) 100%"
      backdropFilter="blur(1.25rem)"
      zIndex="10"
    >
      <Box
        maxW="102.5rem"
        margin="auto"
        p={{ base: "1.87rem 1.25rem", xl: "2rem 6.25rem" }}
      >
        <Flex
          justify={{ base: "flex-start", md: "center", xl: "space-between" }}
          fontSize="1.12rem"
        >
          <Flex
            gap="2rem"
            display={{ base: "none", md: "flex" }}
            w={{ base: "100%", xl: "unset" }}
            maxW={{ base: "45rem", xl: "unset" }}
            justify={{ base: "space-between", xl: "unset" }}
          >
            {headerMenu.map((menuItem, index) => (
              <Box
                key={index}
                cursor="pointer"
                _hover={{ textDecor: "underline" }}
              >
                <AnimateLink
                  to={menuItem.idTo}
                  offset={menuItem.offset}
                  smooth
                  duration={500}
                >
                  {menuItem.content}
                </AnimateLink>
              </Box>
            ))}
          </Flex>
          <Box
            display={{ base: "inline", md: "none" }}
            onClick={toggleMenuByPrev}
          >
            <Hamburger toggled={toggleMenu} />
          </Box>
          <Flex
            fontSize="1.6rem"
            onClick={toggleColorMode}
            cursor="pointer"
            align={"center"}
            gap="4rem"
          >
            <Text
              fontSize="1.12rem"
              display={{ base: "none", xl: "inline-block" }}
            >
              {email}
            </Text>
            {colorMode === "dark" ? <BsMoon /> : <BsSun />}
          </Flex>
        </Flex>
      </Box>
      <Drawer
        onClose={toggleMenuByPrev}
        isOpen={toggleMenu}
        size="xs"
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Box ml="auto" mt="2rem" mr="1.25rem">
            <Box
              display={{ base: "inline", md: "none" }}
              onClick={toggleMenuByPrev}
            >
              <Hamburger toggled={toggleMenu} />
            </Box>
          </Box>
          <DrawerBody mt="5rem">
            <Flex flexDir="column" gap="2rem">
              {headerMenu.map((menuItem, index) => (
                <Box
                  key={index}
                  cursor="pointer"
                  _hover={{ textDecor: "underline" }}
                >
                  <AnimateLink
                    to={menuItem.idTo}
                    offset={menuItem.offset}
                    smooth
                    duration={500}
                    onClick={toggleMenuByPrev}
                  >
                    {menuItem.content}
                  </AnimateLink>
                </Box>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
