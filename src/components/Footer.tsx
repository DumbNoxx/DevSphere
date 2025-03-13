import footer from "../assets/styles/Footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={footer["responsive-web"]}>
        <footer className={footer.footer}>
          <p>© 2025 Dylan. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado con ❤️</p>
        </footer>
      </div>
    </>
  );
};
