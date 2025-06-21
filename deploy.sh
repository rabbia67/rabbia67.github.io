#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed, aborting deployment"
  exit 1
fi

# Navigate to the build output directory
cd dist

# Create .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Initialize git
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch
git push -f git@github.com:jahangir842/portfolio.git main:gh-pages

cd ..

echo "Deployment complete!" 