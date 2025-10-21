document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const categoryType = params.get("type"); 
    const titleMainCourse = document.getElementById('menu-items'); 
    const subtitle = document.querySelector('.tagline'); 

    const translations = {
        'en': {
            display: 'EN',
            tagline: 'Your favorite food, right to your door.',
            titleMainCourse: 'First, choose your main course:',
            titleDrinks: 'Now, choose your beverage:',
            titleDesserts: 'Finally, choose your dessert:',
        },
        'pt': {
            display: 'PT',
            tagline: 'Sua comida favorita, direto na sua porta.',
            titleMainCourse: 'Primeiro, escolha seu prato principal:',
            titleDrinks: 'Agora, escolha sua bebida:',
            titleDesserts: 'Por fim, escolha sua sobremesa:',
        }
    };
    
    const menuData = {
        japanese: {
            mainCourses: [
                { name: "Udon", description_en: "Thick and soft noodles served in hot broth, with vegetables and protein.", description_pt: "Macarrão grosso e macio servido em caldo quente, com legumes e proteína.", price: "$24.00", img: "images/japanese/udon.jpg" },
                { name: "Tonkatsu", description_en: "Breaded and fried pork cutlets, served with special sauce.", description_pt: "Fatias de porco empanadas e fritas, servidas com molho especial.", price: "$28.00", img: "images/japanese/tonkatsu.jpg" },
                { name: "Katsudon", description_en: "Bowl of rice topped with breaded pork cutlet, egg, and a savory-sweet sauce.", description_pt: "Tigela com costeleta de porco empanada, ovo e molho agridoce.", price: "$18.00", img: "images/japanese/katsudon.jpg" },
            ],
            drinks: [
                { name: "Diet Coke", description_en: "355ml can.", description_pt: "Lata de 355ml.", price: "$3.50", img: "images/drinks/diet-coke.jpg" },
                { name: "Monster Energy", description_en: "473ml can.", description_pt: "Lata de 473ml.", price: "$5.00", img: "images/drinks/monster.jpg" },
                { name: "Sprite", description_en: "355ml Lemon-Lime can.", description_pt: "Lata 355ml Lemon-Lime.", price: "4.00", img: "images/drinks/sprite.png"}
            ],
            desserts: [
                { name: "Yaki Manju", description_en: "Steamed, filled buns, then grilled. Contains 12 pieces.", description_pt: "Bolinhos cozidos no vapor recheados. Contém 12 unidades.", price: "$18.90", img: "images/japanese/yaki-manju.jpg" },
                { name: "Mochi", description_en: "Glutinous rice dumpling. Assorted flavors.", description_pt: "Bolinhos de arroz glutinoso. Sabores sortidos.", price: "$5.50 / Unit", img: "images/japanese/mochi.jpg" },
                { name: "Cream Dorayaki", description_en: "Two soft, sweet pancakes filled with a smooth cream.", description_pt: "Duas panquecas doces, macias, recheadas com creme suave.", price: "$3.90 / Unit" , img: "images/japanese/dorayaki.jpg"}
            ]
        },
        chinese: { mainCourses: [
                { name: "Arroz Chop Suey", description_en: "Rice mixed with meat, shrimp, and vegetables in a light soy sauce.", description_pt: "Arroz misturado com carne, camarão e vegetais em molho de soja leve.", price: "$18.00", img: "images/chinese/arroz-shop-suey.jpg" },
                { name: "Carne de Porco Agridoce", description_en: "Crispy pork slices tossed in a bright sweet and sour sauce with bell peppers and pineapple.", description_pt: "Fatias de porco crocantes misturadas em um vibrante molho agridoce com pimentões e abacaxi.", price: "$25.00", img: "images/chinese/sweet-sour-pork.jpg" },
                { name: "Yakisoba", description_en: "Stir-fried wheat noodles with beef, chicken, and a medley of vegetables.", description_pt: "Macarrão de trigo salteado com carne bovina, frango e uma mistura de vegetais.", price: "$19.50", img: "images/chinese/yakisoba.jpg" },
            ],
            drinks: [
                { name: "Diet Coke", description_en: "355ml can.", description_pt: "Lata de 355ml.", price: "$3.50", img: "images/drinks/diet-coke.jpg" },
                { name: "Monster Energy", description_en: "473ml can.", description_pt: "Lata de 473ml.", price: "$5.00", img: "images/drinks/monster.jpg" },
                { name: "Sprite", description_en: "355ml Lemon-Lime can.", description_pt: "Lata 355ml Lemon-Lime.", price: "4.00", img: "images/drinks/sprite.png"}
            ],
            desserts: [
                { name: "Bao de Chocolate", description_en: "Steamed fluffy bun filled with rich, melted chocolate.", description_pt: "Pãozinho fofo cozido no vapor, recheado com chocolate derretido e rico.", price: "$6.50 / Unit", img: "images/chinese/bao-chocolate.jpg" },
                { name: "Bolo Lunar", description_en: "Traditional rich pastry, often filled with lotus seed paste or red bean paste.", description_pt: "Massa rica tradicional, frequentemente recheada com pasta de semente de lótus ou feijão vermelho.", price: "$7.50 / Unit", img: "images/chinese/bolo-lunar.jpg" },
                { name: "Torta de Ovo", description_en: "Small, flaky pastry tart with a smooth, sweet egg custard filling.", description_pt: "Pequena e folhada torta de massa com um recheio suave e doce de creme de ovo.", price: "$4.50 / Unit", img: "images/chinese/egg-tart.jpg" }
            ] },
        italian: { /* ... */ },
        mexican: { /* ... */ },
        brazilian: { /* ... */ },
    };
    
    let currentLang = localStorage.getItem('fooddrop_language') || 'en';

    const languageToggle = document.getElementById('language-toggle');
    const languageMenu = document.getElementById('language-menu');
    const languageDisplay = languageToggle ? languageToggle.querySelector('span') : null;
    const taglineElement = document.querySelector('.tagline');
    
    const titleElements = document.querySelectorAll('.category-page .category-title h1');
    
    const titleMainCourseElement = titleElements[0];
    const titleDrinksElement = titleElements[1];
    const titleDessertsElement = titleElements[2];

    function createMenuItemCard(item, lang) {
        const descriptionKey = `description_${lang}`;
        const description = item[descriptionKey] || item.description_en; 
        
        return `
            <div class="card">
                <img src="${item.img}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>${description}</p>
                <span class="price">${item.price}</span>
            </div>
        `;
    }

    function renderMenu(lang) {
        const selectedCategory = menuData[categoryType] || menuData.japanese; 

        const containers = {
            mainCourses: document.getElementById("main-courses"),
            drinks: document.getElementById("drinks"),
            desserts: document.getElementById("desserts")
        };

        if (selectedCategory) {
            for (const key in selectedCategory) {
                const items = selectedCategory[key];
                const container = containers[key];

                if (items && container) {
                    container.innerHTML = items
                        .map(item => createMenuItemCard(item, lang))
                        .join("");
                }
            }
        } else {
            console.error(`Category "${categoryType}" not found.`);
        }
        
        setupCardSelection();
    }
    
    function setupCardSelection() {
        const menuContainers = document.querySelectorAll('.menu-items');

        menuContainers.forEach(container => {
            container.removeEventListener('click', handleCardClick); 
            container.addEventListener('click', handleCardClick);
        });
    }

    function handleCardClick(event) {
        const container = this;
        const clickedCard = event.target.closest('.card');
        
        if (clickedCard && container.contains(clickedCard)) {
            const allCardsInSection = container.querySelectorAll('.card');
            allCardsInSection.forEach(card => {
                if (card !== clickedCard) {
                    card.classList.remove('selected');
                }
            });
            clickedCard.classList.toggle('selected');
        }
    }

    function setLanguage(lang) {
        localStorage.setItem('fooddrop_language', lang);

        currentLang = lang;
        const t = translations[lang];

        if (languageDisplay) languageDisplay.textContent = t.display;
        if (taglineElement) taglineElement.textContent = t.tagline;

        if (titleMainCourseElement) titleMainCourseElement.textContent = t.titleMainCourse;
        if (titleDrinksElement) titleDrinksElement.textContent = t.titleDrinks;
        if (titleDessertsElement) titleDessertsElement.textContent = t.titleDesserts;

        if (languageMenu) languageMenu.style.display = 'none';
        
        renderMenu(lang);
    }

    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            if (languageMenu) {
                languageMenu.style.display = languageMenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    }

    if (languageMenu) {
        languageMenu.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                const selectedLang = event.target.dataset.lang;
                setLanguage(selectedLang);
            }
        });
    }

   setLanguage(currentLang);
});