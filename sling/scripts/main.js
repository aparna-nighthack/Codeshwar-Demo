
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for contact form
function validateContactForm() {
    const form = document.querySelector('#contactForm');
    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const phone = form.elements["phone"].value.trim();
    const orderDetails = form.elements["orderDetails"].value.trim();

    let valid = true;

    if (name === "") {
        alert('Please enter your name.');
        valid = false;
    }

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        valid = false;
    }

    if (phone === "" || !/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        valid = false;
    }

    if (orderDetails === "") {
        alert('Please enter your order details.');
        valid = false;
    }

    return valid;
}

// Attach form validation on form submit
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        if (!validateContactForm()) {
            e.preventDefault();
        } else {
            alert('Form submitted successfully!');
        }
    });
}