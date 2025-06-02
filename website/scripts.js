document.addEventListener('DOMContentLoaded', function() {
    // Handle the Bootstrap Carousel for Capabilities Showcase
    var carouselElement = document.querySelector('#capabilitiesCarousel');
    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 5000,
        ride: 'carousel'
    });

    // Handle the Bootstrap Accordion for FAQ Section
    var faqAccordion = document.querySelector('#faqAccordion');
    new bootstrap.Collapse(faqAccordion);

    // Custom JavaScript for additional interactions
    // Live Chat Widget
    var chatButton = document.querySelector('#chatButton');
    var chatBox = document.querySelector('#chatBox');
    chatButton.addEventListener('click', function() {
        chatBox.classList.toggle('d-none');
    });

    // Video Walkthrough Modal
    var videoModal = new bootstrap.Modal(document.getElementById('videoWalkthroughModal'));
    var videoButton = document.querySelector('#videoButton');
    videoButton.addEventListener('click', function() {
        videoModal.show();
    });

    // Smooth scrolling for internal anchor links
    var scrollLinks = document.querySelectorAll('.scroll-link');
    scrollLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle CTA Button interactions
    var demoButton = document.querySelector('#demoButton');
    demoButton.addEventListener('click', function() {
        window.location.href = '/interactive-sandbox';
    });

    var useCasesButton = document.querySelector('#useCasesButton');
    useCasesButton.addEventListener('click', function() {
        document.querySelector('#useCasesSection').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Responsive adjustments
    window.addEventListener('resize', function() {
        // Add custom logic for handling responsiveness if needed
    });
});