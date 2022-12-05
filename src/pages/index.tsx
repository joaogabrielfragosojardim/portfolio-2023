import { Box } from "@chakra-ui/react";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Start } from "../components/Start";

export default function Home() {
  return (
    <Box maxW="102.5rem" margin="auto">
      <Header />
      <Start />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Box>
  );
}
