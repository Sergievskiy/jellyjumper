// Функция для определения языка страницы
function getPageLanguage() {
    const htmlLang = document.documentElement.lang;
    return htmlLang || 'en';
}

// Функция для рендеринга контента
function renderContent() {
    const lang = getPageLanguage();
    const data = content[lang] || content.en;
    
    // Обновляем заголовок страницы
    document.title = data.title;
    
    // Рендеринг основного контента
    document.querySelector('h1').textContent = data.title;
    document.querySelector('.intro').textContent = data.intro;
    document.querySelector('h2').textContent = data.featuresTitle;
    
    const featuresList = document.querySelector('.features');
    featuresList.innerHTML = data.features.map(feature => `<li>${feature}</li>`).join('');
    
    // Обновляем навигацию
    document.querySelectorAll('a[href="#home"]').forEach(el => el.textContent = data.nav.home);
    document.querySelectorAll('a[href="privacy.html"]').forEach(el => el.textContent = data.nav.privacy);
    document.querySelectorAll('.contacts-dropdown-button').forEach(el => el.textContent = data.nav.contact);
    
    // Обновляем заголовок списка особенностей
    const featuresTitle = document.querySelector('.product-description h2');
    if (featuresTitle) {
        featuresTitle.textContent = lang === 'ru' ? 'Особенности игры:' :
                                  lang === 'en' ? 'Game Features:' :
                                  lang === 'fr' ? 'Caractéristiques du jeu :' :
                                  'Características del juego:';
    }
    
    // Обновляем alt-тексты для изображений
    const carouselItems = document.querySelectorAll('.carousel-item img');
    carouselItems.forEach((img, index) => {
        img.alt = lang === 'ru' ? `Скриншот ${index + 1}` :
                  lang === 'en' ? `Screenshot ${index + 1}` :
                  lang === 'fr' ? `Capture d'écran ${index + 1}` :
                  `Captura de pantalla ${index + 1}`;
    });
    
    // Обновляем текст кнопки меню в мобильной версии
    const menuButton = document.querySelector('.mobile-menu-button span');
    if (menuButton) {
        menuButton.textContent = lang === 'ru' ? 'Меню' :
                                lang === 'en' ? 'Menu' :
                                lang === 'fr' ? 'Menu' :
                                'Menú';
    }
}

// Функция для рендеринга header и footer
function renderLayout() {
    const lang = getPageLanguage();
    
    // Рендеринг header
    const header = document.querySelector('header');
    header.innerHTML = templates.header(lang);
    
    // Рендеринг footer
    const footer = document.querySelector('footer');
    footer.innerHTML = templates.footer(lang);
    
    // Инициализация мобильного меню
    initMobileMenu();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderLayout();
    renderContent();
}); 