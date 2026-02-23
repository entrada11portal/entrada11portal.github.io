document.addEventListener("DOMContentLoaded", function () {

/* ========================= MENU LATERAL ============================== */

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

/* ========================= CARROSSEL ============================== */

  
