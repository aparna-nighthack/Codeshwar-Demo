
// Function to initialize carousels
function initCarousels() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach((carousel) => {
        const items = carousel.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        function showItem(index) {
            items.forEach(item => item.classList.remove('active'));
            items[index].classList.add('active');
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        }

        function showPrev() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showItem(currentIndex);
        }

        carousel.querySelector('.carousel-next').addEventListener('click', showNext);
        carousel.querySelector('.carousel-prev').addEventListener('click', showPrev);

        // Animate transition
        items.forEach(item => {
            item.addEventListener('transitionend', () => {
                items[currentIndex].classList.remove('animate');
            });
        });

        showItem(currentIndex);
    });
}

// Function to handle button clicks
function handleButtonClicks() {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            alert(`You clicked on ${button.textContent}!`);
        });
    });
}

// Function to handle form submissions
function handleFormSubmissions() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = form.querySelector('[name="name"]').value;
        const email = form.querySelector('[name="email"]').value;
        const message = form.querySelector('[name="message"]').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Here you would normally send a request to the server
        alert('Form submitted successfully!');

        form.reset();
    });
}

// Function to validate form inputs
function validateFormInputs() {
    const form = document.getElementById('contactForm');
    form.addEventListener('input', function() {
        const name = form.querySelector('[name="name"]');
        const email = form.querySelector('[name="email"]');
        const message = form.querySelector('[name="message"]');
        
        if (name.value.trim() === '') {
            name.classList.add('invalid');
        } else {
            name.classList.remove('invalid');
        }
        
        if (email.value.trim() === '' || !email.value.includes('@')) {
            email.classList.add('invalid');
        } else {
            email.classList.remove('invalid');
        }
        
        if (message.value.trim() === '') {
            message.classList.add('invalid');
        } else {
            message.classList.remove('invalid');
        }
    });
}

// Initialize all functionalities
document.addEventListener('DOMContentLoaded', () => {
    initCarousels();
    handleButtonClicks();
    handleFormSubmissions();
    validateFormInputs();
});