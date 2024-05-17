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
const center = document.getElementById("center");

document.getElementById("display-web").onclick = () => {
  center.classList.toggle("active");
};

const displayWeb = document.getElementById("display-web");

document.addEventListener("click", function (e) {
  if (!displayWeb.contains(e.target) && !center.contains(e.target)) {
    center.classList.remove("active");
  }
});

// PORTFOLIO DISPLAY
