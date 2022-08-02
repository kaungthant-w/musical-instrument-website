// sidebar

const navProduct = document.querySelector('.navbar__link--product');
const sectionTwo = document.querySelector('.sectionProduct__2');

const navAlbum = document.querySelector('.navbar__link--album');
const sectionAlbum = document.querySelector('.sectionAlbum');

const sectionProfolio = document.querySelector(".profolio");
const  profolio = document.querySelector(".navbar__link--profolio");

const sectionprojects = document.querySelector(".projects");
const  projects = document.querySelector(".navbar__link--projects");

const smooth = function(e) {
    e.preventDefault();
    sectionTwo.scrollIntoView({behavior:'smooth'});
}
navProduct.addEventListener("click", smooth );

navAlbum.addEventListener("click", function(e) {
    e.preventDefault();
    sectionAlbum.scrollIntoView({behavior:'smooth'});
});

profolio.addEventListener("click", function(e) {
    e.preventDefault();
    sectionProfolio.scrollIntoView({behavior:'smooth'});
});

projects.addEventListener("click", function(e) {
    e.preventDefault();
    sectionprojects.scrollIntoView({behavior:'smooth'});
});


//toggle
const navbar = document.querySelector(".nav");
const navItem = document.querySelector(".navbar__link--hide");
const toggle = document.querySelector(".header__pagination--last");

toggle.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("run");
    navbar.classList.toggle("nav__toggle");
});