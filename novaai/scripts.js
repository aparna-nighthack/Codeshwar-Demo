
document.addEventListener('DOMContentLoaded', function () {
    
    // Testimonials Carousel
    const testimonials = [
        "NovaAI reduced our operational costs by 40%. – TechCorp (⭐⭐⭐⭐⭐)",
        "The most intuitive AI tool we’ve used. – HealthPlus (⭐⭐⭐⭐⭐)"
    ];
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        const testimonialElement = document.getElementById('testimonial');
        testimonialElement.textContent = testimonials[index];
    }
    
    document.getElementById('next-testimonial').addEventListener('click', function () {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
    
    document.getElementById('prev-testimonial').addEventListener('click', function () {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
    
    showTestimonial(currentTestimonial);
    
    // Capability Cards Hover Effect
    const capabilityCards = document.querySelectorAll('.capability-card');
    
    capabilityCards.forEach(card => {
        card.addEventListener('mouseover', function () {
            const learnMoreButton = card.querySelector('.learn-more');
            if (learnMoreButton) {
                learnMoreButton.style.display = 'block';
            }
        });
        
        card.addEventListener('mouseout', function () {
            const learnMoreButton = card.querySelector('.learn-more');
            if (learnMoreButton) {
                learnMoreButton.style.display = 'none';
            }
        });
    });
    
    // Contact Form Popup
    const contactForm = document.getElementById('contact-form');
    const contactButton = document.getElementById('contact-button');
    
    contactButton.addEventListener('click', function () {
        contactForm.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    document.getElementById('close-form').addEventListener('click', function () {
        contactForm.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Integration & Deployment Dropdown
    const integrationDropdown = document.getElementById('integration-dropdown');
    const integrationContent = document.getElementById('integration-content');
    
    integrationDropdown.addEventListener('click', function () {
        if (integrationContent.style.display === 'none' || !integrationContent.style.display) {
            integrationContent.style.display = 'block';
        } else {
            integrationContent.style.display = 'none';
        }
    });
});