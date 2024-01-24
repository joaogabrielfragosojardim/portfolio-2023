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
    name: "Next.js",
    icon: <TbBrandNextjs />,
    other: ["NextAuth", "NextSEO", "Vercel"],
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    other: ["Prisma", "Nest", "RestAPI"],
  },
  {
    name: "React Native",
    icon: <FaReact />,
    other: ["WatermelonDB", "Android", "IOS"],
  },
  {
    name: "Databases",
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
    other: ["Tailwindcss", "Chakra ui", "Material ui"],
  },
  {
    name: "JavaScript",
    icon: <TbBrandJavascript />,
    other: ["Modern js", "Classess", "Methods"],
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    other: ["Types", "Functions", "Methods"],
  },
  {
    name: "Unit Tests",
    icon: <SiJest />,
    other: ["Compnents", "API tests", "Storybook"],
  },
  {
    name: "API",
    icon: <SiExercism />,
    other: ["CRUD", "Consuming", "Creation"],
  },
  {
    name: "GraphQL",
    icon: <SiGraphql />,
    other: ["Mutations", "Queries", "Schemas"],
  },
];
