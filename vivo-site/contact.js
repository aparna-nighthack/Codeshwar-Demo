
document.addEventListener('DOMContentLoaded', function() {
    // Contact form element
    const contactForm = document.getElementById('contactForm');
    
    // Add submit event listener to the form
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate form inputs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        if (!name) {
            isValid = false;
            alert('Name is required.');
        }
        if (!email || !validateEmail(email)) {
            isValid = false;
            alert('Valid email is required.');
        }
        if (!message) {
            isValid = false;
            alert('Message is required.');
        }
        
        if(!isValid) return;
        
        // Send data to API endpoint or show success message
        fetch('https://api.example.com/submitContact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Thank you for contacting us, we will get back to you shortly.');
            } else {
                alert('There was a problem submitting your request.');
            }
        })
        .catch(error => {
            alert('An error occurred. Please try again later.');
        });
    });
    
    // Function to validate email
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});