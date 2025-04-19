import { useTranslation } from "react-i18next";
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="flex flex-row justify-center text-center mb-4 -mt-14 lg:-mt-16">
        <div className="grid text-xs sm:text-sm lg:text-base">
          <p>© 2025 Dylan. 🌐 {t("footerMIT")}.</p>
          <p>{t("footerLoved")} ❤️</p>
        </div>
      </footer>
    </>
  );
};
