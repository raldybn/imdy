//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika product menu di klik
const product = document.querySelector("#product-menu");
product.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});
// klik diluar side bar untuk menghilangkan nav
//const product = document.querySelector("#product-menu");
//produk=document.queryselector
document.addEventListener("click", function (e) {
  if (!product.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
