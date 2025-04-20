import { useTab } from "@hooks";
import { getTabConfig } from "@helpers";
import type { PropsTabs } from "@interfaces";

export const Tab = ({ config }: PropsTabs) => {
  const finalConfig = getTabConfig(config);
  const { tabs, activeTab, setActiveTabs } = useTab(finalConfig);

  return (
    <>
      <div>
        <div className="flex space-x-2 mb-4 justify-center">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTabs(i)}
              disabled={tab.disable}
              className={`py-1 px-3 rounded ${
                i === activeTab
                  ? "bg-stone-800 text-white"
                  : "bg-white text-black hover:bg-stone-700 transition-colors duration-400"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div>{tabs[activeTab].content}</div>
      </div>
    </>
  );
};
