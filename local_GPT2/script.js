document.addEventListener("DOMContentLoaded", function () {
    // Interactive carousel in the Capabilities Showcase using Bootstrap's Carousel
    var capabilitiesCarousel = new bootstrap.Carousel(document.getElementById('capabilitiesCarousel'), {
        interval: 2000,
        wrap: true
    });

    // Scroll-based animations
    window.addEventListener('scroll', function () {
        var elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(function (element) {
            var position = element.getBoundingClientRect();
            if (position.top < window.innerHeight) {
                element.classList.add('start-animation');
            }
        });
    });

    // FAQ accordion in the Trust & Security section using Bootstrap's Accordion
    var faqAccordion = document.getElementById('faqAccordion');
    if (faqAccordion) {
        faqAccordion.addEventListener('show.bs.collapse', function (event) {
            var item = event.target;
            item.classList.add('active');
        });

        faqAccordion.addEventListener('hide.bs.collapse', function (event) {
            var item = event.target;
            item.classList.remove('active');
        });
    }

    // Live chat widget logic
    var chatWidget = document.getElementById('liveChatWidget');
    var chatInput = document.getElementById('chatInput');
    var chatMessages = document.getElementById('chatMessages');

    if (chatWidget && chatInput && chatMessages) {
        chatInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                var message = chatInput.value.trim();
                if (message) {
                    addMessageToChat('User', message);
                    handleChatMessage(message); // Mock function to handle message
                    chatInput.value = '';
                }
            }
        });
    }

    function addMessageToChat(sender, message) {
        var messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender.toLowerCase());
        messageElement.innerText = sender + ': ' + message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleChatMessage(message) {
        // Mock response from AI
        setTimeout(() => {
            addMessageToChat('NovaAI', 'This is a response to: ' + message);
        }, 1000);
    }

    // Bootstrap tooltips and popovers
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
});