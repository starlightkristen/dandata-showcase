# DanData Showcase - Built for Momentum

Interactive showcase demonstrating DanData's capabilities with **honest**, **realistic**, and **fully interactive** demos.

## 🎯 What This Is

A 9-view interactive showcase that honestly demonstrates what DanData does:
- No inflated AI claims
- Real time breakdowns (3 sec AI + 2 sec manual = 5 sec total)
- Fully interactive demos you can actually use
- Realistic mock data from a cohesive construction project story

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 The 9 Essential Views

1. **Hero** - "Built for Momentum" landing page with real stats
2. **The Reality** - Dan's day: 90 seconds of paperwork vs 2+ hours
3. **Expense Flow** ⭐ - Fully interactive 5-second demo (try it!)
4. **Intelligence** - Honest breakdown: What AI does vs what you control
5. **Invoice Flow** - Interactive 3-day payment timeline
6. **Change Order Flow** - Capture $935 in 30 seconds walkthrough
7. **Daily Logs** - 60-second protection with auto-populated fields
8. **Project Dashboard** - Real-time financials with Wilson Kitchen data
9. **What This Means** - Impact summary: 18 days saved per year

## 🎮 Interactive Features

- **Expense Flow Demo**: Run the actual process with timing
- **Navigation Dots**: Click any view on the left sidebar
- **Timeline Controls**: Advance/go back through invoice/CO flows
- **Project Selection**: Choose from real mock projects

## 📊 Built With

- **React 18** + **TypeScript** for type safety
- **Vite** for fast dev and optimized builds
- **Tailwind CSS** for responsive styling
- **Lucide React** for icons

## 📖 Documentation

See [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) for:
- Detailed view descriptions
- Mock data structure
- Technology decisions
- File structure guide

## 🎨 Design Philosophy

**Honest over Hype**
- Clear time breakdowns
- Manual steps acknowledged
- Real numbers, not inflated claims

**Interactive over Static**
- Working demos, not just screenshots
- Timeline controls you can use
- Real state management

**Realistic over Generic**
- Cohesive project story
- Actual contractor workflow
- Emotional impact (family time)

## 🏗️ Project Structure

```
src/
  ├── data/
  │   └── dans-quarter.ts        # Wilson Kitchen + supporting projects
  ├── views/
  │   ├── Hero.tsx               # View 1
  │   ├── TheReality.tsx         # View 2
  │   ├── ExpenseFlow.tsx        # View 3 (interactive demo)
  │   └── ...                    # Views 4-9
  ├── types.ts                   # TypeScript interfaces
  └── App.tsx                    # Main app with navigation
```

## ✨ The Bottom Line

This showcase demonstrates DanData **honestly**:
- AI handles 3 seconds of data entry
- You make 2 seconds of decisions
- **5 seconds total** vs 15 minutes manual
- **Result**: 18 extra days per year

**No BS. Just results.**

---

## 🛠️ Development Notes

Built with Vite + React + TypeScript. For ESLint configuration options, see the original Vite template documentation below.

<details>
<summary>Original Vite Template Info (click to expand)</summary>

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules. See the Vite documentation for details.

</details>
