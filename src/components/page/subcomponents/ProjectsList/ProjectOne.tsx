import { palindromeChecker, github } from "@assets";
import { useTranslation } from "react-i18next";

export const ProjectOne = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <>
      <article className="lg:flex">
        <figure
          className="mt-3 w-80 rounded-2xl sm:w-120 overflow-hidden mr-3
          md:w-170 md:ml-7 lg:w-160 lg:h-70"
        >
          <img
            src={palindromeChecker}
            alt="palindromeChecker"
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
            {t("badgeProject")} 1
          </span>
          <h4 className="text-4xl text-white mt-5 sm:text-5xl">
            Palindrome Checker
          </h4>
          <p
            className="mt-2 w-80 text-stone-400 sm:text-2xl sm:w-120 md:w-170
            lg:w-150"
          >
            {t("descriptionProjectOne")}
          </p>
          <div className="flex flex-row space-x-2.5 mt-2.5">
            <a
              href={
                currentLanguage === "en"
                  ? "https://developer.mozilla.org/en-US/docs/Web/HTML"
                  : "https://developer.mozilla.org/es/docs/Web/HTML"
              }
              target="_blank"
              className="!text-stone-400  py-0.2 px-3 rounded-2xl border border-stone-800
                 hover:bg-stone-900 transition-colors duration-400
                 md:text-md"
            >
              HTML5
            </a>
            <a
              href={
                currentLanguage === "en"
                  ? "https://developer.mozilla.org/en-US/docs/Web/CSS"
                  : "https://developer.mozilla.org/es/docs/Web/CSS"
              }
              target="_blank"
              className="!text-stone-400  py-0.2 px-3 rounded-2xl border border-stone-800
                 hover:bg-stone-900 transition-colors duration-400
                 md:text-md"
            >
              CSS
            </a>
            <a
              href={
                currentLanguage === "en"
                  ? "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  : "https://developer.mozilla.org/es/docs/Web/JavaScript"
              }
              target="_blank"
              className="!text-stone-400  py-0.2 px-3 rounded-2xl border border-stone-800
                 hover:bg-stone-900 transition-colors duration-400
                 md:text-lg"
            >
              JavaScript
            </a>
          </div>
          <div className="flex flex-row space-x-7 mt-4">
            <a
              href="https://github.com/DumbNoxx/Palindrome-Checker"
              target="_blank"
              className="flex border border-stone-800
                 rounded-md px-6 hover:bg-stone-900 transition-colors
                 duration-400 !text-stone-400 py-1
                 md:text-lg"
            >
              <figure>
                <img src={github} alt="github" className="w-5 mr-1 md:w-5.5" />
              </figure>
              {t("btnCode")}
            </a>
          </div>
        </header>
      </article>
    </>
  );
};
