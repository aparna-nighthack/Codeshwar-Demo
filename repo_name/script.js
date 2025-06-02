
// Initialize Bootstrap Carousel
document.querySelectorAll('.carousel').forEach(carousel => {
  new bootstrap.Carousel(carousel, {
    interval: 5000
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Live chat widget functionality
const liveChatButton = document.getElementById('liveChatToggle');
const chatWidget = document.getElementById('chatWidget');

if (liveChatButton && chatWidget) {
  liveChatButton.addEventListener('click', () => {
    chatWidget.classList.toggle('d-none');
  });
}

// Accordion for FAQ
document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', function() {
    const faqContent = this.nextElementSibling;
    faqContent.classList.toggle('show');
    this.querySelector('i').classList.toggle('bi-chevron-down');
    this.querySelector('i').classList.toggle('bi-chevron-up');
  });
});

// Event listeners for buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.classList.add('hover-effect');
  });

  button.addEventListener('mouseleave', () => {
    button.classList.remove('hover-effect');
  });
});

// Implementing Bootstrap Modal for video walkthrough
const videoModalTrigger = document.getElementById('videoModalTrigger');
const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));

if (videoModalTrigger) {
  videoModalTrigger.addEventListener('click', () => {
    videoModal.show();
  });
}