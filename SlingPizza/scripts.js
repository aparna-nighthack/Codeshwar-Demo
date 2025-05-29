
// Function to initialize dropdown functionality for delivery areas
function initializeDeliveryDropdown() {
    const deliveryDropdown = document.getElementById('delivery-areas');
    const areas = [
        "Mumbai (All Zones)",
        "Delhi (North & South)",
        "Bangalore (Central & East)",
        "Hyderabad (Gachibowli & Hitech City)"
    ];

    areas.forEach(area => {
        const option = document.createElement('option');
        option.text = area;
        deliveryDropdown.add(option);
    });
}

// Function to initialize pizza selection dropdown
function initializePizzaDropdown() {
    const pizzaDropdown = document.getElementById('pizza-selection');
    const pizzas = [
        "Margherita",
        "Pepperoni",
        "Veggie",
        "Spicy Pepperoni Blast",
        "Truffle Mushroom Delight",
        "Chicago Deep Dish",
        "Italian Classic"
    ];

    pizzas.forEach(pizza => {
        const option = document.createElement('option');
        option.text = pizza;
        pizzaDropdown.add(option);
    });
}

// Function to add hover effects in the gallery for displaying pizza names
function initializeGalleryHover() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const name = item.querySelector('.pizza-name');
        item.addEventListener('mouseenter', () => {
            name.style.display = 'block';
        });
        item.addEventListener('mouseleave', () => {
            name.style.display = 'none';
        });
    });
}

// Function to initialize carousel for testimonials section
function initializeTestimonialsCarousel() {
    const testimonialsContainer = document.querySelector('.testimonials-carousel');
    const testimonials = testimonialsContainer.children;
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials[currentIndex].style.display = 'none';
        testimonials[index].style.display = 'grid';
        currentIndex = index;
    }

    showTestimonial(0);

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }, 5000);
}

// Initialize all functions on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeDeliveryDropdown();
    initializePizzaDropdown();
    initializeGalleryHover();
    initializeTestimonialsCarousel();
});