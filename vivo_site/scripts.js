
document.addEventListener('DOMContentLoaded', function () {
    // Initialize carousel
    const carouselContainers = document.querySelectorAll('.carousel-container');
    carouselContainers.forEach(container => {
        initCarousel(container);
    });

    // Mobile navigation toggle
    const navToggleBtn = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    navToggleBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Event listeners for buttons
    const shopNowButton = document.querySelector('.shop-now-btn');
    const watchDemoButton = document.querySelector('.watch-demo-btn');

    shopNowButton.addEventListener('click', function () {
        window.location.href = '/shop';
    });

    watchDemoButton.addEventListener('click', function () {
        window.location.href = '/watch-demo';
    });
});

// Carousel function
function initCarousel(carouselContainer) {
    const track = carouselContainer.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = carouselContainer.querySelector('.carousel-button-right');
    const prevButton = carouselContainer.querySelector('.carousel-button-left');

    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange slides next to each other
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    // Move slides
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    // Click right
    nextButton.addEventListener('click', function () {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            moveToSlide(track, currentSlide, nextSlide);
        }
    });

    // Click left
    prevButton.addEventListener('click', function () {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        if (prevSlide) {
            moveToSlide(track, currentSlide, prevSlide);
        }
    });
}