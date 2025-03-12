import projects from "../assets/styles/Projects.module.css";
import test from "../assets/images/test.png";
export const Projects = () => {
  return (
    <>
      <div className={projects["responsive-web"]}>
        <h1 className={projects.title}>Proyectos Destacados</h1>
        <p className={projects.desp}>Una seleccion de mis proyectos recientes.</p>
        <div>
          <div className={projects.borderImg}>
          <img src={test} alt="test" className={projects.test} />
          </div>
        </div>
      </div>
    </>
  );
};
