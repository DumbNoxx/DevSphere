import inicio from "../assets/styles/Profile.module.css";
import github from "../assets/images/svg/github.svg";
import linkedin from "../assets/images/svg/linkedin.svg";
import email from "../assets/images/svg/mail.svg";
import dylan from "../assets/images/dylan.jpeg";
import arrow from "../assets/images/svg/arrow-right.svg";
import TypingEffect from "../hooks/TypingEffect";

export const Profile = () => {
  return (
    <>
      <div className="p-8">
        <div>
          <div
            className="text-[0.8rem] w-40 rounded-2xl bg-white text-black
           py-0.5 px-2 font-bold hover:bg-gray-100 transition-colors duration-400
            cursor-pointer sm:bg-amber-950 mb-3"
          >
            Disponible para proyectos
          </div>
        </div>
        <div>
          <TypingEffect />
          <p className="text-2xl sm:text-3xl mt-3">
            Desarrollador Web & Diseñador PixelArt
          </p>
          <p className="mt-3 text-base sm:text-lg">
            Creo experiencias digitales atractivas y funcionales para la web
            moderna.
          </p>
          <div className="mt-3 flex flex-row">
            <a href="#" className="text-black bg-white flex
             w-35.5 py-1.5 px-3 rounded-md mt-3 no-underline
             hover:bg-gray-300 transition-colors duration-400"
             style={{ color: 'black', textDecoration: 'none' }}>
              Ver proyectos
              <img src={arrow} alt="flecha"
              className="w-5 ml-1"
              />
            </a>
            <a href="#email"
             className="mt-3 ml-6 border border-stone-800 py-1.5 px-3
             rounded-md hover:bg-stone-900 transition-colors duration-400"
             style={{ color: 'white', textDecoration: 'none' }}>
              Contacto 
            </a>
          </div>
          <div className={inicio.back}>
            <a href="https://github.com/DumbNoxx" target="_blank">
              <img src={github} alt="github" className={inicio.githubProfile} />
            </a>
            <a
              href="https://www.linkedin.com/in/dylan-marcano-994205266"
              target="_blank"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className={inicio.linkedinProfile}
              />
            </a>
            <a href="#">
              <img src={email} alt="email" className={inicio.emailProfile} />
            </a>
          </div>
          <div className={inicio.Dylan}>
            <img src={dylan} alt="dylan" className={inicio.dylan} />
          </div>
        </div>
        <div className={inicio.separador}></div>
      </div>
    </>
  );
};
