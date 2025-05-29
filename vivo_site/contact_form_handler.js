
// Function to validate email using a regex pattern
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// Function to validate the contact form inputs
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let valid = true;

    if (name === "") {
        showError('name', 'Name is required');
        valid = false;
    } else {
        clearError('name');
    }

    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email');
        valid = false;
    } else {
        clearError('email');
    }

    if (message === "") {
        showError('message', 'Message cannot be empty');
        valid = false;
    } else {
        clearError('message');
    }

    return valid;
}

// Function to show error messages
function showError(field, message) {
    const errorElement = document.getElementById(`${field}-error`);
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}

// Function to clear error messages
function clearError(field) {
    const errorElement = document.getElementById(`${field}-error`);
    errorElement.style.display = 'none';
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent form submission
    if (validateForm()) {
        const form = document.getElementById('contact-form');
        const formData = new FormData(form);

        // Simulate form submission
        console.log("Submitting form data...");
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Display success feedback
        alert('Thank you for your message. We will get back to you soon!');
        form.reset(); // Reset the form
    }
}

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', submitForm);