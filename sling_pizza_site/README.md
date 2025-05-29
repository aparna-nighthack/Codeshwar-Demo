
Welcome to the Sling Pizza website! This README provides instructions on setting up and running the website.

## Project Structure

```
sling_pizza_site/
│
├── index.html
├── styles.css
├── scripts.js
├── gallery.json
└── contact_form_handler.php
```

## Setting Up and Running the Website

### 1. Prerequisites

- **Web Server**: Ensure you have PHP installed on your server to run the contact form handler.
- **Browser**: Any modern web browser to view the site.

### 2. File Descriptions

- **index.html**: This is the main HTML file of the website. It includes various sections such as Hero, About Us, Gallery, Testimonials, Delivery Locations, and Contact Form. Ensure that images in the hero section and the gallery are properly linked and displayed.

- **styles.css**: This CSS file styles the Sling Pizza website. It centers all content, applies a light background shade, and ensures text visibility. The hero section uses a specific background image, and Flexbox/Grid layout is used for aligning items.

- **scripts.js**: This JavaScript file adds interactivity to the website, such as the carousel feature for the testimonials section and client-side form validation.

- **gallery.json**: Contains data for the gallery pizzas, including each pizza's name, ingredients, and price. Used to dynamically generate pizza cards in the gallery section.

- **contact_form_handler.php**: Handles the contact and order form submission. Validates and processes input fields such as name, phone, email, selected pizza, delivery address, and special instructions. Ensure that order data is stored or emailed securely.

### 3. Linking Styles and Scripts

Make sure to include the CSS and JavaScript files in the `<head>` and before the closing `<body>` tag of the `index.html` like below:

```html
<link rel="stylesheet" href="styles.css">
<script src="scripts.js"></script>
```

### 4. Backend Processing

- Place the `contact_form_handler.php` file in a location accessible by your server.
- Ensure PHP is configured properly to handle form submissions.
- Validate inputs to prevent SQL injections or other security vulnerabilities.

### 5. Running the Website

- Simply open the `index.html` in your web browser to view the Sling Pizza website.
- Handle server-based operations by ensuring the web server is running and accessible.

### 6. Deployment

- Deploy the site on any web server with PHP support.
- Make sure the `contact_form_handler.php` is in the right directory and accessible by the server.

## Contact

For any issues or queries, contact:
- **Email**: [hello@slingpizza.com](mailto:hello@slingpizza.com)
- **Address**: 123 Pizza Lane, Food City
- **Phone**: +91 XXXX-XXXX

---

© 2024 Sling Pizza. All Rights Reserved.