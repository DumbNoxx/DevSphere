import { useState } from "react"
import python from "../assets/images/svg/python.svg";
import ts from "../assets/images/svg/ts.svg";
import js from "../assets/images/svg/js.svg";
import c from "../assets/images/svg/c.svg";
import cpp from "../assets/images/svg/cpp.svg";
import git from "../assets/images/svg/git.svg";
import bash from "../assets/images/svg/bash.svg";
import posgresql from "../assets/images/svg/postgresql.svg";
import react from "../assets/images/svg/react.svg";
import node from "../assets/images/svg/nodo-js.svg";
import tailwind from "../assets/images/svg/tailwind.svg";


export const skillsHook = () => {
    const listadoSkill = [
      {id: 0, nombre: "Python", image:python, colors: "hover:bg-yellow-300", textColor: "hover:text-black"},
      {id: 1, nombre: "TypeScript", image:ts, colors: "hover:bg-cyan-950"},
      {id: 2, nombre: "JavaScript", image:js, colors: "hover:bg-yellow-300", textColor: "hover:text-black"},
      {id: 3, nombre: "C", image:c, colors: "hover:bg-blue-950"},
      {id: 4, nombre: "C++", image:cpp, colors: "hover:bg-blue-900"},
      {id: 5, nombre: "Git", image:git, colors: "hover:bg-orange-300", textColor: "hover:text-black"},
      {id: 6, nombre: "Bash", image:bash, colors: "hover:bg-slate-500"},
      {id: 7, nombre: "PostgreSQL", image:posgresql, colors: "hover:bg-slate-900"},
      {id: 8, nombre: "React", image:react, colors: "hover:bg-sky-800"},
      {id: 9, nombre: "NodeJS",image:node, colors: "hover:bg-emerald-900"},
      {id: 10, nombre: "TailwindCSS",image:tailwind, colors: "hover:bg-emerald-300", textColor: "hover:text-black"},

    ]
    const [array, setArray] = useState(listadoSkill);
    setArray;
    return [
      array,
      
    ]
}

