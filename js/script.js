//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika product menu di klik
const product = document.getElementById("#product-menu");
product.onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik diluar side bar untuk menghilangkan nav
//const product = document.querySelector("#product-menu");
//produk=document.queryselector
document.addEventListener("click", function (e) {
  if (!product.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
console.log(navbarNav);

const slideshow = [{title:"Together Developing A Healthy life", slogan:"In giving excellent service, Jafarel will focus its competency in diagnostic and distribution of medical paraphernalia to support medical examination in laboratories across Indonesia".}]
