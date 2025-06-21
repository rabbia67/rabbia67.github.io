# Abad Naseer - Portfolio Website

A modern, responsive portfolio website for Abad Naseer, a DevOps Engineer & Cloud Solutions Architect. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations using Framer Motion
- 🌙 Terminal-style loading screen
- 📧 Contact form functionality with EmailJS
- 🔤 Dynamic type animations
- 📚 Sections for About, Skills, Experience, Projects, and Achievements

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/abad-naseer-portfolio.git
   cd abad-naseer-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

## Running the Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The site will be available at [http://localhost:5173](http://localhost:5173)

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Deployment

This project can be deployed to various platforms:

### GitHub Pages
1. Update the `homepage` field in `package.json` with your GitHub username:
   ```json
   "homepage": "https://yourusername.github.io/abad-naseer-portfolio"
   ```
2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
3. Your site will be available at `https://yourusername.github.io/abad-naseer-portfolio`

### Vercel or Netlify
The easiest option is to connect your GitHub repository to Vercel or Netlify for automatic deployments.

### Manual Deployment
Upload the contents of the `dist` directory to your web server after building.

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

## Customization

To customize this portfolio for your own use:
1. Update personal information in the components
2. Replace project details in the Projects section
3. Modify skills and experience to match your own
4. Update contact information and social links

## License

This project is open source and available under the MIT License. 