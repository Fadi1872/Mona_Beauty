const navLinks = document.querySelector(".nav_links");
const toggle = document.querySelector("#toggle");

[navLinks, toggle].forEach((element) => {
  element.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    console.log("element clicked ", element);
  });
});