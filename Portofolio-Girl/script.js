// Burger-menu
const iClick = document.querySelector(".menu-icon img");

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

iClick.addEventListener("click", () => {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "350px";
  } else {
    menuList.style.maxHeight = "0px";
  }
});

// Navbar active
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((page) => {
  if (page.href.includes(`${activePage}`)) {
    page.classList.add("active");
  } else {
    page.classList.remove("active");
  }
});
