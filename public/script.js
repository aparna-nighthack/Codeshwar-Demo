document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? "block" : "none";
    });
  }

  showTestimonial(currentTestimonial);

  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 3000);
});

// Dropdown for Delivery Locations
const deliveryDropdown = document.getElementById('delivery-dropdown');
const deliveryAreas = [
  "Mumbai (All Zones)",
  "Delhi (North & South)",
  "Bangalore (Central & East)",
  "Hyderabad (Gachibowli & Hitech City)"
];

deliveryAreas.forEach(area => {
  const option = document.createElement('option');
  option.value = area;
  option.textContent = area;
  deliveryDropdown.appendChild(option);
});

// Auto-suggest for Delivery Address
const addressInput = document.getElementById('delivery-address');
addressInput.addEventListener('input', function () {
  const suggestions = ["Pizza Lane", "Crust Street", "Cheese Avenue"];
  const dropdown = document.getElementById('address-suggestions');
  dropdown.innerHTML = '';

  const inputValue = addressInput.value.toLowerCase();
  if (inputValue) {
    const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(inputValue)
    );

    filteredSuggestions.forEach(suggestion => {
      const suggestionItem = document.createElement('div');
      suggestionItem.textContent = suggestion;
      suggestionItem.addEventListener('click', function () {
        addressInput.value = suggestion;
        dropdown.innerHTML = '';
      });
      dropdown.appendChild(suggestionItem);
    });
  }
});

// Form Validation
const form = document.getElementById('order-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');

  if (!nameInput.value || !phoneInput.value || !emailInput.value) {
    alert('Please fill all required fields.');
    return;
  }

  if (!validatePhone(phoneInput.value)) {
    alert('Please enter a valid phone number.');
    return;
  }

  if (!validateEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Order placed successfully!');
});

function validatePhone(phone) {
  // Simplistic validation
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
}

function validateEmail(email) {
  // Simplistic validation
  const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}