
document.addEventListener('DOMContentLoaded', function() {
    // Carousel Functionality for Capabilities Showcase
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextItem() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }

    setInterval(showNextItem, 3000); // Change item every 3 seconds

    // FAQ Accordion for Trust and Security
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const faqContent = header.nextElementSibling;
            header.classList.toggle('active');
            faqContent.style.maxHeight = faqContent.style.maxHeight ? null : faqContent.scrollHeight + 'px';
        });
    });

    // Smooth Scroll for CTA Buttons
    const tryDemoButton = document.querySelector('#try-demo-btn');
    const seeUseCasesButton = document.querySelector('#see-usecases-btn');

    tryDemoButton.addEventListener('click', function() {
        document.querySelector('#demo-section').scrollIntoView({ behavior: 'smooth' });
    });
    
    seeUseCasesButton.addEventListener('click', function() {
        document.querySelector('#use-cases-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Hover Effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            button.classList.add('hovered');
        });
        button.addEventListener('mouseleave', function() {
            button.classList.remove('hovered');
        });
    });

    // Any Additional Animation Transitions
    const interactiveElements = document.querySelectorAll('.interactive');
    interactiveElements.forEach(elem => {
        elem.addEventListener('mouseover', function() {
            elem.classList.add('animate');
        });
        elem.addEventListener('mouseout', function() {
            elem.classList.remove('animate');
        });
    });
});