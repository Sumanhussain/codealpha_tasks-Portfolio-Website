// //toggle icon navbar
let menuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


// //scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      // ✅ Fix href typo here
      let activeLink = document.querySelector('header nav a[href*=' + id + ']');
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100); 
};

AOS.init({
    duration: 1000, // animation duration in ms
    once: true      // animate only once
  });
  