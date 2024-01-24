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
        <title>João&apos;s Portfolio</title>
        <meta content="João's Portfolio" property="og:title" />
        <meta
          content="React & Node Developer with over two years of experience in the web/mobile development market."
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
