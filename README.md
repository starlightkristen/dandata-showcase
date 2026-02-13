# DanData Showcase

Interactive showcase site demonstrating DanData's capabilities for modern contractors. Built with Vite, React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

[View Live Site](https://starlightkristen.github.io/dandata-showcase/)

## 📋 Features

- **13 Interactive Views** - Full walkthrough of DanData's features
- **Animated Demos** - See the expense processing flow in action
- **Keyboard Navigation** - Use arrow keys to navigate between views
- **Progress Indicator** - Click to jump to any view
- **Mobile Responsive** - Works on all devices
- **Dark Theme** - Professional contractor-focused design

## 🛠️ Local Development

### Prerequisites

- Node.js 20 or higher
- npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/starlightkristen/dandata-showcase.git
cd dandata-showcase
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 📦 Build

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

Preview the production build:

```bash
npm run preview
```

## 🚢 Deployment

This project is configured to automatically deploy to GitHub Pages on every push to the `main` branch.

### Manual Deployment

1. Ensure all changes are committed
2. Push to main: `git push origin main`
3. GitHub Actions will automatically build and deploy

### GitHub Pages Setup

The repository must have GitHub Pages enabled with the following settings:
- Source: GitHub Actions
- Branch: None (deployed via Actions)

## 🎨 Project Structure

```
/
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions deployment
├── src/
│   ├── components/          # Shared UI components
│   │   ├── Navigation.tsx
│   │   ├── ProgressIndicator.tsx
│   │   └── ViewContainer.tsx
│   ├── data/                # Mock data
│   │   ├── projects.ts
│   │   ├── expenses.ts
│   │   ├── invoices.ts
│   │   ├── changeOrders.ts
│   │   ├── dailyLogs.ts
│   │   ├── timeline.ts
│   │   └── index.ts
│   ├── views/               # 13 showcase views
│   │   ├── 01-Hero.tsx
│   │   ├── 02-TheGap.tsx
│   │   ├── 03-ExpenseFlow.tsx
│   │   └── ... (10 more)
│   ├── App.tsx              # Main app controller
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Views Overview

1. **Hero** - Welcome screen with key statistics
2. **The Gap** - Comparison of traditional vs DanData workflow
3. **Expense Flow** - Interactive demo of 8-second expense processing
4. **Invoice Flow** - Invoice generation and tracking
5. **Change Order Flow** - Scope change documentation
6. **Project Dashboard** - Budget and progress tracking
7. **Daily Log Flow** - Quick daily documentation
8. **Intelligence** - AI learning capabilities
9. **Mobile First** - Mobile-optimized design
10. **What's Running** - Current active projects
11. **Evolution** - Development timeline
12. **What's Next** - Upcoming features
13. **Try It Live** - Links to demo app

## ⌨️ Keyboard Shortcuts

- `Arrow Right` / `Arrow Down` - Next view
- `Arrow Left` / `Arrow Up` - Previous view
- Click progress dots to jump to any view

## 🎨 Design System

### Colors
- Primary: Cyan (#06b6d4)
- Secondary: Emerald (#10b981)
- Background: Slate 900/800
- Text: White/Slate shades

### Animations
- View transitions: Spring animation
- Element reveals: Fade & slide
- Duration: 0.3-0.6s

## 🧰 Tech Stack

- **Vite** - Build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📄 License

This is a demo/showcase project for DanData.

## 🤝 Contributing

This is a showcase site. For the main DanData application, please visit the primary repository.

## 📞 Contact

For questions about DanData, please reach out to the development team.
