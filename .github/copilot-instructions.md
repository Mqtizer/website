# Coding Guidelines

## Introduction

This project is a marketting website built with GatsbyJS for [MQTIZER (The Cross-Platform MQTT Client for Industrial-Grade IoT Solutions)](https://www.mqtizer.com). It utilizes TypeScript, functional components, and functional programming principles. The following files are included for reference:

the project uses `bun` as the package manager, so you can install the dependencies using the following command:

- [gatsby-config.ts](../gatsby-config.ts): Configuration for Gatsby plugins and site metadata.
- [tsconfig.json](../tsconfig.json): TypeScript configuration.
- [package.json](../package.json): Project dependencies and scripts.
- [gatsby-node.ts](../gatsby-node.ts): Custom Webpack configuration.
- [.prettierrc.js](../.prettierrc.js): Prettier configuration.
- [global.css](../src/layouts/global.css): Global styles for the project.

## Best Practices for TypeScript React Gatsby Project

### Project Setup

- Use a consistent project structure with clear directories for components, hooks, services, types, utilities, and styling.
- Ensure tsconfig.json is configured with strict type-checking options enabled.

### Coding Standards

- Use functional components and hooks.
- Define component props and state using TypeScript interfaces or types.
- Utilize TypeScript’s capabilities to infer types in React Hooks.
- Follow a consistent naming convention for files and components.
- Use Prettier for code quality and formatting.
- Follow the Prettier configuration specified in [.prettierrc.js](../.prettierrc.js).

### Performance Optimization

- Optimize images using `gatsby-plugin-sharp` and `gatsby-transformer-sharp`.
- Use `gatsby-plugin-image` for responsive images.
- Implement lazy loading for components where applicable.

### Styling

- Use Styled components from `import styled from '@emotion/styled'` for styling.
- Apply global styles in global.css.
- Use icons by creating svgs.

### Additional Tools

- Use `gatsby-plugin-sitemap` and `gatsby-plugin-robots-txt` for SEO.
- Configure `gatsby-plugin-manifest` for PWA support.
- Use `gatsby-plugin-clarity` for analytics.
