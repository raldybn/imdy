//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika product menu di klik
document.querySelector("#product-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar side bar untuk menghilangkan nav
const product = document.querySelector("#product-menu");

document.addEventListener("click", function (e) {
  if (!product.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
