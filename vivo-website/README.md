
## Project Overview

The Vivo Product Catalog website is a friendly and responsive site featuring Vivo’s latest phone offerings. It is designed to showcase flagship devices like the X100 Pro, V30, and T3 5G with specifications and images. The site includes interactive carousels highlighting features such as the Zeiss camera and 120W charging. Additional features include limited-time offers, testimonials, a contact form, and a footer with social media links, a newsletter signup form, and copyright information. All content is centered and presented using vibrant Vivo-branded background colors.

## Setup Instructions

To set up the Vivo Product Catalog website locally, you need to follow these instructions:

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd vivo-website
   ```

3. **Install Dependencies:**
   Ensure you have a web server like `http-server` installed. If not, you can install it using npm:
   ```bash
   npm install -g http-server
   ```

4. **Run the Website Locally:**
   Start a local server to preview the site. You can use `http-server` as follows:
   ```bash
   http-server
   ```

5. **Open your Browser:**
   Visit `http://localhost:8080` or the assigned port to view the site.

## File Details

- **`index.html`**: 
  - The homepage of the website, utilizing Bootstrap 5 for responsive design. Features flagship devices and interactive carousels.

- **`styles.css`**: 
  - Custom styles to complement Bootstrap, using Vivo brand colors for aesthetics. Provides styles for navigation, carousels, buttons, forms, and footer.

- **`script.js`**: 
  - JavaScript for interactivity, including image carousels and form validation.

- **`contact-form.html`**: 
  - A contact form page with fields for name, email, subject, and message. Includes form validation.

## Technologies Used

- **Bootstrap 5**: For responsive design and pre-styled components.
- **JavaScript**: For adding dynamic and interactive functionalities.
- **HTML5 & CSS3**: For structure and styling.
- **http-server**: For running a local development server.

## Dependencies

- **http-server**: Used for serving the site locally. Install via npm if not already available.

### Additional Information

- Ensure all the links and paths are correctly set up when deploying.
- Images included in the project need to be adequately referenced or loaded from the URLs provided.
- Content has been aligned for clarity and user engagement.

For any further assistance or issues related to setting up or running the project, please contact [support@vivo.com].