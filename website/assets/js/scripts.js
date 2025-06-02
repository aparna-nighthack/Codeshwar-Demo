
document.addEventListener("DOMContentLoaded", function () {
    // Carousel Functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    let carouselIndex = 0;

    function showCarouselItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    setInterval(() => {
        carouselIndex = (carouselIndex + 1) % carouselItems.length;
        showCarouselItem(carouselIndex);
    }, 3000);

    // Accordion Functionality
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function () {
            const target = document.querySelector(this.dataset.target);
            target.classList.toggle('show');
            this.classList.toggle('active');
        });
    });

    // CTA Button Click Handlers
    const demoButton = document.querySelector('#demoButton');
    if (demoButton)
        demoButton.addEventListener('click', function () {
            window.location.href = 'interactive-sandbox.html';
        });

    const useCasesButton = document.querySelector('#useCasesButton');
    if (useCasesButton)
        useCasesButton.addEventListener('click', function () {
            document.querySelector('#useCasesSection').scrollIntoView({ behavior: 'smooth' });
        });

    // Smooth Scrolling for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.getElementById(this.getAttribute('href').substring(1));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Live Chat Widget Interaction
    const chatWidget = document.querySelector('#chatWidget');
    const chatOpenButton = document.querySelector('#chatOpenButton');
    const chatCloseButton = document.querySelector('#chatCloseButton');

    if (chatOpenButton)
        chatOpenButton.addEventListener('click', function () {
            chatWidget.classList.toggle('visible');
        });

    if (chatCloseButton)
        chatCloseButton.addEventListener('click', function () {
            chatWidget.classList.remove('visible');
        });
});