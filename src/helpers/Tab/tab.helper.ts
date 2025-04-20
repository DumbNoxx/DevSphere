import { TabConfig } from "@interfaces";

/**
 * Merges the provided tab configuration with default values.
 *
 * @param {TabConfig} config - The tab configuration provided by the user.
 * @returns {TabConfig} The merged tab configuration with defaults applied.
 */
export const getTabConfig = (config: TabConfig): TabConfig => {
  const defaults: Pick<TabConfig, "initialTab" | "orientation"> = {
    initialTab: 0,
    orientation: "vertical",
  };
  return {
    ...defaults,
    ...config,
  };
};
