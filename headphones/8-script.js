document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('#mobile-nav');
  const menuIcon = menuToggle.querySelector('.icon');

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
    
    // Toggle between hamburger and close icons
    menuIcon.classList.toggle('holberton_school-icon-menu');
    menuIcon.classList.toggle('holberton_school-icon-close');
  });
});


