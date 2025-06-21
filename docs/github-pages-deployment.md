# GitHub Pages Deployment Troubleshooting

## Problem

When deploying the React/Vite portfolio site to GitHub Pages, only the HTML content was loading but not the JavaScript. This resulted in a blank page with no interactive elements or styling.

The main issue was that the built JavaScript and CSS files were not being loaded correctly due to path resolution problems in the GitHub Pages environment.

## Symptoms

- Local development server worked fine (`npm run dev`)
- Local production preview worked fine (`npm run preview`)
- GitHub Pages deployment showed only basic HTML without any styling or functionality
- Browser console showed 404 errors for JavaScript and CSS files

## Root Cause

The problem was related to how assets were being referenced in the built HTML file:

1. **Absolute Path References**: The default Vite configuration was generating absolute paths (e.g., `/assets/file.js`) which don't work properly in GitHub Pages when the site is hosted in a subdirectory.

2. **Base Path Configuration**: The `base` path in `vite.config.ts` was initially set to `/portfolio/` which caused assets to be referenced as `/portfolio/assets/file.js`, but GitHub Pages was looking for them at a different location.

## Solution Steps

### 1. Updated Vite Configuration

Changed the `base` path in `vite.config.ts` from an absolute path to a relative path:

```js
// Before
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Absolute path
  // ...
});

// After
export default defineConfig({
  plugins: [react()],
  base: './', // Relative path
  // ...
});
```

### 2. Updated Homepage in package.json

Changed the `homepage` field in `package.json` to use a relative path:

```json
// Before
"homepage": "https://jahangir842.github.io/portfolio",

// After
"homepage": ".",
```

### 3. Created a .nojekyll File

Added a `.nojekyll` file in the build output to prevent GitHub Pages from processing the site with Jekyll, which can sometimes interfere with asset paths.

This was added to our deployment script:

```bash
# Create .nojekyll file to bypass Jekyll processing
touch .nojekyll
```

### 4. Custom Deployment Script

Created a custom deployment script (`deploy.sh`) to handle the build and deployment process:

```bash
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
```

## Verification

After making these changes:

1. The built `index.html` file now references assets using relative paths:
   ```html
   <script type="module" crossorigin src="./assets/index-xi8Bwy_X.js"></script>
   <link rel="stylesheet" crossorigin href="./assets/index-7wFFVRoG.css">
   ```

2. The site deployed to GitHub Pages now loads all assets correctly and functions as expected.

## Key Takeaways

1. **Use Relative Paths**: When deploying to GitHub Pages, use relative paths (`./`) instead of absolute paths (`/`) for assets.

2. **Check Built Output**: Always verify the paths in the built HTML file to ensure they will resolve correctly in the target environment.

3. **Create .nojekyll File**: Add a `.nojekyll` file to prevent GitHub Pages from processing your site with Jekyll.

4. **Test Deployment**: After deployment, check browser console for any 404 errors related to asset loading.

## Alternative Deployment Methods

### Using GitHub Actions (Recommended)

Instead of deploying manually or using a local script, you can set up GitHub Actions to automatically deploy your site whenever you push to the main branch.

#### 1. Set Up GitHub Pages

First, ensure GitHub Pages is enabled in your repository:

1. Go to your repository on GitHub
2. Click on "Settings"
3. Navigate to "Pages" in the sidebar
4. Under "Build and deployment", select "GitHub Actions" as the source

#### 2. Create GitHub Actions Workflow

Create a file at `.github/workflows/deploy.yml` with the following content:

```yaml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      # Setup Node.js for building the React/Vite app
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      # Install dependencies
      - name: Install dependencies
        run: npm ci
      
      # Update Vite config to use relative paths
      - name: Update Vite config for GitHub Pages
        run: |
          sed -i 's/base: '\''\.\/'\''*/base: '\''\.\/'\''/' vite.config.ts
      
      # Build the app
      - name: Build
        run: npm run build
      
      # Create .nojekyll file to prevent Jekyll processing
      - name: Create .nojekyll file
        run: touch dist/.nojekyll
      
      - name: Setup Pages
        uses: actions/configure-pages@v5
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload only the dist directory which contains the built app
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

This workflow:
- Runs whenever you push to the main branch
- Uses a single job that handles both building and deploying
- Builds your React/Vite app and deploys it to GitHub Pages
- Uses the latest GitHub Actions for Pages deployment
- No separate branch is needed - everything happens from your main branch

#### 3. Push to GitHub

After creating this workflow file, push it to your repository:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment workflow"
git push
```

#### 4. Monitor Deployment

1. Go to the "Actions" tab in your GitHub repository
2. You should see the workflow running
3. Once complete, your site will be deployed to GitHub Pages

#### Advantages of GitHub Actions Deployment

- **Automation**: Deploys automatically on push to main branch
- **Consistency**: Builds in a clean environment every time
- **Visibility**: Build logs and history available in GitHub
- **No Local Setup**: No need to run deployment commands locally
- **Collaboration**: Works seamlessly with multiple contributors

## References

- [Vite Base Path Documentation](https://vitejs.dev/config/shared-options.html#base)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [React Deployment Best Practices](https://create-react-app.dev/docs/deployment/#github-pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Action](https://github.com/actions/deploy-pages) 