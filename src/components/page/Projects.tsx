import { inventech, github, sspage } from "@/assets/images/indexImages";

export const Projects = () => {
  return (
    <>
      <section className="p-6">
        <h2
          className="w-80 text-3xl sm:text-4xl text-white lg:text-5xl
        lg:w-105"
        >
          Proyectos Destacados
        </h2>
        <h3
          className="w-84 mt-5 text-[1.17rem] sm:text-xl text-stone-400
        lg:text-2xl lg:w-101"
        >
          Una seleccion de mis proyectos recientes.
        </h3>
        <article className="lg:flex">
          <figure
            className="mt-3 w-80 rounded-2xl sm:w-120 overflow-hidden mr-3
          md:w-170 md:ml-7 lg:w-160 lg:h-70"
          >
            <img
              src={inventech}
              alt="inventech"
              className="sm:w-120 md:w-170 lg:w-160 lg:h-70"
            />
          </figure>
          <header className="mt-4 px-3.5 sm:mt-5 sm:ml-3">
            <span
              className="bg-white text-black py-1.5 px-2
            rounded-2xl text-[0.8rem] hover:bg-gray-100 transition-colors
            duration-400 cursor-pointer font-bold
            md:text-[0.9rem]"
            >
              Proyecto 1
            </span>
            <h4 className="text-4xl text-white mt-5 sm:text-5xl">InvenTech</h4>
            <p
              className="mt-2 w-80 text-stone-400 sm:text-2xl sm:w-120 md:w-170
            lg:w-150"
            >
              InvenTech es una aplicación de escritorio para manejo de
              inventario, actualmente no esta terminada por algunos
              inconvenientes, sin embargo, si esta dentro de los planes
              terminarla.
            </p>
            <div className="flex flex-row space-x-2.5 mt-2.5">
              <a
                href="https://www.python.org/"
                target="_blank"
                className="!text-stone-400  py-0.2 px-3 rounded-2xl border border-stone-800
                 hover:bg-stone-900 transition-colors duration-400
                 md:text-lg"
              >
                Python
              </a>
              <a
                href="https://customtkinter.tomschimansky.com/"
                target="_blank"
                className="!text-stone-400  py-0.2 px-3 rounded-2xl border border-stone-800
                 hover:bg-stone-900 transition-colors duration-400
                 md:text-md"
              >
                Custom Tkinter
              </a>
            </div>
            <div className="flex flex-row space-x-7 mt-4">
              <a
                href="https://github.com/DumbNoxx/InvenTech2"
                target="_blank"
                className="flex border border-stone-800
                 rounded-md px-6 hover:bg-stone-900 transition-colors
                 duration-400 !text-stone-400 py-1
                 md:text-lg"
              >
                <figure>
                  <img
                    src={github}
                    alt="github"
                    className="w-5 mr-1 md:w-5.5"
                  />
                </figure>
                Codigo
              </a>
            </div>
          </header>
        </article>
        {/* Segundo proyecto */}
        <article className="lg:flex mt-20">
          <figure
            className="mt-3 w-80 rounded-2xl sm:w-120 overflow-hidden mr-3
          md:w-170 md:ml-7 lg:w-160 lg:h-70 border border-stone-800"
          >
            <img
              src={sspage}
              alt="page"
              className="sm:w-120 md:w-170 lg:w-160 lg:h-70"
            />
          </figure>
          <header className="mt-4 px-3.5 sm:mt-5 sm:ml-3">
            <span
              className="bg-white text-black py-1.5 px-2
            rounded-2xl text-[0.8rem] hover:bg-gray-100 transition-colors
            duration-400 cursor-pointer font-bold
            md:text-[0.9rem]"
            >
              Proyecto 2
            </span>
            <h4 className="text-4xl text-white mt-5 sm:text-5xl">Portfolio</h4>
            <p
              className="mt-2 w-80 text-stone-400 sm:text-2xl sm:w-120 md:w-170
            lg:w-150"
            >
              No puede faltar mi propio portafolio, el cual utiliza un backend
              hecho por mi mismo para que puedas enviarme un correo electronico
              para contactarme, ademas de poner en prueba mis conocimientos
              sobre el frontend.
            </p>
            <div className="grid grid-cols-3 sm:flex sm:flex-row space-x-2.5 space-y-3 sm:space-y-0 mt-2.5 w-80">
              <a
                href="https://react.dev/"
                target="_blank"
                className="!text-stone-400 text-center py-0.2 px-3 rounded-2xl border border-stone-800
                 hover:bg-stone-900 transition-colors duration-400
                 md:text-lg"
              >
                React
              </a>
              <a
                href="https://www.typescriptlang.org"
                target="_blank"
                className="!text-stone-400  py-0.2 px-3 rounded-2xl border border-stone-800
                 hover:bg-stone-900 transition-colors duration-400
                 md:text-md"
              >
                TypeScript
              </a>
              <a
                href="https://nodejs.org"
                target="_blank"
                className="!text-stone-400 text-center py-0.2 px-3 rounded-2xl border border-stone-800
                 hover:bg-stone-900 transition-colors duration-400
                 md:text-lg"
              >
                NodeJS
              </a>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                className="!text-stone-400  py-0.2 px-3 rounded-2xl border border-stone-800
                 hover:bg-stone-900 transition-colors duration-400
                 md:text-md"
              >
                TailwindCSS
              </a>
            </div>
            <div className="flex flex-row space-x-7 mt-4">
              <a
                href="https://github.com/DumbNoxx/portfolio-react"
                target="_blank"
                className="flex border border-stone-800
                 rounded-md px-6 hover:bg-stone-900 transition-colors
                 duration-400 !text-stone-400 py-1
                 md:text-lg"
              >
                <figure>
                  <img
                    src={github}
                    alt="github"
                    className="w-5 mr-1 md:w-5.5"
                  />
                </figure>
                Codigo
              </a>
              <a
                href="https://github.com/DumbNoxx/backendTS"
                target="_blank"
                className="flex border border-stone-800
                 rounded-md px-6 hover:bg-stone-900 transition-colors
                 duration-400 !text-stone-400 py-1
                 md:text-lg"
              >
                <figure>
                  <img
                    src={github}
                    alt="github"
                    className="w-5 mr-1 md:w-5.5"
                  />
                </figure>
                Codigo 2
              </a>
            </div>
          </header>
        </article>
      </section>
    </>
  );
};
