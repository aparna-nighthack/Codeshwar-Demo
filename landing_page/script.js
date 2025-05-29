    // Image slider functionality for featured products
    const sliderImages = document.querySelectorAll('.featured-slider img');
    let currentSlide = 0;
    
    function showSlide(index) {
        sliderImages.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        showSlide(currentSlide);
    }

    function previousSlide() {
        currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
        showSlide(currentSlide);
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', previousSlide);
    showSlide(currentSlide);

    // Responsive navigation menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Basic form validation
    const contactForm = document.querySelector('#contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const message = document.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                event.preventDefault();
                alert('Please fill in all fields.');
            } else if (!validateEmail(email)) {
                event.preventDefault();
                alert('Please enter a valid email address.');
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});