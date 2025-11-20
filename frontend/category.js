document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const categoryType = params.get("type");

    let selectedItems = {
        mainCourses: null,
        drinks: null,
        desserts: null
    };

    const translations = {
        'en': {
            display: 'EN',
            tagline: 'Your favorite food, right to your door.',
            titleMainCourse: 'First, choose your main course:',
            titleDrinks: 'Now, choose your beverage:',
            titleDesserts: 'Finally, choose your dessert:',
            checkoutDisabled: 'Select 3 items<br>to close the order!',
            checkoutEnabled: 'Close Order!',
            confirmTitle: 'Confirm your order',
            confirmTotal: 'Total:',
            confirmButton: 'Confirm and Place Order!',
            cancelButton: 'Cancel order',
            whatsappMessage: 'Hello, I would like to place an order:\n - Main Course: {mainCourse}\n - Drink: {drink}\n - Dessert: {dessert}\n Total: {total}',
        },
        'pt': {
            display: 'PT',
            tagline: 'Sua comida favorita, direto na sua porta.',
            titleMainCourse: 'Primeiro, escolha seu prato principal:',
            titleDrinks: 'Agora, escolha sua bebida:',
            titleDesserts: 'Por fim, escolha sua sobremesa:',
            checkoutDisabled: 'Selecione os 3 itens<br>para fechar o pedido!',
            checkoutEnabled: 'Fechar Pedido!',
            confirmTitle: 'Confirme seu pedido',
            confirmTotal: 'Total:',
            confirmButton: 'Tudo certo, pode pedir!',
            cancelButton: 'Cancelar pedido',
            whatsappMessage: 'Olá, gostaria de fazer o pedido:\n - Prato: {mainCourse}\n - Bebida: {drink}\n - Sobremesa: {dessert}\n Total: {total}',
        }
    };

    const menuData = { // This object will be replaced by API calls to the Backend.
        japanese: {
            mainCourses: [
                { name_en: "Udon", name_pt: "Udon", description_en: "Thick and soft noodles served in hot broth, with vegetables and protein.", description_pt: "Macarrão grosso e macio servido em caldo quente, com legumes e proteína.", price: "$24.00", img: "images/japanese/udon.jpg" },
                { name_en: "Tonkatsu", name_pt: "Tonkatsu", description_en: "Breaded and fried pork cutlets, served with special sauce.", description_pt: "Fatias de porco empanadas e fritas, servidas com molho especial.", price: "$28.00", img: "images/japanese/tonkatsu.jpg" },
                { name_en: "Katsudon", name_pt: "Katsudon", description_en: "Bowl of rice topped with breaded pork cutlet, egg, and a savory-sweet sauce.", description_pt: "Tigela com costeleta de porco empanada, ovo e molho agridoce.", price: "$18.00", img: "images/japanese/katsudon.jpg" },
            ],
            drinks: [
                { name_en: "Diet Coke", name_pt: "Coca Diet", description_en: "355ml can.", description_pt: "Lata de 355ml.", price: "$3.50", img: "images/drinks/diet-coke.jpg" },
                { name_en: "Monster Energy", name_pt: "Energético Monster", description_en: "473ml can.", description_pt: "Lata de 473ml.", price: "$5.00", img: "images/drinks/monster.jpg" },
                { name_en: "Sprite", name_pt: "Sprite", description_en: "355ml Lemon-Lime can.", description_pt: "Lata 355ml Lemon-Lime.", price: "$4.00", img: "images/drinks/sprite.png" }
            ],
            desserts: [
                { name_en: "Yaki Manju", name_pt: "Yaki Manju", description_en: "Steamed, filled buns, then grilled. Contains 12 pieces.", description_pt: "Bolinhos cozidos no vapor recheados. Contém 12 unidades.", price: "$18.90", img: "images/japanese/yaki-manju.jpg" },
                { name_en: "Mochi", name_pt: "Mochi", description_en: "Glutinous rice dumpling. Assorted flavors.", description_pt: "Bolinhos de arroz glutinoso. Sabores sortidos.", price: "$5.50 / Unit", img: "images/japanese/mochi.jpg" },
                { name_en: "Cream Dorayaki", name_pt: "Dorayaki de Creme", description_en: "Two soft, sweet pancakes filled with a smooth cream.", description_pt: "Duas panquecas doces, macias, recheadas com creme suave.", price: "$3.90 / Unit", img: "images/japanese/dorayaki.jpg" }
            ]
        },
        chinese: {
            mainCourses: [
                { name_en: "Chop Suey Rice", name_pt: "Arroz Chop Suey", description_en: "Rice mixed with meat, shrimp, and vegetables in a light soy sauce.", description_pt: "Arroz misturado com carne, camarão e vegetais em molho de soja leve.", price: "$18.00", img: "images/chinese/arroz-shop-suey.jpg" },
                { name_en: "Sweet and Sour Pork", name_pt: "Carne de Porco Agridoce", description_en: "Crispy pork slices tossed in a bright sweet and sour sauce with bell peppers and pineapple.", description_pt: "Fatias de porco crocantes misturadas em um vibrante molho agridoce com pimentões e abacaxi.", price: "$25.00", img: "images/chinese/sweet-sour-pork.jpg" },
                { name_en: "Yakisoba", name_pt: "Yakisoba", description_en: "Stir-fried wheat noodles with beef, chicken, and a medley of vegetables.", description_pt: "Macarrão de trigo salteado com carne bovina, frango e uma mistura de vegetais.", price: "$19.50", img: "images/chinese/yakisoba.jpg" },
            ],
            drinks: [
                { name_en: "Diet Coke", name_pt: "Coca Diet", description_en: "355ml can.", description_pt: "Lata de 355ml.", price: "$3.50", img: "images/drinks/diet-coke.jpg" },
                { name_en: "Monster Energy", name_pt: "Energético Monster", description_en: "473ml can.", description_pt: "Lata de 473ml.", price: "$5.00", img: "images/drinks/monster.jpg" },
                { name_en: "Sprite", name_pt: "Sprite", description_en: "355ml Lemon-Lime can.", description_pt: "Lata 355ml Lemon-Lime.", price: "$4.00", img: "images/drinks/sprite.png" }
            ],
            desserts: [
                { name_en: "Chocolate Bao", name_pt: "Bao de Chocolate", description_en: "Steamed fluffy bun filled with melted chocolate.", description_pt: "Pãozinho fofo cozido no vapor, recheado com chocolate derretido.", price: "$6.50 / Unit", img: "images/chinese/bao-chocolate.jpg" },
                { name_en: "Mooncake", name_pt: "Bolo Lunar", description_en: "Traditional rich pastry, often filled with lotus seed paste or red bean paste.", description_pt: "Massa rica tradicional, frequentemente recheada com pasta de semente de lótus ou feijão vermelho.", price: "$7.50 / Unit", img: "images/chinese/bolo-lunar.jpg" },
                { name_en: "Egg Tart", name_pt: "Torta de Ovo", description_en: "Small, flaky pastry tart with a smooth, sweet egg custard filling.", description_pt: "Pequena e folhada torta de massa com um recheio suave e doce de creme de ovo.", price: "$4.50 / Unit", img: "images/chinese/egg-tart.jpg" }
            ]
        },
        italian: {
            mainCourses: [
                { name_en: "Fettuccine Alfredo", name_pt: "Fettuccine Alfredo", description_en: "Classic pasta with butter and Parmesan cheese, creating a rich, creamy sauce.", description_pt: "Massa clássica com manteiga e queijo parmesão, criando um molho rico e cremoso.", price: "$22.00", img: "images/italian/fettuccine-alfredo.jpg" },
                { name_en: "Gnocchi al Sugo", name_pt: "Nhoque ao Sugo", description_en: "Soft potato gnocchi served with a traditional slow-cooked tomato sauce.", description_pt: "Gnocchi de batata macio servido com um molho de tomate tradicional de cozimento lento.", price: "$19.50", img: "images/italian/gnocchi-sugo.jpg" },
                { name_en: "Lasagna Bolognese", name_pt: "Lasanha à Bolonhesa", description_en: "Layers of pasta, meat ragu, béchamel, and Parmesan cheese, baked to perfection.", description_pt: "Camadas de massa, ragu de carne, molho béchamel e queijo parmesão, assadas na perfeição.", price: "$24.50", img: "images/italian/lasanha-bolonhesa.jpg" }
            ],
            drinks: [
                { name_en: "Diet Coke", name_pt: "Coca Diet", description_en: "355ml can.", description_pt: "Lata de 355ml.", price: "$3.50", img: "images/drinks/diet-coke.jpg" },
                { name_en: "Monster Energy", name_pt: "Energético Monster", description_en: "473ml can.", description_pt: "Lata de 473ml.", price: "$5.00", img: "images/drinks/monster.jpg" },
                { name_en: "Sprite", name_pt: "Sprite", description_en: "355ml Lemon-Lime can.", description_pt: "Lata 355ml Lemon-Lime.", price: "$4.00", img: "images/drinks/sprite.png" }
            ],
            desserts: [
                { name_en: "Cannoli", name_pt: "Cannoli", description_en: "Crispy pastry tube filled with sweet, creamy ricotta cheese, dusted with sugar.", description_pt: "Tubo de massa crocante recheado com queijo ricota doce e cremoso, polvilhado com açúcar.", price: "$8.00 / Unit", img: "images/italian/cannoli.jpg" },
                { name_en: "Panna Cotta", name_pt: "Panna Cotta", description_en: "Sweetened cream dessert thickened with gelatin, often topped with berry coulis.", description_pt: "Sobremesa de creme adoçado engrossado com gelatina, frequentemente coberto com coulis de frutas vermelhas.", price: "$9.50", img: "images/italian/panna-cotta.jpg" },
                { name_en: "Tiramisu", name_pt: "Tiramisu", description_en: "Layers of coffee-soaked ladyfingers and whipped mascarpone cream, topped with cocoa.", description_pt: "Camadas de biscoitos champanhe embebidos em café e creme de mascarpone batido, cobertas com cacau.", price: "$11.00", img: "images/italian/tiramisu.jpg" }
            ]
        },
        mexican: {
            mainCourses: [
                { name_en: "Chicken Burrito", name_pt: "Burrito de Frango", description_en: "A large tortilla filled with seasoned chicken, black beans, and salsa.", description_pt: "Tortilla grande recheada com frango temperado, feijão preto e salsa.", price: "$16.50", img: "images/mexican/burrito-de-frango.jpg" },
                { name_en: "Chili con Carne", name_pt: "Chili com Carne", description_en: "Hearty stew of ground beef, beans, tomatoes, and spices, served with tortilla chips.", description_pt: "Ensopado robusto de carne moída, feijão, tomate e especiarias, servido com nachos.", price: "$18.00", img: "images/mexican/chilli-carne.jpg" },
                { name_en: "Cheese Quesadilla", name_pt: "Quesadilha de Queijo", description_en: "Grilled tortillas filled with melted cheese, served with salsa and sour cream.", description_pt: "Tortillas grelhadas recheadas com queijo derretido, servidas com salsa e sour cream.", price: "$14.00", img: "images/mexican/quesadilha-de-queijo.jpg" }
            ],
            drinks: [
                { name_en: "Diet Coke", name_pt: "Coca Diet", description_en: "355ml can.", description_pt: "Lata de 355ml.", price: "$3.50", img: "images/drinks/diet-coke.jpg" },
                { name_en: "Monster Energy", name_pt: "Energético Monster", description_en: "473ml can.", description_pt: "Lata de 473ml.", price: "$5.00", img: "images/drinks/monster.jpg" },
                { name_en: "Sprite", name_pt: "Sprite", description_en: "355ml Lemon-Lime can.", description_pt: "Lata 355ml Lemon-Lime.", price: "$4.00", img: "images/drinks/sprite.png" }
            ],
            desserts: [
                { name_en: "Biscoff Tres Leches", name_pt: "Biscoff Tres Leches", description_en: "Classic tres leches cake infused with Biscoff cookie flavor and crumbs.", description_pt: "Bolo clássico de três leites com sabor e farelos de biscoito Biscoff.", price: "$9.00", img: "images/mexican/biscoff-tres-leches.jpg" },
                { name_en: "Flan", name_pt: "Pudim de Caramelo", description_en: "Smooth and creamy caramel custard, a traditional Mexican dessert.", description_pt: "Pudim de caramelo suave e cremoso, uma sobremesa tradicional mexicana.", price: "$7.50", img: "images/mexican/flan.jpg" },
                { name_en: "Margarita Bars", name_pt: "Bares de Margarita", description_en: "Tangy lime dessert bars with a buttery crust, inspired by the classic cocktail.", description_pt: "Barras de sobremesa de limão picante com uma crosta amanteigada, inspiradas no coquetel clássico.", price: "$8.50", img: "images/mexican/margarita-bars.jpg" }
            ]
        },
        brazilian: {
            mainCourses: [
                { name_en: "Feijoada (Light)", name_pt: "Feijoada (Leve)", description_en: "A lighter version of the traditional black bean stew with beef, served with rice and kale.", description_pt: "Versão leve do tradicional cozido de feijão preto com carne bovina, servido com arroz e couve.", price: "$27.00", img: "images/brazilian/feijoada-light.jpg" },
                { name_en: "Beef Stroganoff", name_pt: "Strogonoff de Carne", description_en: "Tender beef strips in a creamy sauce with mushrooms, served with rice and potato sticks.", description_pt: "Tiras de carne macia em molho cremoso com cogumelos, servido com arroz e batata palha.", price: "$23.50", img: "images/brazilian/strogonoff-de-carne.jpg" },
                { name_en: "Chicken Parmigiana", name_pt: "Frango à Parmegiana", description_en: "Breaded chicken fillet covered in tomato sauce and melted cheese, served with fries and rice.", description_pt: "Filé de frango empanado coberto com molho de tomate e queijo derretido, servido com batata frita e arroz.", price: "$21.50", img: "images/brazilian/frango-a-parmegiana-1.jpg" }
            ],
            drinks: [
                { name_en: "Diet Coke", name_pt: "Coca Diet", description_en: "355ml can.", description_pt: "Lata de 355ml.", price: "$3.50", img: "images/drinks/diet-coke.jpg" },
                { name_en: "Monster Energy", name_pt: "Energético Monster", description_en: "473ml can.", description_pt: "Lata de 473ml.", price: "$5.00", img: "images/drinks/monster.jpg" },
                { name_en: "Sprite", name_pt: "Sprite", description_en: "355ml Lemon-Lime can.", description_pt: "Lata 355ml Lemon-Lime.", price: "$4.00", img: "images/drinks/sprite.png" }
            ],
            desserts: [
                { name_en: "Açaí Bowl", name_pt: "Tigela de Açaí", description_en: "Frozen Amazonian berry pulp, topped with granola and sliced bananas.", description_pt: "Polpa de fruta amazônica congelada, coberta com granola e rodelas de banana.", price: "$10.50", img: "images/brazilian/tigela-de-acai.jpg" },
                { name_en: "Passion Fruit Mousse", name_pt: "Mousse de Maracujá", description_en: "Light and airy tropical mousse, made with passion fruit pulp.", description_pt: "Mousse tropical leve e aerada, feita com polpa de maracujá.", price: "$7.50", img: "images/brazilian/mousse-maracuja.jpg" },
                { name_en: "Condensed Milk Pudding", name_pt: "Pudim de Leite Condensado", description_en: "Creamy baked custard with a soft texture and caramel topping.", description_pt: "Creme cremoso assado com textura suave e calda de caramelo.", price: "$8.00", img: "images/brazilian/pudim-de-leite-condensado.jpg" }
            ]
        }
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

    window.verifyOrder = verifyOrder;
    window.closeOrder = closeOrder;
    window.confirmOrder = confirmOrder;
    window.cancelOrder = cancelOrder;

    function createMenuItemCard(item, lang, itemType) {
        const descriptionKey = `description_${lang}`;
        const description = item[descriptionKey] || item.description_en;
        const dishName = item[`name_${lang}`] || item.name_en;

        return `
            <div class="card" data-item-type="${itemType}">
                <img src="${item.img}" alt="${dishName}">
                <h2>${dishName}</h2>
                <p>${description}</p>
                <span class="price">${item.price}</span>
            </div>
        `;
    }

    function renderMenu(lang) { // Must be 'async' and use 'fetch' to load menuData from the Backend.
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
                        .map(item => createMenuItemCard(item, lang, key))
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
            const sectionId = clickedCard.getAttribute('data-item-type');
            const allCardsInSection = container.querySelectorAll('.card');

            allCardsInSection.forEach(card => {
                if (card !== clickedCard) {
                    card.classList.remove('selected');
                }
            });

            clickedCard.classList.toggle('selected');

            if (clickedCard.classList.contains('selected')) {
                selectedItems[sectionId] = {
                    name: clickedCard.querySelector('h2').textContent,
                    price: clickedCard.querySelector('.price').textContent
                };
            } else {
                selectedItems[sectionId] = null;
            }

            verifyOrder();
        }
    }

    function updateCheckoutButton(lang) {
        const buttonDiv = document.querySelector('.checkout-button');
        const buttonTextElement = document.getElementById('checkout-button-text');
        const t = translations[lang];

        const allSelected = selectedItems.mainCourses && selectedItems.drinks && selectedItems.desserts;

        if (allSelected) {
            buttonTextElement.classList.remove('disabled');
            buttonTextElement.classList.add('enabled');
            buttonTextElement.innerHTML = t.checkoutEnabled;
            buttonDiv.onclick = closeOrder;
        } else {
            buttonTextElement.classList.remove('enabled');
            buttonTextElement.classList.add('disabled');
            buttonTextElement.innerHTML = t.checkoutDisabled;
            buttonDiv.onclick = null;
        }
    }

    function verifyOrder() {
        updateCheckoutButton(currentLang);
    }

    function calculateTotal() {
        let total = 0;
        let itemNames = {};

        for (const key in selectedItems) {
            const item = selectedItems[key];
            if (item) {

                let priceString = item.price.replace(/[^\d,\.]/g, '');
                priceString = priceString.replace(',', '.');

                const priceValue = parseFloat(priceString) || 0;
                total += priceValue;

                itemNames[key] = item.name;
            }
        }
        return { total, itemNames };
    }

    function closeOrder() {
        const { total } = calculateTotal();
        const t = translations[currentLang];

        const detailsContainer = document.getElementById("order-details");
        const totalElement = document.getElementById("order-total");
        const modal = document.getElementById("information-modal");

        const currencyPrefix = currentLang === 'pt' ? '$' : '$';

        let detailsHTML = '';
        for (const key in selectedItems) {
            const item = selectedItems[key];
            if (item) {
                const priceDisplay = item.price;

                detailsHTML += `
                <div class="item-detail">
                    <span class="detail-name">${item.name}</span> <strong class="detail-price">${priceDisplay}</strong>
                </div>
            `;
            }
        }
        detailsContainer.innerHTML = detailsHTML;

        let formattedTotal = total.toFixed(2);
        if (currentLang === 'pt') {
            formattedTotal = formattedTotal.replace('.', ',');
        }
        formattedTotal = currencyPrefix + formattedTotal;

        totalElement.innerHTML = `<strong>${t.confirmTotal} ${formattedTotal}</strong>`;

        document.getElementById('confirm-order-title').textContent = t.confirmTitle;
        document.querySelector('.confirm-order-button').textContent = t.confirmButton;
        document.querySelector('.cancel-button').textContent = t.cancelButton;

        modal.classList.remove("hidden");
    }

    function confirmOrder() {
        const { total, itemNames } = calculateTotal();
        const t = translations[currentLang];

        let totalDisplay = total.toFixed(2);

        const currencyPrefix = '$';
        if (currentLang === 'pt') {
            totalDisplay = totalDisplay.replace('.', ',');
        }
        totalDisplay = currencyPrefix + totalDisplay;

        const pratoSelecionado = itemNames.mainCourses;
        const bebidaSelecionada = itemNames.drinks;
        const sobremesaSelecionada = itemNames.desserts;

        let mensagem = t.whatsappMessage
            .replace('{mainCourse}', pratoSelecionado)
            .replace('{drink}', bebidaSelecionada)
            .replace('{dessert}', sobremesaSelecionada)
            .replace('{total}', totalDisplay);

        const phoneNumber = "";
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`;

        window.open(whatsappLink, "_blank");
        cancelOrder();
    }

    function cancelOrder() {
        document.getElementById("information-modal").classList.add("hidden");
    }

    function setLanguage(lang) { // Must be 'async' and use 'await renderMenu(lang)'.
        localStorage.setItem('fooddrop_language', lang);

        currentLang = lang;
        const t = translations[lang];

        if (languageDisplay) languageDisplay.textContent = t.display;
        if (taglineElement) taglineElement.textContent = t.tagline;

        if (titleMainCourseElement) titleMainCourseElement.textContent = t.titleMainCourse;
        if (titleDrinksElement) titleDrinksElement.textContent = t.titleDrinks;
        if (titleDessertsElement) titleDessertsElement.textContent = t.titleDesserts;

        if (languageMenu) languageMenu.style.display = 'none';

        updateCheckoutButton(lang);
        if (!document.getElementById("information-modal").classList.contains('hidden')) {
            const t = translations[lang];
            document.getElementById('confirm-order-title').textContent = t.confirmTitle;
            document.querySelector('.confirm-order-button').textContent = t.confirmButton;
            document.querySelector('.cancel-button').textContent = t.cancelButton;
        }

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