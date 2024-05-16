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

/**
 * Hero type effect
 */
const typed = select(".typed");
if (typed) {
  let typed_strings = typed.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed(".typed", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}
