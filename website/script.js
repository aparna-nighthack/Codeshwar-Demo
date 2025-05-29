
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for "Order Now" button
  document.querySelector(".order-now-btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#contact-section").scrollIntoView({ behavior: "smooth" });
  });

  // Testimonials carousel
  let testimonialIndex = 0;
  const testimonials = document.querySelectorAll(".testimonial");
  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? "block" : "none";
    });
  }
  showTestimonial(testimonialIndex);
  setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    showTestimonial(testimonialIndex);
  }, 3000);

  // Dropdown functionality for Delivery & Locations
  const locationDropdown = document.querySelector("#delivery-locations");
  locationDropdown.addEventListener("change", function () {
    const selected = locationDropdown.options[locationDropdown.selectedIndex].text;
    alert(`You selected: ${selected}. Ensure delivery within 45 minutes.`);
  });

  // Form validation for Contact & Order Form
  const form = document.querySelector("#order-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const email = document.querySelector("#email").value.trim();

    // Basic validation
    if (!name || !phone || !email) {
      alert("Please fill in all the fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // If validation passes
    alert("Order placed successfully!");
  });
});