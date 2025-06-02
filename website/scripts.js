
$(document).ready(function () {
    // Smooth scrolling for anchor links
    $('a[href*="#"]').click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 800, function () {
                window.location.hash = this.hash;
            });
        }
    });

    // Carousel for Capabilities Showcase
    $('#carouselCapabilities').carousel({
        interval: 5000
    });

    // FAQ Accordion Functionality
    $('.faq-question').on('click', function () {
        $(this).next('.faq-answer').slideToggle();
        $(this).find('.icon').toggleClass('rotate');
    });

    // Live Chat Widget Setup
    function initChat() {
        const chatWidget = $('#liveChatWidget');
        $('#chatToggle').click(function () {
            chatWidget.toggleClass('hidden');
        });

        $('#chatForm').submit(function (e) {
            e.preventDefault();
            const userMessage = $('#chatInput').val();
            if (userMessage) {
                appendMessage(userMessage, 'user');
                $('#chatInput').val('');
                simulateResponse(userMessage);
            }
        });
    }

    function appendMessage(message, userType) {
        const messageElement = `<div class="message ${userType}">${message}</div>`;
        $('#chatMessages').append(messageElement).scrollTop($('#chatMessages')[0].scrollHeight);
    }

    function simulateResponse(userMessage) {
        const response = "I'm an AI agent still learning! How can I assist you with NovaAI today?";
        setTimeout(() => {
            appendMessage(response, 'bot');
        }, 1000);
    }

    initChat();

    // Responsive Dropdowns for Mobile Navigation
    $('.navbar-toggler').click(function () {
        $('.navbar-collapse').slideToggle();
    });
});