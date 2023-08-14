[![Frontend Masters](https://static.frontendmasters.com/assets/brand/logos/full.png)](https://frontendmasters.com)

This is a companion repo for the [Astro course](https://frontendmasters.com/courses/astro/) on [Frontend Masters](https://frontendmasters.com).

## Setup

The `start` branch from this repository contains some additional assets and is used as a starting point for the course:

> We recommend using Node version 18 for this course.

```bash
git clone https://github.com/learnwithjason/astro-frontend-masters.git
cd astro-frontend-masters
git checkout start
npm install
```

## What are we building?

Small business site that uses several of the common workflows that many (most?) websites end up following.

- Marketing landing page
  - Hero images
    - Image handling
  - Cards
    - Featured Products
  - Newsletter capture
- Shop 
  - Advanced layout (nested)
  - Shared state
    - Solid cart
    - React item buttons (add to cart)
    - Nano stores to share state
- Blog
  - Content Collections
    - Markdown
  - Dynamic routes
  - RSS feed
- About
  - Markdown page
- 404 page

## What features do we want to cover?

- Initializing a new Astro site
- Local development
- Pages
	- Supported file types
		- Astro
		- Markdown
		- HTML
	- Basic routing
	- Links
	- Custom 404 pages
- Astro components
	- Frontmatter
	- Slots
- Layouts
	- Basic layouts
	- Advanced layouts
- Fetching data
	- Using `fetch` in Astro and other components
	- Loading API data
	- Loading from a headless CMS
- Styling
	- Styling in Astro components
		- Scoped styles
		- Global styles
	- Astro goodies for CSS
		- `class:list`
		- `define:vars`
	- Importing stylesheets
		- local
		- npm packages
	- In frameworks:
		- CSS modules
- Dynamic routes
	- When you want to render pages once at build time
- Pagination
- Content Collections
	- Basic setup and config
		- Defining a schema
		- Custom slugs
	- Using collections to build pages
		- Listing pages
		- Full entry pages
- Endpoints
	- RSS
	- APIs
		- Static
- SSR Mode
	- Dynamic routing
  	- When you want to render pages on every request
	- API endpoints
- Image handling
	- The `assets` directory
- Hydrating JS components
	- `client:*` directives
	- Using multiple frameworks
	- Sharing state between islands
	- Sharing state between frameworks
