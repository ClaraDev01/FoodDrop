# 🛵 FoodDrop

This is a **Full-Stack development project** focused on creating a seamless mobile and desktop UI/UX for a food delivery service. The project is currently undergoing refactoring to separate the data logic (Backend) from the presentation layer (Frontend). Built using the essentials: **HTML, CSS, and pure JavaScript** for the UI.

---

## 🚦 Project Status & Roadmap

⚙️ **Current Status: Full-Stack Refactor in Progress** ⚙️

The core **Frontend (UI/UX)** logic is complete and features a robust, multi-language ordering flow. The next phase involves building a dedicated **Backend API** to manage application data (menu, pricing, languages) externally.

### ✅ Completed Milestones (Robust Frontend Features) 🚀

| Module | Status | Details |
| :--- | :--- | :--- |
| **Landing Page & Structure** | **READY!** | Finalized `index.html` layout, clean file structure, and necessary base styles. |
| **Core Menu Logic** | **READY!** | Base files (`category.html`, `category.js`) established, including item selection logic and **language state persistence via `localStorage`**. |
| **Data Migration Prep** | **READY!** | The comprehensive JavaScript `menuData` object was successfully finalized and is now **prepared for migration to a Backend API**. |
| **Layout & Responsiveness** | **READY!** | Implementation of Flexbox on menu cards for uniform height, and **CSS Media Queries implemented for all screen sizes (mobile/tablet/desktop)**. |
| **Interactive Checkout** | **READY!** | **Real-time total calculation logic** is fully implemented and bug-fixed (including currency handling). |
| **Order Finalization** | **READY!** | The logic to generate the final order message and seamlessly initiate the **WhatsApp ordering process** is complete. |
| **Multi-Language Support** | **READY!** | Full support for English (EN) and Portuguese (PT), including translated dish names. |

---

## 🚀 Next Steps & Future Roadmap  

These items represent the path to a fully functional Full-Stack application:

* **Phase 1 (WIP) - Architecture:** Implement **Backend**  to serve menu data via REST endpoints. **This is the current priority.**
* **Phase 2 - Integration:** Integrate Backend API into the Frontend, replacing the hardcoded `menuData` object with `fetch` calls.
* **Phase 3 - Features:** Introduce advanced functionalities:
    * **Multiple Units (Quantity Selector):** Add `+` and `-` buttons to allow for quantities greater than 1 per item.
    * **Notes Field (Customization):** Integrate a free-text input field within the confirmation modal.
* **Menu Expansion:** Add a wider variety of items, including more main courses, appetizers, desserts, and drinks, to the existing menu structure.

