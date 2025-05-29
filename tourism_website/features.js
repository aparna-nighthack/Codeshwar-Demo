
// Multilingual support
const languageOptions = ['en', 'es', 'fr'];
const defaultLanguage = 'en';

function setLanguage(lang) {
  if (languageOptions.includes(lang)) {
    document.documentElement.lang = lang;
    // Load language-specific content here
  }
}

// Currency conversion
const currencyRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
};

function convertCurrency(amount, from, to) {
  return (amount / currencyRates[from]) * currencyRates[to];
}

// Newsletter subscription
function subscribeNewsletter(email) {
  if (validateEmail(email)) {
    // Logic to add email to subscription list
    alert(`Subscribed with ${email}`);
  } else {
    alert('Invalid email address');
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Social media integration
const socialMediaLinks = {
  facebook: 'https://www.facebook.com/TourismTravels',
  twitter: 'https://twitter.com/TourismTravels',
  instagram: 'https://www.instagram.com/TourismTravels',
};

function openSocialMedia(site) {
  const url = socialMediaLinks[site];
  if (url) {
    window.open(url, '_blank');
  }
}

// Event listeners
document.querySelectorAll('.language-select').forEach((element) => {
  element.addEventListener('change', (event) => {
    setLanguage(event.target.value);
  });
});

document.querySelector('.subscribe-button').addEventListener('click', () => {
  const email = document.querySelector('.email-input').value;
  subscribeNewsletter(email);
});

document.querySelectorAll('.social-media-icon').forEach((icon) => {
  icon.addEventListener('click', () => {
    openSocialMedia(icon.dataset.site);
  });
});

// Linking to other HTML files
// index.html, destinations.html, booking_system.html, blogs_and_guides.html, user_accounts.html, admin_panel.html