import { ProjectOne, ProjectTwo } from "@subcomponentsPage";
import { useTranslation } from "react-i18next";
export const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="p-6">
        <h2
          className="w-80 text-3xl sm:text-4xl text-white lg:text-5xl
        lg:w-105"
        >
          {t("projectsFea")}
        </h2>
        <h3
          className="w-84 mt-5 text-[1.17rem] sm:text-xl text-stone-400
        lg:text-2xl lg:w-101 md:mb-12"
        >
          {t("descriptionProjects")}
        </h3>
        <ProjectOne />
        <ProjectTwo />
      </section>
    </>
  );
};
