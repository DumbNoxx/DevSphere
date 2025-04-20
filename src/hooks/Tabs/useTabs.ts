import { useState } from "react";
import type { TabItem, TabConfig, UseTabReturn } from "@interfaces";

/**
 * Custom hook to manage tab navigation.
 *
 * @param {TabConfig} config - Configuration object for the tabs.
 * @param {number} [config.initialTab=0] - The index of the initial active tab.
 * @param {TabItem[]} config.items - Array of tab items.
 * @returns {UseTabReturn} - An object containing the tabs, active tab index, and tab navigation functions.
 * @returns {TabItem[]} tabs - The list of tab items.
 * @returns {number} activeTab - The index of the currently active tab.
 * @returns {Function} setActiveTabs - Function to set the active tab by index.
 * @returns {Function} nextTab - Function to navigate to the next tab.
 * @returns {Function} prevTab - Function to navigate to the previous tab.
 */
export const useTab = (config: TabConfig): UseTabReturn => {
  const [activeTab, setActiveTab] = useState<number>(config.initialTab || 0);

  const [tabs] = useState<TabItem[]>(config.items);

  /**
   * Sets the active tab by index.
   *
   * @param {number} index - The index of the tab to activate.
   */
  const setActiveTabs = (index: number) => {
    if (index >= 0 && index < tabs.length && !tabs[index].disable)
      setActiveTab(index);
  };

  /**
   * Navigates to the next tab.
   */
  const nextTab = () => {
    const nextIndex = (activeTab + 1) % tabs.length;
    setActiveTabs(nextIndex);
  };

  /**
   * Navigates to the previous tab.
   */
  const prevTab = () => {
    const prevIndex = (activeTab - 1 + tabs.length) % tabs.length;
    setActiveTabs(prevIndex);
  };

  return {
    tabs,
    activeTab,
    setActiveTabs,
    nextTab,
    prevTab,
  };
};
