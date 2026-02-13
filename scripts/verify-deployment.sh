#!/bin/bash

# Deployment Verification Script for DanData Showcase

echo "🔍 DanData Showcase - Deployment Verification"
echo "=============================================="
echo ""

# Check if we're on the right branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"
echo ""

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "✅ node_modules directory exists"
else
    echo "❌ node_modules not found. Run: npm install"
    exit 1
fi

# Run the build
echo ""
echo "🔨 Running build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Check errors above."
    exit 1
fi

# Check if dist directory was created
if [ -d "dist" ]; then
    echo "✅ dist directory created"
    echo ""
    echo "📦 Build output:"
    ls -lh dist/
else
    echo "❌ dist directory not found"
    exit 1
fi

echo ""
echo "✅ All checks passed! Ready for deployment."
echo ""
echo "📝 Next steps:"
echo "1. Merge this branch to 'main'"
echo "2. GitHub Actions will automatically deploy to GitHub Pages"
echo "3. Visit: https://starlightkristen.github.io/dandata-showcase/"
