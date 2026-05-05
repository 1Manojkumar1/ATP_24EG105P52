# Shopping Cart System

A lightweight, backend-simulated E-Commerce Shopping Cart System built with Node.js using ES6 modules.

## Features
- **Product Management**: Browse products, search by name, and filter by category.
- **Cart Operations**: Add/remove items, update quantities, and calculate totals.
- **Inventory Management**: Real-time stock validation to prevent adding out-of-stock items or exceeding available stock.
- **Discounts & Coupons**: Apply percentage or flat-rate coupons with minimum cart value and category restrictions.
- **Checkout Process**: Validate payment methods, apply final discounts, reduce stock levels, and generate an order summary.

## Project Structure
- `app.js`: Main execution script simulating a user journey.
- `product.js`: Handles the mocked database of products and stock management.
- `cart.js`: Manages cart state (adding, removing, totals).
- `discount.js`: Validates and calculates discounts from promotional coupons.
- `payment.js`: Orchestrates the final checkout, combining cart, discount, and product stock updates.

## Usage
Run the simulation script using Node.js:
```bash
node app.js
```
