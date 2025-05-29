    
    // Carousel functionality for Testimonials
    function initializeCarousel() {
        const carouselItems = document.querySelectorAll('.testimonial-carousel .carousel-item');
        let currentIndex = 0;

        setInterval(() => {
            carouselItems[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % carouselItems.length;
            carouselItems[currentIndex].classList.add('active');
        }, 3000); // Change slide every 3 seconds
    }

    // Dropdown menu management for Delivery & Locations
    function initializeDropdown() {
        const dropdown = document.querySelector('.dropdown-menu');
        const dropdownButton = document.querySelector('.dropdown-toggle');

        dropdownButton.addEventListener('click', () => {
            dropdown.classList.toggle('show');
        });

        document.addEventListener('click', (event) => {
            if (!dropdownButton.contains(event.target)) {
                dropdown.classList.remove('show');
            }
        });
    }

    // Validate the contact form inputs before submission
    function validateContactForm() {
        const form = document.querySelector('#contact-form');
        const nameField = form.querySelector('input[name="name"]');
        const emailField = form.querySelector('input[name="email"]');
        const phoneField = form.querySelector('input[name="phone"]');

        form.addEventListener('submit', (event) => {
            let isValid = true;
            if (!nameField.value.trim()) {
                alert("Name is required.");
                isValid = false;
            }
            if (!emailField.value.includes('@')) {
                alert("Please enter a valid email address.");
                isValid = false;
            }
            if (!phoneField.value.match(/^\d{10}$/)) {
                alert("Please enter a valid 10-digit phone number.");
                isValid = false;
            }
            if (!isValid) {
                event.preventDefault();
            }
        });
    }

    // Ensure smooth transitions for hover effects in the Gallery
    function initializeGalleryHover() {
        const galleryItems = document.querySelectorAll('.gallery-item');

        galleryItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.querySelector('.hover-overlay').classList.add('visible');
            });
            item.addEventListener('mouseleave', () => {
                item.querySelector('.hover-overlay').classList.remove('visible');
            });
        });
    }

    // Form auto-suggest for the delivery address field where possible
    function initializeAddressAutoSuggest() {
        const addressField = document.querySelector('#delivery-address');

        if (addressField) {
            const suggestions = ['123 Pizza Lane', '456 Tasty Avenue', '789 Flavor Street'];
            addressField.addEventListener('input', () => {
                const value = addressField.value;
                const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(value.toLowerCase()));
                displaySuggestions(filteredSuggestions);
            });

            function displaySuggestions(suggestions) {
                const suggestionBox = document.querySelector('.suggestions');
                suggestionBox.innerHTML = suggestions.length ? suggestions.map(suggestion => `<div>${suggestion}</div>`).join('') : '';
            }
        }
    }

    // Initialize all functionalities
    initializeCarousel();
    initializeDropdown();
    validateContactForm();
    initializeGalleryHover();
    initializeAddressAutoSuggest();
});