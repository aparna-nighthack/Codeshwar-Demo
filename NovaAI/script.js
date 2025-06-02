
document.addEventListener("DOMContentLoaded", function() {
  // Carousel functionality
  let carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function showCarouselItem(index) {
    carouselItems.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });
  }

  document.querySelector(".carousel-control-next").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showCarouselItem(currentIndex);
  });

  document.querySelector(".carousel-control-prev").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showCarouselItem(currentIndex);
  });

  // Interactive chat widget
  const chatWidget = document.querySelector("#chat-widget");
  const chatForm = chatWidget.querySelector("form");
  const chatInput = chatWidget.querySelector("input");
  const chatMessages = chatWidget.querySelector(".chat-messages");

  chatForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const userMessage = chatInput.value.trim();
    if (userMessage) {
      addChatMessage("User", userMessage);
      chatInput.value = "";
      // Simulate AI response
      setTimeout(() => addChatMessage("NovaAI", "I am still learning, but I will help you soon!"), 1000);
    }
  });

  function addChatMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender.toLowerCase());
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // FAQ accordion toggling
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const header = item.querySelector(".faq-header");
    header.addEventListener("click", function() {
      item.classList.toggle("open");
      const body = item.querySelector(".faq-body");
      body.style.maxHeight = item.classList.contains("open") ? `${body.scrollHeight}px` : "0";
    });
  });

  // Responsive design adjustments
  window.addEventListener("resize", function() {
    adjustResponsiveDesign();
  });

  function adjustResponsiveDesign() {
    const width = window.innerWidth;
    if (width < 768) {
      // Mobile-specific adjustments
    } else {
      // Desktop-specific adjustments
    }
  }

  adjustResponsiveDesign();

  // Hover effects
  const hoverElements = document.querySelectorAll(".hover-effect");

  hoverElements.forEach(elem => {
    elem.addEventListener("mouseover", function() {
      elem.classList.add("hovered");
    });

    elem.addEventListener("mouseout", function() {
      elem.classList.remove("hovered");
    });
  });
});