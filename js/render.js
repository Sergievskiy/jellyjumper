// Функция для определения языка страницы
function getPageLanguage() {
    const htmlLang = document.documentElement.lang;
    
    // Особая обработка для китайского языка
    if (htmlLang === 'zh-CN') return 'zh';
    
    return htmlLang || 'en';
}

// Determine language from filename
function getLanguage() {
    const path = window.location.pathname;
    if (path.includes('ru.html')) return 'ru';
    if (path.includes('fr.html')) return 'fr';
    if (path.includes('es.html')) return 'es';
    if (path.includes('zh.html')) return 'zh';
    if (path.includes('pt.html')) return 'pt';
    return 'en';
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
                                  lang === 'es' ? 'Características del juego:' :
                                  lang === 'zh' ? '游戏特点:' :
                                  lang === 'pt' ? 'Características do jogo:' :
                                  'Game Features:';
    }
    
    // Обновляем alt-тексты для изображений
    const carouselItems = document.querySelectorAll('.carousel-item img');
    carouselItems.forEach((img, index) => {
        img.alt = lang === 'ru' ? `Скриншот ${index + 1}` :
                  lang === 'en' ? `Screenshot ${index + 1}` :
                  lang === 'fr' ? `Capture d'écran ${index + 1}` :
                  lang === 'es' ? `Captura de pantalla ${index + 1}` :
                  lang === 'zh' ? `游戏截图 ${index + 1}` :
                  lang === 'pt' ? `Captura de tela ${index + 1}` :
                  `Screenshot ${index + 1}`;
    });
    
    // Обновляем текст кнопки меню в мобильной версии
    const menuButton = document.querySelector('.mobile-menu-button span');
    if (menuButton) {
        menuButton.textContent = lang === 'ru' ? 'Меню' :
                                lang === 'en' ? 'Menu' :
                                lang === 'fr' ? 'Menu' :
                                lang === 'es' ? 'Menú' :
                                lang === 'zh' ? '菜单' :
                                lang === 'pt' ? 'Menu' :
                                'Menu';
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