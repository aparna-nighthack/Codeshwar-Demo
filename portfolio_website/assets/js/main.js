    // Scroll animations for section fade-ins and slide-up effects
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -20% 0px'
    };

    const fadeIns = document.querySelectorAll('.fade-in');
    const slideUps = document.querySelectorAll('.slide-up');

    const animationObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeIns.forEach(fadeIn => animationObserver.observe(fadeIn));
    slideUps.forEach(slideUp => animationObserver.observe(slideUp));

    // Carousel behavior for Testimonials / Recommendations section
    const testimonialCarousel = document.querySelector('#testimonialCarousel');
    if (testimonialCarousel) {
        new bootstrap.Carousel(testimonialCarousel, {
            interval: 5000,
            wrap: true
        });
    }

    // Animate skill bars on page scroll
    const skillBars = document.querySelectorAll('.skill-bar');
    const skillObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.dataset.skillLevel + '%';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillBars.forEach(skillBar => skillObserver.observe(skillBar));

    // Logic for the 'Contact' form submissions
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(contactForm);

            fetch('/send-email', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => alert('Your message has been sent!'))
            .catch(error => alert('There was an error sending your message.'));
        });
    }
});