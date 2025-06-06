const templates = {
    header: (lang) => `
        <nav>
            <!-- Мобильное меню -->
            <div class="mobile-nav">
                <a href="index.html" class="mobile-logo">
                    <img src="images/splash.png" alt="JellyJumper Logo">
                </a>
                <button class="mobile-menu-button">
                    <span>${lang === 'ru' ? 'Меню' : lang === 'fr' ? 'Menu' : lang === 'es' ? 'Menú' : lang === 'zh' ? '菜单' : lang === 'pt' ? 'Menu' : lang === 'hi' ? 'मेनू' : 'Menu'}</span>
                </button>
                <div class="mobile-dropdown">
                    <a href="#home">${lang === 'ru' ? 'Главная' : lang === 'fr' ? 'Accueil' : lang === 'es' ? 'Inicio' : lang === 'zh' ? '首页' : lang === 'pt' ? 'Início' : lang === 'hi' ? 'होम' : 'Home'}</a>
                    <a href="privacy.html">${lang === 'ru' ? 'Конфиденциальность' : lang === 'fr' ? 'Confidentialité' : lang === 'es' ? 'Privacidad' : lang === 'zh' ? '隐私政策' : lang === 'pt' ? 'Privacidade' : lang === 'hi' ? 'गोपनीयता' : 'Privacy'}</a>
                    <div class="mobile-lang-dropdown">
                        <a href="index.html" ${lang === 'en' ? 'class="active"' : ''}>EN</a>
                        <a href="ru.html" ${lang === 'ru' ? 'class="active"' : ''}>RU</a>
                        <a href="fr.html" ${lang === 'fr' ? 'class="active"' : ''}>FR</a>
                        <a href="es.html" ${lang === 'es' ? 'class="active"' : ''}>ES</a>
                        <a href="zh.html" ${lang === 'zh' ? 'class="active"' : ''}>ZH</a>
                        <a href="pt.html" ${lang === 'pt' ? 'class="active"' : ''}>PT</a>
                        <a href="hi.html" ${lang === 'hi' ? 'class="active"' : ''}>HI</a>
                    </div>
                    <a href="https://apps.apple.com/cz/app/jellyjumper-infinite-jumps/id6670177375" class="mobile-store">
                        <img src="images/app-store-en.svg" alt="${lang === 'ru' ? 'Загрузить в App Store' : lang === 'fr' ? 'Télécharger sur l\'App Store' : lang === 'es' ? 'Descargar en App Store' : lang === 'zh' ? '从App Store下载' : lang === 'pt' ? 'Baixar na App Store' : lang === 'hi' ? 'App Store से डाउनलोड करें' : 'Download on the App Store'}">
                    </a>
                </div>
            </div>

            <!-- Десктопное меню -->
            <ul class="desktop-nav">
                <li class="logo">
                    <a href="index.html">
                        <img src="images/splash.png" alt="JellyJumper Logo">
                    </a>
                </li>
                <li><a href="#home">${lang === 'ru' ? 'Главная' : lang === 'fr' ? 'Accueil' : lang === 'es' ? 'Inicio' : lang === 'zh' ? '首页' : lang === 'pt' ? 'Início' : lang === 'hi' ? 'होम' : 'Home'}</a></li>
                <li><a href="privacy.html">${lang === 'ru' ? 'Конфиденциальность' : lang === 'fr' ? 'Confidentialité' : lang === 'es' ? 'Privacidad' : lang === 'zh' ? '隐私政策' : lang === 'pt' ? 'Privacidade' : lang === 'hi' ? 'गोपनीयता' : 'Privacy'}</a></li>
                <li class="language-switch">
                    <div class="current-lang">
                        ${lang === 'ru' ? 'RU' : lang === 'fr' ? 'FR' : lang === 'es' ? 'ES' : lang === 'zh' ? 'ZH' : lang === 'pt' ? 'PT' : lang === 'hi' ? 'HI' : 'EN'}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="lang-dropdown">
                        <a href="index.html" title="English">EN</a>
                        <a href="ru.html" title="Русский">RU</a>
                        <a href="fr.html" title="Français">FR</a>
                        <a href="es.html" title="Español">ES</a>
                        <a href="zh.html" title="中文">ZH</a>
                        <a href="pt.html" title="Português">PT</a>
                        <a href="hi.html" title="हिंदी">HI</a>
                    </div>
                </li>
                <li class="app-store-button">
                    <a href="https://apps.apple.com/app/apple-store/id6670177375?pt=127292670&ct=jellyjumper.net&mt=8" class="download-button">
                        <img src="images/app-store-en.svg" alt="${lang === 'ru' ? 'Загрузить в App Store' : lang === 'fr' ? 'Télécharger sur l\'App Store' : lang === 'es' ? 'Descargar en App Store' : lang === 'zh' ? '从App Store下载' : lang === 'pt' ? 'Baixar na App Store' : lang === 'hi' ? 'App Store से डाउनलोड करें' : 'Download on the App Store'}">
                    </a>
                </li>
            </ul>
        </nav>
    `,
    
    footer: (lang) => `
        <div class="footer-content">
            <div class="copyright">
                <p>&copy; 2025 JellyJumper</p>
            </div>
        </div>
    `
}; 