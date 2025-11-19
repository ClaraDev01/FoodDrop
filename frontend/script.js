document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.getElementById('language-toggle');
    const languageMenu = document.getElementById('language-menu');
    const languageDisplay = languageToggle ? languageToggle.querySelector('span') : null;

    const subtitle = document.querySelector('.tagline');
    const mainTitle = document.querySelector('.hero h1');
    const category = document.querySelector('.category-intro p');
    const categoryButtons = document.querySelectorAll('.category-card');

    const translations = {
        'en': {
            display: 'EN',
            subtitle: 'Your favorite food, right to your door.',
            mainTitle: 'What would you like to order today?',
            category: 'Choose your category:',
            categories: {
                japanese: 'Japanese Food',
                chinese: 'Chinese Food',
                italian: 'Italian Food',
                mexican: 'Mexican Food',
                brazilian: 'Brazilian Food'
            }
        },
        'pt': {
            display: 'PT',
            subtitle: 'Sua comida favorita, direto na sua porta.',
            mainTitle: 'O que você gostaria de pedir hoje?',
            category: 'Escolha sua categoria:',
            categories: {
                japanese: 'Comida Japonesa',
                chinese: 'Comida Chinesa',
                italian: 'Comida Italiana',
                mexican: 'Comida Mexicana',
                brazilian: 'Comida Brasileira'
            }
        }
    };

    function setLanguage(lang) {
        localStorage.setItem('fooddrop_language', lang);

       const t = translations[lang];

        if (languageDisplay) languageDisplay.textContent = t.display;
        if (subtitle) subtitle.textContent = t.subtitle;
        if (mainTitle) mainTitle.textContent = t.mainTitle;
        if (category) category.textContent = t.category;

        categoryButtons.forEach(button => {
            const categoryKey = button.dataset.category;
            const spanText = button.querySelector('span');
            spanText.textContent = t.categories[categoryKey];
        });

        if (languageMenu) languageMenu.style.display = 'none';
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

    const initialLang = localStorage.getItem('fooddrop_language') || 'en';
    setLanguage(initialLang);
});