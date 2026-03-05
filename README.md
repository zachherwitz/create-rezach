# create-rezach

Scaffold minimal Vite + React + TS projects without the bloat.

## Usage

```bash
npm create rezach my-project
```

You'll be prompted to pick a template. Then:

```bash
cd my-project
npm install
npm run dev
```

## Available Templates

| Template | Includes | Doesn't Include |
|---|---|---|
| `react-ts-bare` | Vite, React, TypeScript | No CSS, no styling setup |
| `react-ts-tailwind` | Vite, React, TypeScript, Tailwind CSS | No component library |

All templates start with an empty `App.tsx` — no logos, counters, or demo code.

## Adding Your Own Template

1. Create a folder under `templates/` (e.g. `templates/my-template/`)
2. Add your project files inside it
3. Use `{{project-name}}` in `package.json` as a placeholder for the project name
4. That's it — the CLI auto-discovers new templates

## Local Development

```bash
git clone https://github.com/your-username/create-rezach.git
cd create-rezach
npm install
npm run build
node bin/cli.js test-project
```

## Publishing

```bash
npm publish --access public
```
