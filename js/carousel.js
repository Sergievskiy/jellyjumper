document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let currentIndex = 0;
    let autoPlayInterval;

    function showSlide(index) {
        items.forEach(item => {
            item.classList.remove('active');
            item.style.opacity = '0';
        });
        
        if (index >= items.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = items.length - 1;
        } else {
            currentIndex = index;
        }

        const activeItem = items[currentIndex];
        activeItem.classList.add('active');
        // Небольшая задержка для плавности анимации
        setTimeout(() => {
            activeItem.style.opacity = '1';
        }, 50);
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 10000); // Переключение каждые 10 секунд
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
        stopAutoPlay();
        startAutoPlay(); // Перезапускаем автопроигрывание
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
        stopAutoPlay();
        startAutoPlay(); // Перезапускаем автопроигрывание
    });

    // Останавливаем автопроигрывание при наведении на карусель
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Запускаем автопроигрывание при загрузке
    startAutoPlay();
}); 