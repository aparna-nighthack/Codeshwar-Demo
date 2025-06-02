document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carousel controls
const carouselItems = document.querySelectorAll('.carousel-item');
let currentCarouselIndex = 0;
const totalCarouselItems = carouselItems.length;

function showCarouselItem(index) {
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselItems[index].classList.add('active');
}

document.querySelector('.carousel-control-prev').addEventListener('click', () => {
    currentCarouselIndex = (currentCarouselIndex === 0) ? totalCarouselItems - 1 : currentCarouselIndex - 1;
    showCarouselItem(currentCarouselIndex);
});

document.querySelector('.carousel-control-next').addEventListener('click', () => {
    currentCarouselIndex = (currentCarouselIndex === totalCarouselItems - 1) ? 0 : currentCarouselIndex + 1;
    showCarouselItem(currentCarouselIndex);
});

// FAQ accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        this.classList.toggle('active');
        const answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// Live chat widget integration
const chatButton = document.querySelector('#live-chat-button');
const chatWindow = document.querySelector('#chat-window');
const chatCloseButton = document.querySelector('#chat-close-button');

chatButton.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
});

chatCloseButton.addEventListener('click', () => {
    chatWindow.classList.add('hidden');
});

// Micro-interactions for improved user experience
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('hover-effect');
    });
    button.addEventListener('mouseout', () => {
        button.classList.remove('hover-effect');
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('shadow-lg');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('shadow-lg');
    });
});