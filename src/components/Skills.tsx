import { Box, Flex, Grid, SlideFade, Text } from "@chakra-ui/react";
import { skills } from "../constants/skills";
import { InView } from "react-intersection-observer";
import { animations } from "../constants/animations";

export const Skills = () => (
  <>
    <InView triggerOnce={true}>
      {({ inView, ref }) => (
        <SlideFade in={inView} transition={{ enter: { duration: animations } }}>
          <Text
            ref={ref}
            fontSize={{ base: "2em", md: "3rem" }}
            fontWeight="bold"
            textAlign="center"
            mt="5rem"
            id="skills"
          >
            Skills
          </Text>
        </SlideFade>
      )}
    </InView>

    <Grid
      p={{ base: "1.87rem 1.25rem", xl: "5rem 6.25rem" }}
      gridTemplateColumns={{ base: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }}
      gap="4.06rem"
      alignItems="self-start"
    >
      {skills.map((skill) => (
        <InView triggerOnce={true} key={skill.name}>
          {({ inView, ref }) => (
            <SlideFade
              in={inView}
              transition={{ enter: { duration: animations } }}
            >
              <Flex ref={ref} flexDir="column" align="center" justify="center">
                <Box fontSize="2.62rem">{skill.icon}</Box>
                <Text
                  fontSize={{ base: "1.12rem", md: "1.5rem" }}
                  mt="0.5rem"
                  textAlign="center"
                >
                  {skill.name}
                </Text>
                <Flex mt="1rem" flexDir="column" gap="0.5rem">
                  {skill.other.map((other) => (
                    <Text
                      key={other}
                      fontSize={{ base: "1rem", md: "1.12em" }}
                      color="gray"
                      textAlign="center"
                    >
                      {other}
                    </Text>
                  ))}
                </Flex>
              </Flex>
            </SlideFade>
          )}
        </InView>
      ))}
    </Grid>
  </>
);
