import constacts from "../assets/styles/FooterContacts.module.css";
import email from "../assets/images/svg/mail-black.svg";
import github from "../assets/images/svg/github.svg";
import linkedin from "../assets/images/svg/linkedin.svg";

export const FooterContacts = () => {
  return (
    <>
      <div className={constacts["responsive-web"]}>
        <h2 className={constacts.title}>¿Interesado en trabajar juntos? </h2>
        <p className={constacts.des}>
          Estoy abierto a oportunidades freelance y proyectos interesantes.
          Contáctame y hablemos sobre cómo puedo ayudarte.
        </p>
        <div className={constacts.emailContainer}>
          <a
            href="#"
            className={constacts.email}
            id='email'
          >
            <img src={email} alt="email" className={constacts.iconEmail} />
            Enviame un mail
          </a>
        </div>
        <div className={constacts.back}>
          <a href="https://github.com/DumbNoxx" target="_blank">
            <img
              src={github}
              alt="github"
              className={constacts.githubProfile}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/dylan-marcano-994205266"
            target="_blank"
          >
            <img
              src={linkedin}
              alt="linkedin"
              className={constacts.linkedinProfile}
            />
          </a>
        </div>
      </div>
    </>
  );
};
