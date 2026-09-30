# Audrey Surya Developer Portfolio

**Status**: Approved
**Created**: 2026-09-23
**Mode**: guided

## 1. Project Overview

Build a responsive, single-page developer portfolio for Audrey Surya. The experience will present a strong hero introduction, an about section, selected projects, and contact information in a polished dark glassmorphism visual system with neon and gradient accents.

## 2. Requirements

- Use Next.js App Router with TypeScript.
- Use Tailwind CSS for styling.
- Use Framer Motion for page and section animation.
- Use Lucide React for interface icons.
- Provide Hero, About, Projects, and Contact sections on one page.
- Provide a responsive sticky navigation bar with section links.
- Use a dark glassmorphism presentation with neon and gradient accents.
- Stagger hero content on initial load.
- Reveal sections with `whileInView` animations.
- Project cards must use `whileHover={{ scale: 1.05 }}`.
- Buttons must use `whileTap={{ scale: 0.95 }}`.
- No sign-in flow, application API, backend service, datastore, or authentication.

## 3. Architecture

The application will be a frontend-only Next.js App Router page. The root page will compose the portfolio sections and shared navigation. Reusable presentation components will own section layout, project cards, buttons, and motion behavior. Static portfolio content will remain local to the frontend because no persistence or server API is required.

## 4. Services

**Frontend**: Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

No backend, worker, API, or database service is planned.

## 5. Data Stores & Authentication

**Data Stores**: No datastore required.

**Authentication**: No. The portfolio is public and has no authenticated API features.

## 6. Design System & UI

**Component Library**: Tailwind CSS with Lucide React icons and Framer Motion primitives.

**Visual direction**: Dark glassmorphism with restrained neon and gradient accents, luminous borders, layered translucent surfaces, and high-contrast typography.

**Typography**: Use a distinctive display treatment for the hero headline paired with a highly legible text face for navigation and body copy. Keep hierarchy compact outside the hero so the page remains scannable.

**Layout**: A sticky responsive navbar anchors the single-page sections. The hero establishes the visual identity, followed by full-width section bands with constrained readable content. Project cards form a responsive grid and the contact section closes with clear action links.

**Interaction**: Use staggered hero entrance motion, section reveals triggered by `whileInView`, project card `whileHover={{ scale: 1.05 }}`, and button `whileTap={{ scale: 0.95 }}`. Respect reduced-motion preferences where practical.

## 7. Implementation Plan

1. Initialize the Next.js App Router frontend with TypeScript and Tailwind CSS.
2. Establish global theme tokens, typography, background treatment, glass surfaces, focus states, and responsive spacing.
3. Build the sticky responsive navbar with section anchors and Lucide React icons.
4. Build the hero section with the portfolio introduction, primary contact action, and staggered Framer Motion load sequence.
5. Build the About, Projects, and Contact sections with reusable motion wrappers and responsive layouts.
6. Add project data and project cards with the required hover scale interaction and action buttons with the required tap scale interaction.
7. Verify keyboard navigation, visible focus states, responsive behavior, reduced-motion behavior, and production build output.

## 8. Validation

- Run the frontend typecheck and production build.
- Confirm the single page renders correctly across mobile, tablet, and desktop widths.
- Confirm sticky navigation links reach Hero, About, Projects, and Contact.
- Confirm hero stagger, section `whileInView`, project hover, and button tap animations are present.
- Confirm no backend, datastore, or authentication configuration is introduced.
- Confirm icons, contrast, focus states, and reduced-motion behavior are usable.

## 9. Delivery

Deliver the frontend-only portfolio as a runnable Next.js application. Scaffolding is intentionally deferred to the next workflow phase; this plan is ready for scaffold hand-off after approval.