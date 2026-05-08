import { execa } from "execa";
import { Tab } from "./types";

function formatTab(tab: Tab): string {
  return `${tab.id}:${tab.title}`;
}

export const pickTab = async (tabs: Tab[]): Promise<number | null> => {
  const input = tabs.map(formatTab).join("\n");

  try {
    const { stdout } = await execa("fzf", {
      input,
      env: {
        ...process.env,
        FZF_DEFAULT_OPTS: `
          --height=40%
          --reverse
          --border
          --prompt="Tabs > "
        `
      }
    });

    return stdout ? Number(stdout.split(":")[0]) : null;
  } catch (err) {
    // ESC / Ctrl+C case
    return null;
  }
}
