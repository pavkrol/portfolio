const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    header.classList.add("header--small");
  } else {
    header.classList.remove("header--small");
  }
});
