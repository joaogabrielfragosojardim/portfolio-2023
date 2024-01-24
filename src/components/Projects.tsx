import {
  Box,
  Flex,
  Grid,
  Image,
  Link,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import { projects } from "../constants/projects";
import { lessThenTen } from "../utils/lessThenTen";
import { InView } from "react-intersection-observer";
import { animations } from "../constants/animations";

export const Projects = () => {
  return (
    <>
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
              textAlign="center"
              mt="5rem"
              id="projects"
            >
              Projects
            </Text>
          </SlideFade>
        )}
      </InView>

      <Grid
        p={{ base: "1.87rem 1.25rem", xl: "5rem 6.25rem" }}
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={{ base: "4rem", md: "1rem" }}
        alignItems="self-start"
      >
        {projects.map((project, index) => {
          const newIndex = lessThenTen(index + 1);
          return (
            <InView triggerOnce={true} key={project.title}>
              {({ inView, ref }) => (
                <SlideFade
                  in={inView}
                  transition={{ enter: { duration: animations } }}
                >
                  <Box ref={ref}>
                    <Text fontSize={{ base: "1.12rem", md: "1.5rem" }}>
                      {newIndex}
                    </Text>
                    <Link
                      href={project.link}
                      target="_blank"
                      _hover={{ textDecor: "none" }}
                    >
                      <Flex
                        bg={project.bg}
                        h="20rem"
                        justify="center"
                        align="center"
                      >
                        <Image
                          boxSize="8rem"
                          objectFit="contain"
                          src={project.src}
                          alt="project logo"
                          borderRadius={project.rounded ? "100%" : "unset"}
                        />
                      </Flex>
                      <Text
                        fontSize={{ base: "1.12rem", md: "1.5rem" }}
                        fontWeight="bold"
                        mt="2rem"
                      >
                        {project.title}
                      </Text>
                      <Text
                        fontSize={{ base: "1rem", md: "1.12em" }}
                        mt="0.5rem"
                      >
                        {project.about}
                      </Text>
                    </Link>
                  </Box>
                </SlideFade>
              )}
            </InView>
          );
        })}
      </Grid>
    </>
  );
};
