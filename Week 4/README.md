# Week 4 - Basic HTML Assignments

This directory contains foundational HTML exercises focusing on page layout, document structure, list formatting, and nested elements. These exercises serve as a starting point for understanding how browsers structure documents using standard HTML5 tags.

---

## 📁 Exercises Overview

| File | Description | Key HTML Elements Used |
| :--- | :--- | :--- |
| **[`cat-profile.html`](file:///C:/MERN/NODE/MERN_Assignments/Week%204/cat-profile.html)** | A biographical profile page for "Pochi the Cat" featuring formatted content, an aligned image, profile lists, and hyperlinks. | `<h1>`, `<h3>`, `<img>`, `<ol>`, `<ul>`, `<a>`, `<hr>`, `<footer>` |
| **[`unorderedLists.html`](file:///C:/MERN/NODE/MERN_Assignments/Week%204/unorderedLists.html)** | A page demonstrating paragraph flow, header usage, and standard unordered lists for content organization. | `<h1>`, `<p>`, `<ul>`, `<li>` |
| **[`nestedUnorderedLists.html`](file:///C:/MERN/NODE/MERN_Assignments/Week%204/nestedUnorderedLists.html)** | A structural exercise showing hierarchical text lists, nesting unordered lists inside parent list items. | `<ul>`, `<li>` (with nested `<ul>`) |

---

## 🔍 Detailed Exercise Breakdown

### 1. Pochi the Cat Profile Page (`cat-profile.html`)
This file models a standard personal biography card/page.
- **Image Integration**: Showcases how to use the `<img>` tag with attributes like `src` (for remote URLs), `alt` (for accessibility), and visual styling attributes like `width="400px"` and `align="right"` to allow text-wrapping around the image.
- **Ordered List (`<ol>`)**: Used to list sequential profile details:
  1. Lorem ipsum detail 1.
  2. Lorem ipsum detail 2.
  3. Lorem ipsum detail 3.
- **Hyperlinks (`<a>`)**: Lists anchor links to external sites (Google, YouTube) within an unordered list.
- **Semantic Structure**: Uses the `<footer>` tag at the bottom, separated by a horizontal rule (`<hr>`).

### 2. Standard Unordered Lists (`unorderedLists.html`)
This file illustrates standard content formatting.
- **Headings & Body Paragraphs**: Displays how headings (`<h1>`) separate multiple distinct paragraphs (`<p>`).
- **Unordered List (`<ul>`)**: Highlights bulleted lists with no numeric sequence. In this assignment, it renders a list of fruits:
  - Apples
  - Bananas
  - Pears
  - Oranges
  - Grapes

### 3. Nested Lists (`nestedUnorderedLists.html`)
This assignment demonstrates hierarchy construction inside HTML lists, which is commonly used to create drop-down menus or table of contents.
- **Nesting Rules**: A nested list is placed *inside* the parent `<li>` element before it closes, rather than directly inside a `<ul>`.
- **Structure Preview**:
  - Fruits
    - Apple
    - Banana
    - Mango
    - Orange
  - Vegetables
    - Spinach
    - Cauliflower
    - Beetroot
  - Cereals
  - Nuts

---

## 🚀 How to Run the Exercises

Since these are static frontend documents with no server-side compilation, you can open them directly in your web browser.

### Option 1: Direct File Open
Double-click any `.html` file inside this directory or right-click and choose **"Open with..."** and select your preferred web browser (Chrome, Edge, Firefox, etc.).

### Option 2: VS Code Live Server
1. If you are using VS Code, install the **Live Server** extension.
2. Right-click on any of the HTML files (e.g., `cat-profile.html`).
3. Select **Open with Live Server**. This will host the page locally and automatically reload it when changes are saved.
