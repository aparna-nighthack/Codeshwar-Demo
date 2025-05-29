
document.addEventListener('DOMContentLoaded', function () {
    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileNavToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Image carousel setup
    const carouselImages = document.querySelectorAll('.carousel img');
    let currentIndex = 0;
    const totalImages = carouselImages.length;

    function showImage(index) {
        carouselImages.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    document.querySelector('.carousel-next').addEventListener('click', nextImage);
    document.querySelector('.carousel-prev').addEventListener('click', prevImage);

    showImage(currentIndex);

    // Other dynamic interactions can be added below as needed
});