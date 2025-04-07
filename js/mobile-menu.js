// Функция для инициализации мобильного меню
function initMobileMenu() {
    console.log('=== Инициализация мобильного меню ===');
    
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileDropdown = document.querySelector('.mobile-dropdown');
    const contactsButton = document.querySelector('.contacts-dropdown-button');
    const contactsDropdown = document.querySelector('.contacts-dropdown');
    const desktopLanguageSwitch = document.querySelector('.language-switch');
    const desktopLangDropdown = document.querySelector('.lang-dropdown');
    const mobileLangDropdown = document.querySelector('.mobile-lang-dropdown');

    console.log('Найденные элементы:', {
        mobileMenuButton: mobileMenuButton ? 'Найден' : 'Не найден',
        mobileDropdown: mobileDropdown ? 'Найден' : 'Не найден',
        contactsButton: contactsButton ? 'Найден' : 'Не найден',
        contactsDropdown: contactsDropdown ? 'Найден' : 'Не найден',
        desktopLanguageSwitch: desktopLanguageSwitch ? 'Найден' : 'Не найден',
        desktopLangDropdown: desktopLangDropdown ? 'Найден' : 'Не найден',
        mobileLangDropdown: mobileLangDropdown ? 'Найден' : 'Не найден'
    });

    // Обработчик для мобильного меню
    if (mobileMenuButton && mobileDropdown) {
        console.log('Настройка обработчиков мобильного меню');
        
        // Обработчик клика по кнопке меню
        mobileMenuButton.addEventListener('click', (e) => {
            console.log('Клик по кнопке меню');
            console.log('Текущее состояние меню:', mobileDropdown.classList.contains('active'));
            e.stopPropagation();
            mobileDropdown.classList.toggle('active');
            console.log('Новое состояние меню:', mobileDropdown.classList.contains('active'));
            console.log('Стили меню:', {
                display: window.getComputedStyle(mobileDropdown).display,
                opacity: window.getComputedStyle(mobileDropdown).opacity,
                visibility: window.getComputedStyle(mobileDropdown).visibility,
                position: window.getComputedStyle(mobileDropdown).position,
                zIndex: window.getComputedStyle(mobileDropdown).zIndex
            });
            
            // Закрываем меню контактов при открытии основного меню
            if (contactsDropdown) {
                contactsDropdown.classList.remove('active');
            }
        });

        // Обработчик кликов по элементам внутри меню
        mobileDropdown.addEventListener('click', (e) => {
            console.log('Клик внутри меню:', e.target.tagName);
            // Если клик по ссылке, закрываем меню
            if (e.target.tagName === 'A') {
                mobileDropdown.classList.remove('active');
            }
        });

        // Закрытие меню при клике вне его
        document.addEventListener('click', (event) => {
            const isClickInsideMenu = mobileMenuButton.contains(event.target) || mobileDropdown.contains(event.target);
            console.log('Клик вне меню:', !isClickInsideMenu);
            if (!isClickInsideMenu) {
                mobileDropdown.classList.remove('active');
            }
        });
    } else {
        console.log('ОШИБКА: Не найдены необходимые элементы для мобильного меню');
    }

    // Обработчик для выпадающего меню языков в десктопной версии
    if (desktopLanguageSwitch && desktopLangDropdown) {
        console.log('Настройка обработчиков десктопного языкового меню');
        let hideTimeout;

        desktopLanguageSwitch.addEventListener('mouseenter', () => {
            console.log('Наведение на языковое меню');
            clearTimeout(hideTimeout);
            desktopLangDropdown.style.display = 'block';
            setTimeout(() => {
                desktopLangDropdown.style.opacity = '1';
            }, 10);
        });

        desktopLanguageSwitch.addEventListener('mouseleave', () => {
            console.log('Уход с языкового меню');
            hideTimeout = setTimeout(() => {
                desktopLangDropdown.style.opacity = '0';
                setTimeout(() => {
                    desktopLangDropdown.style.display = 'none';
                }, 300);
            }, 100);
        });

        desktopLangDropdown.addEventListener('mouseenter', () => {
            console.log('Наведение на выпадающее меню');
            clearTimeout(hideTimeout);
        });

        desktopLangDropdown.addEventListener('mouseleave', () => {
            console.log('Уход с выпадающего меню');
            hideTimeout = setTimeout(() => {
                desktopLangDropdown.style.opacity = '0';
                setTimeout(() => {
                    desktopLangDropdown.style.display = 'none';
                }, 300);
            }, 100);
        });
    }

    // Обработчик для выпадающего меню контактов
    if (contactsButton && contactsDropdown) {
        console.log('Настройка обработчиков меню контактов');
        
        contactsButton.addEventListener('click', (e) => {
            console.log('Клик по кнопке контактов');
            e.stopPropagation();
            contactsDropdown.classList.toggle('active');
            console.log('Состояние меню контактов:', contactsDropdown.classList.contains('active'));
            
            // Закрываем основное меню при открытии меню контактов
            if (mobileDropdown) {
                mobileDropdown.classList.remove('active');
            }
        });

        // Обработчик кликов по элементам внутри меню контактов
        contactsDropdown.addEventListener('click', (e) => {
            console.log('Клик внутри меню контактов:', e.target.tagName);
            // Если клик по ссылке, закрываем меню
            if (e.target.tagName === 'A') {
                contactsDropdown.classList.remove('active');
            }
        });

        // Закрытие меню при клике вне его
        document.addEventListener('click', (event) => {
            const isClickInsideContacts = contactsButton.contains(event.target) || contactsDropdown.contains(event.target);
            console.log('Клик вне меню контактов:', !isClickInsideContacts);
            if (!isClickInsideContacts) {
                contactsDropdown.classList.remove('active');
            }
        });
    }
}

// Инициализируем мобильное меню после загрузки DOM
console.log('Добавление обработчика DOMContentLoaded');
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM загружен, инициализация меню');
    initMobileMenu();
}); 