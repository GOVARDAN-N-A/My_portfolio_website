

// document.addEventListener('DOMContentLoaded', function()  {
//   console.log("DOM content loaded");
//   const moreAboutBtn = document.getElementById('more-about-btn');
//   const socialIcons = document.querySelector('.social-icons');
//   const navbarToggle = document.querySelector('.navbar-toggle'); 
//   const navbar = document.querySelector('.navbar');

//   moreAboutBtn.addEventListener('click', () => {
//       socialIcons.classList.toggle('active').style.overflow="hidden";
//   });
//   navbarToggle.addEventListener('click',() => {
//   //  navbarToggle.style.display = "none";('active');

//     navbar.style.display = 'block' ;
//   });



//   document.addEventListener('click', (event) => {
//       const targetElement = event.target;

//       if (!socialIcons.contains(targetElement) && targetElement !== moreAboutBtn) {
//           socialIcons.classList.remove('active');
//       }

//       if (!navbar.contains(targetElement) && targetElement !== navbarToggle) {
//           navbarToggle.display='block';
//           navbar.classList.remove('active')
//       }

//       if (!navbar.contains(targetElement) && targetElement !== navbarToggle) {
//         navbar.style.display = 'none';
//       }

//     //   if (!navbar.contains(targetElement) && targetElement !== navbarToggle) {
//     //     navbarToggle.style.display ="block"
//     // }
     
//   });
//   console.log(navbar, navbarToggle)
// });

document.addEventListener('DOMContentLoaded', function() {
  const moreAboutBtn = document.getElementById('more-about-btn');
  const socialIcons = document.querySelector('.social-icons');
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbar = document.querySelector('.navbar');

  moreAboutBtn.addEventListener('click', () => {
    socialIcons.classList.toggle('active').style.overflow = 'visible';
    display.scr
  });

  navbarToggle.addEventListener('click', () => {
    navbar.style.display = 'block';
  });

  // Function to handle window resize
  function handleWindowResize() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 932) {
      navbarToggle.style.display = 'block';
      navbar.style.display = 'none';
    } else {
      navbarToggle.style.display = 'none';
      navbar.style.display = 'block';
    }
  }

  // Initial call to handleWindowResize
  handleWindowResize();

  // Listen for window resize events
  window.addEventListener('resize', handleWindowResize);

  document.addEventListener('click', (event) => {
    const targetElement = event.target;

    if (!socialIcons.contains(targetElement) && targetElement !== moreAboutBtn) {
      socialIcons.classList.remove('active');
    }

    if (!navbar.contains(targetElement) && targetElement !== navbarToggle) {
        handleWindowResize()
    }
  });
});
