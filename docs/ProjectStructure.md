# 🏗️ Project Naming Conventions & Structure

To ensure consistency and maintainability across the codebase, please adhere to the following naming conventions.

## 📂 Files & Directories

| Type             | Convention                            | Example                               |
| ---------------- | ------------------------------------- | ------------------------------------- |
| **Folder Names** | `kebab-case` (lowercase with hyphens) | `get-user-list`, `components`         |
| **File Names**   | `kebab-case` (lowercase with hyphens) | `login-form.tsx`, `utils.ts`          |
| **Routes**       | `kebab-case`                          | `/user-profile`, `/shop/new-arrivals` |

> **Note**:
>
> - `index` files should always be lowercase: `index.ts`, `index.js`.
> - Style files should be lowercase: `styles.js`, `globals.css`.

---

## 💻 Code Standards

| Type                 | Convention                          | Example                     |
| -------------------- | ----------------------------------- | --------------------------- |
| **Variables**        | `camelCase`                         | `const userList = []`       |
| **Functions**        | `camelCase`                         | `function getUserData()`    |
| **Global Constants** | `UPPER_SNAKE_CASE`                  | `const MAX_RETRY_COUNT = 3` |
| **JSON Objects**     | `snake_case`                        | `{ "user_id": 123 }`        |
| **CSS Modules**      | `camelCase` (start with underscore) | `_headerStyles.module.css`  |

---

## 🎨 Assets

| Type              | Convention                       | Example                        |
| ----------------- | -------------------------------- | ------------------------------ |
| **Images**        | `PascalCase` (often with prefix) | `ImgHome.jpg`, `ImgBanner.png` |
| **Icons**         | `PascalCase` (often with prefix) | `IcHome.png`, `IcArrow.svg`    |
| **Lottie / Data** | `PascalCase`                     | `SuccessAnimation.json`        |

---

## 🧩 CSS & Styling

- **Style Variables**: `camelCase`
  - Example: `headerSectionStyle`

---

### 📌 Summary

- **Folders/Files/Routes**: Always `kebab-case`.
- **JS/TS Logic**: Always `camelCase` (except constants).
- **Assets**: `PascalCase` for easy identification.

---
