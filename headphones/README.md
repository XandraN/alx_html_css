Headphones Website Project
Overview
This project implements a responsive, accessible webpage for a headphones company, built from scratch using only HTML and CSS, as per the project requirements. The design adheres to modern UI/UX principles, ensures accessibility, and includes a mobile-responsive layout that adapts at a 480px breakpoint. No external CSS frameworks or JavaScript were used.
Features

Responsive Design: The webpage adapts seamlessly to screen sizes, with a mobile layout triggered at 480px or below.
Accessibility: Semantic HTML, ARIA attributes, and sufficient color contrast ensure the page is accessible to all users.
Hover/Active States: Links use a hover/active color of #FF6565, and buttons have a 0.9 opacity effect on hover/active.
Content Layout: The content is centered with a maximum width of 1000px.
Custom Fonts: Uses Source Sans Pro and Spin Cycle OT fonts (or fallbacks if not available).
No External Frameworks: Built entirely with vanilla HTML and CSS.

Files

index.html: The main webpage structure.
style.css: Contains all styling, including responsive design and hover effects.

Setup and Installation

Clone the Repository:git clone https://github.com/your-username/alx_html_css.git
cd headphones


Fonts:
Ensure Source Sans Pro and Spin Cycle OT fonts are available on your system. If not, download them from Source Sans Pro and Spin Cycle OT or use system fallbacks (e.g., sans-serif).


View the Page:
Open index.html in a web browser to view the webpage.
Test responsiveness by resizing the browser or using developer tools to simulate a 480px or smaller viewport.



Design Notes

Figma Reference: The design was inspired by the provided Figma file by Nicolas Philippot. All measurements and styles (e.g., colors, fonts, spacing) were approximated or rounded as needed for clean CSS implementation.
Mobile Breakpoint: The layout switches to a mobile-friendly design at 480px, stacking sections vertically and adjusting font sizes and padding for better readability.
Accessibility:
Semantic HTML elements (e.g., <header>, <nav>, <main>) are used for better screen reader compatibility.
ARIA landmarks and roles are applied where necessary.
Color contrast meets WCAG 2.1 guidelines for readability.


Interactions:
Links change to #FF6565 on hover and active states.
Buttons reduce to 0.9 opacity on hover and active states for subtle feedback.


Content Width: The main content is constrained to a maximum width of 1000px and centered using CSS flexbox and margin properties.

Testing

Browser Compatibility: Tested on modern browsers (Chrome, Firefox, Safari, Edge).
Responsive Testing: Verified mobile layout at 480px and below using browser developer tools.
Accessibility Testing: Validated with screen readers and contrast checkers to ensure WCAG compliance.
Auto Review: An auto-review will be triggered at the project deadline (Aug 11, 2025, 12:00 AM).
Manual QA: Request a manual QA review upon project completion.

Repository Structure
alx_html_css/
└── headphones/
    ├── index.html
    ├── style.css
    └── README.md

How to Contribute

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make changes and commit (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Create a pull request.

Author

Created as part of the ALX HTML/CSS curriculum.
Design inspired by Nicolas Philippot's Figma file.

License
This project is for educational purposes and follows the ALX curriculum guidelines.