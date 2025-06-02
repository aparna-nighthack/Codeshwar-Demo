
document.addEventListener("DOMContentLoaded", function () {
    // Carousel functionality for capabilities section
    const carousel = document.querySelector("#capabilitiesCarousel");
    if (carousel) {
        const items = carousel.querySelectorAll(".carousel-item");
        let currentIndex = 0;

        function goToIndex(index) {
            items[currentIndex].classList.remove("active");
            currentIndex = index;
            items[currentIndex].classList.add("active");
        }

        carousel.querySelector(".carousel-control-prev").addEventListener("click", function () {
            const newIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
            goToIndex(newIndex);
        });

        carousel.querySelector(".carousel-control-next").addEventListener("click", function () {
            const newIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
            goToIndex(newIndex);
        });
    }

    // Event listeners for CTA buttons
    const ctaDemo = document.querySelector("#cta-demo");
    const ctaUseCases = document.querySelector("#cta-use-cases");

    if (ctaDemo) {
        ctaDemo.addEventListener("click", function () {
            window.location.href = "#demo-section";
        });
    }

    if (ctaUseCases) {
        ctaUseCases.addEventListener("click", function () {
            window.location.href = "#use-cases-section";
        });
    }

    // Micro-interactions for buttons
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", function () {
            this.classList.add("hover-effect");
        });

        button.addEventListener("mouseleave", function () {
            this.classList.remove("hover-effect");
        });
    });

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const header = item.querySelector(".faq-header");
        header.addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("show");
            const icon = this.querySelector(".icon");
            if (icon.classList.contains("bi-chevron-down")) {
                icon.classList.remove("bi-chevron-down");
                icon.classList.add("bi-chevron-up");
            } else {
                icon.classList.remove("bi-chevron-up");
                icon.classList.add("bi-chevron-down");
            }
        });
    });
});