import { execa } from "execa";
import { KittyWindow } from "./types";

export const getKittyTabData = async (): Promise<KittyWindow[]> => {
  const { stdout } = await execa("kitty", ["@", "ls"]);
  return JSON.parse(stdout);
};

export const focusTab = async (tabId: number): Promise<void> => {
  await execa("kitty", ["@", "focus-tab", "--match", `id:${tabId}`])
};
