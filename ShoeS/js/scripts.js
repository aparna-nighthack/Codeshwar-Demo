
// Function to initialize the Bootstrap carousel
function initializeCarousel() {
    const carouselElement = document.querySelector('.carousel');
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            interval: 3000,
            wrap: true
        });
    }
}

// Function to add smooth scrolling to navbar links
function smoothScroll() {
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Document ready function to initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeCarousel();
    smoothScroll();
});