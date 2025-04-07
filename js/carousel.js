document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevButton = carousel.querySelector('.carousel-button.prev');
    const nextButton = carousel.querySelector('.carousel-button.next');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    let currentIndex = 0;
    let autoPlayInterval;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            nextSlide();
        }, 10000); // Переключение каждые 10 секунд
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Останавливаем автопроигрывание при наведении на карусель
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Запускаем автопроигрывание при загрузке
    startAutoPlay();
}); 