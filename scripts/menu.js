const menu_bttn = document.getElementById("navigation__menu");
const nav_list = document.getElementById("navigation__list");
const nav_links = document.querySelectorAll(".navigation__link");

menu_bttn.addEventListener("click", () => {
  nav_list.classList.toggle("navigation__list--active");
  if (nav_list.classList.contains("navigation__list--active")) {
    menu_bttn.setAttribute("aria-expanded", "true");
  } else {
    menu_bttn.setAttribute("aria-expanded", "false");
  }
});

[...nav_links].forEach(el => {
  el.addEventListener("click", () => {
    nav_list.classList.remove("navigation__list--active");
    menu_bttn.setAttribute("aria-expanded", "false");
  });
});
