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

  document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".custom-carousel").forEach(carousel => {

    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".carousel-slide");
    const indicatorsContainer = carousel.querySelector(".carousel-indicators");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

    let current = 0;
    const total = slides.length;

    function updateCarousel() {
      track.style.transform = `translateX(-${current * 100}%)`;

      carousel.querySelectorAll(".indicator").forEach(i =>
        i.classList.remove("active")
      );

      if (carousel.querySelectorAll(".indicator")[current]) {
        carousel.querySelectorAll(".indicator")[current].classList.add("active");
      }
    }

    function createIndicators() {
      slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("indicator");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
          current = index;
          updateCarousel();
        });
        indicatorsContainer.appendChild(dot);
      });
    }

    function nextSlide() {
      current = (current + 1) % total;
      updateCarousel();
    }

    function prevSlide() {
      current = (current - 1 + total) % total;
      updateCarousel();
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    createIndicators();
    setInterval(nextSlide, 5000);

  });

});
  
