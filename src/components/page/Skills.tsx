import { FrontendSkills, BackendSkills, ToolsSkills } from "@subcomponentsPage";
import { useTranslation } from "react-i18next";
import { Tab } from "@subcomponentsG";

export const Skills = () => {
  const { t } = useTranslation();
  const items = [
    { title: "Frontend", content: <FrontendSkills />, color: "#39ff14" },
    { title: "Backend", content: <BackendSkills />, color: "#6e55b2" },
    { title: "Tools", content: <ToolsSkills />, color: "#e5802d" },
  ];
  return (
    <>
      <section className="p-6">
        <h2 className="text-4xl text-white md:text-5xl lg:text-center">
          {t("skills")}
        </h2>
        <h3 className="text-xl text-stone-400 md:text-2xl lg:text-center lg:mb-10">
          {t("descriptionSkills")}
        </h3>
        {items.map((item) => (
          <div className={`bg-[${item.color}]`}>
            <Tab config={{ items }} />
          </div>
        ))}
      </section>
    </>
  );
};
