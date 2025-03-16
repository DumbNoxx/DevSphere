import email from "../assets/images/svg/mail-black.svg";
import github from "../assets/images/svg/github.svg";
import linkedin from "../assets/images/svg/linkedin.svg";

export const FooterContacts = () => {
  return (
    <>
      <div className="p-6">
        <h2 className="text-4xl text-white text-center w-80 sm:ml-14 sm:w-120
        md:ml-32 lg:text-5xl lg:mx-auto">
          ¿Interesado en trabajar juntos? 
          </h2>
        <p className="mt-3 text-md text-center w-80 sm:w-120 sm:ml-14 md:ml-32
        lg:text-xl lg:mx-auto lg:mt-12">
          Estoy abierto a oportunidades freelance y proyectos interesantes.
          Contáctame y hablemos sobre cómo puedo ayudarte.
        </p>
        <div className="flex flex-row lg:mt-5">
          <a
            href="#"
            className="flex bg-white py-2 px-4 rounded-lg !text-black
            !font-bold mt-7 mx-17 hover:bg-gray-200 transition-colors duration-400
            sm:mx-50 md:mx-70 lg:mx-auto"
            id='email'
          >
            <img src={email}
             alt="email"
              className="mr-2" />
            Enviame un mail
          </a>
        </div>
        <div className="flex flex-row space-x-4 ml-28 mt-9 sm:ml-60 md:ml-80
        lg:ml-155">
          <a href="https://github.com/DumbNoxx" target="_blank">
            <img
              src={github}
              alt="github"
              className="hover:bg-stone-800 p-1.5 rounded-lg transition-colors duration-400
              border border-stone-800"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/dylan-marcano-994205266"
            target="_blank"
          >
            <img
              src={linkedin}
              alt="linkedin"
              className="hover:bg-stone-800 p-1.5 rounded-lg transition-colors duration-400
              border border-stone-800"
            />
          </a>
        </div>
      </div>
    </>
  );
};
