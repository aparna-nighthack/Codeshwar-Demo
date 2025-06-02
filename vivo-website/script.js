
document.addEventListener("DOMContentLoaded", function() {
    // Image Carousel Initialization
    var carouselElements = document.querySelectorAll('.carousel');
    carouselElements.forEach(function(carousel) {
        var carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true
        });
    });

    // Dynamic Content Loading
    function loadDynamicContent() {
        // Simulate dynamic content loading, e.g., AJAX calls can be implemented here
        console.log("Dynamic content loaded");
    }

    loadDynamicContent();

    // Form Validation Function
    function validateForm(event) {
        event.preventDefault();
        var email = document.getElementById('newsletterEmail').value;
        var contactEmail = document.getElementById('contactEmail')?.value;

        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address for the newsletter.");
            return false;
        }

        if (contactEmail && !emailPattern.test(contactEmail)) {
            alert("Please enter a valid contact email address.");
            return false;
        }

        alert("Form successfully submitted");
        return true;
    }

    // Bind validation to form submission
    var newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', validateForm);
    }

    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
    
    // Enhance Bootstrap Modal for smooth animations
    var modalElements = document.querySelectorAll('.modal');
    modalElements.forEach(function(modal) {
        modal.addEventListener('show.bs.modal', function () {
            console.log("Modal is shown");
        });
        modal.addEventListener('hide.bs.modal', function () {
            console.log("Modal is hidden");
        });
    });
});