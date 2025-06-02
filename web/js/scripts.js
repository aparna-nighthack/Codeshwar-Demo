
// Ensure DOM content is loaded before running scripts
document.addEventListener("DOMContentLoaded", function() {
    
    // Implement Carousel Functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    let carouselIndex = 0;

    function showCarouselItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function nextCarouselItem() {
        carouselIndex = (carouselIndex + 1) % carouselItems.length;
        showCarouselItem(carouselIndex);
    }

    setInterval(nextCarouselItem, 3000); // Change carousel item every 3 seconds

    // Handle anchor link scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Live Chat Widget Setup
    function setupLiveChatWidget() {
        // Mock function for live chat integration
        const chatWidget = document.querySelector('#live-chat-widget');
        if (chatWidget) {
            // Initialize chat widget
            chatWidget.innerHTML = `<p>Live chat will be available soon!</p>`;
        }
    }
    setupLiveChatWidget();

    // Event Listeners for Buttons and Hover Effects
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseover', function() {
            this.classList.add('hover');
        });
        button.addEventListener('mouseout', function() {
            this.classList.remove('hover');
        });
    });

    // Additional scripts for smooth user experience can be added here

});