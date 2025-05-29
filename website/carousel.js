
document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.querySelector('.carousel-container');
    const reviews = document.querySelectorAll('.review');
    const prevButton = document.querySelector('.carousel-button-prev');
    const nextButton = document.querySelector('.carousel-button-next');
    let currentIndex = 0;
    const totalReviews = reviews.length;
    const reviewWidth = reviews[0].clientWidth;

    // Initialize the carousel
    function initializeCarousel() {
        reviewsContainer.style.width = `${totalReviews * reviewWidth}px`;
        updateCarousel();
    }

    // Update carousel position
    function updateCarousel() {
        reviewsContainer.style.transform = `translateX(-${currentIndex * reviewWidth}px)`;
    }

    // Move to the previous review
    function showPreviousReview() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalReviews - 1;
        }
        updateCarousel();
    }

    // Move to the next review
    function showNextReview() {
        if (currentIndex < totalReviews - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    // Set up event listeners
    prevButton.addEventListener('click', showPreviousReview);
    nextButton.addEventListener('click', showNextReview);

    // Enable keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            showPreviousReview();
        } else if (e.key === 'ArrowRight') {
            showNextReview();
        }
    });

    // Auto slide functionality
    let autoSlideInterval = setInterval(showNextReview, 5000);

    // Pause auto slide on hover
    reviewsContainer.addEventListener('mouseenter', function () {
        clearInterval(autoSlideInterval);
    });

    // Resume auto slide when not hovering
    reviewsContainer.addEventListener('mouseleave', function () {
        autoSlideInterval = setInterval(showNextReview, 5000);
    });

    // Initialize carousel on page load
    initializeCarousel();
});