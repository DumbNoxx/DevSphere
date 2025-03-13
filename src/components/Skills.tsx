import skills from "../assets/styles/Skill.module.css";
import { skillsHook } from "../hooks/skillsHook";

const Array = ({ nombre }: { nombre: string }) => {
  return (
    <>
      <div className={skills.circle}></div>
      <span className={skills.arra}>{nombre}</span>
    </>
  );
};

export const Skills = () => {
  const [array] = skillsHook();
  console.log(array);
  return (
    <>
      <div className={skills["responsive-web"]}>
        <h2 className={skills.title}>Habilidades</h2>
        <p className={skills.des}>Tecnologías y herramientas que domino.</p>
        <div className={skills.gridContainer}>
          {array.map((item) => (
            <div className={skills.container} key={item.id}>
            <Array nombre={item.nombre}></Array>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
