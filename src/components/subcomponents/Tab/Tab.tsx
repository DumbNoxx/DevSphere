import { useTab } from "@hooks";
import { getTabConfig } from "@helpers";
import type { PropsTabs } from "@interfaces";

export const Tab = ({ config }: PropsTabs) => {
  const finalConfig = getTabConfig(config);
  const { tabs, activeTab, setActiveTabs } = useTab(finalConfig);

  return (
    <>
      <div className="border rounded-3xl p-4 pb-8">
        <div className={`flex space-x-9 mb-4 justify-center `}>
          {tabs.map((tab, i) => (
            <div key={i} className="relative">
              <div
                className={`${
                  i === activeTab ? "absolute inset-0 blur-lg " : ""
                }`}
                style={{ backgroundColor: tab.color, zIndex: -1 }}
              ></div>
              <button
                onClick={() => setActiveTabs(i)}
                disabled={tab.disable}
                className={`py-1 px-3 rounded ${
                  i === activeTab
                    ? "bg-transparent text-white"
                    : `bg-white text-black hover:bg-[${tab.color}]`
                }`}
              >
                {tab.title}
              </button>
            </div>
          ))}
        </div>
        <div>{tabs[activeTab].content}</div>
      </div>
    </>
  );
};
