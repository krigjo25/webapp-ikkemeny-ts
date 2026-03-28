# IkkeMeny Core System

**A collaborative mock e-commerce platform. Features dynamic cart logic, real-time price calculation, and a toggleable light/dark theme system.**

---

## Overview
IkkeMeny is a functional e-commerce prototype developed as a team collaboration. It simulates a retail environment where users can browse a unique product catalog, manage items in a persistent shopping cart, and toggle between visual themes. The project demonstrates core frontend principles, including DOM manipulation, event handling, and CSS Grid layouts.

## Core Features
* **Dynamic Shopping Cart (lib.js)**: Sophisticated logic for adding, removing, and tracking quantities of products like "Vintage Pepsi" and "Slightly Old Apple".
* **Real-time Calculations**: Automatic updates of total item counts and total price using dedicated calculation functions.
* **Theme Management**: A complete light-to-dark mode toggle system using synchronized CSS classes and JavaScript triggers.
* **Modular Codebase**: Separation of concerns across specialized library files, controllers, and multiple stylesheets for layout and skinning.
* **Responsive Grid Architecture**: Uses CSS Grid and Flexbox to ensure the product display and sidebar cart remain accessible across different viewports.

## Installation and Technical Setup
The project is ready for immediate deployment on any web server.

### Prerequisites
* A modern browser with JavaScript enabled.
* FontAwesome or Bootstrap Icons (linked via CDN in the CSS).

### Deployment Steps
1.  **Host Files**: Upload the root directory containing `index.html` and the `/static` folders to your server.
2.  **Verify Assets**: Ensure all product images from the previous upload are placed in the correct relative paths.
3.  **Bootstrap**: The system initializes automatically via the script tags in `index.html`.

## Architecture
The application logic is distributed as follows:
* **lib.js / java.js**: Main engine for cart operations and mathematical calculations.
* **light-dark-theme.js**: Handles the visual state of the application.
* **styles.css / kstyle.css**: Defines the structural grid, product card aesthetics, and branding.

## Contributors
Developed by @krigjo25, @yaniss, @Amy, and @Nico as a part of the GetAcademy curriculum.

---
*Practicing modern web standards through creative and collaborative engineering.*
