var underLine1 = document.querySelector('.home');
var underLine2 = document.querySelector('.about');
var underLine3 = document.querySelector('.services');
var underLine4 = document.querySelector('.work');
var underLine5 = document.querySelector('.clients');
var underLine6 = document.querySelector('.contact');
var navbar = document.getElementById('navbar');
var imgLogo = document.querySelector('.img');
var line = document.querySelector('.line-1');
console.log(window.scrollY);
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    navbar.classList.add('nav-w');
    navbar.classList.add('nav-edit-height');
    imgLogo.classList.add('nav-edit-height');
    navbar.classList.remove('nav-edit-height-high');
    imgLogo.classList.remove('nav-edit-height-high');
  }
  else {
    navbar.classList.remove('nav-w');
    navbar.classList.remove('nav-edit-height');
    imgLogo.classList.remove('nav-edit-height');
    navbar.classList.add('nav-edit-height-high');
    imgLogo.classList.add('nav-edit-height-high');
  }
});
window.addEventListener('scroll', () => {
  if (window.scrollY > 411) {
    underLine1.classList.remove('text-dec');
    underLine2.classList.add('text-dec');
  }
  else {
    underLine2.classList.remove('text-dec');
    underLine1.classList.add('text-dec');
  }
});
const scroll = new SmoothScroll('#navbar a[href*="#"]', {
  speed: 800
});
window.addEventListener('scroll', () => {
  if (window.scrollY > 1251) {
    underLine2.classList.remove('text-dec');
    underLine3.classList.add('text-dec');
  }
  else {
    underLine3.classList.remove('text-dec');
  }
});
window.addEventListener('scroll', () => {
  if (window.scrollY > 2285) {
    underLine3.classList.remove('text-dec');
    underLine4.classList.add('text-dec');
  }
  else {
    underLine4.classList.remove('text-dec');
  }
});
window.addEventListener('scroll', () => {
  if (window.scrollY > 3463) {
    underLine4.classList.remove('text-dec');
    underLine5.classList.add('text-dec');
  }
  else {
    underLine5.classList.remove('text-dec');
  }
});


