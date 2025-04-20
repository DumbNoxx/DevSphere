import * as React from "react";

export interface TabItem {
  title: string;
  content: string | React.JSX.Element;
  disable?: boolean;
  icon?: string;
}

export interface TabConfig {
  items: TabItem[];
  initialTab?: number;
  orientation?: "horizontal" | "vertical";
}

export interface PropsTabs {
  config: TabConfig;
}

export interface UseTabReturn {
  tabs: TabItem[];
  activeTab: number;
  setActiveTabs: (index: number) => void;
  nextTab: () => void;
  prevTab: () => void;
}
