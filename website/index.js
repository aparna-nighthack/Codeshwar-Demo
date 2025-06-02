
// Initialize Carousel
document.addEventListener("DOMContentLoaded", function () {
    let carouselElement = document.querySelector('#capabilitiesCarousel');
    if (carouselElement) {
        let carousel = new bootstrap.Carousel(carouselElement, {
            interval: 3000,
            wrap: true
        });
    }
});

// Handle FAQ Accordion
let faqAccordions = document.querySelectorAll('.faq-section .accordion-button');
faqAccordions.forEach(button => {
    button.addEventListener('click', function () {
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            closeAllAccordions();
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

function closeAllAccordions() {
    let contents = document.querySelectorAll('.faq-section .accordion-body');
    contents.forEach(content => {
        content.style.maxHeight = null;
    });
}

// Live Chat Widget Logic
let chatContainer = document.querySelector('.chat-widget-container');
let chatToggle = document.querySelector('#chatToggle');
let chatClose = document.querySelector('#chatClose');
let chatForm = document.querySelector('#chatForm');
let chatInput = document.querySelector('#chatInput');
let chatMessages = document.querySelector('#chatMessages');

if (chatToggle) {
    chatToggle.addEventListener('click', function () {
        chatContainer.classList.toggle('show');
    });
}

if (chatClose) {
    chatClose.addEventListener('click', function () {
        chatContainer.classList.remove('show');
    });
}

if (chatForm) {
    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let userMessage = chatInput.value.trim();
        if (userMessage) {
            addMessageToChat('You', userMessage);
            chatInput.value = '';
            // Add logic to process and echo a response in demo
            setTimeout(() => {
                addMessageToChat('NovaAI', 'This is a demo response. How can I assist you further?');
            }, 1000);
        }
    });
}

function addMessageToChat(sender, message) {
    let newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(newMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}