# 🛵 FoodDrop

This is a front-end project focused on creating a seamless mobile and desktop UI/UX for a food delivery service. Built using the essentials: **HTML, CSS, and pure JavaScript.**

[![Demo Live](https://img.shields.io/badge/DEMO%20LIVE-Acessar-2581ba?style=flat-square)](https://claradev01.github.io/FoodDrop/)

---

## 🚦 Project Status & Roadmap

🎉 **Project Completed** 🎉
The core functionality, including multi-language support, menu display, item selection, real-time total calculation, seamless WhatsApp ordering, **and responsive layout for all screen sizes**, is fully implemented.

### ✅ Completed Milestones

| Module | Status | Details |
| :--- | :--- | :--- |
| **Landing Page** | **READY!** | The `index.html` layout, core styles, and category navigation links are finalized. |
| **Project Structure** | **READY!** | Clean and organized file structure, including `reset.css`, `style.css`, and the `images` directory. |
| **Core Menu Logic** | **READY!** | Base files (`category.html` and `category.js`) established, including multi-language support (PT/EN) and basic item selection logic. |
| **Menu Data Population** | **READY!** | The comprehensive JavaScript `menuData` object is fully populated with all planned categories: **Japanese, Chinese, Italian, Mexican, and Brazilian.** |
| **Card Layout Fixes** | **READY!** | Implementation of Flexbox on menu cards to ensure uniform height and proper alignment, regardless of description length. |
| **Language State Persistence** | **READY!** | The selected language is now saved using `localStorage` and persists across the index and category pages. |
| **Interactive Checkout (Cart)** | **READY!** | The logic to **calculate the total price in real-time** based on selected items is fully implemented and bug-fixed (including currency handling). |
| **Order Finalization (WhatsApp)** | **READY!** | The "Close Order" button is enabled and triggers the confirmation modal and the final **WhatsApp order generation** with the correctly formatted message and total. |
| **Responsiveness** | **READY!** | **CSS Media Queries implemented for all screen sizes (mobile/tablet/desktop), utilizing horizontal scroll for optimized menu display.** |

✨ **Extra Feature:** Menu data now includes translated dish names (using `name_en` and `name_pt` keys), in addition to the descriptions.🤩

---

## 🚀 Future Adjustments & Potential Enhancements

These items represent future development opportunities to evolve the FoodDrop platform:

* **Menu Expansion:** Add a wider variety of items, including more main courses, appetizers, desserts, and drinks, to the existing `menuData` structure for a more comprehensive selection.
* **Multiple Units (Quantity Selector):** Currently, the user can only select one item per category (main course, drink, dessert). For a real-world menu, future updates should add **`+` and `-` buttons** to allow for quantities greater than 1 for each selected item.
* **Notes Field (Customization):** Integrate a **free-text input field** within the confirmation modal to allow the customer to add specific observations (e.g., "no ice," "steak doneness," "allergy warnings") before sending the order via WhatsApp.
