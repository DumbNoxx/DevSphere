import { useState } from "react"

export const skillsHook = () => {
    const listadoSkill = [
      {id: 0, nombre: "Python"},
      {id: 1, nombre: "TypeScript"},
      {id: 2, nombre: "JavaScript"},
      {id: 3, nombre: "C"},
      {id: 4, nombre: "C++"},
      {id: 5, nombre: "Git"},
      {id: 6, nombre: "Bash"},
      {id: 7, nombre: "PostgreSQL"},
    ]
    const [array, setArray] = useState(listadoSkill);
    return [
      array,
    ]
}

