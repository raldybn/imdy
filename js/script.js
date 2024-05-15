//toggle class active//
const navbarNavigate = document.querySelector(".navbar-nav");

// ketika humberger menu di klick//
document.getElementById("hamburger-menu").onclick = () => {
  navbarNavigate.classList.toggle("active");
};

// klik dluar sidebar

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNavigate.contains(e.target)) {
    navbarNavigate.classList.remove("active");
  }
});
