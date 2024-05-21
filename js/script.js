// NAVBAR

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
// NAVBAR

// SOCIAL
const socialNavigate = document.querySelector(".social");

document.getElementById("smartphone").onclick = () => {
  socialNavigate.classList.toggle("active");
};

const smartphone = document.querySelector("#smartphone");

document.addEventListener("click", function (e) {
  if (!smartphone.contains(e.target) && !socialNavigate.contains(e.target)) {
    socialNavigate.classList.remove("active");
  }
});
// SOCIAL

// PORTFOLIO DISPLAY
const display = document.getElementById("display-active");

document.getElementById("display-web").onclick = () => {
  display.classList.toggle("active");
};

const displayWeb = document.getElementById("display-web");

document.addEventListener("click", function (e) {
  if (!displayWeb.contains(e.target) && !display.contains(e.target)) {
    display.classList.remove("active");
  }
});

// PORTFOLIO DISPLAY
