const menuItems = document.querySelector(".navlink_container");
const hamburger= document.querySelector(".hamburger");

function toggleMenu() {
    console.log(menuItems)
  if (menuItems.style.display === "none") {
    menuItems.style.display = "flex"
  } else {
    menuItems.style.display = "none"
  }
}

hamburger.addEventListener("click", toggleMenu);