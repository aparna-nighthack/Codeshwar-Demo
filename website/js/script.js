
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Interactive carousel for Capabilities Showcase
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItemIndex = 0;

    function showCarouselItem(index) {
        carouselItems.forEach((item, idx) => {
            item.classList.toggle('active', idx === index);
        });
    }

    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
        currentItemIndex = (currentItemIndex === 0) ? carouselItems.length - 1 : currentItemIndex - 1;
        showCarouselItem(currentItemIndex);
    });

    document.querySelector('.carousel-control-next').addEventListener('click', () => {
        currentItemIndex = (currentItemIndex === carouselItems.length - 1) ? 0 : currentItemIndex + 1;
        showCarouselItem(currentItemIndex);
    });

    showCarouselItem(currentItemIndex);

    // Activate live chat widget
    const chatButton = document.getElementById("chat-btn");
    const chatWidget = document.getElementById("chat-widget");

    chatButton.addEventListener("click", () => {
        chatWidget.classList.toggle("d-none");
    });

    // Manage FAQ accordion actions
    const faqAccordions = document.querySelectorAll('.faq-accordion');

    faqAccordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            const panel = accordion.nextElementSibling;
            panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
        });
    });

    // Event listeners for micro-interactions
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('btn-hover');
        });
        button.addEventListener('mouseout', () => {
            button.classList.remove('btn-hover');
        });
    });
});