/* ========================= MENU LATERAL ============================== */

document.addEventListener("DOMContentLoaded", function() {

  const menuIcon = document.querySelector(".menu-icon");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.querySelector(".close-btn");

  if (menuIcon && sideMenu) {
    menuIcon.addEventListener("click", function() {
      sideMenu.classList.add("active");
    });
  }

  if (closeBtn && sideMenu) {
    closeBtn.addEventListener("click", function() {
      sideMenu.classList.remove("active");
    });
  }

  const links = document.querySelectorAll(".menu-links a");

  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");

      // Fecha o menu ao clicar no link (opcional)
      sideMenu.classList.remove("active");
    });
  });

});
