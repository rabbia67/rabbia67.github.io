# Rabbia Waheed - Portfolio Website

A modern, responsive portfolio website for Rabbia Waheed, a Frontend Developer & Web Designer. Built with React, TypeScript, Vite, and Tailwind CSS.

Designed & Developed by [Jahangir](https://github.com/jahangir842) - DevOps Engineer & Cloud Specialist

## Features

- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations using Framer Motion
- 🌙 Terminal-style loading screen
- 📧 Contact form functionality with EmailJS
- 🔤 Dynamic type animations
- 📚 Sections for About, Skills, Experience, Projects, and Achievements

## Live Demo

Visit the live portfolio at [https://rabbia67.github.io](https://rabbia67.github.io)

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rabbia67/rabbia67.github.io.git
   cd rabbia67.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Development Server

To start the development server:

```bash
npm run dev
```

The site will be available at [http://localhost:5173](http://localhost:5173)

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is deployed using GitHub Pages with GitHub Actions.

### GitHub Pages with GitHub Actions (Current Setup)

The site is automatically deployed to GitHub Pages whenever changes are pushed to the main branch. The workflow:

1. Checks out the code
2. Sets up Node.js
3. Installs dependencies
4. Builds the project
5. Deploys to GitHub Pages

The GitHub Actions workflow is defined in `.github/workflows/static.yml`.

To modify the deployment:
1. Update the `homepage` field in `package.json` if needed
2. Push changes to the main branch
3. GitHub Actions will automatically build and deploy

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm run build
npm run deploy
```

## Technologies Used

- React 18
- TypeScript
- Vite 5
- Tailwind CSS 3
- Framer Motion
- EmailJS - For contact form functionality
- React Intersection Observer - For scroll animations
- React Scroll - For smooth scrolling
- React Type Animation - For typing effect

## Project Structure

- `src/components/` - React components
- `src/components/layout/` - Layout components (Navbar, Footer)
- `src/components/sections/` - Main page sections
- `src/utils/` - Utility functions

## Troubleshooting

If you encounter issues with GitHub Pages deployment, see [docs/github-pages-deployment.md](docs/github-pages-deployment.md) for detailed troubleshooting steps.

## License

This project is open source and available under the MIT License. 
