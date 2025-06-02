
document.addEventListener("DOMContentLoaded", function () {
    // Manage the interactive carousel in the Capabilities section
    const carousel = document.getElementById("capabilitiesCarousel");
    if (carousel) {
        carousel.addEventListener("keydown", function (e) {
            if (e.key === "ArrowRight") {
                const nextControl = carousel.querySelector(".carousel-control-next");
                if (nextControl) nextControl.click();
            } else if (e.key === "ArrowLeft") {
                const prevControl = carousel.querySelector(".carousel-control-prev");
                if (prevControl) prevControl.click();
            }
        });
    }

    // Live Chat Widget for basic AI interaction
    const chatButton = document.getElementById("chatWidgetButton");
    const chatWindow = document.getElementById("chatWindow");

    if (chatButton && chatWindow) {
        chatButton.addEventListener("click", function () {
            chatWindow.classList.toggle("d-none");
        });
    }

    // Handle click events for CTA buttons
    const tryDemoButton = document.getElementById("tryDemoButton");
    const useCasesButton = document.getElementById("useCasesButton");

    if (tryDemoButton) {
        tryDemoButton.addEventListener("click", function () {
            window.location.href = "/demo";
        });
    }

    if (useCasesButton) {
        useCasesButton.addEventListener("click", function () {
            document.getElementById("useCasesSection").scrollIntoView({ behavior: "smooth" });
        });
    }

    // Smooth scrolling to different webpage sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Manage the FAQ Accordion
    const faqAccordion = document.querySelectorAll(".faq-question");
    faqAccordion.forEach(question => {
        question.addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("d-none");
        });
    });

    // Analytics tracking for user engagement and interaction
    document.body.addEventListener("click", function (event) {
        const target = event.target;
        if (target.matches(".trackable")) {
            console.log(`Tracked interaction: ${target.id}`);
            // Here you can add any external analytics tracking
        }
    });
});