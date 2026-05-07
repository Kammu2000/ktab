#!/usr/bin/env node

import { getKittyTabData, focusTab } from "../src/kittyUtils";
import { parseTabs } from "../src/parseTabs";
import { pickTab } from "../src/pickTab";

export const main = async (): Promise<void> => {
  const data = await getKittyTabData();
  const tabs = parseTabs(data);

  const selected = await pickTab(tabs);

  if (!selected) return;
  await focusTab(selected);
}

main();
