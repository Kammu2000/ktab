import { KittyTab, KittyWindow, Tab } from "./types";

export const parseTabs = (windows: KittyWindow[]): Tab[] => {
  const activeWindow = windows.find(window => window.is_active); 
  const tabs = activeWindow?.tabs;

  if(!tabs){
    throw new Error("Unable to get tabs data from current active window of kitty");
  }
  
  return tabs.map((tab: KittyTab): Tab => ({
    id: tab.id,
    title: tab.title
  }));
};
