
// Ensure DOM content is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize Bootstrap carousel
  var carouselElement = document.querySelector('.carousel');
  if (carouselElement) {
    var carousel = new bootstrap.Carousel(carouselElement, {
      interval: 3000, // Set the carousel interval to 3 seconds
      ride: 'carousel' // Autoplays the carousel on load
    });
  }

  // Initialize accordion
  var accordionElement = document.querySelectorAll('.accordion');
  accordionElement.forEach(function(item) {
    var accordion = new bootstrap.Accordion(item);
  });

  // Smooth scrolling for anchor links
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Handle CTA button events
  var demoButton = document.getElementById('demoBtn');
  if (demoButton) {
    demoButton.addEventListener('click', function() {
      window.location.href = '#demoSection'; // Navigate to interactive demo sandbox
    });
  }

  var useCasesButton = document.getElementById('useCasesBtn');
  if (useCasesButton) {
    useCasesButton.addEventListener('click', function() {
      document.querySelector('#useCasesSection').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }

  // Handle window resize events for various enhancements
  window.addEventListener('resize', function() {
    // Example: Adjust carousel dimensions or layouts if needed
    console.log('Window resized, consider adapting UI components.');
  });
});