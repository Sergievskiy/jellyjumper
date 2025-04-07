const templates = {
    header: (lang) => `
        <nav>
            <!-- Мобильное меню -->
            <div class="mobile-nav">
                <a href="index.html" class="mobile-logo">
                    <img src="images/splash.png" alt="JellyJumper Logo">
                </a>
                <button class="mobile-menu-button">
                    <span>${lang === 'ru' ? 'Меню' : lang === 'fr' ? 'Menu' : lang === 'es' ? 'Menú' : 'Menu'}</span>
                </button>
                <div class="mobile-dropdown">
                    <a href="#home">${lang === 'ru' ? 'Главная' : lang === 'fr' ? 'Accueil' : lang === 'es' ? 'Inicio' : 'Home'}</a>
                    <a href="privacy.html">${lang === 'ru' ? 'Конфиденциальность' : lang === 'fr' ? 'Confidentialité' : lang === 'es' ? 'Privacidad' : 'Privacy'}</a>
                    <div class="mobile-lang-dropdown">
                        <a href="index.html" ${lang === 'en' ? 'class="active"' : ''}>EN</a>
                        <a href="ru.html" ${lang === 'ru' ? 'class="active"' : ''}>RU</a>
                        <a href="fr.html" ${lang === 'fr' ? 'class="active"' : ''}>FR</a>
                        <a href="es.html" ${lang === 'es' ? 'class="active"' : ''}>ES</a>
                    </div>
                    <a href="https://apps.apple.com/cz/app/jellyjumper-infinite-jumps/id6670177375" class="mobile-store">
                        <img src="images/app-store-en.svg" alt="${lang === 'ru' ? 'Загрузить в App Store' : lang === 'fr' ? 'Télécharger sur l\'App Store' : lang === 'es' ? 'Descargar en App Store' : 'Download on the App Store'}">
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
                <li><a href="#home">${lang === 'ru' ? 'Главная' : lang === 'fr' ? 'Accueil' : lang === 'es' ? 'Inicio' : 'Home'}</a></li>
                <li><a href="privacy.html">${lang === 'ru' ? 'Конфиденциальность' : lang === 'fr' ? 'Confidentialité' : lang === 'es' ? 'Privacidad' : 'Privacy'}</a></li>
                <li class="language-switch">
                    <div class="current-lang">
                        ${lang === 'ru' ? 'RU' : lang === 'fr' ? 'FR' : lang === 'es' ? 'ES' : 'EN'}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="lang-dropdown">
                        <a href="index.html" title="English">EN</a>
                        <a href="ru.html" title="Русский">RU</a>
                        <a href="fr.html" title="Français">FR</a>
                        <a href="es.html" title="Español">ES</a>
                    </div>
                </li>
                <li class="app-store-button">
                    <a href="https://apps.apple.com/cz/app/jellyjumper-infinite-jumps/id6670177375" class="download-button">
                        <img src="images/app-store-en.svg" alt="${lang === 'ru' ? 'Загрузить в App Store' : lang === 'fr' ? 'Télécharger sur l\'App Store' : lang === 'es' ? 'Descargar en App Store' : 'Download on the App Store'}">
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
            <!-- Мобильная версия контактов -->
            <div class="mobile-contacts">
                <button class="contacts-dropdown-button">${lang === 'ru' ? 'Контакты' : lang === 'fr' ? 'Contact' : lang === 'es' ? 'Contacto' : 'Contact'}</button>
                <div class="contacts-dropdown">
                    <a href="https://x.com/sergievskiyks" target="_blank">
                        <img src="images/x-logo.svg" alt="Twitter/X">
                        @sergievskiyks
                    </a>
                    <a href="https://www.facebook.com/Sergievskiy" target="_blank">
                        <img src="images/fb-logo.svg" alt="Facebook">
                        @Sergievskiy
                    </a>
                </div>
            </div>
            <!-- Десктопная версия контактов -->
            <div class="desktop-social-links">
                <div class="social-links">
                    <a href="https://x.com/sergievskiyks" target="_blank" class="social-link">
                        <img src="images/x-logo.svg" alt="Twitter/X">
                        @sergievskiyks
                    </a>
                    <a href="https://www.facebook.com/Sergievskiy" target="_blank" class="social-link">
                        <img src="images/fb-logo.svg" alt="Facebook">
                        @Sergievskiy
                    </a>
                </div>
            </div>
        </div>
    `
}; 