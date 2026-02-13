# Deployment Guide

## Automatic Deployment to GitHub Pages

The DanData showcase is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

### Prerequisites

1. GitHub Pages must be enabled in repository settings
2. GitHub Actions must have proper permissions

### Deployment Steps

#### Option 1: Via Pull Request (Recommended)

1. The current branch `copilot/rebuild-showcase-design` contains all the showcase code
2. Create a Pull Request to merge into `main` branch
3. Once the PR is reviewed and merged, GitHub Actions will automatically:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

#### Option 2: Direct Push to Main

If you have push access to main:

```bash
# Switch to main branch
git checkout main

# Merge the rebuild branch
git merge copilot/rebuild-showcase-design

# Push to trigger deployment
git push origin main
```

### GitHub Pages Configuration

Ensure the following settings are configured in your GitHub repository:

1. Go to **Settings** → **Pages**
2. Under "Build and deployment":
   - Source: **GitHub Actions**
3. The workflow will use the `.github/workflows/deploy.yml` configuration

### Verifying Deployment

After pushing to main:

1. Go to **Actions** tab in GitHub repository
2. Watch the "Deploy to GitHub Pages" workflow run
3. Once complete, the site will be available at:
   `https://starlightkristen.github.io/dandata-showcase/`

### Build Verification

Before deploying, you can verify the build locally:

```bash
# Install dependencies
npm install

# Run the build
npm run build

# Preview the build locally
npm run preview
```

### Troubleshooting

**Build Fails:**
- Check `npm run build` succeeds locally
- Ensure all dependencies are in `package.json`
- Check GitHub Actions logs for specific errors

**Deployment Fails:**
- Verify GitHub Pages is enabled
- Check Actions permissions in Settings → Actions → General
- Ensure workflow has `pages: write` permission

**404 on Deployed Site:**
- Verify the base path in `vite.config.ts` matches repository name
- Current setting: `base: '/dandata-showcase/'`
