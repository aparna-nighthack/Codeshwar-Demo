
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  const successMessage = document.querySelector("#success-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous success message
    successMessage.textContent = "";

    // Validate input fields
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const phone = form.querySelector("#phone");
    const message = form.querySelector("#message");

    let valid = true;

    if (name.value.trim() === "") {
      valid = false;
      name.classList.add("error");
    } else {
      name.classList.remove("error");
    }

    if (!validateEmail(email.value)) {
      valid = false;
      email.classList.add("error");
    } else {
      email.classList.remove("error");
    }

    if (phone.value.trim() === "" || !validatePhone(phone.value)) {
      valid = false;
      phone.classList.add("error");
    } else {
      phone.classList.remove("error");
    }

    if (message.value.trim() === "") {
      valid = false;
      message.classList.add("error");
    } else {
      message.classList.remove("error");
    }

    // If validation passes, simulate form submission
    if (valid) {
      // Simulate form submission
      setTimeout(() => {
        successMessage.textContent = "Your message has been sent successfully!";
        form.reset();
      }, 500);
    }
  });

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
  }
});