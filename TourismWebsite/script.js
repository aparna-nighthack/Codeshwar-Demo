
// Functionality for search bar
function searchDestinations() {
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const destinations = document.querySelectorAll('.destination');
        destinations.forEach(destination => {
            const name = destination.querySelector('.destination-name').textContent.toLowerCase();
            if (name.includes(query)) {
                destination.style.display = 'block';
            } else {
                destination.style.display = 'none';
            }
        });
    });
}

// Booking system interactions
function setupBookingSystem() {
    const bookButtons = document.querySelectorAll('.book-now');
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookingForm = document.getElementById('booking-form');
            bookingForm.classList.toggle('show');
        });
    });
}

// User account management
function setupUserAccountManagement() {
    const signUpButton = document.getElementById('sign-up');
    const loginButton = document.getElementById('login');
    
    signUpButton.addEventListener('click', function() {
        const signUpForm = document.getElementById('sign-up-form');
        signUpForm.classList.toggle('show');
    });
    
    loginButton.addEventListener('click', function() {
        const loginForm = document.getElementById('login-form');
        loginForm.classList.toggle('show');
    });
}

// Admin panel controls
function setupAdminPanelControls() {
    const adminPanelButton = document.getElementById('admin-panel-button');
    adminPanelButton.addEventListener('click', function() {
        const adminPanel = document.getElementById('admin-panel');
        adminPanel.classList.toggle('show');
    });
}

// Multilingual support
function setupMultilingualSupport() {
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        // Logic to switch text content to the selected language
    });
}

// Currency converter
function setupCurrencyConverter() {
    const currencySelect = document.getElementById('currency-select');
    currencySelect.addEventListener('change', function() {
        const selectedCurrency = this.value;
        // Logic to update prices throughout the site
    });
}

// Newsletter subscription form handling
function setupNewsletterSubscription() {
    const subscriptionForm = document.getElementById('newsletter-form');
    subscriptionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('email-input').value;
        // Logic to handle subscription with the provided email
    });
}

// Social media integration
function setupSocialMediaIntegration() {
    const socialMediaLinks = document.querySelectorAll('.social-media-link');
    socialMediaLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Logic to handle social media sharing
        });
    });
}

// Initialize all functionalities
function initializeFeatures() {
    searchDestinations();
    setupBookingSystem();
    setupUserAccountManagement();
    setupAdminPanelControls();
    setupMultilingualSupport();
    setupCurrencyConverter();
    setupNewsletterSubscription();
    setupSocialMediaIntegration();
}

// Set up the features once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeFeatures);