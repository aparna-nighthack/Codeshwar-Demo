
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Carousel
    var carouselElement = document.querySelector('#capabilitiesCarousel');
    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000,
        wrap: true
    });

    // Handle Live Chat Widget
    var chatWidget = document.querySelector('#liveChatWidget');
    chatWidget.addEventListener('click', function () {
        var chatBox = document.querySelector('#chatBox');
        chatBox.classList.toggle('d-none');
    });

    // Micro-interactions for buttons
    var ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(function (button) {
        button.addEventListener('mouseenter', function () {
            button.classList.add('btn-hover');
        });
        button.addEventListener('mouseleave', function () {
            button.classList.remove('btn-hover');
        });
    });

    // Mobile-first optimizations
    var menuToggle = document.querySelector('.navbar-toggler');
    var navbarMenu = document.querySelector('#navbarMenu');
    menuToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('collapse');
    });

    // Smooth scrolling for anchor links
    var smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var targetElement = document.querySelector(link.getAttribute('href'));
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // FAQ Accordion functionality
    var faqAccordions = document.querySelectorAll('.faq-accordion');
    faqAccordions.forEach(function (accordion) {
        var header = accordion.querySelector('.accordion-header');
        header.addEventListener('click', function () {
            var body = accordion.querySelector('.accordion-body');
            body.classList.toggle('d-none');
        });
    });

    // Button hover effect
    var buttons = document.querySelectorAll('.btn-custom');
    buttons.forEach(function (button) {
        button.addEventListener('mouseenter', function () {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', function () {
            button.style.transform = 'scale(1)';
        });
    });
});