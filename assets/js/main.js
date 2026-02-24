/* ========================= MENU LATERAL ============================== */

/* ========================= MENU LATERAL ============================== */

document.addEventListener("DOMContentLoaded", function() {

  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");

  if (menuIcon && menu) {
    menuIcon.addEventListener("click", function() {
      menu.classList.toggle("active");
    });
  }

  function openMenu() {
    document.getElementById("sideMenu")?.classList.add("active");
  }

  function closeMenu() {
    document.getElementById("sideMenu")?.classList.remove("active");
  }

  window.openMenu = openMenu;
  window.closeMenu = closeMenu;

  const links = document.querySelectorAll(".menu-links a");

  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

});

/* ========================= CARROSSEL ============================== */


/* ========================= CARROSSEL ============================== */

