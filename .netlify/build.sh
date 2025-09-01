#!/bin/bash

# Force Astro build and prevent Hugo detection
echo "🚀 Starting Astro build process..."

# Ensure we're using Node.js
node --version
npm --version

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building Astro project..."
npm run build

# Verify build output
echo "✅ Build complete. Checking dist folder..."
ls -la dist/

echo "🎉 Astro build successful!"
