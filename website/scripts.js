
// Wait for the document to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Carousel functionality
  const carouselImages = [
    'https://www.shutterstock.com/image-photo/ai-agents-business-analyze-businesses-600nw-2577839733.jpg',
    'https://framerusercontent.com/images/YBxYK0sSKVIsw3pcqkbU82Sz5d4.jpeg',
    'https://cdn.prod.website-files.com/65bbc048baf191b567245ec1/6656c7c7c106ba07437aa244_An%20image%20illustrating%20the%20concept%20of%20building%20AI%20agent%20applications.%20T.webp'
  ];

  let currentCarouselIndex = 0;

  function updateCarousel() {
    const carouselElement = document.querySelector('.carousel-inner');
    carouselElement.style.backgroundImage = `url('${carouselImages[currentCarouselIndex]}')`;
    currentCarouselIndex = (currentCarouselIndex + 1) % carouselImages.length;
  }

  setInterval(updateCarousel, 5000);
  updateCarousel();

  // Smooth scroll for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // FAQ accordion toggle functionality
  const accordions = document.querySelectorAll('.accordion-item');
  accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    header.addEventListener('click', function() {
      const body = accordion.querySelector('.accordion-body');
      if (body.style.maxHeight) {
        body.style.maxHeight = null;
      } else {
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  // Chat widget functionality
  const chatWidgetToggle = document.querySelector('.chat-widget-toggle');
  const chatWidget = document.querySelector('.chat-widget');
  
  chatWidgetToggle.addEventListener('click', function() {
    if (chatWidget.style.display === 'none' || !chatWidget.style.display) {
      chatWidget.style.display = 'block';
    } else {
      chatWidget.style.display = 'none';
    }
  });

  // Micro-interactions on hover and click events
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });

  // Call to Action (CTA) button scroll behavior
  const ctaButtons = document.querySelectorAll('.cta-button');
  ctaButtons.forEach(ctaButton => {
    ctaButton.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSectionId = this.getAttribute('data-target');
      const targetSection = document.querySelector(targetSectionId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});