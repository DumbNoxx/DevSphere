import constacts from "../assets/styles/FooterContacts.module.css";
import email from "../assets/images/svg/mail-black.svg";
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
          <a href="https://lucide.dev/icons/arrow-right" className={constacts.email}>
          <img src={email} alt="email" className={constacts.iconEmail} />
            kevinmarcano0921@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};
