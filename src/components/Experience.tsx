import {
  Box,
  Image,
  List,
  ListItem,
  SlideFade,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { experience } from "../constants/experience";
import { InView } from "react-intersection-observer";
import { animations } from "../constants/animations";

export const Experience = () => {
  const { colorMode } = useColorMode();
  return (
    <Box p={{ base: "1.87rem 1.25rem", xl: "5rem 6.25rem" }}>
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <SlideFade
            in={inView}
            transition={{ enter: { duration: animations } }}
          >
            <Text
              ref={ref}
              fontSize={{ base: "2em", md: "3rem" }}
              fontWeight="bold"
              id="experience"
            >
              Experiência
            </Text>
          </SlideFade>
        )}
      </InView>

      {experience.map((experience, indexExp) => (
        <Box key={indexExp}>
          <Box mt={indexExp ? "1.25rem" : "5rem"}>
            <InView triggerOnce={true}>
              {({ inView, ref }) => (
                <SlideFade
                  in={inView}
                  transition={{ enter: { duration: animations } }}
                >
                  <Image
                    ref={ref}
                    src={experience.src}
                    alt="supera logo"
                    borderRadius="100%"
                    boxSize="4rem"
                  />
                </SlideFade>
              )}
            </InView>
            <InView triggerOnce={true}>
              {({ inView, ref }) => (
                <SlideFade
                  in={inView}
                  transition={{ enter: { duration: animations } }}
                >
                  <Text
                    ref={ref}
                    fontSize={{ base: "1.12rem", md: "1.5rem" }}
                    mt="2rem"
                    fontWeight="bold"
                  >
                    {experience.role}
                  </Text>
                </SlideFade>
              )}
            </InView>
            <InView triggerOnce={true}>
              {({ inView, ref }) => (
                <SlideFade
                  in={inView}
                  transition={{ enter: { duration: animations } }}
                >
                  <Text fontSize={{ base: "1.12rem", md: "1.5rem" }} ref={ref}>
                    {experience.jobName}
                  </Text>
                </SlideFade>
              )}
            </InView>
            <InView triggerOnce={true}>
              {({ inView, ref }) => (
                <SlideFade
                  in={inView}
                  transition={{ enter: { duration: animations } }}
                >
                  <Text
                    ref={ref}
                    fontSize={{ base: "1rem", md: "1.12rem" }}
                    mt="0.5rem"
                    color="gray"
                  >
                    {experience.date}
                  </Text>
                </SlideFade>
              )}
            </InView>

            <List
              listStyleType=""
              pl="1rem"
              mt="2rem"
              maxW="34.37rem"
              fontSize={{ base: "1rem", md: "1.12rem" }}
            >
              {experience.projects.map((project, index) => (
                <InView triggerOnce={true} key={index}>
                  {({ inView, ref }) => (
                    <SlideFade
                      in={inView}
                      transition={{ enter: { duration: animations } }}
                    >
                      <Box ref={ref}>
                        <ListItem>
                          <Text>{project}</Text>
                        </ListItem>
                        {index + 1 !== experience.projects.length && <br />}
                      </Box>
                    </SlideFade>
                  )}
                </InView>
              ))}
            </List>
            <InView triggerOnce={true}>
              {({ inView, ref }) => (
                <SlideFade
                  in={inView}
                  transition={{ enter: { duration: animations } }}
                >
                  <Text
                    ref={ref}
                    fontSize={{ base: "1rem", md: "1.12rem" }}
                    color="gray"
                    mt="2rem"
                  >
                    Obs: Projetos não divulgados por motivos de privacidade
                    empresárial
                  </Text>
                </SlideFade>
              )}
            </InView>
            {indexExp + 1 === experience.projects.length && (
              <InView triggerOnce={true}>
                {({ inView, ref }) => (
                  <SlideFade
                    ref={ref}
                    in={inView}
                    transition={{ enter: { duration: animations } }}
                  >
                    <Box
                      w="0.06rem"
                      h="8rem"
                      bg={colorMode === "light" ? "black" : "white"}
                      mt="0.5rem"
                    ></Box>
                  </SlideFade>
                )}
              </InView>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
