# 📂 Project Architecture & Folder Structure

Welcome to the **Mission Homeopathy** project structure documentation. This project is built using **Next.js 14+ (App Router)** and follows a modular, scalable architecture designed for maintainability and performance.

## 🚀 Top-Level Structure

The root directory contains configuration files and the source code.

- **`.ai/`**: AI-related configurations and guidelines.
- **`docs/`**: Project documentation.
- **`public/`**: Static assets served directly (images, fonts, etc.).
- **`src/`**: The main source code directory.
- **`next.config.ts`**: Next.js configuration.
- **`package.json`**: Project dependencies and scripts.

---

## 📦 Source Directory (`src/`)

The `src` directory is organized by **feature** and **functionality**.

### 🏗️ `src/app` (App Router)

The core routing logic using Next.js App Router. We use **Route Groups** (folders in parenthesis) to organize routes without affecting the URL structure.

- **`(site)`**: Main website pages (Home, Shop, Profile, etc.).
- **`(customization)`**: Routes related to the product customization experience.
- **`(static-pages)`**: Static content pages (About, Terms, etc.).
- **`layout.tsx`**: The root layout wrapping the entire application.
- **`globals.css`**: Global styles and Tailwind directives.

### 🧩 `src/components`

Reusable UI components, categorized by their purpose.

- **`ui/`**: Base UI components (buttons, inputs, cards). Likely built with Shadcn UI/Radix.
- **`custom/`**: Project-specific components that are more complex than base UI elements.
- **`layout/`**: Layout-specific components (Headers, Footers, Sidebars).
- **`animate-ui/`**: Components specifically designed for animations and transitions.
- **`wrappers/`**: Higher-order components or wrapper providers.
- **`dialogs/`**: Modal and dialog components.
- **`kokonutui/`**: Specialized UI library components.

### 🛠️ `src/services`

Business logic and API integration layers.

- **`auth/`**: Authentication-related services.
- **`modules/`**: Feature-specific API services (likely corresponding to backend modules).
- **`aws-server/`**: AWS integration services.
- **`misc/`**: Miscellaneous services.

### 🧠 State & Logic

- **`hooks/`**: Custom React hooks for reusable logic (e.g., `useWindowSize`, `useAuth`).
- **`context/`**: React Context Providers for global state that doesn't require a full store.
- **`stores/`**: Global state management stores.
- **`lib/`**: Core utilities and libraries.
  - `utils.ts`: Class name merging (cn) and common helpers.
  - `seo.ts`: SEO configuration helpers.
  - `fetch.ts`: Custom fetch wrappers.

### 📂 Assets & Data

- **`assets/`**: Local assets imported into components (images, icons).
- **`constants/`**: Application-wide constants (config values, magic numbers).
- **`data/`**: Static data files (JSON, mock data) used for UI development or static content.
- **`types/`**: TypeScript type definitions and interfaces shared across the app.
- **`utils/`**: General utility functions (formatting, validation, etc.).

---

## 💡 Key Architectural Patterns

- **Route Groups**: We use `(group)` folders to separate layouts (e.g., the marketing site might have a different layout than the customization tool) without adding segments to the URL.
- **Component Colocation**: Components are grouped by type. Base UI components are kept separate from business-logic-heavy custom components.
- **Service Layer**: API calls are abstracted into `services/` to keep components clean and focused on UI.
