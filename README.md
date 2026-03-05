# create-rezach

Scaffold minimal Vite + React + TS projects without the bloat.

## Usage

```bash
npm create rezach my-project
```

You'll be prompted to pick a template:

```
? Select a template: ›
❯   react-ts-bare
    react-ts-tailwind
```

Then get started:

```bash
cd my-project
npm install
npm run dev
```

## Available Templates

### `react-ts-bare` (default)

The absolute minimum — just Vite + React + TypeScript. No CSS files, no styling opinions. You bring your own.

**What you get:**
- `App.tsx` — empty component (`<></>`)
- `main.tsx` — mounts App to `#root`
- `vite.config.ts`, `tsconfig.json` — pre-configured
- `package.json` — only `react`, `react-dom`, `vite`, `typescript`, and their types

### `react-ts-tailwind`

Everything in `react-ts-bare`, plus Tailwind CSS wired up and ready to go.

**What's added on top:**
- `tailwind.config.js` — `content` pointed at `./src/**/*.{ts,tsx}`
- `postcss.config.js` — with `tailwindcss` and `autoprefixer`
- `src/index.css` — the 3 Tailwind directives (`@tailwind base/components/utilities`)
- `main.tsx` imports `index.css` automatically

All templates start with an empty `App.tsx` — no logos, counters, or demo code.

## Adding Your Own Template

1. Create a folder under `templates/` (e.g. `templates/my-template/`)
2. Add your project files inside it
3. Use `{{project-name}}` in `package.json` as a placeholder for the project name
4. That's it — the CLI auto-discovers new templates

## Local Development

```bash
git clone https://github.com/zachherwitz/create-rezach.git
cd create-rezach
npm install
npm run build
node bin/cli.js test-project
```

## Publishing

```bash
npm publish --access public
```
