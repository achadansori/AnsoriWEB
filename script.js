function toggleMenu() {
  // Set variable to menu links
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Open menu and hamburger menu
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
