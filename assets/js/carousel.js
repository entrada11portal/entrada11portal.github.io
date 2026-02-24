(function () {

  document.addEventListener("DOMContentLoaded", function () {

    const carousels = document.querySelectorAll(".custom-carousel");
    if (!carousels.length) return;

    carousels.forEach(carousel => {

      const track = carousel.querySelector(".carousel-track");
      const slides = carousel.querySelectorAll(".carousel-slide");
      const indicatorsContainer = carousel.querySelector(".carousel-indicators");
      const prevBtn = carousel.querySelector(".prev");
      const nextBtn = carousel.querySelector(".next");
      const titleContainer = carousel.querySelector(".carousel-title");

      if (!track || !slides.length) return;

      let currentIndex = 0;
      const total = slides.length;

      const titles = Array.from(slides).map(slide =>
        slide.querySelector("img")?.alt || ""
      );

      function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        const indicators = carousel.querySelectorAll(".indicator");
        indicators.forEach(i => i.classList.remove("active"));
        if (indicators[currentIndex]) {
          indicators[currentIndex].classList.add("active");
        }

        if (titleContainer) {
          titleContainer.textContent = titles[currentIndex];
        }
      }

      function createIndicators() {
        if (!indicatorsContainer) return;

        slides.forEach((_, index) => {
          const dot = document.createElement("span");
          dot.classList.add("indicator");
          if (index === 0) dot.classList.add("active");

          dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
          });

          indicatorsContainer.appendChild(dot);
        });
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % total;
        updateCarousel();
      }

      function prevSlide() {
        currentIndex = (currentIndex - 1 + total) % total;
        updateCarousel();
      }

      if (nextBtn) nextBtn.addEventListener("click", nextSlide);
      if (prevBtn) prevBtn.addEventListener("click", prevSlide);

      createIndicators();
      updateCarousel();
      setInterval(nextSlide, 5000);

    });

  });

})();
