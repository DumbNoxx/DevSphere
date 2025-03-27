import { useState } from "react";
import {
  python, ts, js, c,
  cpp, git, bash, postgreSQL,
  react, nodejs, tailwind,
} from "@/assets/images/indexImages";

export const skillsHook = () => {
  const listadoSkill = [
    {
      id: 0,
      nombre: "Python",
      image: python,
      colors: "hover:bg-yellow-300",
      textColor: "hover:text-black",
    },
    { id: 1, nombre: "TypeScript", image: ts, colors: "hover:bg-cyan-950" },
    {
      id: 2,
      nombre: "JavaScript",
      image: js,
      colors: "hover:bg-yellow-300",
      textColor: "hover:text-black",
    },
    { id: 3, nombre: "C", image: c, colors: "hover:bg-blue-950" },
    { id: 4, nombre: "C++", image: cpp, colors: "hover:bg-blue-900" },
    {
      id: 5,
      nombre: "Git",
      image: git,
      colors: "hover:bg-orange-300",
      textColor: "hover:text-black",
    },
    { id: 6, nombre: "Bash", image: bash, colors: "hover:bg-slate-500" },
    {
      id: 7,
      nombre: "PostgreSQL",
      image: postgreSQL,
      colors: "hover:bg-slate-900",
    },
    { id: 8, nombre: "React", image: react, colors: "hover:bg-sky-800" },
    { id: 9, nombre: "NodeJS", image: nodejs, colors: "hover:bg-emerald-900" },
    {
      id: 10,
      nombre: "TailwindCSS",
      image: tailwind,
      colors: "hover:bg-emerald-300",
      textColor: "hover:text-black",
    },
  ];
  const [array, setArray] = useState(listadoSkill);
  setArray;
  return [array];
};
