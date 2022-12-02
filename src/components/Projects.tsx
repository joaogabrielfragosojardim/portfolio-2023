import { Box, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import { projects } from "../constants/projects";
import { lessThenTen } from "../utils/lessThenTen";

export const Projects = () => (
  <>
    <Text fontSize="48px" fontWeight="bold" textAlign="center" mt="80px">
      Projetos
    </Text>
    <Grid
      p="80px 100px"
      gridTemplateColumns="repeat(2, 1fr)"
      gap="16px"
      alignItems="self-start"
    >
      {projects.map((project, index) => {
        const newIndex = lessThenTen(index + 1);
        return (
          <Box key={project.title}>
            <Text fontSize="24px">
              {newIndex}
            </Text>
            <Link
              href={project.link}
              target="_blank"
              _hover={{ textDecor: "none" }}
            >
              <Flex bg={project.bg} h="320px" justify="center" align="center">
                <Image
                  boxSize="128px"
                  objectFit="contain"
                  src={project.src}
                  alt="project logo"
                  borderRadius={project.rounded ? "100%" : "unset"}
                />
              </Flex>
              <Text fontSize="24px" fontWeight="bold" mt="32px">
                {project.title}
              </Text>
              <Text fontSize="18px" mt="8px">
                {project.about}
              </Text>
            </Link>
          </Box>
        );
      })}
    </Grid>
  </>
);
