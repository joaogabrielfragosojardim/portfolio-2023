import {
  Box,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { experience } from "../constants/experience";

export const Experience = () => (
  <Box p="80px 100px">
    <Text fontSize="48px" fontWeight="bold">
      Experiência
    </Text>
    {experience.map((experience, indexExp) => (
      <>
        <Box mt={indexExp ? "20px" : "80px"}>
          <Image
            src={experience.src}
            alt="supera logo"
            borderRadius="100%"
            boxSize="64px"
          />
          <Text fontSize="24px" mt="32px" fontWeight="bold">
            {experience.role}
          </Text>
          <Text fontSize="24px">{experience.jobName}</Text>
          <Text fontSize="18px" mt="8px" color="gray">
            {experience.date}
          </Text>
          <List
            listStyleType=""
            pl="16px"
            mt="32px"
            maxW="550px"
            fontSize="18px"
          >
            {experience.projects.map((project, index) => (
              <>
                <ListItem>
                  <Text>{project}</Text>
                </ListItem>
                {index + 1 !== experience.projects.length && <br />}
              </>
            ))}
          </List>
          <Text fontSize="18px" color="gray" mt="32px">
            Obs: Projetos não divulgados por motivos de privacidade empresárial
          </Text>
          {indexExp + 1 !== experience.projects.length && (
            <Box w="1px" h="128px" bg="black" mt="8px"></Box>
          )}
        </Box>
      </>
    ))}
  </Box>
);
