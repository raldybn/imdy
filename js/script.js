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

// gallery DISPLAY
const imgSide= document.getElementById("imgSide");
const artSide = document.getElementById("artSide");


  document.getElementById("img-btn").onclick = () => {
  imgSide.classList.toggle("active");
};

document.getElementById("art-btn").onclick = () => {
  artSide.classList.toggle("active");
};






const imgBtn = document.getElementById("img-btn");
const captImg = document.getElementById("capt-img");

document.addEventListener("click", function (e) {
  if (!imgBtn.contains(e.target) && !imgSide.contains(e.target)) {
    imgSide.classList.remove("active");
  }
});

const artBtn= document.getElementById("art-btn");

document.addEventListener("click", function (e) {
  if (!artBtn.contains(e.target) && !artSide.contains(e.target)) {
    artSide.classList.remove("active");
  }
});

// CAPT IMG DISPLAY


