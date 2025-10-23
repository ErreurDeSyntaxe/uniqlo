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
- [ ] Features
- [ ] Flowchart
- [ ] Architecture
- [ ] UI Design / Sketch

#### 💻 Development Steps

- [ ] **Basic HTML**
  - [ ] Title & Meta
  - [ ] Structure
  - [ ] Favicons
- [ ] **Parcel Setup**
  - [ ] Initialize project
  - [ ] Install Parcel (`npm i -D parcel`)
  - [ ] Install optimizers (`npm i -D @parcel/optimizer-terser @parcel/optimizer-cssnano @parcel/optimizer-htmlnano`)
  - [ ] Add scripts
- [ ] **Vitest Setup**
  - [ ] Install Vitest (`npm i vitest -D`)
  - [ ] Add `"test": "vitest --run --reporter verbose"` and `"test:watch": "vitest"` scripts
- [ ] **Logic & UI**
  - [ ] Console-based logic
  - [ ] Refined UI & layout
  - [ ] Menu / Navigation
- [ ] **Responsive Design**
  - [ ] Responsive images (Art direction)
  - [ ] Media queries
  - [ ] Mobile menu
- [ ] **Accessibility & Optimization**
  - [ ] Check accessibility
  - [ ] Optimize images
  - [ ] Run Lighthouse

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

- Users can...

---

## 🧭 Flowchart

Page Loads → ...

---

## 🏗️ Components

- App
- Store
- Loading Spinner
- Cart
- Cart Item
- Product Card
- Navigation Bar
- Header
- Footer
- Error Message
