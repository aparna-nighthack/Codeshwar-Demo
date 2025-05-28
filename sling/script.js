
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            form.reset();
        } else {
            successMessage.style.display = 'none';
            errorMessage.style.display = 'block';
        }
    });

    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim() === '') {
            displayError(nameInput, 'Name is required');
            isValid = false;
        } else {
            removeError(nameInput);
        }

        if (!isValidEmail(emailInput.value)) {
            displayError(emailInput, 'Please enter a valid email');
            isValid = false;
        } else {
            removeError(emailInput);
        }

        if (!isValidPhoneNumber(phoneInput.value)) {
            displayError(phoneInput, 'Please enter a valid phone number');
            isValid = false;
        } else {
            removeError(phoneInput);
        }

        if (messageInput.value.trim() === '') {
            displayError(messageInput, 'Message is required');
            isValid = false;
        } else {
            removeError(messageInput);
        }

        return isValid;
    }

    function displayError(input, message) {
        const error = input.nextElementSibling;
        error.innerText = message;
        error.style.display = 'block';
    }

    function removeError(input) {
        const error = input.nextElementSibling;
        error.style.display = 'none';
    }

    function isValidEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function isValidPhoneNumber(phone) {
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    }
});