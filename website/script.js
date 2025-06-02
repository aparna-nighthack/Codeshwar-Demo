    // Smooth Scroll for CTA Buttons
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navigation Linking
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Hover Effects for CTA Buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s';
        });
        button.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
            this.style.transition = 'all 0.3s';
        });
    });

    // Toggle FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', function () {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // Initialize Carousel Interactions
    const carousel = document.querySelector('.carousel');
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    let currentCarouselIndex = 0;

    function showCarouselItem(index) {
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselItems[index].classList.add('active');
    }

    carousel.querySelector('.carousel-control-prev').addEventListener('click', function () {
        currentCarouselIndex = (currentCarouselIndex > 0) ? currentCarouselIndex - 1 : carouselItems.length - 1;
        showCarouselItem(currentCarouselIndex);
    });

    carousel.querySelector('.carousel-control-next').addEventListener('click', function () {
        currentCarouselIndex = (currentCarouselIndex < carouselItems.length - 1) ? currentCarouselIndex + 1 : 0;
        showCarouselItem(currentCarouselIndex);
    });

    // Trigger initial state
    showCarouselItem(currentCarouselIndex);
});