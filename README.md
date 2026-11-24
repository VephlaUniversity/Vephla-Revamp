# Vephla Group Website

A responsive corporate website for Vephla Group, built to showcase the group's products and services, introduce its team and culture, publish career opportunities, and provide a direct contact experience.

**Live website:** https://vephla.com

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Technology stack](#technology-stack)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Application routes](#application-routes)
- [Project structure](#project-structure)
- [Contact form integration](#contact-form-integration)
- [Assets](#assets)
- [Building for production](#building-for-production)
- [Deployment](#deployment)
- [Development notes](#development-notes)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a single-page React application created with Vite. It presents Vephla Group's ecosystem, including education, software and data solutions, energy investment advisory, printing, learning resources, media insights, talent networks, and career opportunities.

The interface uses a dark visual theme, responsive layouts, animated page transitions, sliders, expandable FAQ content, and service and vacancy cards.

## Features

- Animated, full-width home page
- Group and service introduction
- Statistics and testimonial sections
- Searchable vacancy listings
- Dedicated pages for six available roles
- About-us and company ecosystem presentation
- Interactive FAQ section
- Validated contact form with service selection
- Responsive desktop, tablet, and mobile navigation
- Page-specific document titles
- Privacy policy and terms of service pages
- Scroll-to-top behavior between routes
- Social, email, and external product links

## Technology stack

| Technology | Purpose |
| --- | --- |
| React 19 | Component-based user interface |
| Vite 6 | Development server and production bundling |
| React Router DOM 7 | Client-side routing |
| Tailwind CSS 4 | Utility-first styling |
| Framer Motion | Page and interface animations |
| GSAP | Advanced motion effects |
| React Slick / Slick Carousel | Content sliders |
| Lucide React | Interface icons |
| Three.js | 3D or visual application support |
| ESLint 9 | JavaScript and React linting |

## Getting started

### Prerequisites

- Node.js 18 or newer is recommended
- npm 9 or newer is recommended
- Git

### Installation

```bash
git clone https://github.com/VephlaUniversity/Vephla-Revamp.git
cd Vephla-Revamp
npm install
```

The repository includes `package-lock.json`, so `npm ci` is recommended for a clean or CI installation:

```bash
npm ci
```

### Run locally

```bash
npm run dev
```

Vite will print the local development URL, normally `http://localhost:5173`. The server includes hot module replacement for fast development updates.

### Lint the project

```bash
npm run lint
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Application routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Vephla Group |
| `/contact` | Contact and inquiry form |
| `/vacancies` | Vacancy search and listings |
| `/design-media-internship` | Design and Media Internship |
| `/operations-internship` | Operations Internship |
| `/software-engineering-executive` | Software Engineering Executive |
| `/data-analytics-internship` | Data Analytics Internship |
| `/cybersecurity-executive` | Cybersecurity Executive |
| `/cybersecurity-internship` | Cybersecurity Internship |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |
| `*` | Not-found page with a link to the homepage |

## Project structure

```text
.
├── public/
│   ├── images/                 # Logos, service artwork, and vacancy imagery
│   └── video/                  # Public video assets
├── src/
│   ├── components/
│   │   ├── about/              # About page and supporting components
│   │   ├── contact/            # Contact page and form
│   │   ├── home/               # Hero, solutions, FAQ, stats, and testimonials
│   │   └── vacancies/          # Vacancy listing and role detail pages
│   ├── AnimatedPage.jsx        # Shared page-transition wrapper
│   ├── App.jsx                 # Routes, layout, and dynamic page titles
│   ├── App.css
│   ├── index.css               # Global styles
│   └── main.jsx                # React entry point and browser router
├── index.html                  # HTML entry and metadata setup
├── eslint.config.js
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Contact form integration

The contact form is implemented in `src/components/contact/Contact.jsx`. It validates required fields and sends the form payload as JSON to:

```text
https://vephla.com/backend/contact.php
```

The payload contains:

- `name`
- `email`
- `phone`
- `message`
- `services`
- `otherService`

The selected service checkboxes and an optional custom service are required or validated based on the user's selection. Successful submissions and server validation failures receive alert feedback.

The application does not require a local contact API for normal development, but the external endpoint must remain available for submissions to work in production.

## Assets

Static assets are stored in `public/` and referenced with root-relative URLs such as:

```text
/images/logo.png
/images/software.jpg
/video/whyChooseUs.mp4
```

When replacing or adding assets:

- Use optimized image formats and dimensions to reduce page weight
- Keep filenames stable where components reference them directly
- Use meaningful alternative text for important images
- Keep external video or image URLs under review for availability and licensing

## Building for production

Create an optimized production bundle:

```bash
npm run build
```

The generated files are written to `dist/`.

Preview the bundle before deployment:

```bash
npm run preview
```

## Deployment

Because this is a client-side React Router application, the hosting platform must serve `index.html` for application routes instead of returning a hosting-provider 404 page.

For example, configure the host to rewrite requests as follows:

```text
/* -> /index.html
```

The rewrite should retain HTTP 200 behavior for the SPA entry page. Static assets under `/images/` and `/video/` should continue to be served normally.

Before deploying:

1. Run `npm run lint`
2. Run `npm run build`
3. Test `/`, `/about`, `/contact`, `/vacancies`, and at least one vacancy route
4. Verify external links and contact-form submission
5. Confirm that the host applies the SPA fallback rewrite

## Development notes

- React Router must run over a web server that supports SPA fallbacks
- Page title updates are handled inside route wrappers in `src/App.jsx`
- `AnimatedPage` wraps routed views for transition behavior
- The footer is intentionally hidden on `/contact`
- The navigation includes several external Vephla product domains
- The vacancy listing currently uses a local array of role data and client-side search
- `Operations Intern` and the vacancy listing use an Unsplash-hosted image; production deployments should account for external network availability

## Contributing

1. Create a feature branch from the current default branch
2. Keep changes focused and consistent with the existing component structure
3. Run `npm run lint`
4. Run `npm run build`
5. Test affected routes at desktop and mobile sizes
6. Open a pull request with a clear summary and screenshots for visible UI changes

Please do not commit credentials or private API configuration.

## License

This project is private. Reuse, distribution, or modification requires authorization from Vephla University/Vephla Group.
