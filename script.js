document.addEventListener('DOMContentLoaded', function() {
    const moreAboutBtn = document.getElementById('more-about-btn');
    const socialIcons = document.querySelector('.social-icons');
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbar = document.getElementById('navbar');
  
    moreAboutBtn.addEventListener('click', () => {
      socialIcons.classList.toggle('active');
    });
  
    document.addEventListener('click', (event) => {
      const targetElement = event.target;
  
      if (!socialIcons.contains(targetElement) && targetElement !== moreAboutBtn) {
        socialIcons.classList.remove('active');
      }
    });
  
    navbarToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  
    document.addEventListener('click', (event) => {
      const targetElement = event.target;
  
      if (!navbar.contains(targetElement) && targetElement !== navbarToggle) {
        navbar.classList.remove('active');
      }
    });
  });
  