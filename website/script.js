    // Navigation Toggle for mobile view
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    
    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    // Carousel functionality using Slick
    $('.features-carousel').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });

    // Hover animations for CTA buttons
    const ctaButtons = document.querySelectorAll(".cta-button");
    ctaButtons.forEach(button => {
        button.addEventListener("mouseenter", function() {
            button.classList.add("hover");
        });
        button.addEventListener("mouseleave", function() {
            button.classList.remove("hover");
        });
    });

    // Contact form validation
    const contactForm = document.querySelector("#contact-form");
    contactForm.addEventListener("submit", function(event) {
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const phone = document.querySelector("#phone").value.trim();

        if (!name || !email || !phone) {
            event.preventDefault();
            alert("All fields are required!");
        }
    });

    // Live chat button linked to chat service API
    const liveChatButton = document.querySelector(".live-chat-button");
    liveChatButton.addEventListener("click", function() {
        window.open('https://examplechatservice.com', 'Chat', 'width=400,height=500');
    });
});