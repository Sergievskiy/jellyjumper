// Флаг для отслеживания инициализации
let isInitialized = false;

// Функция для инициализации мобильного меню
function initMobileMenu() {
    // Проверяем, не была ли уже выполнена инициализация
    if (isInitialized) {
        console.log('Меню уже инициализировано, пропускаем повторную инициализацию');
        return;
    }
    
    console.log('=== Инициализация мобильного меню ===');
    isInitialized = true;
    
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
        
        mobileMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileDropdown.classList.toggle('active');
            
            if (contactsDropdown) {
                contactsDropdown.classList.remove('active');
            }
        });

        // Закрытие меню при клике вне его
        document.addEventListener('click', (event) => {
            if (!mobileMenuButton.contains(event.target) && !mobileDropdown.contains(event.target)) {
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
            e.stopPropagation();
            contactsDropdown.classList.toggle('active');
            
            if (mobileDropdown) {
                mobileDropdown.classList.remove('active');
            }
        });

        // Закрытие меню при клике вне его
        document.addEventListener('click', (event) => {
            if (!contactsButton.contains(event.target) && !contactsDropdown.contains(event.target)) {
                contactsDropdown.classList.remove('active');
            }
        });
    }
}

// Инициализируем мобильное меню после загрузки DOM
document.addEventListener('DOMContentLoaded', initMobileMenu); 