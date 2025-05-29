
document.addEventListener("DOMContentLoaded", function () {
  // Form Validation
  const orderForm = document.querySelector("#order-form");
  if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
      let valid = true;
      const fields = orderForm.querySelectorAll("input, select");
      fields.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.classList.add("error");
        } else {
          field.classList.remove("error");
        }
      });

      if (!valid) {
        event.preventDefault();
        alert("Please fill out all fields.");
      }
    });
  }

  // Gallery Interactions
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      const caption = item.querySelector(".caption");
      if (caption) {
        caption.style.opacity = "1";
      }
    });

    item.addEventListener("mouseout", function () {
      const caption = item.querySelector(".caption");
      if (caption) {
        caption.style.opacity = "0";
      }
    });
  });

  // Testimonials Carousel
  let currentIndex = 0;
  const testimonials = document.querySelectorAll(".testimonial");
  const totalTestimonials = testimonials.length;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? "block" : "none";
    });
  }

  document.querySelector("#next-testimonial").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
  });

  document.querySelector("#prev-testimonial").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentIndex);
  });

  if (totalTestimonials) {
    showTestimonial(currentIndex);
  }
});