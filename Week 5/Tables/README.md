# Week 5 - HTML Tables and CSS

This directory contains three static exercises designed to build structured, readable data layouts using HTML table structures and styled elements. It progresses from basic grid spans to complex nested records and zebra-striped directories.

---

## 📁 Table Concepts & Breakdown

### 1. Column-Spanned Grid (`table1.html` / `table1.css`)
- **Key Concept**: Merging cells horizontally.
- **Styling & HTML**:
  - Demonstrates the use of `colspan` to merge header rows (e.g. `<th colspan="4">` and `<th colspan="2">`) to form titles and subtitles.
  - Styled with box-shadows (`box-shadow: 9px 9px 25px rgb(30, 142, 207)`), thick light-blue cell borders (`border: 3px solid rgb(24, 179, 226)`), and cell collapse layout (`border-collapse: collapse`).

### 2. Academic Report Sheet (`table2.html` / `table2.css`)
- **Key Concept**: Vertical cell merging (row grouping).
- **Styling & HTML**:
  - Combines `colspan` (horizontal span) with `rowspan` (vertical span) to display structured student exam records.
  - The cell `<td rowspan="2">Biology</td>` merges subject name headers vertically, group-indexing the corresponding sub-rows (e.g. Practical and Theory) next to it.
  - Features contrasting background colors between headers (`<th>` is light blue) and body cells (`<td>` is aliceblue).

### 3. Styled User Directory (`table3.html` / `table3.css`)
- **Key Concept**: Real-world data lists, fixed layouts, and zebra-striping.
- **Styling & HTML**:
  - **Fixed Layout**: Uses `table-layout: fixed` and `width: 20%` on cells to ensure column width distribution.
  - **Circular Avatars**: Renders user profile images inside a cell with a circular border (`border-radius: 80px`).
  - **Zebra Striping**: Utilizes CSS `:nth-child(even)` selectors (`tbody tr:nth-child(even) td { background-color: rgb(210, 235, 250); }`) to color alternative rows, improving data scanning and readability.
  - **Tiered Headings**: Differentiates main title banners (`.heading`) and column titles (`.subheading`) using tone-paired backgrounds.

---

## 🚀 How to View

Open any of the `.html` files in your web browser. You can modify table attributes like `rowspan` and `colspan` to observe how the cell margins shift within standard HTML tables.
