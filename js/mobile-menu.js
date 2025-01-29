document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileDropdown = document.querySelector('.mobile-dropdown');

    if (menuButton && mobileDropdown) {
        menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileDropdown.classList.toggle('active');
            // Закрываем меню контактов при открытии основного меню
            if (contactsDropdown) {
                contactsDropdown.classList.remove('active');
            }
        });
    }

    // Меню контактов
    const contactsButton = document.querySelector('.contacts-dropdown-button');
    const contactsDropdown = document.querySelector('.contacts-dropdown');

    if (contactsButton && contactsDropdown) {
        contactsButton.addEventListener('click', function(e) {
            e.stopPropagation();
            contactsDropdown.classList.toggle('active');
            // Закрываем основное меню при открытии меню контактов
            if (mobileDropdown) {
                mobileDropdown.classList.remove('active');
            }
        });
    }

    // Закрытие меню при клике вне его
    document.addEventListener('click', function(event) {
        const isClickInsideNav = event.target.closest('.mobile-nav');
        const isClickInsideContacts = event.target.closest('.mobile-contacts');

        if (!isClickInsideNav && mobileDropdown) {
            mobileDropdown.classList.remove('active');
        }

        if (!isClickInsideContacts && contactsDropdown) {
            contactsDropdown.classList.remove('active');
        }
    });

    // Предотвращаем закрытие при клике внутри выпадающих меню
    const dropdowns = document.querySelectorAll('.mobile-dropdown, .contacts-dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
}); 