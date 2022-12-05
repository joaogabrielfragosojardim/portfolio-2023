import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link as AnimateLink } from "react-scroll";
import { email } from "../constants/contact";
import { headerMenu } from "../constants/headerMenu";
import { Fade as Hamburger } from "hamburger-react";
import { useMemo, useState } from "react";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleByPrev = useMemo(() => {
    return () => {
      setToggleMenu((prev) => !prev);
    };
  }, []);

  return (
    <>
      <Box
        p={{ base: "1.87rem 1.25rem", xl: "2rem 6.25rem" }}
        pos="sticky"
        top="0rem"
        bg="linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))"
        backdropFilter="blur(1.25rem)"
        zIndex="10"
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
          <Box display={{ base: "inline", md: "none" }} onClick={toggleByPrev}>
            <Hamburger toggled={toggleMenu} />
          </Box>
          <Text display={{ base: "none", xl: "inline-block" }}>{email}</Text>
        </Flex>
      </Box>
      <Drawer
        onClose={toggleByPrev}
        isOpen={toggleMenu}
        size="xs"
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Box ml="auto" mt="2rem" mr="1.25rem">
            <Box
              display={{ base: "inline", md: "none" }}
              onClick={toggleByPrev}
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
                    onClick={toggleByPrev}
                  >
                    {menuItem.content}
                  </AnimateLink>
                </Box>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
