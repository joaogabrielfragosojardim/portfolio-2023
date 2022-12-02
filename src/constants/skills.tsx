import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  TbDatabase,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandNextjs,
  TbBrandJavascript,
} from "react-icons/tb";
import { SiTypescript, SiJest, SiGraphql, SiExercism } from "react-icons/si";

export const skills = [
  {
    name: "React",
    icon: <FaReact />,
    other: ["Redux", "React Native", "Hooks"],
  },
  {
    name: "Next",
    icon: <TbBrandNextjs />,
    other: ["NextAuth", "NextSEO", "Vercel"],
  },
  {
    name: "Node",
    icon: <FaNodeJs />,
    other: ["Prisma", "Nest", "RestAPI"],
  },
  {
    name: "React Native",
    icon: <FaReact />,
    other: ["WatermelonDB", "Android", "IOS"],
  },
  {
    name: "Bancos de dados",
    icon: <TbDatabase />,
    other: ["SQL", "Postgress", "MongoDB"],
  },
  {
    name: "HTML",
    icon: <TbBrandHtml5 />,
    other: ["SEO", "Tags", "HTML Moderno"],
  },
  {
    name: "CSS",
    icon: <TbBrandCss3 />,
    other: ["Bootstrap", "Chakra ui", "Material ui"],
  },
  {
    name: "JavaScript",
    icon: <TbBrandJavascript />,
    other: ["JS Moderno", "Classes", "Métodos"],
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    other: ["Tipagens", "Funções", "Métodos"],
  },
  {
    name: "Testes unitários",
    icon: <SiJest />,
    other: ["Componentes", "Teste de API", "Storybook"],
  },
  {
    name: "API",
    icon: <SiExercism />,
    other: ["CRUD", "Consumo", "Criação"],
  },
  {
    name: "GraphQL",
    icon: <SiGraphql />,
    other: ["Mutations", "Queries", "Schemas"],
  },
];
