import { useTranslation } from "react-i18next";

export const ButtonTranslate = () => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;
  return (
    <div className="mx-auto">
      <button
        className="border border-stone-800 cursor-pointer 
        w-10 py-1.5 rounded-lg hover:bg-stone-800 transition-colors 
        duration-400"
        onClick={() =>
          currentLanguage === "es"
            ? i18n.changeLanguage("en")
            : i18n.changeLanguage("es")
        }
      >
        {t("btnLanguaje")}
      </button>
    </div>
  );
};
