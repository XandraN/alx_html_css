# alx_html_css

Overview
This project is part of the ALX HTML & CSS curriculum, focusing on basic CSS styling and responsive web design using Flexbox. The css_basic directory contains a simple website with a homepage (index.html) and a tweets page (tweets.html), styled using two CSS files: base.css for general styles and styles.css for custom layout and styling.
The website features a responsive layout with a header, main content area (containing an article and aside), and footer, arranged using CSS Flexbox. It is optimized for both desktop and mobile devices, with a viewport meta tag and a works_on_smartphone class for responsive behavior.
Repository

GitHub Repository: https://github.com/XandraN/alx_html_css
Directory: css_basic

Files

index.html: The homepage of the website.
Contains a <header> with a Unicode logo (rocket emoji 🚀) and navigation links.
Features a <main> section with an <article> (⅔ width) for main content and an <aside> (⅓ width) for secondary content.
Includes a <footer> with copyright information.
Uses the works_on_smartphone class for responsive design and a viewport meta tag for mobile optimization.


tweets.html: A page for displaying tweets (similar structure to index.html).
Contains similar layout and styling as index.html, with potential for tweet-specific content.


base.css: Contains base styles for the website, including fonts, colors, and responsive styles for the works_on_smartphone class.
Assumed to include styles for the .logo class to enlarge the Unicode logo.


styles.css: Contains custom styles for the Flexbox layout and additional visual enhancements.
Implements a vertical Flexbox layout for <header>, <main>, and <footer> within <body>.
Uses a horizontal Flexbox layout for <article> and <aside> within <main>.
Includes non-positioning styles (e.g., colors, backgrounds, borders) for visual appeal.



Layout
The website uses CSS Flexbox to achieve the following layout:

<body>: A flex container with flex-direction: column, stacking <header>, <main>, and <footer> vertically.
<main>: A flex container with flex-direction: row and flex: auto, arranging <article> (⅔ width) and <aside> (⅓ width) side by side.
<article> and <aside>: Support vertical scrolling with overflow-y: auto.
Responsive design: The works_on_smartphone class (defined in base.css) adjusts the layout for smaller screens (e.g., stacking <article> and <aside> vertically).

Setup and Usage

Clone the Repository:git clone https://github.com/XandraN/alx_html_css.git
cd alx_html_css/css_basic


Open the Website:
Open index.html or tweets.html in a web browser to view the styled pages.
Use browser developer tools to simulate mobile devices and test responsiveness.


Customize:
Modify styles.css for additional non-positioning styles (e.g., colors, fonts).
Update <article> content in index.html or tweets.html for custom content.
Change the Unicode logo in <header> by updating the HTML code (e.g., &#128640; for 🚀).



Notes

The base.css file is assumed to include styles for the works_on_smartphone class and .logo class. Review it to understand responsive behavior.
The Flexbox layout in styles.css must not be altered outside of <article> content.
Ensure the viewport meta tag (<meta name="viewport" content="width=device-width, initial-scale=1.0">) is present in both HTML files for mobile compatibility.

Copyright
© 2025 ALX, All rights reserved.