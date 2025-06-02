
// Enable carousel functionality for Capabilities Showcase
document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentCarouselItem = 0;
    setInterval(() => {
        carouselItems[currentCarouselItem].classList.remove('active');
        currentCarouselItem = (currentCarouselItem + 1) % carouselItems.length;
        carouselItems[currentCarouselItem].classList.add('active');
    }, 3000);
});

// Navigation link scrolling
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FAQ accordion toggle
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

// Integrate live chat widget at the Demo section
function initializeLiveChat() {
    const chatBox = document.createElement('div');
    chatBox.className = 'live-chat-box';
    chatBox.innerHTML = `
        <div class="chat-header">
            <span>Live Chat - NovaAI</span>
            <button class="close-chat">×</button>
        </div>
        <div class="chat-body">
            <div class="chat-messages"></div>
            <input type="text" class="chat-input" placeholder="Type your message...">
        </div>
    `;
    document.getElementById('demo-section').appendChild(chatBox);

    const closeChatButton = chatBox.querySelector('.close-chat');
    closeChatButton.addEventListener('click', () => {
        chatBox.style.display = 'none';
    });

    const chatInput = chatBox.querySelector('.chat-input');
    const chatMessages = chatBox.querySelector('.chat-messages');

    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const userMessage = chatInput.value.trim();
            if (userMessage) {
                const userMessageElement = document.createElement('div');
                userMessageElement.className = 'user-message';
                userMessageElement.textContent = userMessage;
                chatMessages.appendChild(userMessageElement);
                chatInput.value = '';

                // Simulate AI response
                setTimeout(() => {
                    const aiMessageElement = document.createElement('div');
                    aiMessageElement.className = 'ai-message';
                    aiMessageElement.textContent = "Thanks for reaching out to NovaAI!";
                    chatMessages.appendChild(aiMessageElement);
                }, 1000);
            }
        }
    });
}

// Initialize live chat widget on DOM content load
document.addEventListener("DOMContentLoaded", initializeLiveChat);