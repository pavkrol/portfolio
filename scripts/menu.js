const menu_bttn = document.getElementById("navigation__menu");
const nav_list = document.getElementById("navigation__list");

menu_bttn.addEventListener("click", () => {
  nav_list.classList.toggle("navigation__list--active");
  if (nav_list.classList.contains("navigation__list--active")) {
    menu_bttn.setAttribute("aria-expanded", "true");
  } else {
    menu_bttn.setAttribute("aria-expanded", "false");
  }
});
