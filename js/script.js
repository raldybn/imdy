//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika product menu di klik
document.querySelector("#product-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
