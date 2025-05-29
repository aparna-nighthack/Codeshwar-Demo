
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contactForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate form inputs
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const errors = [];

    if (!name.value.trim()) {
      errors.push("Name is required.");
    }
    if (!email.value.trim() || !validateEmail(email.value)) {
      errors.push("Valid email is required.");
    }
    if (!message.value.trim()) {
      errors.push("Message is required.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    // Send data to server
    const formData = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          alert("Your message has been sent successfully!");
          form.reset();
        } else {
          alert("There was a problem sending your message. Please try again.");
        }
      })
      .catch((error) => {
        alert("There was an error: " + error.message);
      });
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});