# Week 5 - CSS Layouts

This directory contains static page-layout templates built using HTML5 semantic elements and CSS Flexbox alignment. The layout templates demonstrate the progression from simple element row alignment to responsive columns that adapt dynamically based on screen widths.

---

## 📁 Layout Comparison & Concepts

### 1. Flexbox Card Grid (`layout1.html` / `layout1.css`)
- **Focus**: Row-based card wrapping and alignment.
- **Styling Details**:
  - Uses `display: flex` and `justify-content: space-between` to distribute four profile/content cards horizontally.
  - Applies uniform cards styled with `border-radius: 40px`, paddings, and borders.
  - Controls image borders using `border-radius: 30px`.

### 2. Jumbotron & Multi-Column Layout (`layout2.html` / `layout2.css`)
- **Focus**: Hero banner (jumbotron) combined with a columns sidebar grid.
- **Styling Details**:
  - The hero card (`.heading1`) spans the full width at the top with customized spacing and a high-contrast action button.
  - The content card list (`.main`) lines up three distinct paragraphs/sections side-by-side using `display: flex`.

### 3. Responsive Column Shifting (`layout3.html` / `layout3.css`)
- **Focus**: Flex-wrap and responsive breakpoint rules.
- **Styling Details**:
  - Contains a navigation banner (`.first`), a primary intro banner (`.second`) containing text alongside a circular profile image, and a bottom row (`.third`).
  - Utilizes `display: flex; flex-wrap: wrap; gap: 20px` combined with `flex: 1; min-width: 250px` on cards to allow column shifting on mobile views.
  - Uses a `@media screen and (min-width: 1000px)` media query to expand gap layouts and center items on larger monitors.

### 4. City Travel Guide Layout (`layout4.html` / `layout4.css`)
- **Focus**: Complete page structure layout mimicking a production landing page.
- **Styling Details**:
  - **Navigation Bar (`.nav`)**: Places the title logo on the left and navigation menu list on the right using `display: flex; justify-content: space-between; align-items: center;`.
  - **Hero Header (`.second`)**: Centered banner styled with an aqua background and rounded banner graphics.
  - **Grid Cards (`.third`)**: Combines paragraphs and floating images in a responsive 3-column wrap using flexible grid fractions.

---

## 🚀 Usage

Since these are static pages, you can double-click any `.html` file inside this folder to view it directly in your browser.
To inspect CSS properties dynamically:
1. Open the page in your browser (e.g., `layout4.html`).
2. Right-click anywhere and select **Inspect** (or press `F12`) to open Developer Tools.
3. Observe how Flexbox elements contract and shift when resizing the browser width.
