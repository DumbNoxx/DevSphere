import projects from "../assets/styles/Projects.module.css";
import inventech from "../assets/images/inventech.png";
import github from "../assets/images/svg/github.svg";
import arrow from "../assets/images/svg/arrow-right.svg";

export const Projects = () => {
  return (
    <>
      <div className="p-6">
        <h2 className="w-80 text-4xl text-white">
          Proyectos Destacados
        </h2>
        <p className="w-84 mt-5 text-xl text-stone-400">
          Una seleccion de mis proyectos recientes.
        </p>
        <div>
          <div className="mt-3 rounded-2xl overflow-hidden">
            <img
              src={inventech}
              alt="inventech"
              className=""
            />
          </div>
          <div className={projects.desProject}>
            <span className={projects.badged1}>Proyecto 1</span>
            <h3 className={projects.titleDes}>InvenTech</h3>
            <p className={projects.desDes}>
              InvenTech es una aplicación de escritorio para manejo de
              inventario, actualmente no esta terminada por algunos
              inconvenientes, sin embargo, si esta dentro de los planes
              terminarla.
            </p>
            <div>
              <span className={projects.badgedDes}>
                <a href="https://www.python.org/" target="_blank">
                  Python
                </a>
              </span>
              <span className={projects.badgedDes}>
                <a
                  href="https://customtkinter.tomschimansky.com/"
                  target="_blank"
                >
                  Custom Tkinter
                </a>
              </span>
            </div>
            <div className={projects.links1}>
              <div className={projects.CodigoProject1}>
                <a href="#" className={projects.codigoProject1}>
                  <div>
                    <img src={github} alt="github" />
                  </div>
                  Codigo
                </a>
              </div>
              <div >
                <a href="#" className={projects.VerProyectos}>
                  Ver proyecto
                  <img src={arrow} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
