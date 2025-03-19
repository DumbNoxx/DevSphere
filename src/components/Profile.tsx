import github from "../assets/images/svg/github.svg";
import linkedin from "../assets/images/svg/linkedin.svg";
import instagram from "../assets/images/svg/instagram.svg";
import dylan from "../assets/images/dylan.jpeg";
import arrow from "../assets/images/svg/arrow-right.svg";
import TypingEffect from "../hooks/TypingEffect";

export const Profile = () => {
  return (
    <>
      <div className="p-8 md:mt-12 lg:mt-40">
        <div>
          <div
            className="text-[0.8rem] w-40 rounded-2xl bg-white text-black
           py-0.5 px-2 font-bold hover:bg-gray-100 transition-colors duration-400
            cursor-pointer mb-3
            2xl:w-63 2xl:text-[1.3rem]"
          >
            Disponible para proyectos
          </div>
        </div>
        <div>
          <TypingEffect />
          <p className="text-2xl sm:text-2xl md:text-md lg:text-3xl mt-3 text-stone-400
          2xl:text-6xl">
            Desarrollador Web & Diseñador PixelArt
          </p>
          <p className="mt-3 text-base w-80 text-stone-400 sm:text-md md:text-sm
           lg:text-lg xl:text-lg 2xl:text-4xl">
            Creo experiencias digitales atractivas y funcionales para la web
            moderna.
          </p>
          <div className="mt-3 flex flex-row">
            <a
              href="https://github.com/DumbNoxx?tab=repositories"
              target="_blank"
              className="!text-black bg-white flex
             w-35.5 py-1.5 px-3 rounded-md mt-3 no-underline
             hover:bg-gray-300 transition-colors duration-400
             2xl:w-48 2xl:text-2xl"
            >
              Ver proyectos
              <img src={arrow} alt="flecha" className="w-5 ml-1 2xl:w-6 2xl:mt-[0.rem] " />
            </a>
            <a
              href="#email"
              className="!text-white mt-3 ml-6 border border-stone-800 py-1.5 px-3
             rounded-md hover:bg-stone-900 transition-colors duration-40
             2xl:text-2xl"
            >
              Contacto
            </a>
          </div>
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
            <a href="https://www.instagram.com/dumb.nox"
            target="_blank">
              <img
                src={instagram}
                alt="email"
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
        </div>
      </div>
    </>
  );
};
