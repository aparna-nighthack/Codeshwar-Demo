
// JavaScript for interactivity on the NovaAI website

document.addEventListener('DOMContentLoaded', function() {
    // Manage the testimonials carousel
    let testimonialIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        testimonialIndex = (testimonialIndex + 1) % totalTestimonials;
        showTestimonial(testimonialIndex);
    }

    // Initialize first testimonial display
    showTestimonial(testimonialIndex);

    // Automatically change testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);

    // Handle form submission
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // Basic form validation and submission logic
            const name = document.getElementById('name').value;
            const company = document.getElementById('company').value;
            const email = document.getElementById('email').value;
            const useCase = document.getElementById('useCase').value;

            if (name && company && email && useCase) {
                alert('Form submitted successfully!');
                form.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Toggle hover effect on capabilities cards
    const capabilityCards = document.querySelectorAll('.capability-card');
    capabilityCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });
});