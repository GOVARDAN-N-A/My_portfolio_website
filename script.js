

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

// var loading = document.getElementById("pre-loading")
// window.addEventListener("load", function(){
//   loading.style.display = "none";
// })


// document.addEventListener('DOMContentLoaded', function() {
//   const moreAboutBtn = document.getElementById('more-about-btn');
//   const socialIcons = document.querySelector('.social-icons');
//   const navbarToggle = document.querySelector('.navbar-toggle i');
//   const navbar = document.querySelector('.navbar');
//   moreAboutBtn.addEventListener('click', () => {
//     socialIcons.classList.toggle('active').style.overflow = "hidden";
//   });

//   navbarToggle.addEventListener('click', () => {
//     navbar.style.display = 'block';
//     navbar.style.overflow = 'hidden'
//   });

//   // Function to handle window resize
//   function handleWindowResize() {
//     const windowWidth = window.innerWidth;

//     if (windowWidth <= 932) {
//       navbarToggle.style.display = 'block';
//       navbar.style.display = 'none';
//     } else {
//       navbarToggle.style.display = 'none';
//       navbar.style.display = 'block';
//     }
//   }
var loading = document.getElementById("pre-loading")
window.addEventListener("load", function(){
  loading.style.display = "none";
})
document.addEventListener('DOMContentLoaded', function() {
  const moreAboutBtn = document.getElementById('more-about-btn');
  const socialIcons = document.getElementById('social-icons');
  const navbarToggle = document.querySelector('.navbar-toggle i');
  const navbar = document.querySelector('.navbar');
  
  moreAboutBtn.addEventListener('click', () => {
    socialIcons.classList.toggle('active');
  });

  navbarToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navbar.style.display = 'block';
    navbar.style.overflow = 'hidden'
  });

  function handleWindowResize() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 932) {
      navbar.style.display = 'none';
    } else {
      navbar.style.display = 'block';
    }
  }

  handleWindowResize();

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
function sendEmail() {
  Email.send({
      Host: "smtp.gmail.com",
      Username: "e1215024govardan.n.a.cse@gmail.com",
      Password: "mpceevmldcvdsxcg",
      To: "e1215024govardancse@gmail.com",
      // From : "e1215024govardancse@gmail.com",
      From: document.getElementById("email").value,
      Subject: "New Contact Form Enquiry",
      Body: "Name: " + document.getElementById("name").value +
          "<br> Email: " + document.getElementById("email").value +
          "<br> Phone: " + document.getElementById("phone").value +
          "<br> Message: " + document.getElementById("message").value 
  }).then(
      message => {
          alert("Message Sent Successfully");
          resetForm();
      }
  );
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
}

console.log(loading)

// const text = document.querySelector(".sec-text");
// const textLoad = ()=>{
//   setTimeout(()=>{
//     text.textContent = "Software Engineer";
//   }, 0);

//   setTimeout(()=>{
//     text.textContent = "Web Developer";
//   }, 4000);

//   setTimeout(()=>{
//     text.textContent = "Python Developer";
//   }, 8000);


// }
// textLoad();
// setInterval(textLoad,8000);


const text = document.querySelector(".sec-text");
const textOptions = ["Software Engineer", "Web Developer", "Python Developer"];
let currentIndex = 0;

const updateText = () => {
  text.textContent = textOptions[currentIndex];
  currentIndex = (currentIndex + 1) % textOptions.length;
};

updateText(); // Set initial text

const textInterval = setInterval(updateText, 4020);

