# ktab

Fuzzy tab switcher for kitty.

Jump between tabs instantly using a keyboard-driven picker powered by fzf.

---

## Why

When you’re working with multiple tabs for the same repo (build, logs, debugging, experiments), switching becomes slow and breaks flow.

ktab solves that by giving you a fast fuzzy picker:
- type a few characters  
- hit enter  
- jump to the tab instantly  

---

## Features

- Fuzzy search across all open tabs in active kitty window
- Keyboard-first workflow  
- Uses tab titles (intent-based naming)  
- Works well even with many tabs  
- Lightweight and fast  

---

## Installation

```bash
npm install -g ktab
```

---

## Requirements

- kitty terminal  
- fzf installed on your system  

---

## Usage

Just run:

```bash
ktab
```

Pick a tab → press enter → you’re switched.

---

## Kitty Keybinding (Recommended)

Add this to your kitty config:

```bash
map ctrl+p launch --type=overlay zsh -ic "ktab"
```

Then:
- press `Ctrl + P`
- fuzzy search
- jump instantly

---

## Example Workflow

You have multiple tabs:
- `cli-build`
- `ai-chat`
- `debug-auth`
- `logs`

Instead of cycling manually:
- press `Ctrl + P`
- type `auth`
- hit enter  
→ you’re in `debug-auth`

---

## Contributing

Feel free to open issues or PRs if you have ideas or improvements.

---

## License

Copyright (c) 2026 Deepanshu Upadhyay. Licensed under the [MIT License](LICENSE).
