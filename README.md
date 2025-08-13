# JustPath Landing

This repository contains the source code for the JustPath landing page. It is built using **Vite**, **React**, and **TailwindCSS** and is deployed automatically to **GitHub Pages** using GitHub Actions.

## Getting started locally

To run the site locally, ensure you have Node.js ≥ 18 installed and run the following commands:

```bash
# install dependencies
npm install

# start the development server
npm run dev

# build the site for production
npm run build
```

The development server will be available at `http://localhost:5173` by default. After building for production, the output will be in the `dist/` directory.

## Deployment

Deployment is handled automatically via GitHub Actions. Any push to the default branch will trigger a workflow that installs dependencies, builds the site, and publishes the contents of the `dist` directory to GitHub Pages. The base path is configured in `vite.config.js` according to the repository name.

## Customizing the landing page

The landing page component lives in `src/App.jsx`. Replace the placeholder code in that file with the actual React component for the JustPath landing page. Remember to export the component as the default export and update any asset URLs (such as the logo) as needed.

TailwindCSS is configured in `tailwind.config.js` and used via the `index.css` file. To add custom styles or extend the Tailwind configuration, edit these files accordingly.
