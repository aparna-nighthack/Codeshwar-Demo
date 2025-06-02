
This README contains instructions for setting up Aparna’s portfolio site, detailing each section, how to run the site locally, and how it connects with the external CSS and JavaScript files.

## Table of Contents
- [Introduction](#introduction)
- [File Structure](#file-structure)
- [Setup Instructions](#setup-instructions)
- [Section Details](#section-details)
- [Connecting CSS and JavaScript](#connecting-css-and-javascript)
- [Running Locally](#running-locally)

## Introduction
Aparna's portfolio serves as her professional digital identity, showcasing expertise in machine learning, data analysis, and software engineering. The website features a modern design prioritizing clarity and engagement while ensuring smooth navigation through her career story.

## File Structure

```
portfolio/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── scripts.js
└── sections/
    ├── career.html
    ├── education.html
    ├── projects.html
    ├── skills.html
    ├── testimonials.html
    └── contact.html
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd portfolio
   ```

3. **Open index.html in a Browser**
   Simply open the `index.html` file in a web browser to view the portfolio.

## Section Details

- **Home / About Me**
  - Layout: Split layout with professional photo and introduction text.
  - Features: Headline, short paragraph, CTA buttons.

- **Career Highlights**
  - Layout: Card grid with roles, milestones, and smooth slide-in animations.

- **Educational Background**
  - Layout: Simple list layout with icons and animations.

- **Projects & Portfolio**
  - Layout: Responsive grid with interactive project cards, links to GitHub repositories, and demos.

- **Skills & Technologies**
  - Layout: Horizontal skill bars grouped by category.

- **Testimonials / Recommendations**
  - Layout: Carousel or stacked quote blocks.

- **Contact**
  - Layout: Simple contact form with social media icons.

## Connecting CSS and JavaScript

- **CSS:**
  - `style.css` is linked in each HTML file to ensure consistent styling across the website.

- **JavaScript:**
  - `scripts.js` handles animations and interactions across different sections.

## Running Locally

To run the project locally, simply open the `index.html` file in a web browser, ensuring that paths to linked CSS and JS files are correctly set.

Ensure that you have an internet connection for the Bootstrap CDN to load as intended.