import { useTypingEffect } from "@hooks";
import { github, linkedin, instagram, dylan, arrowRight } from "@assets";
export const Profile = () => {
  const { visibleText, fullText } = useTypingEffect();
  return (
    <>
      <header className="p-8 md:mt-12 lg:mt-40">
        <span
          className="text-[0.8rem] w-40 rounded-2xl bg-white text-black
           py-0.5 px-2 font-bold hover:bg-gray-100 transition-colors duration-400
            cursor-pointer mb-3
            2xl:w-63 2xl:text-[1.3rem]"
        >
          Disponible para proyectos
        </span>
        <section>
          <article>
            <h1 className="Nombre">
              {visibleText}
              <span style={{ opacity: 0 }}>
                {fullText.slice(visibleText.length)}
              </span>
            </h1>{" "}
            <h2
              className="text-2xl sm:text-2xl md:text-md lg:text-3xl mt-3 text-stone-400
          2xl:text-6xl"
            >
              Desarrollador Web & Desarrollador Móvil.
            </h2>
            <h3
              className="mt-3 text-base w-80 text-stone-400 sm:text-md md:text-sm
           lg:text-lg xl:text-lg 2xl:text-4xl"
            >
              Creo experiencias digitales atractivas y funcionales para la web
              moderna.
            </h3>
            <nav className="mt-3 flex flex-row">
              <a
                href="https://github.com/DumbNoxx?tab=repositories"
                target="_blank"
                className="!text-black bg-white flex
             w-35.5 py-1.5 px-3 rounded-md mt-3 no-underline
             hover:bg-gray-300 transition-colors duration-400
             2xl:w-48 2xl:text-2xl"
              >
                Ver proyectos
                <figure>
                  <img
                    src={arrowRight}
                    alt="flecha"
                    className="w-5 ml-1 lg:mt-[0.2rem] 2xl:w-6 2xl:mt-[0.rem] "
                  />
                </figure>
              </a>
              <a
                href="#email"
                className="!text-white mt-3 ml-6 border border-stone-800 py-1.5 px-3
             rounded-md hover:bg-stone-900 transition-colors duration-40
             2xl:text-2xl"
              >
                Contacto
              </a>
            </nav>
            <figure>
              <div className="flex flex-row mt-3 space-x-4">
                <a href="https://github.com/DumbNoxx" target="_blank">
                  <img
                    src={github}
                    alt="github"
                    className="w-8 p-1.5 hover:bg-stone-900 transition-colors duration-400
                  rounded-md 2xl:w-10"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/dylan-marcano-994205266"
                  target="_blank"
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="w-8 p-1.5 hover:bg-stone-900 transition-colors duration-400
               rounded-md 2xl:w-10"
                  />
                </a>
                <a href="https://www.instagram.com/dumb.nox" target="_blank">
                  <img
                    src={instagram}
                    alt="instagram"
                    className="w-8 p-1.5 hover:bg-stone-900 transition-colors duration-400
                  rounded-md 2xl:w-10"
                  />
                </a>
              </div>
              <div
                className="size-70 mt-6 md:size-60 lg:size-100 border-5 border-stone-600 rounded-full overflow-hidden
              md:ml-120 lg:ml-180 md:-mt-60 lg:-mt-85 2xl:ml-300 2xl:mr-100"
              >
                <img src={dylan} alt="dylan" className="w-lg h-sm -mt-16" />
              </div>
            </figure>
          </article>
        </section>
      </header>
    </>
  );
};
