import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { skills } from "../constants/skills";

export const Skills = () => (
  <>
    <Text fontSize="48px" fontWeight="bold" textAlign="center" mt="80px">
      Skills
    </Text>
    <Grid
      p="80px 100px"
      gridTemplateColumns="repeat(4, 1fr)"
      gap="64px"
      alignItems="self-start"
    >
      {skills.map((skill) => (
        <Flex key={skill.name} flexDir="column" align="center" justify="center">
          <Box fontSize="42px">{skill.icon}</Box>
          <Text fontSize="24px" mt="8px">
            {skill.name}
          </Text>
          <Flex mt="16px" flexDir="column" gap="8px">
            {skill.other.map((other) => (
              <Text key={other} fontSize="18px" color="gray" textAlign="center">
                {other}
              </Text>
            ))}
          </Flex>
        </Flex>
      ))}
    </Grid>
  </>
);
