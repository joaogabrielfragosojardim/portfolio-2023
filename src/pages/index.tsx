import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Start } from "../components/Start";
import { animations } from "../constants/animations";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio João</title>
        <meta content="Portfólio João" property="og:title" />
        <meta
          content="Desenvolvedor React & Node com mais de um ano de experiência no mercado de desenvolvimento web / mobile."
          property="og:description"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Box color="primary" bg="secondary">
        <Header />
        <Box maxW="102.5rem" margin="auto">
          <Start />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Box>
      </Box>
    </>
  );
}
