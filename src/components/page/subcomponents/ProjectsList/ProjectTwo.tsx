import { sspage, github } from "@assets";
import { useTranslation } from "react-i18next";
export const ProjectTwo = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <>
      <article className="lg:flex mt-20">
        <figure
          className="mt-3 w-80 rounded-2xl sm:w-120 overflow-hidden mr-3
          md:w-170 md:ml-7 lg:w-160 lg:h-70 border border-stone-800"
        >
          <img
            src={sspage}
            alt="page"
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
            {t("badgeProject")} 2
          </span>
          <h4 className="text-4xl text-white mt-5 sm:text-5xl">Portfolio</h4>
          <p
            className="mt-2 w-80 text-stone-400 sm:text-2xl sm:w-120 md:w-170
            lg:w-150"
          >
            {t("desctiptionProjectTwo")}
          </p>
          <div className="grid grid-cols-3 sm:flex sm:flex-row space-x-2.5 space-y-3 sm:space-y-0 mt-2.5 w-80">
            <a
              href={
                currentLanguage === "en"
                  ? "https://react.dev/"
                  : "https://es.react.dev/"
              }
              target="_blank"
              className="!text-stone-400 text-center py-0.2 px-3 rounded-2xl border border-stone-800
                 hover:bg-stone-900 transition-colors duration-400
                 md:text-lg"
            >
              React
            </a>
            <a
              href={
                currentLanguage === "en"
                  ? "https://www.typescriptlang.org"
                  : "https://www.typescriptlang.org/es/"
              }
              target="_blank"
              className="!text-stone-400  py-0.2 px-3 rounded-2xl border border-stone-800
                 hover:bg-stone-900 transition-colors duration-400
                 md:text-md"
            >
              TypeScript
            </a>
            <a
              href={
                currentLanguage === "en"
                  ? "https://nodejs.org/en"
                  : "https://nodejs.org/es"
              }
              target="_blank"
              className="!text-stone-400 text-center py-0.2 px-3 rounded-2xl border border-stone-800
                 hover:bg-stone-900 transition-colors duration-400
                 md:text-lg"
            >
              NodeJS
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              className="!text-stone-400  py-0.2 px-3 rounded-2xl border border-stone-800
                 hover:bg-stone-900 transition-colors duration-400
                 md:text-md"
            >
              TailwindCSS
            </a>
          </div>
          <div className="flex flex-row space-x-7 mt-4">
            <a
              href="https://github.com/DumbNoxx/portfolio-react"
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
            <a
              href="https://github.com/DumbNoxx/backendTS"
              target="_blank"
              className="flex border border-stone-800
                 rounded-md px-6 hover:bg-stone-900 transition-colors
                 duration-400 !text-stone-400 py-1
                 md:text-lg"
            >
              <figure>
                <img src={github} alt="github" className="w-5 mr-1 md:w-5.5" />
              </figure>
              {t("btnCode")} 2
            </a>
          </div>
        </header>
      </article>
    </>
  );
};
