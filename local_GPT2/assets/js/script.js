
// Event Listener for Carousel Navigation
document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(button => {
    button.addEventListener('click', function() {
        let carouselId = this.getAttribute('data-bs-target');
        let carousel = document.querySelector(carouselId);
        if (carousel) {
            carousel.toggle();
        }
    });
});

// FAQ Accordion Behavior
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('collapsed');
        let accordionItem = this.closest('.accordion-item');
        let collapseElement = accordionItem.querySelector('.accordion-collapse');

        if (collapseElement) {
            collapseElement.classList.toggle('show');
        }
    });
});

// Initialize Chat Widget
function initChatWidget() {
    const chatWidget = document.getElementById('chat-widget');
    if (chatWidget) {
        // Initialize chat logic here
        chatWidget.style.display = 'block'; // Example logic to show chat widget
    }
}

// Event Listeners for CTA Buttons
document.getElementById('try-demo-btn').addEventListener('click', function() {
    window.location.href = '#demo-section';
});

document.getElementById('see-use-cases-btn').addEventListener('click', function() {
    window.location.href = '#use-cases';
});

// On Page Load
window.addEventListener('load', function() {
    initChatWidget();
});

// Ensure smooth scrolling on anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});