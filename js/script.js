//toggle class active product menu
const navbarNav = document.querySelector(".navbar-nav");
//ketika product menu di klik
const product = document.querySelector("#product-menu");
product.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

// toggle class active search form
const seacrhForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  seacrhForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik diluar elemen
const pm = document.querySelector("#product-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!pm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !seacrhForm.contains(e.target)) {
    seacrhForm.classList.remove("active");
  }
});

// slideshow #shopping.html

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
