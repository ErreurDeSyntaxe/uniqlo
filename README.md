# 🧩 Uniqlo

A Single Page Application for a fake clothing store.

---

## 📖 About the Project

### 🖼️ Preview

<div align='center'>
  <img src='./README/project-preview.jpg' alt='Project preview'>
</div>

### 🌐 Live Demo

[Visit Project](http://google.com/)

### 🎯 Objective

This project’s goal is to **learn React Router, Data Fetching and React Testing**.

### ✨ Notable Features

- SPA
- Increase/Decrease item quantity
- Cart icon displays numbers of items in cart

### 🧱 Built With

<p align="left">
  <img src="./README/html-logo.svg" alt="HTML Logo" width="40" height="40">
  <img src="./README/css-logo.svg" alt="CSS Logo" width="40" height="40">
  <img src="./README/js-logo.svg" alt="JavaScript Logo" width="40" height="40">
  <img src="./README/react-logo.svg" alt="React Logo" width="40" height="40">
  <img src="./README/vite-logo.svg" alt="Vite Logo" width="40" height="40">
  <img src="./README/vitest-logo.svg" alt="Vite Logo" width="40" height="40">
</p>

---

## ⚙️ Development

This section serves as both a checklist and roadmap.

### 🗒️ To-Do Overview

#### 🧾 Documentation

- [x] Rewrite this README
  - [x] Title
  - [x] Description
  - [x] Objective
  - [x] Notable Features

#### 🧠 Planning

- [x] User stories
- [x] Features
- [x] Flowchart
- [x] Components List
- [x] UI Design / Sketch
- [x] Development Steps

#### 💻 Development Steps

- [x] **Project Setup**

  - [x] Create React project with Vite
  - [x] Install dependencies (React Router, etc.)
  - [x] Create folder structure (components, pages, assets, contexts)
  - [x] Add global CSS file and import it in main.jsx

- [ ] **Layout & Navigation**

  - [ ] Create Navigation Bar component
  - [ ] Create Header and Footer components
  - [ ] Implement routing (Home, Shop, Cart)
  - [ ] Add cart item count to navigation bar

- [ ] **Home Page**

  - [ ] Add placeholder hero image or banner
  - [ ] Add welcome message / introduction text

- [ ] **Shop Page**

  - [ ] Fetch products from FakeStore API
  - [ ] Create Loading Spinner component
  - [ ] Create Error Message component
  - [ ] Create Product Card component
    - [ ] Show product image, title, price
    - [ ] Add quantity input with + / - buttons
    - [ ] Add "Add to Cart" button
  - [ ] Create SearchBar component
    - [ ] Filter products by name in real time
  - [ ] Handle adding items to cart and updating cart count

- [ ] **Cart Page**

  - [ ] Create Cart component
    - [ ] Display all items in the cart
    - [ ] Show quantities, individual price, total price
    - [ ] Allow increment/decrement of quantities
    - [ ] Allow removing individual items
    - [ ] Add "Clear Cart" button
  - [ ] Update cart state in real time

- [ ] **State Management**

  - [ ] Set up global state using useReducer / context API
  - [ ] Handle adding/removing items and quantity changes
  - [ ] Persist cart state across page navigation

- [ ] **Styling**

  - [ ] Create CSS Modules for components
  - [ ] Apply custom fonts (Inter / Rubik) via global.css
  - [ ] Style navigation bar, buttons, product cards, and cart
  - [ ] Add responsive styles for desktop and mobile

- [ ] **User Feedback & UX**

  - [ ] Show loading spinner while fetching products
  - [ ] Show error message if API fails
  - [ ] Show confirmation/visual feedback when adding to cart

- [ ] **Testing & Optimization**
  - [ ] Test navigation between pages
  - [ ] Test cart functionality (add, remove, clear, update quantities)
  - [ ] Test search functionality
  - [ ] Check mobile responsiveness
  - [ ] Run basic accessibility checks

#### 🚀 Deployment (Git + GitHub Pages)

- [ ] `git branch gh-pages` _(once)_
- [ ] Commit everything
- [ ] `git checkout gh-pages && git merge main --no-edit`
- [ ] `npx webpack`
- [ ] `git add dist -f && git commit -m "Deployment commit"`
- [ ] `git subtree push --prefix dist origin gh-pages`
- [ ] `git checkout main`

#### 🪞 Final Review

- [ ] Update Live Page Link
- [ ] Update Project Preview Image
- [ ] Confirm Built With section
- [ ] Add Reflection
- [ ] Remove User Stories
- [ ] Remove Flowchart
- [ ] Remove Development

---

## 👥 User Stories

- As a user, I want to navigate from any page to any page (home, shop, cart)
- As a user, I want to see the products clearly
- As a user, I want to input how many of an item I want right on the product card
- As a user, I want to click buttons to increase or decrease the quantity
- As a user, I want to add/remove any item to/from my cart
- As a user, I want to clear my whole cart with one click
- As a user, I want to add 1 item by default
- As a user, I want to see how many items are in my cart from the cart icon
- As a user, I want to have feedback when adding an item
- As a user, I want to see the total price of my cart when on the cart page
- As a user, I want to see a loading indicator
- As a user, I want to see an error message if adding fails
- As a user, I want to search items by name

---

## 🧩 Features

- Users can **navigate seamlessly** between the Home, Shop, and Cart pages using a persistent navigation bar.
- Users can **browse products clearly** displayed with images, titles, and prices fetched from the FakeStore API.
- Users can **select quantities easily** with both manual input fields and increment/decrement buttons.
- Users can **add and remove items** from the cart at any time, with real-time updates to cart contents and totals.
- Users can **clear the entire cart** in one click using the “Clear Cart” button.
- Users can **add 1 item by default** when adding a new product to the cart for quick and simple additions.
- Users can **see a live cart counter** in the navigation bar that updates instantly as items are added or removed.
- Users receive **visual feedback** (such as alerts or animations) when an item has been added to the cart.
- Users can **view a detailed cart summary** showing itemized products, quantities, and a running total price.
- Users see a **loading spinner** while products are being fetched from the API.
- Users see an **error message** if fetching or adding items fails.
- Users can **search products by name** directly from the Shop page.

---

## 🧭 Flowchart

Page Loads  
→ App component renders  
→ Navigation Bar and Footer appear on all pages  
→ User lands on **Home Page** by default

Home Page  
→ User can click **Shop** or **Cart** in the navigation bar  
→ Clicking **Shop** navigates to Shop Page

Shop Page  
→ Loading Spinner appears while fetching products from FakeStore API  
→ If fetch succeeds → Product Cards render  
→ If fetch fails → Error Message displays  
→ Each Product Card shows image, title, price, and quantity controls  
→ User types or adjusts quantity (+ / –)  
→ User clicks **Add to Cart**  
→ Cart state updates (via useReducer)  
→ Cart icon in Navigation Bar updates count in real time  
→ Success feedback appears (e.g., toast message)

Cart Page  
→ Displays all items currently in the cart  
→ User can increase/decrease quantities or remove items  
→ User can click **Clear Cart** to remove all items  
→ Total price recalculates automatically  
→ Cart icon count updates instantly

Search Flow  
→ User types into **Search Bar** on Shop Page  
→ Product list filters in real time by matching product names  
→ Clearing the search input restores the full product list

Navigation Flow  
→ Navigation Bar allows switching between Home, Shop, and Cart at any time  
→ State (cart contents, search query) persists across pages during the session

---

## 🏗️ Components

- App
- Store
- Header
- Navigation Bar
- Search Bar
- Loading Spinner
- Cart
- Cart Item
- Product Card
- Footer
- Error Message

---

## UI Mock-Up

### Home Page

```
+--------------------------------------------------------------+
| 🛍️ MyShop [Home] [Shop] [Cart (3)] |
+--------------------------------------------------------------+

[ Hero Image or Welcome Message ]

| 🏠 Home Page                                                |
| ----------------------------------------------------------- |
| Welcome to MyShop!                                          |
| Browse our selection of products in the Shop page.          |
| ----------------------------------------------------------- |

[ Footer © 2025 MyShop ]
```

### Shop Page

```
+--------------------------------------------------------------+
| 🛍️ MyShop [Home] [Shop] [Cart (2)] |
+--------------------------------------------------------------+
| 🔍 Search: [_____________] |
+--------------------------------------------------------------+
| [🧴 Product 1] [👕 Product 2] [🎧 Product 3] [📚 Product 4] |
| Price: $12.99 Price: $24.99 Price: $59.99 Price: $9.99 |
| [ - ] [ 1 ] [ + ] [Add] [ - ] [ 1 ] [ + ] [Add] ... |
+--------------------------------------------------------------+
| ✅ Product added! |
[ Footer © 2025 MyShop ]
```

### Cart Page

```
+--------------------------------------------------------------+
| 🛍️ MyShop [Home] [Shop] [Cart (2)] |
+--------------------------------------------------------------+
| Product Qty Price Total |
| ----------------------------------------------------------- |
| 👕 Product 2 2 24.99 49.98 [ - ] [ + ] [x] |
| 🎧 Product 3 1 59.99 59.99 [ - ] [ + ] [x] |
| ----------------------------------------------------------- |
| Total: $109.97 [Clear Cart]
```
