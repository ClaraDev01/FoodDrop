# 🛵 FoodDrop

This is a front-end project focused on creating a seamless mobile and desktop UI/UX for a food delivery service. Built using the essentials: **HTML, CSS, and pure JavaScript.**

---

## 🚦 Project Status & Roadmap

🎉 **Project Completed** 🎉
The core functionality, including multi-language support, menu display, item selection, real-time total calculation, and seamless WhatsApp ordering, is fully implemented. **However, final mobile responsiveness adjustments are still required.**

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

✨ **Extra Feature:** Menu data now includes translated dish names (using `name_en` and `name_pt` keys), in addition to the descriptions.🤩

---

## 🚀 Future Adjustments & Potential Enhancements

These items represent future development opportunities to evolve the FoodDrop platform:

* **Mobile Responsiveness Finalization:** Although core functionality is complete, the CSS layout requires final adjustments for various mobile screen sizes and orientations to ensure optimal user experience. **(Responsiveness adjustments pending)**.
* **Multiple Units (Quantity Selector):** Currently, the user can only select one item per category (main course, drink, dessert). For a real-world menu, future updates should add **`+` and `-` buttons** to allow for quantities greater than 1 for each selected item.
* **Notes Field (Customization):** Integrate a **free-text input field** within the confirmation modal to allow the customer to add specific observations (e.g., "no ice," "steak doneness," "allergy warnings") before sending the order via WhatsApp.
